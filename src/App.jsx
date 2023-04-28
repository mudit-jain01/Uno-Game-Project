import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import PlayScreen from "./screens/playground/PlayScreen";
import Roomselect from "./screens/room-select/RoomSelection";
import Lobby from "./screens/lobby/lobby";
import anime from "animejs";
import playerInfo from "./demoPlayers";
import WildCardPlusFour from "./components/cards/WildCardPlusFour";
import WildCardColorChange from "./components/cards/WildCardColorChange";
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
  const [roomPageEntry, setRoomPageEntry] = useState(true);
  function handleSelection(event) {
    setRoomPageEntry(false);
  }

  return (
    <main>
      {/* <Lobby players={playerInfo.players} code={}/> */}
      <Roomselect
        entryState={roomPageEntry}
        handleSelection={handleSelection}
      />
    </main>
  );
}

export default App;
