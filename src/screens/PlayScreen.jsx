import React, { useEffect, useState } from "react";
import FirstPersonView from "../components/FirstPersonView/FirstPersonView";
import SecondPersonView from "../components/SecondPersonView/SecondPersonView";
import UnoFrontCard from "../components/cards/UnoFrontCard";
import playerInfo from "../demoPlayers";
import "./Playscreen.css";

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
  const [playerStatus, setPlayerStatus] = useState(demoPlayer);
  const [cardDeckShow, setCardDeckShow] = useState({
    id: "1",
    color: "green",
    text: "5",
  });

  function onCardClick(event) {
    var el = event.currentTarget; //targets the div to which onclick is attached
    var tempCard = el.className.split(" ");
    setCardDeckShow({
      id: parseInt(tempCard[3]),
      color: tempCard[0],
      text: tempCard[2],
    });
    setPlayerStatus((prev) => ({
      ...prev,
      stack: prev.stack.filter((item) => item.id !== parseInt(tempCard[3])),
    }));
  }

  return (
    <div className="playscreen_div">
      <FirstPersonView cardStack={playerStatus} handleClick={onCardClick} />
      {/* <SecondPersonView
        cardStack={playerInfo.players[1].stack}
        myStyles={{
          position: "absolute",
          top: "0%",
          left: "50%",
        }}
      />
      <SecondPersonView
        cardStack={playerInfo.players[2].stack}
        myStyles={{
          position: "absolute",
          top: "36%",
          left: "70%",
        }}
      />
      <SecondPersonView
        cardStack={playerInfo.players[3].stack}
        myStyles={{
          position: "absolute",
          top: "40%",
          left: "16%",
        }}
      /> */}
      {/* Card deck for card draw  action*/}
      <div className="card_deck">
        <UnoFrontCard
          cardColor="red"
          cardSelect={() => console.log("deck clicked")}
        />
      </div>
      {/* Card stack for stack of cards played*/}
      <div className="card_stack">
        <UnoFrontCard cardColor={cardDeckShow.color} text={cardDeckShow.text} />
      </div>
      {/* Uno call button */}
      <div className="uno_call">
        <button className="uno_button" onClick={() => console.log("Uno re bc")}>
          Uno
        </button>
      </div>
    </div>
  );
}
