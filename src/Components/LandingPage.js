import React, { Component } from "react";
import Title from "./Title";
import locationState from "./../Test_Objects/locationState";
import monthState from "./../Test_Objects/monthState";
import Dropdown from "./Dropdown";
import ProduceResults from "./ProduceResults";

class LandingPage extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      locations: locationState(),
      currentLocation: "",
      months: monthState,
      currentMonth: monthState.getMonth(),
      dropdownSelected: false
    };
  }
  handleChange(selected, title) {
    let array = this.state.months.months;
    array.some(e => e.title === title)
      ? this.setState({ currentMonth: title })
      : this.setState({ currentLocation: title });

    this.setState({
      dropdownSelected: selected
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
              list={this.state.locations}
              onDropdownChange={this.handleChange}
            />
            <Dropdown
              title={this.state.months.getMonth()}
              list={this.state.months.months}
              onDropdownChange={this.handleChange}
            />
          </div>
          {this.state.dropdownSelected && (
            <ProduceResults
              state={this.state.currentLocation}
              month={this.state.currentMonth}
            />
          )}
        </div>
      </div>
    );
  }
}

export default LandingPage;
