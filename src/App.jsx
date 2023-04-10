import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import UnoFrontCard from "./components/cards/UnoFrontCard";
import PlayScreen from "./screens/PlayScreen";
import anime from "animejs";
import UnoBackCard from "./components/cards/UnoBackCard";
function App() {
  function animate1(event) {
    anime({
      targets: event.currentTarget,
      rotateY: [{ value: "180deg", duration: 700 }],
    });
  }
  function animate2(event) {
    anime({
      targets: event.currentTarget,
      rotateY: [{ value: "0deg", duration: 700 }],
    });
  }
  return (
    <main>
      <PlayScreen />
    </main>
  );
}

export default App;
