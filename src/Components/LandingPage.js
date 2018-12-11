import React, { Component } from 'react';
import Route from 'react-router-dom/Route';
import { BrowserRouter as Router } from 'react-router-dom';

import Title from './Title';
import stateList from '../data/stateList';
import monthList from '../data/monthList';
import Dropdown from './Dropdown';
import ProduceResults from './ProduceResults';
import RecipeResults from './RecipeResults';

const getMonth = () => {
  const idx = new Date().getMonth();
  return monthList[idx];
};

const initialState = {
  currentMonth: getMonth(),
  currentLocation: 'Select Location',
  unmountResults: false
};

class LandingPage extends Component {
  state = initialState;
  handleChange = title => {
    let array = monthList;
    array.some(e => e === title)
      ? this.setState({ currentMonth: title, unmountResults: false })
      : this.setState({ currentLocation: title, unmountResults: false });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.state.homeClicked) {
      this.setState(initialState);
      this.setState({ unmountResults: true });
    }
  }
  render() {
    return (
      <Router>
        <div className='landing-page '>
          <div className='landing-page__content'>
            <Title />
            <div className='flex-container'>
              <Dropdown
                title={this.state.currentLocation}
                list={stateList}
                currentMonth={this.state.currentMonth}
                onDropdownChange={this.handleChange}
              />
              <Dropdown
                title={this.state.currentMonth}
                list={monthList}
                currentState={this.state.currentLocation}
                onDropdownChange={this.handleChange}
              />
            </div>
            {this.state.unmountResults ? null : (
              <React.Fragment>
                <Route path='/:state/:month' exact component={ProduceResults} />

                <Route
                  path='/:state/:month/:ingredient'
                  exact
                  component={RecipeResults}
                />
              </React.Fragment>
            )}
          </div>
        </div>
      </Router>
    );
  }
}

export default LandingPage;
