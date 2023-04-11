import React from "react";
import "./room-select.css";


export default function roomselect() {
    var c = 0;
    function pop() {
        if (c == 0) {
            document.getElementById("alert").style.display = "block";
            c = 1;
        }
        else {
            document.getElementById("alert").style.display = "none";
            c = 0;
        }
    }
    return (
        <React.Fragment>
            <div className="roomselection" id="109:401">
                <div className="rectangle-22" id="109:370"></div>
                <div className="join-a-room" id="109:371">JOIN A ROOM</div>
                <a onclick="pop()" className="private">PRIVATE</a>
                <div id="alert">
                    <span className="do-you-wanna"></span>
                    <h1>Do You Wanna...</h1>
                    <a onclick="pop()" className="join">JOIN</a>
                    <a onclick="pop()" className="create">CREATE</a>
                </div>
                <a onclick="pop()" className="public">PUBLIC</a>
                <div id="alert">
                    <span className="do-you-wanna"></span>
                    <h1>Do You Wanna...</h1>
                    <a className="join">JOIN</a>
                    <a className="create">CREATE</a>
                </div>

            </div>
        </React.Fragment>
    )
}