const http = require('http');
const app = require('./src/server/app');
require('dotenv').config();

const port = 8080;
const server = http.createServer(app);

server.listen(port);
