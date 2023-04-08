import React from "react";
import FirstPersonView from "../components/FirstPersonView/FirstPersonView";
import SecondPersonView from "../components/SecondPersonView/SecondPersonView";
import UnoFrontCard from "../components/cards/UnoFrontCard";
import "./Playscreen.css";

export default function PlayScreen() {
  //static player position display screen
  return (
    <div className="playscreen_div">
      <FirstPersonView />
      <SecondPersonView
        myStyles={{
          position: "absolute",
          top: "0%",
          left: "50%",
        }}
      />
      <SecondPersonView
        myStyles={{
          position: "absolute",
          top: "35%",
          left: "70%",
        }}
      />
      <SecondPersonView
        myStyles={{
          position: "absolute",
          top: "42%",
          left: "10%",
        }}
      />
      <SecondPersonView
        myStyles={{
          position: "absolute",
          top: "10%",
          left: "20%",
        }}
      />
      {/* Card deck for card draw  action*/}
      <div className="card_deck">
        <UnoFrontCard cardColor="red" />
      </div>
      {/* Card stack for stack of cards played*/}
      <div className="card_stack">
        <UnoFrontCard cardColor="green" />
      </div>
      {/* Uno call button */}
      <div className="uno_call">
        <button className="uno_button">Uno</button>
      </div>
    </div>
  );
}
