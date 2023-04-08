import React from "react";
import UnoFrontCard from "../cards/UnoFrontCard";
import "./SecondPerson.css";

const types = ["0", "1", "3", "⊘", "⇄", "9", "3"];

export default function SecondPersonView(props) {
  var leftPixels = 0;

  function normalCards(text) {
    return (
      <UnoFrontCard
        cardColor="blue"
        special={text === "⊘" ? "skip" : text === "⇄" ? "reverse" : ""}
        text={text}
        mystyles={{
          position: "absolute",
          top: "0.4rem",
          left: `${(leftPixels += 1.2)}rem`,
        }}
      />
    );
  }

  return (
    <div className="second_person_view" style={props.myStyles}>
      {types.map(normalCards)}
    </div>
  );
}
