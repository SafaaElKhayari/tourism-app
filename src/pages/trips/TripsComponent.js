import React from 'react'
import {Container,Spinner} from'react-bootstrap';

import TripCard from './tripCard';
import Modal from '../customTour/Toasts/ToastTrips';
import { useState ,useEffect} from 'react';
import { MDBRow } from 'mdb-react-ui-kit';
function TripsComponent() {

    const [showToast,setShowToast]= useState(false);
    const [trips, setTrips] = useState([]);
    const [isLoading, setisLoading] = useState(true);



    const showModal = ()=>{
        setShowToast((show)=>{return  !show});
    }

    const getTrips = async() =>{
        try {
            const response = await fetch ("http://localhost:5000/trips");
            const jsonData = await response.json();
            setTrips(jsonData);
            setisLoading(false)


        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(()=>{
        getTrips();
    },[]);


    return (
    <div className="py-3">
        {showToast && <Modal  showModal={showModal}/>}
     <Container id="scrollspyHeading1">
     {(isLoading && <div><h3 className="pt-5 loading-text">Fetching magic for you ... </h3>  <Spinner animation="border" variant="success" size="xxl" /></div>)}
                {!isLoading &&
                    <MDBRow className='container_trips row-cols-2 row-cols-md-2 g-3 mt-4'>
            
                    {trips.map(trip =>(
                        <TripCard showModal={showModal} trip={trip} key={trip.id} idx={trip.id} />
                    ))}
               
                    {/* {Array.from({ length: 10 }).map((_, idx) => (
                        <TripCard showModal={showModal} key={idx}/> */}
        
              </MDBRow>}
        
      
      </Container>
      </div>
    )}

export default TripsComponent
            