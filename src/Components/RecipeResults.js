import React, { Component } from "react";
import RecipeCard from "./RecipeCard";
import axios from "axios";
import { Scrollbars } from "react-custom-scrollbars";

class RecipeResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      recipes: []
    };
  }
  componentDidMount() {
    axios
      .get(
        `https://api.edamam.com/search?q=${
          this.props.ingredient
        }&app_id=35bb7eda&app_key=
      1065fb968544846b8684b96f365faceb&`
      )
      .then(response => {
        // console.log(response);

        this.setState({
          recipes: response.data.hits
        });
      })
      .catch(err => console.log(err));
  }
  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      axios
        .get(
          `https://api.edamam.com/search?q=${
            this.props.ingredient
          }&app_id=35bb7eda&app_key=
      1065fb968544846b8684b96f365faceb&from=0&to=2`
        )
        .then(response => {
          this.setState({
            recipes: response.hits
          });
        })
        .catch(err => console.log(err));
    }
  }
  render() {
    return (
      <Scrollbars
        style={{ height: "70vh" }}
        renderView={props => {
          return (
            <div
              {...props}
              className="results "
              style={{
                ...props.style
              }}
            />
          );
        }}
      >
        {/* {console.log(this.state.recipes)} */}
        {this.state.recipes.map((recipe, index) => {
          console.log(index % 2);
          return index % 2 === 0 ? (
            <RecipeCard key={recipe.recipe.label} recipe={recipe.recipe} />
          ) : (
            <RecipeCard
              background={true}
              key={recipe.recipe.label}
              recipe={recipe.recipe}
            />
          );
        })}
      </Scrollbars>
    );
  }
}

export default RecipeResults;
