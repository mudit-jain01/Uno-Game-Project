import React from "react";
import "./CardColorChoice.css";
export default function ChooseColor() {
  return (
    <div className="choiceDiv">
      <h2>choose color</h2>
      <div className="choices">
        <div className="row">
          <button className="choice-button redButton">Red</button>
          <button className="choice-button blueButton">Blue</button>
        </div>
        <div className="row">
          <button className="choice-button greenButton">Green</button>
          <button className="choice-button yellowButton">Yellow</button>
        </div>
      </div>
    </div>
  );
}
