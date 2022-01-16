import React from 'react'
import CardResult from './cardResult'
//import Map  from '../../Map'
import {useEffect,useState} from 'react'
import { Spinner } from 'react-bootstrap';
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAngleDoubleRight} from "react-icons/fa";
//import Places from '../../components/places';
//import Places from '../../components/places';
import MapHere from '../customTour/MapHere'

function Result() {
  const [places,setPlaces]= useState([]);
  //count places events hotels restaurants
  const [count,setCount]=useState({})
  //slideshow of cards index
  const [slideIndex,setSlideIndex]= useState({index1: 0, index2: 1, index3: 2});
  const {index1,index2,index3}=slideIndex;
  const {pCount,eCount,hCount,rCount}=count


//get all data
  useEffect( async () => {
      if(places.length === 0){
       await getChosenPlaces(); 
       await getChosenEvents();
       await getChosenRestaurants();
       await getChosenHotels();
      }   
       
      }, []) 

  //Get Places 
  const getChosenPlaces = async () => {
    const res = await fetch("http://localhost:8000/places/Places")
    const parseRes = await res.json();
    setPlaces((place)=>{
      return [...place,...parseRes]
    })
    setCount((count)=>{ return {...count,pCount:parseRes.length}})
  }

  //GetRestaurants
  const getChosenRestaurants = async () => {
    const res = await fetch("http://localhost:8000/customTour/chooseARestaurant/Restaurants")
    const parseRes = await res.json();
    setPlaces((place)=>{
      return [...place,...parseRes]
    })
   setCount((count)=>{
    return {...count, rCount:parseRes.length}})
}
 

// get Hotels
 const getChosenHotels = async ()=>{
   const res = await fetch("http://localhost:8000/customTour/chooseAHotel/hotels")
   const parseRes= await res.json();
   setPlaces((place)=>{
    return [...place,...parseRes]
  })
  setCount((count)=>{
    return {...count,hCount:parseRes.length}})
 }


 //get Events
 const getChosenEvents = async ()=>{
   const res = await fetch("http://localhost:8000/customTour/chooseAnEvent/events")
   const parseRes= await res.json();
   setPlaces((place)=>{
    return [...place,...parseRes]
  })
  setCount((count)=>{
    return {...count,eCount:parseRes.length}})
    
 }
  

  // return place of an index
  const getPlaceIndex = (index)=>{
    return places[index];
  }
  const getAllPlaces = ()=>{
    return places;
  }


  //return name of an index
  const getNameIndex = (index)=>{
    if(places[index]){
      return places[index].name;
    }
    else{
      return 0
    }

  }

//slideshow  click
  const leftClick = ()=>{
   setSlideIndex({...slideIndex,index1:(index1-1),index2:(index2-1),index3:(index3-1)})
   console.log("leftClick")
  }
  const rightClick = ()=>{
    setSlideIndex({...slideIndex,index1:(index1+1),index2:(index2+1),index3:(index3+1)})
  }
//check borders of indexes
  const checkIndex1 =(index)=>{
  if(index <0){
    setSlideIndex({...slideIndex,index1:places.length -1})
      return (places.length -1 )
    }
    else if(index > places.length -1){
      setSlideIndex({...slideIndex,index1:0})
      return 0
    }  
    else  
    return index
  }

  const checkIndex2 =(index)=>{
     if(index <0){
      setSlideIndex({...slideIndex,index2:places.length -1})
        return (places.length -1 )
      }
      else if(index > places.length -1){
        setSlideIndex({...slideIndex,index2:0})
        return 0
      }  
      else 
       return index
    }

    const checkIndex3 =(index)=>{
      if(index <0){
        setSlideIndex({...slideIndex,index3:places.length -1})
          return (places.length -1 )
        }
        else if(index > places.length -1){
          setSlideIndex({...slideIndex,index3:0})
          return 0
        }  
        else  return index
      }

   


    return (

        
        <div className="stepper-inner container section">
          {(places.length === 0)?(<div className="loading-result"><h3 className="pt-5 loading-text">Fetching magic for you ... </h3>  <Spinner animation="border" variant="success" size="xxl" /></div>)
          :(<div className="contents"> 
            
            <div class="btn-group section1">
              <a href="#" class="btn  btn-section btn-section-left" aria-current="page">Places covered<br/> <span>{pCount} Places</span></a>
              <a href="#" class="btn  btn-section">Events<br/> <span>{getNameIndex(pCount)}</span> </a>
              <a href="#" class="btn btn-section">Hotel<br/> <span>{getNameIndex(pCount+eCount+rCount)}</span></a>
              <a href="#" class="btn  btn-section btn-section-right">Restaurant<br/> <span>{getNameIndex(pCount+eCount)}</span></a>
          </div> 


          <div className="map">    <MapHere places={getAllPlaces}/>  </div>

        
          <div class="btn-group section-down1">
              <div className="angleLeft" onClick={leftClick}><FaAngleDoubleLeft size={40} /></div>
              
                <div class="btn  btn-section-down btn-section-left-down" aria-current="page">
                <CardResult place={getPlaceIndex(checkIndex1(index1))} index={checkIndex1(index1) }/>
                </div>

                <div class="btn  btn-section-down ">
                <CardResult  place={getPlaceIndex(checkIndex1(index2))} index={checkIndex2(index2) }/>
                </div>

                <div class="btn btn-section-down">
                <CardResult place={getPlaceIndex(checkIndex1(index3))} index={checkIndex3(index3)}/> 
                </div>
                <div className="angleRight" onClick={rightClick}><FaAngleDoubleRight size={40} /></div>
                
            </div>   
            
            
        </div>)}
                    
        


        </div>
        
    )
}

export default Result
