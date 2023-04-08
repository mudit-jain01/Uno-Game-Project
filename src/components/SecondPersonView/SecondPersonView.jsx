import React, { useEffect, useState } from "react";
import UnoFrontCard from "../cards/UnoFrontCard";
import "./SecondPerson.css";

export default function SecondPersonView(props) {
  var leftPixels = 0; // for stack (one over the other effect ) styling
  const [cardList, setCardList] = useState([]); //for each player's card list

  //initialization of cardLists for 1st time
  useEffect(() => {
    setCardList((prev) => props.cardStack);
  }, []);

  //logic to add a card to the list
  function addCard({ id, color, text }) {
    setCardList((prev) => {
      prev.push({ id: id, text: text, color: color });
    });
  }

  //logic to remove a perticular card from list
  function removeCard({ id }) {
    setCardList((prev) => {
      let i = prev.findIndex(id);
      if (i > -1) {
        prev.splice(i, 1);
      }
      return prev;
    });
  }

  // function for painting the cards in dynamic manner
  function normalCards({ id, color, text }) {
    return (
      <UnoFrontCard
        key={id}
        cardColor={color}
        special={text === "⊘" ? "skip" : text === "⇄" ? "reverse" : ""}
        text={text}
        mystyles={{
          position: "absolute",
          top: "0.4rem",
          left: `${(leftPixels += 1.2)}rem`,
        }}
        cardSelect={() => console.log(text)}
      />
    );
  }

  //main return
  return (
    <div className="second_person_view" style={props.myStyles}>
      {cardList.map(normalCards)}
    </div>
  );
}
