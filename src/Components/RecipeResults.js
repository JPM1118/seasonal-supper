import React, { Component } from 'react';
import RecipeCard from './RecipeCard';
import axios from 'axios';
require('dotenv').config();

class RecipeResults extends Component {
  state = {
    isLoading: false,
    recipes: []
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
    const ingredient = this.props.ingredient
      ? this.props.ingredient
      : this.props.match.params.ingredient;
    try {
      this.setState({ isLoading: true });
      const response = await axios.get(
        `https://api.edamam.com/search?q=${ingredient}&from=0&to=100&app_id=${process.env.ED_ID}&app_key=
      ${process.env.ED_KEY}`,
        {
          cancelToken: this.signal.token
        }
      );
      this.setState({
        recipes: response.data.hits,
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
      <div className='results'>
        {this.state.recipes.map((recipe, index) => {
          return index % 2 === 0 ? (
            <RecipeCard key={index} recipe={recipe.recipe} />
          ) : (
              <RecipeCard
                background={true}
                key={index}
                recipe={recipe.recipe}
              />
            );
        })}
      </div>
    );
  }
}

export default RecipeResults;
