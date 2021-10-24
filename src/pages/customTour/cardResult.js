import React from 'react'
import medina2 from '../../assets/logos/medina2.jpg'
import StarRating from '../../components/rating'

function CardResult() {
    return (
        
        <div class="card mb-3 cardMargin" style={{maxWidth: "540px",marginBottom:"0px", marginTop:"0px",paddingBottom:"0px"}}>
        <div class="row g-0">
          <div class="col-md-4">
            <img src={medina2} class="img-fluid rounded-start" alt="..."/>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title card-title-res">Medina</h5>
              <p class="card-text card-text-res">If you are looking for unique souvenirs from Morocco ....</p>
              <div className="rating-res"><StarRating /></div>
            </div>
          </div>
        </div>
      </div> 
        
    )
}

export default CardResult
