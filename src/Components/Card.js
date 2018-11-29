import React from "react";
import axios from "axios";
// import produceImg from `./../img/${this.props.produce}.jpg`
// import brocPic from "./../img/vegetable-broccoli-190x100.jpg";

function importImages(dir) {
  let images = {};
  dir.keys().map(image => {
    images[image.replace("./", "")] = dir(image);
  });
  return images;
}
const images = importImages(require.context("./../img", false, /\.(jpg)$/));

const Card = props => {
  return (
    <div className="card">
      <div className="card__pic">
        <img src={images[`${props.produce}.jpg`]} alt="Produce pic" />
      </div>
      <div className="card__description">
        <h2 className="card__description__title">{props.produce}</h2>
      </div>
      <div className="card__btn">
        <button
          className="btn"
          onClick={() => props.onIngredientSelection(props.produce)}
        >
          Recipies
        </button>
      </div>
    </div>
  );
};

export default Card;
