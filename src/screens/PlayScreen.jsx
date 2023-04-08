import React from "react";
import FirstPersonView from "../components/FirstPersonView/FirstPersonView";
import SecondPersonView from "../components/SecondPersonView/SecondPersonView";
import "./Playscreen.css";
export default function PlayScreen() {
  return (
    <div className="playscreen_div">
      <FirstPersonView />
      <SecondPersonView
        myStyles={{
          position: "absolute",
          top: "0%",
          left: "40%",
          transform: "rotate(180deg)",
        }}
      />
      <SecondPersonView
        myStyles={{
          position: "absolute",
          top: "35%",
          left: "70%",
          transform: "rotate(90deg)",
        }}
      />
    </div>
  );
}
