import React, { useEffect, useState } from "react";
import "./SecondPerson.css";
import UnoBackCard from "../cards/UnoBackCard";
export default function SecondPersonView(props) {
  var leftPixels = 0; // for stack (one over the other effect ) styling
  var cardList = props.cardStack.stack; //card list for second person view

  // function for painting the cards in dynamic manner
  function normalCards(id) {
    return (
      <UnoBackCard
        key={id}
        myStyles={{
          position: "absolute",
          left: `${(leftPixels += 1.2)}rem`,
        }}
      />
    );
  }

  //main return
  return (
    <div className="second_person_view" style={props.myStyles}>
      <div className="second_person_stack">
        {
          //map over the cardList to paint cards  dynamically
          cardList.map(normalCards)
        }
      </div>
      <p className="name">{props.name}</p>
    </div>
  );
}
