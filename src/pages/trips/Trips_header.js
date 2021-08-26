import React from 'react'
import tourist_trips from '../../assets/tourist_trips.jpg'
import { MDBCard,MDBBtn,MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';
function Trips_header() {
    return (

     
        <MDBRow className='container_trips row-cols-1 row-cols-md-2 g-4'>
            {Array.from({ length: 10 }).map((_, idx) => (
            <MDBCol>
            <MDBCard style={{ maxWidth: '540px' }}>
        <MDBRow className='g-0'>
            <MDBCol md='4'>
            <MDBCardImage src={tourist_trips} alt='trip' fluid />
            </MDBCol>
            <MDBCol md='8'>
            <MDBCardBody>
                <MDBCardTitle><div className="date_trips">Tuesday 15 october </div>
                <div>Full day trip to the god's bridge and the waterfalls</div> </MDBCardTitle>
                <MDBCardText>
                </MDBCardText>
                <MDBCardText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic porro, amet, et libero quis vero fugiat dolore maiores quaerat expedita maxime debitis qui natus cupiditate.
                </MDBCardText>
                <MDBCardText>
                <small className='text-muted'>3 days left </small>
                </MDBCardText>
                <button className="info_btn">more info</button>
            </MDBCardBody>
            </MDBCol>
        </MDBRow>
        </MDBCard>
        </MDBCol>

    ))}
        

 




    
      </MDBRow>





   

    
  );

}

export default Trips_header
