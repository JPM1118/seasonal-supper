import React, { Component } from "react";
import LandingPage from "./Components/LandingPage";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App">
        <LandingPage />
      </div>
    );
  }
}

export default App;
