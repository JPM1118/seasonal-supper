const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const routes = require('./routes/states');

mongoose.connect(
  // 'mongodb://JPM_13:' +
  //   process.env.MONGO_ATLAS_PW +
  //   '@cluster0-shard-00-00-y5hkl.mongodb.net:27017,cluster0-shard-00-01-y5hkl.mongodb.net:27017,cluster0-shard-00-02-y5hkl.mongodb.net:27017/seasonal_produce?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true',
  'mongodb://JPM_13:rcnN6i7vyDeXeB5@cluster0-shard-00-00-y5hkl.mongodb.net:27017,cluster0-shard-00-01-y5hkl.mongodb.net:27017,cluster0-shard-00-02-y5hkl.mongodb.net:27017/seasonal_produce?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true',
  {
    useNewUrlParser: true
  }
);

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected');
});

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, PATCH, POST, GET, DELETE');
    return res.status(200).json({});
  }
  next();
});

app.use('/', routes);

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
