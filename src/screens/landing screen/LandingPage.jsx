import React from "react";
import "./landingpage.css";
import UnoFrontCard from "../../components/cards/UnoFrontCard";
import UnoBackCard from "../../components/cards/UnoBackCard";

// const texts = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
// const indices = [1, 2, 3];
// const colors = ["blue", "green", "yellow", "red"];

export default function LandingPage(props) {
  //   function cardDiv(i) {
  //     let color = colors[Math.floor(Math.random() * 4)];
  //     let text = texts[Math.floor(Math.random() * 10)];
  //     let toNotRender = Math.floor(Math.random() * 3);
  //     return toNotRender === i ? (
  //       <></>
  //     ) : Math.floor(Math.random() * 2) === 0 ? (
  //       <UnoBackCard />
  //     ) : (
  //       <UnoFrontCard cardColor={color} text={text} />
  //     );
  //   }

  return (
    <div className="landing_screen">
      {/* <div className="left">
        <div className="row" style={{ marginLeft: "2rem" }}>
          {indices.map(cardDiv)}
        </div>
        <div className="row">{indices.map(cardDiv)}</div>
        <div className="row" style={{ marginLeft: "2rem" }}>
          {indices.map(cardDiv)}
        </div>
        <div className="row">{indices.map(cardDiv)}</div>
      </div> */}
      <div className="middle">
        <UnoBackCard cardSelect={props.handleGoButton} />
      </div>
      {/* <div className="right">
        <div className="row" style={{ marginLeft: "2rem" }}>
          {indices.map(cardDiv)}
        </div>
        <div className="row">{indices.map(cardDiv)}</div>
        <div className="row" style={{ marginLeft: "2rem" }}>
          {indices.map(cardDiv)}
        </div>
        <div className="row">{indices.map(cardDiv)}</div>
      </div> */}
    </div>
  );
}
