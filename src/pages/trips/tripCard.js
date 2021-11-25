import React from 'react'
import tourist_trips from '../../assets/tourist_trips.jpg';
import { MDBCard,MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import './trips.css'
import { FaTripadvisor } from 'react-icons/fa';

function TripCard({showModal,idx,key,trip}) {
    
    const handleClick = ()=>{
        showModal();
        console.log("here we go");
     } 

     const getLeftDays=(endDate)=>{        
        endDate = new Date(endDate)
         let daysLeft; 
         const ONE_DAY = 1000 * 60 * 60 * 24;
         var today = Date.now();
         daysLeft = Math.abs( today-endDate)
         daysLeft = Math.round(daysLeft / ONE_DAY);
        return daysLeft;
     }
     const buffer = trip.image;
     const b64 = new Buffer(buffer).toString('base64')
     const mimeType = 'image/jpg'

    return (
               <MDBCol >
        <MDBCard className="padding-cards" >
        <MDBRow >
            <MDBCol md='6'>
                <MDBCardImage src={`data:${mimeType};base64,${b64}`} className='pt-4' alt='trip' fluid />
            </MDBCol>
        <MDBCol md='6'>
        <MDBCardBody >
            <MDBCardTitle ><i className="far fa-calendar-alt date-icon mr-2"></i><label className="trip-date">{trip.date}</label> <br />
            <span className="trip-name">{trip.name}</span> 
             </MDBCardTitle>
            <MDBCardText className="trip-brief">
            {trip.description}
            </MDBCardText>
            <MDBCardText className="pr-4">
            <small className='text-muted '>{getLeftDays(trip.date)} days left </small> {getLeftDays}
            </MDBCardText>
            <button onClick={handleClick} className="info_btn see-more-btn btn btn-light">More info</button>
        </MDBCardBody>
        </MDBCol>
    </MDBRow>
    </MDBCard>
    </MDBCol>
    )
}

export default TripCard
