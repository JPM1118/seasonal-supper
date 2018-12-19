import React from 'react';
import LandingPage from './Components/LandingPage';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import About from './Components/About';
import Background from './Components/Background';

const App = () => {
  return (
    <>
      {/* <Background > */}
      <div className="background">
        <div className="background__img" />
        <div className="background__color" />
      </div>
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path='/about' component={About} />
            <Route path='/' component={LandingPage} />
          </Switch>
        </div>
      </Router>
      {/* </Background> */}

    </>
  );
};

export default App;
