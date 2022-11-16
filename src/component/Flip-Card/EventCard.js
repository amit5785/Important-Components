import React from "react";
import "./EventCard.css"


const EventCard= ()=>{
  return (
  <div className="flip-card">
    <div className="flip-card-inner">
      <div className="flip-card-front">
        <h1>Amit Kumar</h1>
      </div>

      <div className="flip-card-back">
        <h1>Back Portin</h1>
        <p>Hello</p>
      </div>
    </div>
  </div>
  );
}

export default EventCard;