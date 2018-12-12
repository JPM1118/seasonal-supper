import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

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

class LandingPage extends Component {
  state = { currentMonth: getMonth(), currentLocation: 'Select Location' };

  handleChange = title => {
    let array = monthList;
    array.some(e => e === title)
      ? this.setState({ currentMonth: title, unmountResults: false })
      : this.setState({ currentLocation: title, unmountResults: false });
  };

  updateButtonState = (state, month) => {
    this.setState({
      currentMonth: month,
      currentLocation: state
    });
  };

  render() {
    return (
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
          <Switch>
            <Route
              path='/:state/:month/:ingredient'
              render={props => (
                <RecipeResults
                  updateButtonState={this.updateButtonState}
                  {...props}
                />
              )}
            />
            <Route
              path='/:state/:month'
              render={props => (
                <ProduceResults
                  updateButtonState={this.updateButtonState}
                  {...props}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default LandingPage;
