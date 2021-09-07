import React from "react";
import { useState } from 'react';
import {FaCheckCircle} from "react-icons/fa"




export default function EventCard(props) {
  const [remove,setRemove]= useState(false);
    const iconStyles={ color: "white", fontSize: "1.5em" };
    const handleClickButton=()=>{
            setRemove(!remove);     
            if(!remove){
               props.addItem();
            }else{
               props.removeItem();
            }
        }
            
  return (
 
    <div
      style={{
        backgroundImage: `url(${props.imgUrl})`
      }}
      id="event-card" className={`${remove?"bor":null}`}>
            {remove && <FaCheckCircle style={iconStyles} className=" btn-rounded counter" /> }    

      <div className="event-card-content">
        <div className="event-card-title">International Photography Festival</div>
        <div className="date">
        <i class="far fa-calendar-alt date-icon"></i><label>13 May</label>
        </div>
      </div>

      <div className="event-card-info">
       <button type="button" className="see-more-btn btn btn-light">See more</button>
       <button type="button" id="liveAlertBtn" onClick={handleClickButton} 
       className={`${remove? " add-to-card_btn  btn btn-danger":" add-to-card_btn btn btn-rounded"}`}>
        {`${remove? "Remove":"Add"}`} </button>
        <p className="event-card-description">{props.description}</p>
      </div>
    </div>

  );
}
