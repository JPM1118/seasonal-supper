import React, { Component } from "react";
import arrowDown from "./../img/arrow-down-icon.svg";
import arrowUp from "./../img/arrow-up-icon.svg";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      listOpen: false,
      headerTitle: this.props.title
    };
  }

  toggleList = () => {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }));
  };

  handleChange = e => {
    this.setState({
      headerTitle: e
    });
    this.props.onDropdownChange(true, e);
  };

  render() {
    const { list } = this.props;
    const { listOpen, headerTitle } = this.state;

    return (
      <div className="dropdown">
        <div className="dropdown__header" onClick={() => this.toggleList()}>
          <div className="dropdown__header-title">
            {headerTitle}{" "}
            {listOpen ? (
              <img
                src={arrowUp}
                alt="arrow up icon"
                className="dropdown__icon"
              />
            ) : (
              <img
                src={arrowDown}
                alt="arrow down icon"
                className="dropdown__icon"
              />
            )}{" "}
          </div>
          {listOpen && (
            <ul className="dropdown__list">
              {list.map(item => (
                <li
                  className="dropdown__list-item"
                  key={item.title}
                  onClick={() => this.handleChange(item.title)}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
}

export default Dropdown;
