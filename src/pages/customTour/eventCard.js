import React, { useEffect } from "react";
import { useState } from 'react';
import {FaCheckCircle} from "react-icons/fa"
import TripCard from "../trips/tripCard";
import moment from 'moment';




export default function EventCard(props) {
  const [remove,setRemove]= useState(false);
  
  // const buffer = props.event.image;
  // const mimeType = 'image/jpg'
  // const b64 = new Buffer(buffer).toString('base64')

  const [bg, setbg] = useState();

  const iconStyles={ color: "white", fontSize: "1.5em" };

    const handleClickButton=()=>{
            setRemove(!remove);     
            if(!remove){
               props.addItem();
            }else{
               props.removeItem();
            }
        }
            
    const handleClick = ()=>{
          props.showModal();
       }      
       useEffect(() => {
        const buffer = props.event.image;
        const mimeType = 'image/jpg'
        const b64 = new Buffer(buffer).toString('base64')
         setbg(`data:${mimeType};base64,${b64}`)
       }, [])

  
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`
      }}
      id="event-card" className={`${remove?"bor":null}`}>
            {remove && <FaCheckCircle style={iconStyles} className=" btn-rounded counter" /> }    

      <div className="event-card-content">
        <div className="event-card-title">{props.event.name}</div>
        <div className="date">
        <i class="far fa-calendar-alt date-icon"></i><label>{moment(new Date(props.event.date)).format("Do MMM")}</label>
        </div>
      </div>

      <div className="event-card-info">
       <button onClick={handleClick} type="button" className="see-more-btn btn btn-light">See more</button>
       <button type="button" id="liveAlertBtn" onClick={handleClickButton} 
       className={`${remove? " add-to-card_btn  btn btn-danger":" add-to-card_btn btn btn-rounded"}`}>
        {`${remove? "Remove":"Add"}`} </button>
        <p className="event-card-description">{props.event.description}</p>
      </div>
    </div>

  );
    };