import React from "react";

const Modal = props => {
  return (
    <div className="modal">
      <div className="modal__main">
        <h1>Nutrients</h1>
        <ul>
          {props.nutrients.map(nutrient => {
            return (
              <li key={nutrient.label}>
                <span className="modal__li-label">{nutrient.label}: </span>
                <span className="modal__li-quantity">{nutrient.quantity}</span>
              </li>
            );
          })}
        </ul>
        <span className="modal__close" onClick={props.handleClose}>
          X
        </span>
      </div>
    </div>
  );
};
export default Modal;
