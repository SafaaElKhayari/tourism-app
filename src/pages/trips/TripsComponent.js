import React from 'react'
import {Container} from'react-bootstrap';
import TripCard from './tripCard';
import Modal from '../customTour/Toasts/ToastTrips';
import { useState } from 'react';
import { MDBRow } from 'mdb-react-ui-kit';
function TripsComponent() {

    const [showToast,setShowToast]= useState(false);

    const showModal = ()=>{
        setShowToast((show)=>{return  !show});
    }



    return (
    <div className="py-4" >
        {showToast && <Modal  showModal={showModal}/>}
     <Container>
      
        <MDBRow className=' container_trips row-cols-1 row-cols-md-2 g-4 mt-3'>
       
            {Array.from({ length: 10 }).map((_, idx) => (
                <TripCard showModal={showModal} key={idx}/>

    ))}
        

 




    
      </MDBRow>
      
      </Container>
      </div>





   

    
  );

}

export default TripsComponent
