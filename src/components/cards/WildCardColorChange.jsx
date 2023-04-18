import React from "react";
import "./CardStyles.css";

export default function WildCardColorChange(props) {
  return (
    <div
      className={"black card " + props.text + " " + props.id}
      style={props.mystyles}
      onClick={props.cardSelect}
    >
      <span className="inner">
        <div className="logo">
          <img
            className="vector_art_color_change"
            src="../assets/images/color_change_vector_art.jpg"
          />
        </div>
      </span>
    </div>
  );
}
