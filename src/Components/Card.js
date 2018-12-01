import React, { Component } from "react";
import { withRouter } from "react-router-dom";

function importImages(dir) {
  let images = {};
  dir.keys().map(image => {
    return (images[image.replace("./", "")] = dir(image));
  });
  return images;
}
const images = importImages(require.context("./../img", false, /\.(jpg)$/));

class Card extends Component {
  constructor(props) {
    super(props);
  }
  handleChange() {
    this.props.onIngredientSelection(this.props.produce);
    this.props.history.push(`${this.props.produce}`);
  }
  render() {
    return (
      <div className="card">
        <div className="card__pic">
          <img src={images[`${this.props.produce}.jpg`]} alt="Produce pic" />
        </div>
        <div className="card__description">
          <h2 className="card__description__title">{this.props.produce}</h2>
        </div>
        <div className="card__btn">
          <button className="btn" onClick={() => this.handleChange()}>
            Recipies
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(Card);
