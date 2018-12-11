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
            <Route exact path='/about' component={About} />
            <Route path='/' component={LandingPage} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
