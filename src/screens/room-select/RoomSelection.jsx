import React from "react";
import "./roomselection.css";

export default function RoomSelection(props) {
  return (
    <div className="room_choice_div">
      <div className="choice_box">
        {props.entryState ? <h1>Join a room</h1> : <h1>Do you want to?</h1>}
        <div className="choice_buttons">
          <button className="room_choice" onClick={props.handleSelection}>
            {props.entryState ? "Private" : "Join"}
          </button>
          <button className="room_choice" onClick={props.handleSelection}>
            {props.entryState ? "Public" : "Create"}
          </button>
        </div>
      </div>
    </div>
  );
}
