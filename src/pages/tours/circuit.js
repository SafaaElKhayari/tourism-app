import React from 'react'
import '../../styles/circuit.css'
import medinaaa from '../../assets/medinaaa.jpg'
import CHEFCHAOUEN_KASBAH from '../../assets/CHEFCHAOUEN_KASBAH.jpg'
import restau from '../../assets/restau.jpg'
import { useState } from 'react'
import Stepper from './Stepper'



function Circuit() {
	const table=[medinaaa,CHEFCHAOUEN_KASBAH,restau];
	const places=['Old City and Medina', 'Kasbah Museum', 'Lalla Messouda Restaurant']
	const [value,setValue]=useState(0);
	if(value>table.length-1){
		setValue(0);
	}
	if(value<0){
		setValue(table.length-1);
	}
	console.log(table.length)
    return (
    <div className="py-4 cont" >
		<div class="container py-3">
		<div class="title h1 text-center">Let’s make your best journey ever  </div>
		{Array.from({ length: 4 }).map((_, idx) => (
			<div class="card">
			<div class="row ">
		
			  <div class="col-md-7 px-3">
				<div class="card-block px-6">
				  <h4 class="card-title">Chefchaouen Old City Tour</h4>
				  <p class="card-text">
				  Visit of the historic centers of the Medinah , the Souk , Kasbah Museum, Lunch at Lalla Messouda Restaurant
				  </p>
				  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>	
				  <Stepper/>
				  <div class="container-sm btn_cont">
					<button className="button--pan button btn_pos"><span>TAKE ME THERE</span></button>
				  </div>
				
				</div>
			 </div>
			  
			  <div class="col-md-5">

			  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
			  <div class="carousel-indicators">
				<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class={`${value===0?"active":null}`} ></button>
				<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" class={`${value===1?"active":null}`}></button>
				<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" class={`${value===2?"active":null}`}></button>
			  </div>
			  <div class="carousel-inner">
				<div class="carousel-item active"  className="img-caro" >
				  <img  className="img-caro" src={table[value]} class="d-block w-100" alt=""/>  
				</div>
				<div class="carousel-caption d-none d-md-block">
				  <h5 className="places_name">{places[value]}</h5>
				</div>
			  </div>
			  
			  <button onClick={()=>{setValue(value-1)}} class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Previous</span>
			  </button>

			  <button onClick={()=>{setValue(value+1)}} class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Next</span>
			  </button>
			</div>


			
			   </div>
		  



			</div>
		  </div>
			
))}

		

		










	  </div>	   
</div>
    )
}

export default Circuit
