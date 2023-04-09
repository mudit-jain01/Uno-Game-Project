import React, { useEffect, useState } from "react";
import UnoFrontCard from "../cards/UnoFrontCard";
import "./SecondPerson.css";

export default function SecondPersonView(props) {
  var leftPixels = 0; // for stack (one over the other effect ) styling
  var cardList = props.cardStack.stack; //card list for second person view

  // function for painting the cards in dynamic manner
  function normalCards({ id, color, text }) {
    return (
      <UnoFrontCard
        key={id}
        id={id}
        cardColor={color}
        //if card is special type, then change styles
        special={text === "⊘" ? "skip" : text === "⇄" ? "reverse" : ""}
        text={text}
        // for stacking effects
        mystyles={{
          position: "absolute",
          left: `${(leftPixels += 1)}rem`,
        }}
        //handle the clicks on individual cards
        cardSelect={props.handleClick} //handle the clicks on individual cards
      />
    );
  }

  //main return
  return (
    <div className="second_person_view" style={props.myStyles}>
      {
        //map over the cardList to paint cards  dynamically
        cardList.map(normalCards)
      }
    </div>
  );
}
