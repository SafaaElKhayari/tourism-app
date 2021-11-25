import React, { useState,useEffect } from 'react'
import { Container, Nav, Row,Col,Card} from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';
// import "bootstrap-css-only/css/bootstrap.min.css"
import "mdbreact";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import StarRating from '../../components/rating';
import {DollarCircleOutlined} from '@ant-design/icons'
import HotelCard from './hotelCard';


function HotelsComponent(props) {
    const [hotels, sethotels] = useState([])
    const [counter,setCounter] = useState(0);
    const [closeAlert,setCloseAlert] = useState(false);
    const [isLoading, setisLoading] = useState(true);


    const getHotels = async() =>{
        try {
            const response = await fetch ("http://localhost:5000/customTour/chooseAHotel");
            const jsonData = await response.json();
            sethotels(jsonData);
            setisLoading(false)
            // setPlaces(shuffle(places))

        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(()=>{
        getHotels();   
    },[]);
    
    const addItem=()=>{
        setCloseAlert(true);
        setCounter((preValue)=>{
            return preValue +1;
        })
    }
    const removeItem=()=>{
        setCounter((preValue)=>{
            return preValue -1;
        })
    }
    return (
        <div>
             <Container fluid>
                <Row  className="pt-2">
                {closeAlert && <div className="alert alert-primary alert-dismissible alert-color" role="alert" id="liveAlert">
                 {counter} hotel added ! Enjoy your stay !!
                    <button type="button" onClick={()=>{setCloseAlert(false)}} className="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
                </div> }
                {(isLoading && <div><h3 className="pt-5 loading-text">Fetching magic for you ... </h3>  <Spinner animation="border" variant="success" size="xxl" /></div>)}
                {!isLoading && 
                    hotels.map(hotel => (
                        <HotelCard hotel={hotel} key={hotel.id} idx={hotel.id} addItem={addItem} removeItem={removeItem} counter ={counter}/>
                    ))}
                    
                </Row>
            </Container>
        </div>
    )
}

export default HotelsComponent
