import React from 'react'
import './ToastEvent.css'
import { useState } from 'react';
import event from '../../../assets/event.jpg'
import medinaaa from '../../../assets/medinaaa.jpg'
import CHEFCHAOUEN_KASBAH from '../../../assets/CHEFCHAOUEN_KASBAH.jpg'
import restau from '../../../assets/restau.jpg'


const ToastEvent = ({showModal}) => {


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
       

        <div class="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" >
            <div class="modal-content">
               <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel"><i class="far fa-calendar-alt date-icon"></i><label>13 May</label></h5>
                  <button type="button"  onClick={()=>{showModal();}} className="close btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                
                  
                
              
              <div class="modal-body">
                    <div class="card mb-3">
                    <img  src={event} className="header-mod card-img-top img-fluid" alt="..."/>
                    
                    <div class="card-body">
                    
                      <h5 class="card-title">International Photography Festival</h5>
                      <i class="far fa-calendar-alt date-icon"></i><label>13 May</label>
                      
                      
                        <br />

                      <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, iusto dolorum! Rem ullam beatae non quibusdam, nam accusantium eaque sapiente! At vel exercitationem nulla mollitia illum accusamus numquam molestiae repellat reprehenderit laudantium iste similique nesciunt id esse nostrum dolor neque magni cupiditate, possimus eaque eum eius dignissimos ipsa quo. Repellendus ea doloribus aut molestias obcaecati voluptatibus sequi quasi corporis eligendi, cumque porro praesentium consectetur, quas aliquid alias, voluptate recusandae laborum possimus provident. Cumque cupiditate explicabo, esse ut error sapiente a aperiam blanditiis, eveniet, ipsa excepturi voluptatum harum. Vero nostrum aliquid, beatae ex, repudiandae obcaecati ullam dolorum iusto fugit deleniti consectetur.</p>
                      <img width="400px" height="200px" src={event}  alt="..."/>

                      <br />
                      <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, iusto dolorum! Rem ullam beatae non quibusdam, nam accusantium eaque sapiente! At vel exercitationem nulla mollitia illum accusamus numquam molestiae repellat reprehenderit laudantium iste similique nesciunt id esse nostrum dolor neque magni cupiditate, possimus eaque eum eius dignissimos ipsa quo. Repellendus ea doloribus aut molestias obcaecati voluptatibus sequi quasi corporis eligendi, cumque porro praesentium consectetur, quas aliquid alias, voluptate recusandae laborum possimus provident. Cumque cupiditate explicabo, esse ut error sapiente a aperiam blanditiis, eveniet, ipsa excepturi voluptatum harum. Vero nostrum aliquid, beatae ex, repudiandae obcaecati ullam dolorum iusto fugit deleniti consectetur.</p>
                      
                       
                      </div>
      
 
                  </div>









                  
              </div>
            </div>
          </div>
        </div>
    </div>
    )
}

export default ToastEvent
