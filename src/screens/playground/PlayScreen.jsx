import React, { useEffect, useState } from "react";
import FirstPersonView from "../../components/FirstPersonView/FirstPersonView";
import SecondPersonView from "../../components/SecondPersonView/SecondPersonView";
import UnoFrontCard from "../../components/cards/UnoFrontCard";
import UnoBackCard from "../../components/cards/UnoBackCard";
// import { playerInfo, cardDetails } from "../demoPlayers";
import cardDeck from "../../utils/PackOfCards";
import "./Playscreen.css";
import playerInfo from "../../demoPlayers";
import { nanoid } from "nanoid";

//temp demp players json file for first person view

const demoF1Player = {
  id: "0",
  name: "Swagnik",
  stack: [],
};
const demoF2Players = {
  id: "0",
  name: "Swagnik",
  stack: [],
};

export default function PlayScreen() {
  //static player position display screen
  const [playerStatus, setPlayerStatus] = useState(playerInfo.players[0]); //state for firstperson view cards

  const [cardDeckShow, setCardDeckShow] = useState({}); //global state for changing card stack top

  const [uno, setUNO] = useState(false); //state for uno calls by first person

  useEffect(() => {
    // setup of the game with 7 random numbers for client
    var temp = [];
    for (let i = 0; i < 7; i++) {
      let randomCard = cardDeck[Math.floor(Math.random() * cardDeck.length)];
      temp.push({
        id: nanoid(),
        color: randomCard.color,
        text: randomCard.text,
      });
    }
    setPlayerStatus((prev) => ({
      ...prev,
      stack: temp,
    }));
  }, []);

  //setup random card stack
  useEffect(() => {
    let randomCard = cardDeck[Math.floor(Math.random() * cardDeck.length)];
    while (randomCard.text == "+4" || randomCard.text == "cc")
      randomCard = cardDeck[Math.floor(Math.random() * cardDeck.length)];
    setCardDeckShow({
      id: nanoid(),
      color: randomCard.color,
      text: randomCard.text,
    });
  }, []);

  //function for card click by first person to play
  function onCardClick(event) {
    var el = event.currentTarget; //targets the div to which onclick is attached
    var tempCard = el.className.split(" "); //extract the classname and build an array
    //tempcard[0]=color of the card
    //tempcard[1]=.card class
    //tempcard[2]=text of the card
    //tempcard[3]=id

    //game logic

    //change the card deck played
    setCardDeckShow({
      id: nanoid(),
      color: tempCard[0],
      text: tempCard[2],
    });

    //change or remove the card which is played by the 1st person from the stack
    setPlayerStatus((prev) => ({
      ...prev,
      stack: prev.stack.filter((item) => item.id !== tempCard[3]),
    }));
  }

  //function for card draw by 1st person
  function onDraw() {
    //new card object build
    let randomCard = cardDeck[Math.floor(Math.random() * cardDeck.length)];
    var newCard = {
      id: nanoid(),
      color: randomCard.color,
      text: randomCard.text,
    };

    //concat the new card to stack
    setPlayerStatus((prev) => ({
      ...prev,
      stack: prev.stack.concat(newCard),
    }));
  }

  return (
    <div className="playscreen_div">
      <FirstPersonView cardStack={playerStatus} handleClick={onCardClick} />
      <div className="card_deck">
        <UnoBackCard cardColor="red" cardSelect={onDraw} />
      </div>
      <div className="card_stack">
        <UnoFrontCard cardColor={cardDeckShow.color} text={cardDeckShow.text} />
      </div>
      <div className="uno_call">
        <button className="uno_button" onClick={() => setUNO(true)}>
          Uno
        </button>
      </div>
    </div>
  );
}
