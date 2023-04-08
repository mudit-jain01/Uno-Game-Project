import React from "react";
import FirstPersonView from "../components/FirstPersonView/FirstPersonView";
import SecondPersonView from "../components/SecondPersonView/SecondPersonView";
import UnoFrontCard from "../components/cards/UnoFrontCard";
import playerInfo from "../demoPlayers";
import "./Playscreen.css";

export default function PlayScreen() {
  //static player position display screen
  return (
    <div className="playscreen_div">
      <FirstPersonView cardStack={playerInfo.players[0].stack} />
      <SecondPersonView
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
      />
      {/* Card deck for card draw  action*/}
      <div className="card_deck">
        <UnoFrontCard
          cardColor="red"
          cardSelect={() => console.log("deck clicked")}
        />
      </div>
      {/* Card stack for stack of cards played*/}
      <div className="card_stack">
        <UnoFrontCard
          cardColor="green"
          cardSelect={() => console.log("stack clicked")}
        />
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
