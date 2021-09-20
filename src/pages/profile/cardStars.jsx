import React from 'react'
import medina from '../../assets/medina.jpg'
import StarRating from '../../components/rating'

function CardStars({picture}) {
    return (
       
      <div class="card card-prof" style={{width: "14rem"}}>
            <img src={picture}  class="card-img-top" alt="..."/>
            <div class="card-body">
            <h5 class="card-title title-history">Place name</h5>
            <StarRating size={20} />
            </div>
    </div>
        
      
    )
}

export default CardStars
