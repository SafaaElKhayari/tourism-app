import React,{ useState ,useContext } from 'react'
import {Col,Card} from 'react-bootstrap';
import {FaCheckCircle} from "react-icons/fa"
import {DollarCircleOutlined} from '@ant-design/icons'
import UserContext from '../../Context/user';
import StarRating from '../../components/rating';


function HotelCard({addItem,removeItem,counter,idx,hotel}) {

    const [remove,setRemove]= useState(false);
    const iconStyles={ color: "white", fontSize: "1.5em" };
    const id = hotel.id;

// 1 + get user id 
    const {user} = useContext(UserContext);
    const userId = user.id
   // console.log(UserId)

// 2 + save selected hotel to bd 
const getChosenHotels = async ()=>{
    try{
        const body={id,userId}
        console.log(body)
        const res =await fetch("http://localhost:8000/customTour/chooseAHotel/addHotel",{
            method:"POST",
            headers:{ "Content-Type": "application/json" ,
            'Accept': 'application/json'},
            body:JSON.stringify(body)
        })
        const parseRes = await res.json();
        //console.log(parseRes)
    }catch(err){
        console.error(err.message)
    }
}


// 3 + remove selected hotel from bd 

    const deleteChosenHotel = async ()=>{
        try{ 
            const res =await fetch("http://localhost:8000/customTour/chooseAHotel/removeHotel",{
                method:"POST",
                headers:{ "Content-Type": "application/json" ,
                'Accept': 'application/json'},
                body:JSON.stringify({id})
            })
            const parseRes = await res.json();
            //console.log(parseRes)

        }catch(err){
            console.error(err.message)
        }

    }












    const handleClickButton=()=>{
            setRemove(!remove);     
            if(!remove){
               addItem();
               // save to bd 
               getChosenHotels();
            }else{
               removeItem();
               // remove from bd 
               deleteChosenHotel();
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
