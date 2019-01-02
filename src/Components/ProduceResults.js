import React, { Component } from 'react';
import Card from './Card';
import axios from 'axios';

class ProduceResults extends Component {
  state = {
    isLoading: false,
    produce: []
  };

  signal = axios.CancelToken.source();
  componentDidMount() {
    this.props.updateButtonState(
      this.props.match.params.state,
      this.props.match.params.month
    );
    this.axiosRequest();
  }
  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.axiosRequest();
    }
  }
  componentWillUnmount() {
    this.signal.cancel('Api is being canceled');
  }

  axiosRequest = async () => {
    const state = this.props.match.params.state;
    const month = this.props.match.params.month;
    const capitalize = str =>
      str.replace(/^[a-z]/g, digit => digit.toUpperCase());

    try {
      this.setState({ isLoading: true });
      const response = await axios.get(
        // `http://localhost:3001/${capitalize(state)}`,
        `/${capitalize(state)}`,
        {
          cancelToken: this.signal.token
        }
      );
      this.setState({
        produce: response.data.state[0].month[capitalize(month)].produce,
        isLoading: true
      });
    } catch (err) {
      if (axios.isCancel(err)) {
        console.log('Error: ', err.message);
      } else {
        this.setState({ isLoading: false });
      }
    }
  };
  render() {
    return (
      <div className='results flex-container '>
        {this.state.produce.map(produce => {
          return (
            <Card
              key={produce}
              produce={produce}
              onIngredientSelection={this.props.onIngredientSelection}
            />
          );
        })}
      </div>
    );
  }
}

export default ProduceResults;
