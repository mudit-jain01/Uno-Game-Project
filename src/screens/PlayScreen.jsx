import React from "react";
import FirstPersonView from "../components/FirstPersonView/FirstPersonView";
import SecondPersonView from "../components/SecondPersonView/SecondPersonView";

export default function PlayScreen() {
  return (
    <div>
      <FirstPersonView />
      <SecondPersonView />
    </div>
  );
}
