import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import PlayScreen from "./screens/playground/PlayScreen";
import ErrorChecks from "./components/ErrorDiv/CardError";
import ChooseColor from "./components/CardColorChoice/CardColorChoice";
import anime from "animejs";
function App() {
  // function animate1(event) {
  //   anime({
  //     targets: event.currentTarget,
  //     rotateY: [{ value: "180deg", duration: 700 }],
  //   });
  // }
  // function animate2(event) {
  //   anime({
  //     targets: event.currentTarget,
  //     rotateY: [{ value: "0deg", duration: 700 }],
  //   });
  // }
  return (
    <main>
      <PlayScreen />
    </main>
  );
}

export default App;
