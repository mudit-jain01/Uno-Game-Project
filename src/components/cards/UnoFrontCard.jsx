import React from "react";
import "./CardStyles.css";

export default function UnoFrontCard(props) {
  return (
    <React.Fragment>
      <div className={props.cardColor + " card"} style={props.mystyles}>
        <div className="inner">
          <span className={props.special + " top"}>{props.text}</span>
          <div className="mark">
            <span className={props.special}>{props.text}</span>
          </div>
          <span className={props.special + " bottom"}>{props.text}</span>
        </div>
      </div>
    </React.Fragment>
  );
}
