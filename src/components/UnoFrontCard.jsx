import React from "react";
import "./CardStyles.css";

export default function UnoFrontCard(props) {
  return (
    <React.Fragment>
      {/* 
      <div className={props.cardColor + " card"}>
        <div className="inner">
          <span className="top">⊘</span>
          <div className="mark">
            <span className="skip">⊘</span>
          </div>
          <span className="bottom">⊘</span>
        </div>
      </div> */}

      <div className={props.cardColor + " card"}>
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
