import React, { useEffect,useContext} from "react";
import { useState } from 'react';
import {FaCheckCircle} from "react-icons/fa"
//import TripCard from "../trips/tripCard";
import UserContext from "../../Context/user";
import moment from 'moment';




export default function EventCard(props) {
  const [remove,setRemove]= useState(false);
  const [bg, setbg] = useState();
  const iconStyles={ color: "white", fontSize: "1.5em" };
  const id = props.event.id;




  // 1 + get user id 
  const {user} = useContext(UserContext);
  const userId = user.id
  //console.log(userId)

  // 2 + Save BD
    const getChosenEvents = async ()=>{
      try{
          const body={id,userId}
          console.log(body)
          const res =await fetch("http://localhost:8000/customTour/chooseAnEvent/addEvent",{
              method:"POST",
              headers:{ "Content-Type": "application/json" ,
              'Accept': 'application/json'},
              body:JSON.stringify(body)
          })
          const parseRes = await res.json();
          //console.log(parseRes)
      }catch(err){
          console.error(err.message)
      }
  }



  // 3 + delete from bd 

  const deleteChosenEvent = async ()=>{
    try{ 
        const res =await fetch("http://localhost:8000/customTour/chooseAnEvent/removeEvent",{
            method:"POST",
            headers:{ "Content-Type": "application/json" ,
            'Accept': 'application/json'},
            body:JSON.stringify({id})
        })
        const parseRes = await res.json();
        //console.log(parseRes)

    }catch(err){
        console.error(err.message)
    }

}











    const handleClickButton=()=>{
            setRemove(!remove);     
            if(!remove){
               props.addItem(); 
               // Save in bd  
               getChosenEvents();

            }else{
               props.removeItem();
               // remove in bd
               deleteChosenEvent();
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