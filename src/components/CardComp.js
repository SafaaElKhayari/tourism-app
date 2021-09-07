import React from 'react'
import {Col,Card} from 'react-bootstrap';
import "mdbreact";
import placesImage from "../assets/places_img.jpeg"
import "../styles/places.css"
import "./rating";
import StarRating from './rating';
import { useState } from 'react';
import {FaCheckCircle} from "react-icons/fa"



function CardComp({card_mode,addItem,removeItem,counter,idx,showModal}) {

    const [remove,setRemove]= useState(false);
   
    const choose_mode=card_mode;
    const iconStyles={ color: "white", fontSize: "1.5em" };
    const handleClickButton=()=>{
            setRemove(!remove);     
            if(!remove){
               addItem();
            }else{
               removeItem();
            }
            //console.log(counter)
        }

      
     const handleClick = ()=>{
        showModal();
     }      
            

    return (
        <Col className="place-card">
      
          {remove && <FaCheckCircle style={iconStyles} className=" btn-rounded counter" /> }    
        <Card className={`${remove?"bor":null}`} >
       
             <Card.Img variant="top" src={placesImage}/>
             <Card.Body>
                 <Card.Subtitle bsPrefix={"place-category"}>
                     <i className="fas fa-university"></i> Culture 
                     <div className="rating-comp"><StarRating key={idx}/></div>
                 </Card.Subtitle>
                 <Card.Title bsPrefix={'place-name'}>Medina</Card.Title>
                 <Card.Text bsPrefix={'place-description'}>If you are looking for unique souvenirs from Morocco, you will certainly find them in Chefchaouen's medina, where the streets are ....</Card.Text>
                 <div className="container-sm btn-group" role="group" aria-label="Basic example">
                <button onClick={handleClick} type="button" className={`${choose_mode?"see-more-btn btn btn-light":"see-more-choose-mode see-more-btn btn btn-light"}`} data-bs-toggle="modal" data-bs-target="#exampleModal">See more</button>
         
                {choose_mode &&<button type="button" id="liveAlertBtn" onClick={handleClickButton} 
                className={`${remove? " add-to-card_btn  btn btn-danger":" add-to-card_btn btn btn-rounded"}`}>
                {`${remove? "Remove":"Add"}`} </button>
        }

             
       </div>
             </Card.Body>

         </Card>
     
      
         
        
     </Col>

    )
}

export default CardComp
