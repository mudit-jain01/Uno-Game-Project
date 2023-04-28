import React from "react";
import "./lobby.css";
import PlayerProfile from "../../components/LobbyPlayerProfile/PlayerProfile";

export default function Lobby(props) {
  function playerDP(playerItem) {
    return <PlayerProfile key={playerItem.id} name={playerItem.name} />;
  }

  return (
    <div className="lobby_screen">
      <div className="lobby">
        <h2>Lobby</h2>
        <h4>code: {props.code}</h4>
        <div className="profile_row">
          {props.players.slice(0, 3).map(playerDP)}
        </div>
        <div className="profile_row">
          {props.players.slice(3, 6).map(playerDP)}
        </div>
        <button className="play_button">Let's play</button>
      </div>
    </div>
  );
}
