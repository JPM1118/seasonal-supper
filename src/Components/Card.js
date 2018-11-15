import React, { Component } from "react";

import brocPic from "./../img/vegetable-broccoli-190x100.jpg";

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <div className="card__pic">
          <img src={brocPic} alt="Produce pic" />
        </div>
        <div className="card__description">
          <h2 className="card__description__title">Broccoli</h2>
        </div>
        <div className="card__btn">
          <button>Recipies</button>
        </div>
      </div>
    );
  }
}

export default Card;
