import React, { useState, useEffect } from "react";
import PlayScreen from "./screens/playground/PlayScreen";
import Roomselect from "./screens/room-select/RoomSelection";
import Lobby from "./screens/lobby/lobby";
import playerInfo from "./demoPlayers";
import { nanoid } from "nanoid";
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
  const [pageNumbers, setPageNumber] = useState(0);
  const [getCode, setGetCode] = useState(false);
  const [code, setCode] = useState("");

  function handleSelection(event) {
    if (event.target.name === "join") {
      setGetCode(true);
    } else {
      setCode(nanoid(6));
      setPageNumber((prev) => (prev += 1));
    }
  }

  function handleGoButton(event) {
    setPageNumber((prev) => (prev += 1));
  }

  function handleCodeInputChange(event) {
    setCode(event.target.value);
  }

  return (
    <main>
      {/* <Lobby players={playerInfo.players} code={}/> */}
      {pageNumbers === 0 && (
        <Roomselect
          handleSelection={handleSelection}
          getCode={getCode}
          handleGoButton={handleGoButton}
          code={code}
          handleChange={handleCodeInputChange}
        />
      )}
      {pageNumbers === 1 && (
        <Lobby
          code={code}
          players={playerInfo.players}
          handleGoButton={handleGoButton}
        />
      )}
      {pageNumbers === 2 && <PlayScreen />}
    </main>
  );
}

export default App;
