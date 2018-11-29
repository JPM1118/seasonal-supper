import React, { Component } from "react";
import Modal from "./Modal";
function iterateObj(obj, servings) {
  let newArray = [];
  const keys = Object.keys(obj);

  for (const key of keys) {
    newArray = [
      ...newArray,
      {
        label: obj[key].label,
        quantity: Math.round(obj[key].quantity / servings)
      }
    ];
  }
  return newArray;
}
class RecipeCard extends Component {
  state = {
    title: this.props.recipe.label,
    image: this.props.recipe.image,
    ingredients: this.props.recipe.ingredientLines,
    servings: this.props.recipe.yield,
    calories: Math.round(this.props.recipe.calories / this.props.recipe.yield),
    nutrients: iterateObj(
      this.props.recipe.totalNutrients,
      this.props.recipe.yield
    ),
    sourceUrl: this.props.recipe.url,
    modalOpen: false
  };
  toggleModal = () => {
    this.setState(prevState => ({
      modalOpen: !prevState.modalOpen
    }));
  };

  render() {
    const backgroundStyle = this.props.background
      ? { backgroundColor: "white" }
      : { backgroundColor: "" };
    return (
      <div className="recipeCard" style={backgroundStyle}>
        <div className="recipeCard__content">
          <h1>{this.state.title}</h1>
          <div className="recipeCard__img">
            <img src={this.state.image} alt="recipe" />
          </div>
          <div className="flex-container flex-container--justify-start">
            <div className="recipeCard__col-left">
              <h2>Ingredients</h2>
              <ul>
                {this.state.ingredients.map(ingredient => (
                  <li key={`${this.state.title}-${ingredient}`}>
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
            <div className="recipeCard__col-right">
              <span>
                <h3>Servings:</h3>
              </span>
              <span>{this.state.servings}</span>
              <span>
                <h3>Calories:</h3>
              </span>
              <span>{this.state.calories}</span>
              <span>
                <h3>Nutrients:</h3>
              </span>
              <span
                className="recipeCard__nutrients"
                onClick={this.toggleModal}
              >
                Click To View
              </span>
            </div>
          </div>
          <div className="recipeCard__recipeBtn">
            <button className="btn">Get Recipe</button>
          </div>
          {this.state.modalOpen && (
            <Modal
              handleClose={this.toggleModal}
              nutrients={this.state.nutrients}
            />
          )}
        </div>
      </div>
    );
  }
}

export default RecipeCard;
