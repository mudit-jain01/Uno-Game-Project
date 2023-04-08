import React from "react";
import UnoFrontCard from "../cards/UnoFrontCard";
import "./FirstPerson.css";

const types = ["0", "1", "3", "⊘", "⇄", "9", "3"];

export default function FirstPersonView() {
  var leftPixels = 0; //for card stacking effect

  //function for dynamic painting of cards
  function normalCards(text) {
    return (
      <UnoFrontCard
        cardColor="blue"
        special={text === "⊘" ? "skip" : text === "⇄" ? "reverse" : ""}
        text={text}
        mystyles={{
          position: "absolute",
          left: `${(leftPixels += 2)}rem`,
        }}
        cardSelect={() => console.log(text)}
      />
    );
  }

  //main return
  return <div className="first_person_view">{types.map(normalCards)}</div>;
}
