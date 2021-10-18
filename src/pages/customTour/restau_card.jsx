import React,{ useState } from 'react'
import {Col,Card} from 'react-bootstrap';
import {DollarCircleOutlined} from '@ant-design/icons'
import {FaCheckCircle} from "react-icons/fa"
// import "bootstrap-css-only/css/bootstrap.min.css"
import"mdbreact";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import StarRating from '../../components/rating';



function RestauCard({addItem,removeItem,counter,idx,restaurant}) {
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

        const buffer = restaurant.image;
        const b64 = new Buffer(buffer).toString('base64')
        const mimeType = 'image/jpg'

    return (
        <Col  md={4} key={idx} sm className="restaurant-card">
            {remove && <FaCheckCircle style={iconStyles} className="btn-rounded counter" /> }    
            <Card className={`${remove?"bor":null}`}>
                <Card.Img variant="top" src={`data:${mimeType};base64,${b64}`} style={{height: '380px'}} />
                    <Card.Body>
                        <div className="rating"><StarRating key={idx} /></div>
                        <Card.Title bsPrefix={'restaurant-name'}>{restaurant.name}</Card.Title>
                         <Card.Text bsPrefix={'restaurant-description'}>
                             {restaurant.description}
                            <div className="restaurant-price-range justify-content-start text-muted">
                                <DollarCircleOutlined style={{ fontSize: '12px', color: '#545454' }}/>
                                <span>{restaurant.price}</span>
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
