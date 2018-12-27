import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Title from './Title';
import stateList from '../data/stateList';
import monthList from '../data/monthList';
import Dropdown from './Dropdown';
import ProduceResults from './ProduceResults';
import RecipeResults from './RecipeResults';
import About from './About';

const getMonth = () => {
  const idx = new Date().getMonth();
  return monthList[idx];
};
const initialState = { currentMonth: getMonth(), currentLocation: 'Select Location' };
class LandingPage extends Component {
  state = initialState

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
  componentDidUpdate(prevProps) {
    if (
      prevProps.location.pathname !== this.props.location.pathname
      && this.props.location.pathname === '/'
    ) {

      this.setState(initialState)
    }

  }

  render() {
    let renderAbout = false;
    if (this.props.location.pathname === '/') {
      renderAbout = true
    }
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
          {renderAbout ? <About /> : null}
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
