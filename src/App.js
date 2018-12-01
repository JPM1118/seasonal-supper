import React from "react";
import LandingPage from "./Components/LandingPage";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={LandingPage} />
      </Router>
    </div>
  );
};

export default App;
