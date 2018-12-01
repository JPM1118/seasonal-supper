import React, { Component } from "react";
import Title from "./Title";
import locationState from "./../Test_Objects/locationState";
import monthState from "./../Test_Objects/monthState";
import Dropdown from "./Dropdown";
import ProduceResults from "./ProduceResults";
import RecipeResults from "./RecipeResults";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";

class LandingPage extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.recipeResultToggle = this.recipeResultToggle.bind(this);
    this.state = {
      locations: locationState(),
      currentLocation: "",
      months: monthState,
      currentMonth: monthState.getMonth(),
      ingredient: "",
      dropdownSelected: false,
      ingredientSelected: false
    };
  }
  handleChange(selected, title) {
    let array = this.state.months.months;
    array.some(e => e.title === title)
      ? this.setState({ currentMonth: title })
      : this.setState({ currentLocation: title });

    this.setState({
      dropdownSelected: selected,
      ingredient: "",
      ingredientSelected: false
    });
  }

  recipeResultToggle(ingredient) {
    this.setState(prevState => ({
      ingredientSelected: !prevState.ingredientSelected,
      ingredient: ingredient
    }));
  }
  render() {
    return (
      <Router>
        <div className="landing-page">
          <div className="landing-page__content">
            <Title />
            <div className="flex-container">
              <Dropdown
                title="Select Location"
                list={this.state.locations}
                month={this.state.currentMonth}
                onDropdownChange={this.handleChange}
              />
              <Dropdown
                title={this.state.months.getMonth()}
                list={this.state.months.months}
                location={this.state.currentLocation}
                onDropdownChange={this.handleChange}
              />
            </div>

            <Route
              path="/:state/:month"
              exact
              render={props => {
                return (
                  <ProduceResults
                    // state={this.state.currentLocation}
                    // month={this.state.currentMonth}
                    {...props}
                    onIngredientSelection={this.recipeResultToggle}
                  />
                );
              }}
            />

            <Route
              path="/:state/:month/:ingredient"
              exact
              render={props => {
                return (
                  <RecipeResults
                    {...props}
                    ingredient={this.state.ingredient}
                    onIngredientSelection={this.recipeResultToggle}
                  />
                );
              }}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default LandingPage;
