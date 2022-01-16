import React,{ useState ,useContext} from 'react'
import {Col,Card} from 'react-bootstrap';
import {DollarCircleOutlined} from '@ant-design/icons'
import {FaCheckCircle} from "react-icons/fa"
import"mdbreact";
import StarRating from '../../components/rating';
import UserContext from '../../Context/user';



function RestauCard({addItem,removeItem,counter,idx,restaurant}) {

    const [remove,setRemove]= useState(false);
    const iconStyles={ color: "white", fontSize: "1.5em" };
    

// 1 get user id 

    const {user} = useContext(UserContext) ;
    const userId = user.id ;
    const {id}=restaurant

// 2 + add selected places id and user id to bd 

    const getChosenRestaurants = async ()=>{
        try{
            
            
            
            const body={id,userId}
            console.log(body)
            const res =await fetch("http://localhost:8000/customTour/chooseARestaurant/addRestaurant",{
                method:"POST",
                headers:{ "Content-Type": "application/json" ,
                'Accept': 'application/json'},
                body:JSON.stringify(body)
            })
            const parseRes = await res.json();
            console.log(parseRes)
        }catch(err){
            console.error(err.message)
        }

    }


// 3 + remove selected places id and user id from bd 

    const deleteChosenRestaurants = async ()=>{
        try{
            
            const res =await fetch("http://localhost:8000/customTour/chooseARestaurant/removeRestaurant",{
                method:"POST",
                headers:{ "Content-Type": "application/json" ,
                'Accept': 'application/json'},
                body:JSON.stringify({id})
            })
            const parseRes = await res.json();
            console.log(parseRes)




        }catch(err){
            console.error(err.message)
        }

    }


 












    const handleClickButton=()=>{
            setRemove(!remove);     
            if(!remove){
               addItem()
 // Save in BD
            getChosenRestaurants();
            }else{

               removeItem()
               // Remove from BD
               deleteChosenRestaurants()
            }
        }

        const buffer = restaurant.image;
        const b64 = new Buffer(buffer).toString('base64')
        const mimeType = 'image/jpg'

    return (
        <Col  md={4} key={idx} sm className="restaurant-card">
            {remove && <FaCheckCircle style={iconStyles} className="btn-rounded counter" /> }    
            <Card className={`${remove?"bor":null}`}>
                <Card.Img variant="top" src={`data:${mimeType};base64,${b64}`} style={{height: '200px'}} />
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
