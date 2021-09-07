import React from 'react'
import {Col,Card} from 'react-bootstrap';
import {FaCheckCircle} from "react-icons/fa"
import image from "../../assets/hotel.jpeg"
import {DollarCircleOutlined} from '@ant-design/icons'
import { useState } from 'react';
import StarRating from '../../components/rating';


function HotelCard({addItem,removeItem,counter,idx}) {
    const [remove,setRemove]= useState(false);
    const iconStyles={ color: "white", fontSize: "1.5em" };
    const handleClickButton=()=>{
            setRemove(!remove);     
            if(!remove){
               addItem();
            }else{
               removeItem();
            }
        }
    return (
            <Col md={6}sm className="hotel-card" key={idx}>
                {remove && <FaCheckCircle style={iconStyles} className="btn-rounded counter" /> }    
                        <Card className={`${remove?"bor":null}`}>
                            <Card.Img variant="top" src={image}/>
                            <Card.Body>
                                <StarRating className="rating-comp"/>
                                <Card.Title bsPrefix={'hotel-name'}>the hermitage of akchour</Card.Title>
                                <Card.Text bsPrefix={'hotel-description'}>The hotel has a roof terrace. In addition, Casa Sabila has a free breakfast, providing a pleasant place to rest after a busy day.</Card.Text>
                                <div className="hotel-price-range justify-content-start text-muted">
                                    <DollarCircleOutlined style={{ fontSize: '12px', color: '#545454' }}/>
                                    <span>523 MAD</span>
                                </div>
                                    <button type="button" id="liveAlertBtn" onClick={handleClickButton} 
                                        className={`${remove? " add-to-card_btn  btn btn-danger":" add-to-card_btn btn btn-rounded"}`}>
                                        {`${remove? "Remove":"Add"}`} </button>
                    
                            </Card.Body>
                        </Card>
                    </Col>
        
    )
}

export default HotelCard
