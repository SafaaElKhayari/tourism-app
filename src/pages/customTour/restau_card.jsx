import React from 'react'
import {Col,Card} from 'react-bootstrap';
import "bootstrap-css-only/css/bootstrap.min.css"
import"mdbreact";
import  image from "../../assets/restaurant.jpeg"
import "@fortawesome/fontawesome-free/css/all.min.css";
import StarRating from '../../components/rating';
import {DollarCircleOutlined} from '@ant-design/icons'
import { useState } from 'react';
import {FaCheckCircle} from "react-icons/fa"


function RestauCard({addItem,removeItem,counter,idx}) {
    const [remove,setRemove]= useState(false);
    const iconStyles={ color: "white", fontSize: "1.5em" };
    const handleClickButton=()=>{
            setRemove(!remove);     
            if(!remove){
               addItem()
            }else{
               removeItem()
            }
        }
           
    return (
        <Col  md={4} key={idx} sm className="restaurant-card">
            {remove && <FaCheckCircle style={iconStyles} className="btn-rounded counter" /> }    
            <Card className={`${remove?"bor":null}`}>
                <Card.Img variant="top" src={image}/>
                    <Card.Body>
                        <div className="rating"><StarRating key={idx} /></div>
                        <Card.Title bsPrefix={'restaurant-name'}>Casa Aladdin Restaurant</Card.Title>
                         <Card.Text bsPrefix={'restaurant-description'}>
                            Cuisine marocaine, méditerranéenne, Végétariens bienvenus, Choix végétaliens, Halal, Plats sans gluten
                            <div className="restaurant-price-range justify-content-start text-muted">
                                <DollarCircleOutlined style={{ fontSize: '12px', color: '#545454' }}/>
                                <span>20 - 40 MAD</span>
                            </div>
                        </Card.Text>
                            <button type="button" id="liveAlertBtn" 
                                    onClick={handleClickButton} 
                                    className={`${remove? " add-to-card_btn  btn btn-danger":" add-to-card_btn btn btn-rounded"}`}>
                                    {`${remove? "Remove":"Add"}`} </button>
                    </Card.Body>                     
            </Card>
        </Col>

    )
}

export default RestauCard
