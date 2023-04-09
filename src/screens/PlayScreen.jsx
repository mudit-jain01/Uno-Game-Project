import React, { useEffect, useState } from "react";
import FirstPersonView from "../components/FirstPersonView/FirstPersonView";
import SecondPersonView from "../components/SecondPersonView/SecondPersonView";
import UnoFrontCard from "../components/cards/UnoFrontCard";
import playerInfo from "../demoPlayers";
import "./Playscreen.css";

//temp demp players json file for first person view
const demoPlayer = {
  id: "0",
  name: "Swagnik",
  stack: [
    {
      id: 0,
      color: "blue",
      text: "2",
    },
    {
      id: 1,
      color: "red",
      text: "1",
    },
    {
      id: 2,
      color: "yellow",
      text: "⊘",
    },
    {
      id: 3,
      color: "green",
      text: "⇄",
    },
  ],
};

export default function PlayScreen() {
  //static player position display screen
  const [playerStatus, setPlayerStatus] = useState(demoPlayer); //state for firstperson view cards
  const [cardDeckShow, setCardDeckShow] = useState({
    id: "1",
    color: "green",
    text: "5",
  }); //global state for changing card stack top
  const [uno, setUNO] = useState(false); //state for uno calls by first person

  //function for card click by first person to play
  function onCardClick(event) {
    var el = event.currentTarget; //targets the div to which onclick is attached
    var tempCard = el.className.split(" "); //extract the classname and build an array

    //change the card deck played
    setCardDeckShow({
      id: parseInt(tempCard[3]),
      color: tempCard[0],
      text: tempCard[2],
    });

    //change or remove the card which is played by the 1st person from the stack
    setPlayerStatus((prev) => ({
      ...prev,
      stack: prev.stack.filter((item) => item.id !== parseInt(tempCard[3])),
    }));
  }

  //function for card draw by 1st person
  function onDraw() {
    //new card object build
    var newCard = {
      id: playerStatus.stack.length + 1,
      color: "green",
      text: "0",
    };

    //concat the new card to stack
    setPlayerStatus((prev) => ({
      ...prev,
      stack: prev.stack.concat(newCard),
    }));
  }

  return (
    <div className="playscreen_div">
      {/* first person player view */}
      <FirstPersonView cardStack={playerStatus} handleClick={onCardClick} />

      {/* Card deck for card draw  action*/}
      <div className="card_deck">
        <UnoFrontCard cardColor="red" cardSelect={onDraw} />
      </div>

      {/* Card stack for stack of cards played*/}
      <div className="card_stack">
        <UnoFrontCard cardColor={cardDeckShow.color} text={cardDeckShow.text} />
      </div>

      {/* Uno call button */}
      <div className="uno_call">
        <button className="uno_button" onClick={() => setUNO(true)}>
          Uno
        </button>
      </div>
    </div>
  );
}
