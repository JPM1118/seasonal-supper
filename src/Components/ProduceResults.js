import React, { Component } from "react";
import Card from "./Card";
import { Scrollbars } from "react-custom-scrollbars";

class ProduceResults extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Scrollbars
        style={{ height: "70vh" }}
        renderView={props => {
          return (
            <div
              {...props}
              className="produce-results flex-container"
              style={{
                ...props.style
              }}
            />
          );
        }}
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Scrollbars>
    );
  }
}

export default ProduceResults;
