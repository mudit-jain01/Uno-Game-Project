import React from "react";
import "./CardStyles.css";

export default function UnoBackCard(props) {
  return (
    <div class="black card" style={props.myStyles} onClick={props.cardSelect}>
      <span class="inner">
        <div className="logo">
          <img class="unologo" src="../assets/images/UNO_Logo.svg.png" />
        </div>
      </span>
    </div>
  );
}
