import React, { Component } from 'react'
import { Container, Nav, Row,Col,Card} from 'react-bootstrap';
import "bootstrap-css-only/css/bootstrap.min.css"
import "mdbreact";
import image from "../../assets/hotel.jpeg"
import "@fortawesome/fontawesome-free/css/all.min.css";
import StarRating from '../../components/rating';
import {DollarCircleOutlined} from '@ant-design/icons'
import { useState } from 'react';
import HotelCard from './hotelCard';


function HotelsComponent(props) {
    const [counter,setCounter] = useState(0);
    const [closeAlert,setCloseAlert] = useState(false);

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
                    {Array.from({ length: 8 }).map((_, idx) => (
                        <HotelCard key={idx} idx={idx} addItem={addItem} removeItem={removeItem} counter ={counter}/>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default HotelsComponent
