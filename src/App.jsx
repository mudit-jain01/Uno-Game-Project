import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import UnoFrontCard from "./components/cards/UnoFrontCard";
import PlayScreen from "./screens/PlayScreen";
import { TweenMax, Power3 } from "gsap/gsap-core";

function App() {
  return (
    <main>
      <PlayScreen />
    </main>
  );
}

export default App;
