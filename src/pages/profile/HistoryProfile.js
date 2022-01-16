import React from 'react'

import CardStars from './cardStars'
import CardFollow from './cardFollow';

import { Container,Row,Col} from 'react-bootstrap';

import { FaPlaceOfWorship } from "react-icons/fa";
import { MdRestaurantMenu } from "react-icons/md";
import { BiHotel } from "react-icons/bi";
import { FaMapSigns} from "react-icons/fa";

import medina from '../../assets/medina.jpg'
import restaurant from '../../assets/restaurant.jpeg'
import hotel from '../../assets/hotel.jpeg'
import { useState } from 'react';
import { useEffect } from 'react';





function HistoryProfile({index}) {

    const [places,setPlaces]= useState([]);
    const [restaurants,setRestaurants]= useState([]);
    const [hotels,setHotels]= useState([]);
    const [events,setEvents]= useState([]);

    console.log(hotels)
    

//get all data
useEffect( async () => {
    if(places.length === 0){
     await getChosenPlaces(); 
     await getChosenRestaurants();
     await getChosenEvents();
     await getChosenHotels(); 
    }   
     
    }, []) 

//Get Places 
const getChosenPlaces = async () => {
  const res = await fetch("http://localhost:8000/places/Places")
  const parseRes = await res.json();
  setPlaces(parseRes)

}


//GetRestaurants
const getChosenRestaurants = async () => {
    const res = await fetch("http://localhost:8000/customTour/chooseARestaurant/Restaurants")
    const parseRes = await res.json();
    setRestaurants(parseRes)
  }



// get Hotels
const getChosenHotels = async ()=>{
 const res = await fetch("http://localhost:8000/customTour/chooseAHotel/hotels")
 const parseRes= await res.json();
 setHotels(parseRes)

}


//get Events
const getChosenEvents = async ()=>{
 const res = await fetch("http://localhost:8000/customTour/chooseAnEvent/events")
 const parseRes= await res.json();
 setEvents(parseRes)

  
}







const convertPhoto = (index)=>{
  const b64 = new Buffer(places[index].image || ' ').toString('base64')
  const mimeType = 'image/jpg'
    return `data:${mimeType};base64,${b64}`
}

const convertPhotoRestaurant = (index)=>{
    const b64 = new Buffer(restaurants[index].image || ' ').toString('base64')
    const mimeType = 'image/jpg'
      return `data:${mimeType};base64,${b64}`
  }

const convertPhotoEvent = (index)=>{
    const b64 = new Buffer(events[index].image || ' ').toString('base64')
    const mimeType = 'image/jpg'
      return `data:${mimeType};base64,${b64}`
  }

  const convertPhotoHotels = (index)=>{
    const b64 = new Buffer(hotels[index].image || ' ').toString('base64')
    const mimeType = 'image/jpg'
      return `data:${mimeType};base64,${b64}`
  }


    
    return (
        <div class="card text-white history-profile">
        
        {index === 0 && <h2 className="title-history"><FaPlaceOfWorship color='#0a4843' size={50}/> <span></span> You discovered the beauty of these places</h2>}
        {index === 1 && <h2 className="title-history"><FaMapSigns color='#0a4843' size={50}/> <span></span>  You are interested in these trips</h2>
        }
        {index === 2 && <h2 className="title-history"><MdRestaurantMenu color='#0a4843' size={50}/> <span></span>  You enjoyed the delicious dishes at these spots</h2> }
        {index === 3 && <h2 className="title-history"><BiHotel color='#0a4843' size={50}/><span></span>   You checked-in in these hotels</h2> }
            
        
        
        
        
        
       
            
        
             <Container fluid>
             
                <Row md={4} className="pt-2">
                     {index===0 &&
                         
                        places.map((place,idx) => (
                         <Col className="cont-card">
                            <CardStars name={place.name} picture={convertPhoto(idx)} key={place.id}/>
                         </Col>
                             
                        ))
                    
                    }
                    {index===1 &&
                         
                        events.map((event,idx) => (
                            <Col className="cont-card">
                               <CardStars name={event.name} picture={convertPhotoEvent(idx)} key={event.id}/>
                            </Col>
                                
                           ))
                    
                    }
                    {index===2 &&
                         
                        restaurants.map((rest,idx) => (
                            <Col className="cont-card">
                               <CardStars name={rest.name} picture={convertPhotoRestaurant(idx)} key={rest.id}/>
                            </Col>
                                
                           ))
                    
                    }
                    {index===3 &&
                         
                        hotels.map((hotel,idx) => (
                            <Col className="cont-card">
                               <CardStars name={hotel.name} picture={convertPhotoHotels(idx)} key={hotel.id}/>
                            </Col>
                                
                           ))
                    
                    }
                </Row>
            </Container>
        
        </div>

        
    )
}

export default HistoryProfile
