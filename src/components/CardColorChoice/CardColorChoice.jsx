import React from "react";
import "./CardColorChoice.css";
export default function ChooseColor(props) {
  return (
    <div className="choiceDiv">
      <h2>choose color</h2>
      <div className="choices">
        <div className="row">
          <button
            className="choice-button redButton"
            onClick={props.handleClick}
          >
            Red
          </button>
          <button
            className="choice-button blueButton"
            onClick={props.handleClick}
          >
            Blue
          </button>
        </div>
        <div className="row">
          <button
            className="choice-button greenButton"
            onClick={props.handleClick}
          >
            Green
          </button>
          <button
            className="choice-button yellowButton"
            onClick={props.handleClick}
          >
            Yellow
          </button>
        </div>
      </div>
    </div>
  );
}
