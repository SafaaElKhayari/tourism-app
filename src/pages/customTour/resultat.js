import React from 'react'
import CardResult from './cardResult'
import Map  from '../../Map'

function Result() {
    return (
        
        <div className="stepper-inner container section">
           <div class="btn-group section1">
            <a href="#" class="btn  btn-section btn-section-left" aria-current="page">Duration<br/> <span>1 Day</span> </a>
            <a href="#" class="btn  btn-section">Places covered<br/> <span>4 Places</span></a>
            <a href="#" class="btn btn-section">Hotel<br/> <span>Hotel Tedar</span></a>
            <a href="#" class="btn  btn-section btn-section-right">Restaurant<br/> <span>Restaurant Bab Souq</span></a>
          </div> 


          <div className="map">
          <Map/>
           </div>

        
          <div class="btn-group section-down1">
            <div class="btn  btn-section-down btn-section-left-down" aria-current="page">
            <CardResult/>
            </div>
            <div class="btn  btn-section-down "><CardResult/></div>
            <div class="btn btn-section-down"><CardResult/></div>
            
          </div>            
       


        </div>
        
    )
}

export default Result
