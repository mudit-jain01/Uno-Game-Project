import React from "react";
import UnoFrontCard from "../cards/UnoFrontCard";
import "./SecondPerson.css";

const types = ["0", "1", "3", "⊘", "⇄", "9", "3"];

var leftPixels = -300;

function normalCards(text) {
  return (
    <UnoFrontCard
      cardColor="blue"
      special={text === "⊘" ? "skip" : text === "⇄" ? "reverse" : ""}
      text={text}
      mystyles={{
        position: "absolute",
        left: `${(leftPixels += 20)}px`,
      }}
    />
  );
}

function renderView() {
  return <div></div>;
}

export default function SecondPersonView() {
  return <div className="second_person_view">{types.map(normalCards)}</div>;
}
