import { React, useState } from "react";
import UnoFrontCard from "./components/UnoFrontCard";

const types = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "⊘", "⇄"];

function normalCards(text) {
  return (
    <UnoFrontCard
      cardColor="blue"
      special={text === "⊘" ? "skip" : text === "⇄" ? "reverse" : ""}
      text={text}
    />
  );
}

function App() {
  return <main>{types.map(normalCards)}</main>;
  // return <Cards />;
}

export default App;
