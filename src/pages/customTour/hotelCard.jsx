import React,{ useState } from 'react'
import {Col,Card} from 'react-bootstrap';
import {FaCheckCircle} from "react-icons/fa"
import {DollarCircleOutlined} from '@ant-design/icons'

import StarRating from '../../components/rating';


function HotelCard({addItem,removeItem,counter,idx,hotel}) {

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
    const buffer = hotel.image;
    const b64 = new Buffer(buffer).toString('base64')
    const mimeType = 'image/jpg'    
    
    return (
            <Col md={6}sm className="hotel-card" key={idx}>
                {remove && <FaCheckCircle style={iconStyles} className="btn-rounded counter" /> }    
                        <Card className={`${remove?"bor":null}`}>
                            <Card.Img variant="top" src={`data:${mimeType};base64,${b64}`} style={{maxHeight: '332px'}}/>
                            <Card.Body>
                                <StarRating className="rating-comp"/>
                                <Card.Title bsPrefix={'hotel-name'}>{hotel.name}</Card.Title>
                                <Card.Text bsPrefix={'hotel-description'}>{hotel.description}</Card.Text>
                                <div className="hotel-price-range justify-content-start text-muted">
                                    <DollarCircleOutlined style={{ fontSize: '12px', color: '#545454' }}/>
                                    <span>{hotel.price} MAD</span>
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
