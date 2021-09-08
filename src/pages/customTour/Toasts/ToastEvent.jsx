import React from 'react'
import event from '../../../assets/event.jpg'



const ToastEvent = ({showModal}) => {

    return (
        <div>
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" >
            <div className="modal-content">
               <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel"><i className="far fa-calendar-alt date-icon"></i><label>13 May</label></h5>
                  <button type="button"  onClick={()=>{showModal();}} className="close btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className="card mb-3">
                    <img  src={event} className="header-mod card-img-top img-fluid" alt="..."/>
                    
                    <div className="card-body">
                    
                      <h5 className="card-title">International Photography Festival</h5>
                      <i className="far fa-calendar-alt date-icon"></i><label>13 May</label>
                      
                      
                        <br />

                      <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, iusto dolorum! Rem ullam beatae non quibusdam, nam accusantium eaque sapiente! At vel exercitationem nulla mollitia illum accusamus numquam molestiae repellat reprehenderit laudantium iste similique nesciunt id esse nostrum dolor neque magni cupiditate, possimus eaque eum eius dignissimos ipsa quo. Repellendus ea doloribus aut molestias obcaecati voluptatibus sequi quasi corporis eligendi, cumque porro praesentium consectetur, quas aliquid alias, voluptate recusandae laborum possimus provident. Cumque cupiditate explicabo, esse ut error sapiente a aperiam blanditiis, eveniet, ipsa excepturi voluptatum harum. Vero nostrum aliquid, beatae ex, repudiandae obcaecati ullam dolorum iusto fugit deleniti consectetur.</p>
                      <img width="400px" height="200px" src={event}  alt="..."/>

                      <br />
                      <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, iusto dolorum! Rem ullam beatae non quibusdam, nam accusantium eaque sapiente! At vel exercitationem nulla mollitia illum accusamus numquam molestiae repellat reprehenderit laudantium iste similique nesciunt id esse nostrum dolor neque magni cupiditate, possimus eaque eum eius dignissimos ipsa quo. Repellendus ea doloribus aut molestias obcaecati voluptatibus sequi quasi corporis eligendi, cumque porro praesentium consectetur, quas aliquid alias, voluptate recusandae laborum possimus provident. Cumque cupiditate explicabo, esse ut error sapiente a aperiam blanditiis, eveniet, ipsa excepturi voluptatum harum. Vero nostrum aliquid, beatae ex, repudiandae obcaecati ullam dolorum iusto fugit deleniti consectetur.</p>
                      
                       
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
