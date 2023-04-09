import React, { useState, useEffect } from "react";
import UnoFrontCard from "../cards/UnoFrontCard";
import "./FirstPerson.css";

const types = ["0", "1", "3", "⊘", "⇄", "9", "3"];

export default function FirstPersonView(props) {
  var leftPixels = 0; //for card stacking effect

  var cardList = props.cardStack.stack;
  //function for dynamic painting of cards
  function normalCards({ id, color, text }) {
    return (
      <UnoFrontCard
        key={id}
        id={id}
        cardColor={color}
        special={text === "⊘" ? "skip" : text === "⇄" ? "reverse" : ""}
        text={text}
        mystyles={{
          position: "absolute",
          left: `${(leftPixels += 2.2)}rem`,
        }}
        cardSelect={props.handleClick}
      />
    );
  }

  //main return
  return <div className="first_person_view">{cardList.map(normalCards)}</div>;
}
