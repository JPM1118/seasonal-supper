import React from 'react';
import LandingPage from './Components/LandingPage';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const App = () => {
  return (
    <>
      <div className="background">
        <div className="background__img" />
        <div className="background__color" />
      </div>
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path='/contact' component={Contact} />
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
