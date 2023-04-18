import React from "react";
import { nanoid } from "nanoid";
import UnoFrontCard from "../cards/UnoFrontCard";
import WildCardColorChange from "../cards/WildCardColorChange";
import WildCardPlusFour from "../cards/WildCardPlusFour";
import "./FirstPerson.css";

export default function FirstPersonView(props) {
  let leftPixels = 0; //for card stacking effect
  var cardList = props.cardStack.stack; // card list for the first player stored from state

  //function for dynamic painting of cards
  function normalCards({ id, color, text }) {
    return text === "+4" ? (
      <WildCardPlusFour
        text="+4"
        key={nanoid()}
        id={id}
        mystyles={{
          position: "absolute",
          left: `${(leftPixels += 2.2)}rem`,
        }}
        cardSelect={props.handleClick}
      />
    ) : text === "cc" ? (
      <WildCardColorChange
        key={nanoid()}
        id={id}
        text="cc"
        mystyles={{
          position: "absolute",
          left: `${(leftPixels += 2.2)}rem`,
        }}
        cardSelect={props.handleClick}
      />
    ) : (
      <UnoFrontCard
        key={nanoid()}
        id={id}
        cardColor={color}
        //if card is special type, then change styles
        special={text === "⊘" ? "skip" : text === "⇄" ? "reverse" : ""}
        text={text}
        // for stacking effects
        mystyles={{
          position: "absolute",
          left: `${(leftPixels += 2.2)}rem`,
        }}
        //handle the clicks on individual cards
        cardSelect={props.handleClick} //handle the clicks on individual cards
      />
    );
  }

  //main return
  return (
    <div className="first_person_view">
      <div className="first_person_stack">
        {
          //map over the cardList to paint the cards dynamically
          cardList.map(normalCards)
        }
      </div>
      <p className="name">{props.name}</p>
    </div>
  );
}
