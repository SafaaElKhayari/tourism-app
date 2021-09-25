import React from 'react'
import tourist_trips from '../../assets/tourist_trips.jpg';
import { MDBCard,MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';

function TripCard({showModal}) {


    const handleClick = ()=>{
        showModal();
        console.log("here we go");
     } 

    return (
        <MDBCol >
        <MDBCard className="padding-cards" style={{ maxWidth: '540px' }}>
    <MDBRow className='g-0'>
        <MDBCol md='4'>
        <MDBCardImage src={tourist_trips}  alt='trip' fluid />
        </MDBCol>
        <MDBCol md='8'>
        <MDBCardBody >
            <MDBCardTitle><i className="far fa-calendar-alt date-icon"></i><label> 13 May</label> <br />
            <span>Full day trip to the god's bridge and the waterfalls</span> 
             </MDBCardTitle>
            <MDBCardText>
             
            </MDBCardText>
            <MDBCardText>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, ratione....
            </MDBCardText>
            <MDBCardText>
            <small className='text-muted'>3 days left </small>
            </MDBCardText>
            <button onClick={handleClick} className="info_btn see-more-btn btn btn-light">more info</button>
        </MDBCardBody>
        </MDBCol>
    </MDBRow>
    </MDBCard>
    </MDBCol>
    )
}

export default TripCard
