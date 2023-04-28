import React from "react";
import "./playerprofile.css";

export default function PlayerProfile({ name }) {
  return (
    <div className="player_profile">
      <img
        className="avatar"
        src="../assets/images/wired-outline-21-avatar.gif"
        alt="img"
      />
      <p>{name}</p>
    </div>
  );
}
