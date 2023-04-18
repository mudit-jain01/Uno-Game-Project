import React, { useEffect, useState } from "react";
import FirstPersonView from "../../components/FirstPersonView/FirstPersonView";
import SecondPersonView from "../../components/SecondPersonView/SecondPersonView";
import UnoFrontCard from "../../components/cards/UnoFrontCard";
import UnoBackCard from "../../components/cards/UnoBackCard";
import WildCardColorChange from "../../components/cards/WildCardColorChange";
import WildCardPlusFour from "../../components/cards/WildCardPlusFour";
// import { playerInfo, cardDetails } from "../demoPlayers";
import cardDeck from "../../utils/PackOfCards";
import "./Playscreen.css";
import ErrorChecks from "../../components/ErrorDiv/CardError";
import playerInfo from "../../demoPlayers";
import { nanoid } from "nanoid";

export default function PlayScreen() {
  //static player position display screen
  const [playerStatus1, setPlayerStatus1] = useState(playerInfo.players[0]); //state for firstperson view cards
  const [playerStatus2, setPlayerStatus2] = useState(playerInfo.players[1]);
  const [playerStatus3, setPlayerStatus3] = useState(playerInfo.players[2]);
  const [playerStatus4, setPlayerStatus4] = useState(playerInfo.players[3]);
  const [playerStatus5, setPlayerStatus5] = useState(playerInfo.players[4]);

  const [cardDeckShow, setCardDeckShow] = useState({}); //global state for changing card stack top

  const [uno, setUNO] = useState(false); //state for uno calls by first person

  const [wrongCards, setWrongCards] = useState(false); //state if wrong card is chosen

  const [order, setOrder] = useState(true); //turn state. true means clockwise, false means anticlockwise

  const [turn, setTurn] = useState(0);

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
    setPlayerStatus1((prev) => ({
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

  function setCards(tempCard) {
    //change the card deck played
    setCardDeckShow({
      id: nanoid(),
      color: tempCard[0],
      text: tempCard[2],
    });

    if (tempCard[2] === "⇄") setOrder((prev) => !prev); //reverse the turn order

    //change or remove the card which is played by the 1st person from the stack
    setPlayerStatus1((prev) => ({
      ...prev,
      stack: prev.stack.filter((item) => item.id !== tempCard[3]),
    }));

    //if skiped, move turn pointer by one
    if (tempCard[2] === "⊘") setTurn((prev) => (prev + 2) % 5);
    else {
      setTurn((prev) => (prev + 1) % 5);
    }
  }

  //function for card click by first person to play
  function onCardClick(event) {
    var el = event.currentTarget; //targets the div to which onclick is attached
    var tempCard = el.className.split(" "); //extract the classname and build an array
    //tempcard[0]=color of the card
    //tempcard[1]=.card class
    //tempcard[2]=text of the card
    //tempcard[3]=id

    //game logic
    if (tempCard[2] === cardDeckShow.text) {
      setCards(tempCard);
    } else if (tempCard[0] === cardDeckShow.color) {
      setCards(tempCard);
    } else if (tempCard[2] === "cc") {
      setCards(tempCard);
    } else if (tempCard[2] == "+4") {
      setCards(tempCard);
    } else if (cardDeckShow.color === "black") {
      setCards(tempCard);
    } else {
      setWrongCards(true);
    }
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
    setPlayerStatus1((prev) => ({
      ...prev,
      stack: prev.stack.concat(newCard),
    }));
  }

  function handleErrors() {
    setWrongCards(false);
  }
  return (
    <div className="playscreen_div">
      {wrongCards && <ErrorChecks handleClick={handleErrors} />}
      <FirstPersonView
        name={playerStatus1.name}
        cardStack={playerStatus1}
        handleClick={onCardClick}
      />
      {playerStatus2 && (
        <SecondPersonView
          name={playerStatus2.name}
          cardStack={playerStatus2}
          myStyles={{
            position: "absolute",
            top: "5%",
            right: "30%",
          }}
        />
      )}
      {playerStatus3 && (
        <SecondPersonView
          name={playerStatus3.name}
          cardStack={playerStatus3}
          myStyles={{
            position: "absolute",
            top: "38%",
            right: "10%",
          }}
        />
      )}
      {playerStatus4 && (
        <SecondPersonView
          name={playerStatus4.name}
          cardStack={playerStatus4}
          myStyles={{
            position: "absolute",
            top: "40%",
            left: "10%",
          }}
        />
      )}
      {playerStatus5 && (
        <SecondPersonView
          name={playerStatus5.name}
          cardStack={playerStatus5}
          myStyles={{
            position: "absolute",
            top: "5%",
            left: "20%",
          }}
        />
      )}
      <div className="card_deck">
        <UnoBackCard cardColor="red" cardSelect={onDraw} />
      </div>
      {/* card show stack */}
      <div className="card_stack">
        {cardDeckShow.text === "+4" ? (
          <WildCardPlusFour />
        ) : cardDeckShow.text === "cc" ? (
          <WildCardColorChange />
        ) : (
          <UnoFrontCard
            cardColor={cardDeckShow.color}
            text={cardDeckShow.text}
          />
        )}
      </div>
      <div className="uno_call">
        <button className="uno_button" onClick={() => setUNO(true)}>
          Uno
        </button>
      </div>
    </div>
  );
}
