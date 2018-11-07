import React, { Component } from "react";
import Title from "./Title";
import locationState from "./../Test Objects/locationState";
import monthState from "./../Test Objects/monthState";
import Dropdown from "./Dropdown";
import ProduceResults from "./ProduceResults";

class LandingPage extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      location: locationState(),
      month: monthState,
      dropdownSelected: false
    };
  }
  handleChange(e) {
    this.setState({
      dropdownSelected: e
    });
  }
  render() {
    return (
      <div className="landing-page">
        <div className="landing-page__content">
          <Title />
          <div className="flex-container">
            <Dropdown
              title="Select Location"
              list={this.state.location}
              onDropdownChange={this.handleChange}
            />
            <Dropdown
              title={this.state.month.getMonth()}
              list={this.state.month.months}
              onDropdownChange={this.handleChange}
            />
          </div>
          {this.state.dropdownSelected && <ProduceResults />}
        </div>
      </div>
    );
  }
}

export default LandingPage;
