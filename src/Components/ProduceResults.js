import React, { Component } from "react";
import Card from "./Card";
import axios from "axios";
import { Scrollbars } from "react-custom-scrollbars";

class ProduceResults extends Component {
  state = {
    isLoading: false,
    produce: []
  };

  signal = axios.CancelToken.source();
  componentDidMount() {
    this.axiosRequest();
  }
  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.axiosRequest();
    }
  }
  componentWillUnmount() {
    this.signal.cancel("Api is being canceled");
  }

  axiosRequest = async () => {
    const state = this.props.match.params.state;
    const month = this.props.match.params.month;
    const capitalize = str =>
      str.replace(/^[a-z]/g, digit => digit.toUpperCase());

    try {
      this.setState({ isLoading: true });
      const response = await axios.get(
        `http://localhost:3000/${capitalize(state)}`,
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
        console.log("Error: ", err.message);
      } else {
        this.setState({ isLoading: false });
      }
    }
  };
  render() {
    return (
      // <Scrollbars
      //   // style={{ height: "70vh" }}
      //   renderView={props => {
      //     return (
      //       <div
      //         {...props}
      //         className="results flex-container"
      //         style={{
      //           ...props.style
      //         }}
      //       />
      //     );
      //   }}
      // >
      <div className="results flex-container">
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
      // </Scrollbars>
    );
  }
}

export default ProduceResults;
