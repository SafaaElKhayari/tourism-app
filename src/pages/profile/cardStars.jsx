import React from 'react'
//import medina from '../../assets/medina.jpg'
import StarRating from '../../components/rating'
import { useState } from 'react'

function CardStars({name,picture}) {
    const [ isHovered,setIsHovered]=useState(false)
    //const [ size,setSize]=useState(20)
    
    const handleHover=()=>{
        setIsHovered(true);
    }
    const handleHoverLeave=()=>{
        setIsHovered(false);
    }
    return (
       
      <div onMouseOver={handleHover} onMouseLeave={handleHoverLeave}  class="card card-prof card-prof-star" style={{width: "14rem"}}>
            <img src={picture}  class={`${isHovered?"card-img-top img-sm":"card-img-top"}`} alt="..."/>

            <div class={`${isHovered?"card-body card-bodyHover":"card-body"}`}>
                <StarRating size={isHovered? 30:20} className="ratingHover"/>
                <h5 class={`${isHovered?"card-title hoverH5":"card-title titleCard"}`}>{name}</h5>
                {isHovered && <h3 class="card-title hoverH3">Rate it now !</h3>}
                
            </div>
    </div>
        
      
    )
}

export default CardStars
