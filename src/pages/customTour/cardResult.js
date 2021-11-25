import React from 'react'
import medina2 from '../../assets/logos/medina2.jpg'
import StarRating from '../../components/rating'

function CardResult({getPlaceIndex,index}) {
 
  console.log("Here's the place : ")
  const Place = getPlaceIndex(index);
  const {name,category} = Place;
  const b64 = new Buffer(Place.image).toString('base64')
  const mimeType = 'image/jpg'

  
  //const {name}=place;
    return (
        
        <div class="card mb-3 cardMargin" style={{maxWidth: "540px",marginBottom:"0px", marginTop:"0px",paddingBottom:"0px"}}>
        <div class="row g-0">
          <div class="col-md-4">
            <img src={`data:${mimeType};base64,${b64}`} style={{height: '140px', width: '300px'}} class="img-fluid rounded-start" alt="..."/>
          </div>
          <div class="col-md-8 colRound">
            <div class="card-body">
              <h5 class="card-title card-title-res">{name}</h5>
              <p class="card-text card-text-updated">{category}</p>
              <p class="card-text card-text-res">you have chose this place we hope you'll like it</p>
              <div className="rating-res"><StarRating /></div>
            </div>
          </div>
        </div>
      </div> 
        
    )
}

export default CardResult
