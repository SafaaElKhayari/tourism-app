import React from 'react'
import CardResult from './cardResult'
//import Map  from '../../Map'
import {useEffect,useState} from 'react'
import { Spinner } from 'react-bootstrap';
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAngleDoubleRight} from "react-icons/fa";

function Result() {
  const [places,setPlaces]= useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [slideIndex,setSlideIndex]= useState({index1:0,index2:1,index3:2});
  const {index1,index2,index3}=slideIndex;

  //Get Places 
  const getChosenPlaces = async () => {
    const res = await fetch("http://localhost:5000/places/Places")
    const parseRes = await res.json();
    setPlaces(parseRes)
    setIsLoading(false)
  }


  useEffect(() => {
      getChosenPlaces();
    }, []) 


  //count Places
  const getCountPlaces = ()=>{
    return places.length ;
  }

  const countPlaces =()=>{
    //console.log(places[1])
   return  getCountPlaces();
  } 
  //console.log(countPlaces())

  
  const getPlaceIndex = (index)=>{
    return places[index];
  }

  const leftClick = ()=>{
   setSlideIndex({...slideIndex,index1:(index1-1),index2:(index2-1),index3:(index3-1)})
   console.log("leftClick")
  }
  const rightClick = ()=>{
    setSlideIndex({...slideIndex,index1:(index1+1),index2:(index2+1),index3:(index3+1)})
  }

  const checkIndex1 =(index)=>{
  if(index <0){
    setSlideIndex({...slideIndex,index1:places.length -1})
      return (places.length -1 )
    }
    else if(index > places.length -1){
      setSlideIndex({...slideIndex,index1:0})
      return 0
    }  
    else return index
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
      else return index
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
        else return index
      }


  
 console.log(slideIndex)
   


    return (

        
        <div className="stepper-inner container section">
        {isLoading?(<div><h3 className="pt-5 loading-text">Fetching magic for you ... </h3>  <Spinner animation="border" variant="success" size="xxl" /></div>)
        :(<div> 
          
          <div class="btn-group section1">
            <a href="#" class="btn  btn-section btn-section-left" aria-current="page">Places covered<br/> <span>{countPlaces()} Places</span></a>
            <a href="#" class="btn  btn-section">Events<br/> <span>1 Day</span> </a>
            <a href="#" class="btn btn-section">Hotel<br/> <span>Hotel Tedar</span></a>
            <a href="#" class="btn  btn-section btn-section-right">Restaurant<br/> <span>Restaurant Bab Souq</span></a>
          </div> 


          <div className="map">
          
           </div>

        
            <div class="btn-group section-down1">
            <div className="angleLeft" onClick={leftClick}><FaAngleDoubleLeft size={50} /></div>
            
              <div class="btn  btn-section-down btn-section-left-down" aria-current="page">
              <CardResult getPlaceIndex={getPlaceIndex} index={checkIndex1(index1) }/>
              </div>

              <div class="btn  btn-section-down ">
              <CardResult  getPlaceIndex={getPlaceIndex} index={checkIndex2(index2) }/>
              </div>

              <div class="btn btn-section-down">
              <CardResult getPlaceIndex={getPlaceIndex} index={checkIndex3(index3)}/> 
              </div>
              <div className="angleRight" onClick={rightClick}><FaAngleDoubleRight size={50} /></div>
              
            </div>   
            
            
        </div>)}
                    
        


        </div>
        
    )
}

export default Result
