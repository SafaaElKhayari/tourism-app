import React,{ useState } from 'react'
import {Col,Card} from 'react-bootstrap';
import {FaCheckCircle} from "react-icons/fa"
import { useContext,useEffect} from 'react';
import "mdbreact";

import "../styles/places.css"
import "./rating";
import StarRating from './rating';
import UserContext from '../Context/user'



function CardComp({card_mode,addItem,removeItem,idx,showModal,place}) {

    const [remove,setRemove]= useState(false);
    const choose_mode=card_mode;
    const iconStyles={ color: "white", fontSize: "1.5em" };


// 1 + get User Id
    const {user} = useContext(UserContext);
    const userId = user.id || 9;

  
    
// 2 + add selected places id and user id to bd 
      const getChosenPlaces = async ()=>{
        try{
            const {id}=place
            const body={id,userId}
            
            const res =await fetch("http://localhost:8000/places/choosePlaces",{
                method:"POST",
                headers:{ "Content-Type": "application/json" ,
                'Accept': 'application/json'},
                body:JSON.stringify(body)
            })
            //const parseRes = await res.json();
            //console.log(parseRes)
        }catch(err){
            console.error(err.message)
        }

      }
// 3 + delete selected places id and user from to bd 
      const deleteChosenPlaces = async ()=>{
        try{
            const {id}=place
            console.log(id)
            const res =await fetch("http://localhost:8000/places/remove",{
                method:"POST",
                headers:{ "Content-Type": "application/json" ,
                'Accept': 'application/json'},
                body:JSON.stringify({id:id})
            })
            const parseRes = await res.json();
            console.log(parseRes)

        }catch(err){
            console.error(err.message)
        }

      }



    const handleClickButton=()=>{
            setRemove(!remove);     
            if(!remove){
               addItem();
               // 4 + calling function that save in BD
                getChosenPlaces();
               

            }else{
               removeItem();
               // 5 + calling function that remove from Bd
               deleteChosenPlaces();
            }}

      

      
     const handleClick = ()=>{
        showModal();
     }      


     const handleCategory=(category)=>{
         let categorySection; 
         if(category === "Natural"){
            categorySection= <Card.Subtitle bsPrefix={"place-category"} style={{ color: "#044026" }}>
            <i className="fas fa-leaf mr-2"></i>{place.category}  
        </Card.Subtitle>
         }else if (category === "Cultural"){
             categorySection = <Card.Subtitle bsPrefix={"place-category"} style={{ color: "#603511" }}>
             <i className="fas fa-landmark mr-2"></i>{place.category}  
         </Card.Subtitle>
         }
         else if (category === "Beach"){
            categorySection = <Card.Subtitle bsPrefix={"place-category"} style={{ color: "#0349a3" }}>
            <i className="fas fa-swimmer mr-2" ></i>{place.category}  
        </Card.Subtitle>
         }
         return categorySection
     };
     
     const buffer = place.image;
     const b64 = new Buffer(buffer).toString('base64')
     const mimeType = 'image/jpg'

     
            
    return (
        <Col className="place-card">
          {remove && <FaCheckCircle style={iconStyles} className=" btn-rounded counter" /> }    
        <Card className={`${remove?"bor":null}`} >
        <Card.Img variant="top" style={{height: 240}} src={`data:${mimeType};base64,${b64}`}/>
        {/* console.log(place.image) */}

        <Card.Body>
                <div className="rating"><StarRating key={idx}/></div>
                    {handleCategory(place.category)}
                 <Card.Title bsPrefix={'place-name'}>{place.name} </Card.Title>
                 
                 <Card.Text bsPrefix={'place-description'}>{place.description}</Card.Text>
                 
                <button onClick={handleClick} type="button" className={`${choose_mode?"see-more-btn btn btn-light":"see-more-choose-mode see-more-btn btn btn-light"}`} data-bs-toggle="modal" data-bs-target="#exampleModal">See more</button>
         
                {choose_mode &&<button type="button" id="liveAlertBtn" onClick={handleClickButton} 
                className={`${remove? " add-to-card_btn  btn btn-danger":" add-to-card_btn btn btn-rounded"}`}>
                {`${remove? "Remove":"Add"}`} </button>
        }
             </Card.Body>

         </Card>
     
      
         
        
     </Col>
    )
}

export default CardComp;
