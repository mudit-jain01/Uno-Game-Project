import React from "react";
import "./room-select.css";


export default function roomselect(props) {
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
        <div className="roomselection" id={props.id}>
            <div className="rectangle-22" id={props.id}></div>
            <div className="join-a-room" id={props.id}>JOIN A ROOM</div>
            <a onclick={props.onclick} className="private">PRIVATE</a>
            <div id={props.id + "alert"}>
                <span className="do-you-wanna"></span>
                <h1>Do You Wanna...</h1>
                <a onclick={props.onclick} className="join">JOIN</a>
                <a onclick={props.onclick} className="create">CREATE</a>
            </div>
            <a onclick={props.onclick} className="public">PUBLIC</a>
            <div id={props.id + "alert"}>
                <span className="do-you-wanna"></span>
                <h1>Do You Wanna...</h1>
                <a className="join">JOIN</a>
                <a className="create">CREATE</a>
            </div>

        </div>
    )
}