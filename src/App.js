import React from 'react';
import LandingPage from './Components/LandingPage';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import About from './Components/About';

const App = () => {
  return (
    <>
      <Router>
        <div className='App background'>
          <Switch>
            <Route path='/about' component={About} />
            <Route exact path='/' component={LandingPage} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
