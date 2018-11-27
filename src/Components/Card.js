import React, { Component } from "react";
import axios from "axios";
// import brocPic from "./../img/vegetable-broccoli-190x100.jpg";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const term = this.props.produce.replace(/\s/g, "%20").toLowerCase();
    console.log(`term: ${term}`);
    // const term = "Sweet%20potatoes";
    axios
      .get(
        `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=pageimages&titles=${term}&generator=search&redirects=1&pithumbsize=250&gsrsearch=${term}&gsrlimit=1`
      )
      .then(response => {
        console.log(response);
        let obj = response.data.query.pages;
        // console.log(
        //   `test: ${
        //     obj[Object.keys(obj)[0]].thumbnail.source
        //   }`
        // );
        this.setState({
          url: obj[Object.keys(obj)[0]].thumbnail.source
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="card">
        <div className="card__pic">
          <img src={this.state.url} alt="Produce pic" />
        </div>
        <div className="card__description">
          <h2 className="card__description__title">{this.props.produce}</h2>
        </div>
        <div className="card__btn">
          <button className="btn">Recipies</button>
        </div>
      </div>
    );
  }
}
export default Card;
