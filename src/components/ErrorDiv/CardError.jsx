import React from "react";
import "./CardError.css";
export default function ErrorChecks(props) {
  return (
    <div className="errors">
      <h2>choose the correct card or draw a card</h2>
      <button onClick={props.handleClick}>Understood</button>
    </div>
  );
}
