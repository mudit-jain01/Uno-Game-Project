import React from "react";
import UnoFrontCard from "../cards/UnoFrontCard";
import "./FirstPerson.css";

const types = ["0", "1", "3", "⊘", "⇄", "9", "3"];

var leftPixels = -500;

function normalCards(text) {
  return (
    <UnoFrontCard
      cardColor="blue"
      special={text === "⊘" ? "skip" : text === "⇄" ? "reverse" : ""}
      text={text}
      mystyles={{
        position: "absolute",
        left: `${(leftPixels += 35)}px`,
      }}
    />
  );
}

export default function FirstPersonView() {
  return <div className="first_person_view">{types.map(normalCards)}</div>;
}
