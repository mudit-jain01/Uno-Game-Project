import React from "react";
import "./CardStyles.css";

export default function UnoFrontCard(props) {
  return (
    <div //outer card main
      className={props.cardColor + " card " + props.text + " " + props.id} // className= color of card + card from css + number on card + id of the card
      style={props.mystyles}
      onClick={props.cardSelect} //card onClick function
      onMouseEnter={props.handleHoverEnter}
      onMouseLeave={props.handleHoverLeave}
    >
      <div className="inner" id={props.id}>
        <span //top left text view
          className={props.special + " top"}
        >
          {props.text}
        </span>
        <div //middle text view
          className="mark"
        >
          <span className={props.special}>{props.text}</span>
        </div>
        <span //bottom right text view
          className={props.special + " bottom"}
        >
          {props.text}
        </span>
      </div>
    </div>
  );
}
