import React from "react";
import "./roomselection.css";

export default function RoomSelection(props) {
  return (
    <div className="room_choice_div">
      <div className="choice_box">
        {props.getCode && (
          <div className="code_div">
            <input
              className="code"
              type="text"
              placeholder="code"
              value={props.code}
              name=""
              onChange={props.handleChange}
            />
            <button className="code_button" onClick={props.handleGoButton}>
              Go
            </button>
          </div>
        )}
        {!props.getCode && (
          <>
            <h1>Join a room</h1>
            <div className="choice_buttons">
              <button
                className="room_choice"
                name="join"
                onClick={props.handleSelection}
              >
                Join
              </button>
              <button
                name="create"
                className="room_choice"
                onClick={props.handleSelection}
              >
                Create
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
