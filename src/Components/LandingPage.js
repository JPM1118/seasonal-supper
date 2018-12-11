import React, { Component } from 'react';
import Title from './Title';
import locationState from './../data/locationState';
import monthState from './../data/monthState';
import Dropdown from './Dropdown';
import ProduceResults from './ProduceResults';
import RecipeResults from './RecipeResults';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';

const initialState = {
  currentMonth: monthState.getMonth(),
  currentLocation: ''
};

class LandingPage extends Component {
  state = initialState;
  handleChange = title => {
    let array = monthState.months;
    array.some(e => e.title === title)
      ? this.setState({ currentMonth: title })
      : this.setState({ currentLocation: title });
  };
  clearState = () => {
    this.setState(initialState);
  };
  render() {
    return (
      <Router>
        <div className='landing-page '>
          <div className='landing-page__content'>
            <Title clearState={this.clearState} />
            <div className='flex-container'>
              <Dropdown
                title='Select Location'
                list={locationState()}
                currentMonth={this.state.currentMonth}
                onDropdownChange={this.handleChange}
              />
              <Dropdown
                title={monthState.getMonth()}
                list={monthState.months}
                currentState={this.state.currentLocation}
                onDropdownChange={this.handleChange}
              />
            </div>

            <Route path='/:state/:month' exact component={ProduceResults} />

            <Route
              path='/:state/:month/:ingredient'
              exact
              component={RecipeResults}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default LandingPage;
