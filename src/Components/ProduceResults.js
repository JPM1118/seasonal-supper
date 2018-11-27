import React, { Component } from "react";
import Card from "./Card";
import axios from "axios";
import { Scrollbars } from "react-custom-scrollbars";

class ProduceResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      produce: []
    };
  }
  componentDidMount() {
    axios
      .get(`http://localhost:3000/${this.props.state}`)
      .then(response => {
        this.setState({
          produce: response.data.state[0].month[this.props.month].produce
        });
      })
      .catch(err => console.log(err));
  }
  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      axios
        .get(`http://localhost:3000/${this.props.state}`)
        .then(response => {
          this.setState({
            produce: response.data.state[0].month[this.props.month].produce
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
              className="produce-results flex-container"
              style={{
                ...props.style
              }}
            />
          );
        }}
      >
        {this.state.produce.map(produce => {
          return <Card key={produce} produce={produce} />;
        })}
      </Scrollbars>
    );
  }
}

export default ProduceResults;
