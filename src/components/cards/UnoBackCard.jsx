import React from "react";
import "./CardStyles.css";

export default function UnoBackCard(props) {
  return (
    <div
      className="black card"
      style={props.myStyles}
      onClick={props.cardSelect}
    >
      <span className="inner">
        <div className="logo">
          <img className="unologo" src="../assets/images/UNO_Logo.svg.png" />
        </div>
      </span>
    </div>
  );
}
