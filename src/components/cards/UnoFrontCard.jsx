import React from "react";
import "./CardStyles.css";

export default function UnoFrontCard(props) {
  return (
    <div
      className={props.cardColor + " card " + props.text + " " + props.id}
      style={props.mystyles}
      onClick={props.cardSelect}
    >
      <div className="inner" id={props.id}>
        <span className={props.special + " top"}>{props.text}</span>
        <div className="mark">
          <span className={props.special}>{props.text}</span>
        </div>
        <span className={props.special + " bottom"}>{props.text}</span>
      </div>
    </div>
  );
}
