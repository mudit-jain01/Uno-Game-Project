import React from "react";
import "./CardStyles.css";

export default function WildCardPlusFour(props) {
  return (
    <div
      className={
        (props.color ? props.color : "black") +
        " card " +
        props.text +
        " " +
        props.id
      }
      style={props.mystyles}
      onClick={props.cardSelect}
    >
      <span className="inner">
        <div className="logo">
          <img
            className="vector_art_plus_four"
            src="../assets/images/4_vector_art.jpg"
          />
        </div>
      </span>
    </div>
  );
}
