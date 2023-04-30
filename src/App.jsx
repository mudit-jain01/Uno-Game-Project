import React, { useState, useEffect } from "react";
import PlayScreen from "./screens/playground/PlayScreen";
import Roomselect from "./screens/room-select/RoomSelection";
import Lobby from "./screens/lobby/lobby";
import LandingPage from "./screens/landing screen/LandingPage";
import playerInfo from "./demoPlayers";
import { nanoid } from "nanoid";
function App() {
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
      {pageNumbers === 0 && <LandingPage handleGoButton={handleGoButton} />}
      {pageNumbers === 1 && (
        <Roomselect
          handleSelection={handleSelection}
          getCode={getCode}
          handleGoButton={handleGoButton}
          code={code}
          handleChange={handleCodeInputChange}
        />
      )}
      {pageNumbers === 2 && (
        <Lobby
          code={code}
          players={playerInfo.players}
          handleGoButton={handleGoButton}
        />
      )}
      {pageNumbers === 3 && <PlayScreen />}
    </main>
  );
}

export default App;
