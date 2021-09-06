import React from "react";

export default function EventCard(props) {
  return (
    <div
      style={{
        backgroundImage: `url(${props.imgUrl})`
      }}
      className="event-card">
            <button className="btn event-add" style={{background:"#28857d",color:"#fff"}}>Add</button>
      <div className="event-card-content">
        <div className="event-card-title">International Photography Festival</div>
        <div className="date">
        <i class="far fa-calendar-alt date-icon"></i><label>13 May</label>
        </div>
      </div>

      <div className="event-card-info">
        <button className="event-card-button">See more</button>
        <p className="event-card-description">{props.description}</p>
      </div>
    </div>
  );
}
