import React from 'react'
import { useState } from 'react';
import header from '../../../assets/headImage.png'
import  './ToastPlaces.css';
import medinaaa from '../../../assets/medinaaa.jpg'

import CHEFCHAOUEN_KASBAH from '../../../assets/CHEFCHAOUEN_KASBAH.jpg'
import StarRating from '../../../components/rating';

const Modal = ({showModal}) => {
  const table=[medinaaa,CHEFCHAOUEN_KASBAH];
	const [value,setValue]=useState(0);
	if(value>table.length-1){
		setValue(0);
	}
	if(value<0){
		setValue(table.length-1);
	}
 
    return (
      <div>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            Launch demo modal
          </button>

          <div class="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" >
              <div class="modal-content">
                 <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Description</h5>
                    <button type="button"  onClick={()=>{showModal();}} className="close btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  
                    
                  
                
                <div class="modal-body">
                      <div class="card mb-3">
                      <img  src={header} className="header-mod card-img-top img-fluid" alt="..."/>
                      <div class="card-body">
                        <h5 class="card-title">Talassemtane National Park</h5>
                        <div className="rating"><StarRating /></div>
                        
                        <p class="card-text"><small class="text-muted">25 km to Chefchaouen</small>  <button type="button" class=" button--pan">Show on map</button></p>
                          <br />

                        <p class="card-text">For outdoor activities near Chefchaouen, head to Talassemtane National Park. Guided hikes or 4x4 tours will take you into the mountains and valleys to enjoy the impressive views of the countryside.
                        Between its great biodiversity and its exceptional landscapes, it is the most original ecological entity in Morocco. The mountain landscape dominates the park, with an important orography with abundant sources. The limestone ridge which constitutes all the reliefs of the park represents the most important aquifer of the Rif.</p>
                        
                        <br />
                         
                        </div>
                        <div class="containerToast">
                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className={`${value===0?"active":null}`} ></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className={`${value===1?"active":null}`}></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className={`${value===2?"active":null}`}></button>
                        </div>
                        <div className="carousel-inner">
                          <div className="carousel-item active"  className="img-caro" >
                            <img src={table[value]} className=" d-block w-100 img-toast-caro" alt=""/>  
                          </div>
                        </div>
                        
                        <button onClick={()=>{setValue(value-1)}} className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                        </button>
                
                        <button onClick={()=>{setValue(value+1)}} className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                        </button>
                      </div>
                         </div>

                      
                      
                       

                      
                      
                    </div>









                    
                </div>
                {/* <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
                </div> */}
              </div>
            </div>
          </div>
      </div>
    );
};

export default Modal;
