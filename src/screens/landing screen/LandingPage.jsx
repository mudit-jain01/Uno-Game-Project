import React from "react";
import "./landingpage.css";
import UnoFrontCard from "../../components/cards/UnoFrontCard";
import UnoBackCard from "../../components/cards/UnoBackCard";
import videobg from "../../assets/radial_wipe_01.mp4";

// const texts = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
// const indices = [1, 2, 3];
// const colors = ["blue", "green", "yellow", "red"];

export default function LandingPage(props) {
  return (
    <div className="landing_screen">
       <video src={videobg} autoPlay loop muted/>
       <div className="midcard">
         <UnoBackCard cardSelect={props.handleGoButton} /> 
       </div>
    </div>
  );
}
