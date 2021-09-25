import React from 'react'

import CardStars from './cardStars'
import CardFollow from './cardFollow';

import { Container,Row,Col} from 'react-bootstrap';

import { FaPlaceOfWorship } from "react-icons/fa";
import { MdRestaurantMenu } from "react-icons/md";
import { BiHotel } from "react-icons/bi";
import { FaMapSigns} from "react-icons/fa";

import medina from '../../assets/medina.jpg'
import restaurant from '../../assets/restaurant.jpeg'
import hotel from '../../assets/hotel.jpeg'





function HistoryProfile({index}) {
    
    return (
        <div class="card text-white history-profile">
        
        {index==0 && <h2 className="title-history"><FaPlaceOfWorship color='#0a4843' size={50}/> <span></span> You discovered the beauty of these places</h2>}
        {index== 1 && <h2 className="title-history"><FaMapSigns color='#0a4843' size={50}/> <span></span>  You are interested in these trips</h2>
        }
        {index==2 && <h2 className="title-history"><MdRestaurantMenu color='#0a4843' size={50}/> <span></span>  You enjoyed the delicious dishes at these spots</h2> }
        {index==3 && <h2 className="title-history"><BiHotel color='#0a4843' size={50}/><span></span>   You checked-in in these hotels</h2> }
            
        
        
        
        
        
       
            
        
             <Container fluid>
             
                <Row md={4} className="pt-2">
                     {index==0 &&
                         
                        Array.from({ length: 4 }).map((_, idx) => (
                         <Col className="cont-card">
                            <CardStars picture={medina} key={idx}/>
                         </Col>
                             
                        ))
                    
                    }
                    {index==1 &&
                         
                        Array.from({ length: 4 }).map((_, idx) => (
                         <Col className="cont-card">
                            <CardFollow key={idx}/>
                         </Col>
                             
                        ))
                    
                    }
                    {index==2 &&
                         
                        Array.from({ length: 4 }).map((_, idx) => (
                         <Col className="cont-card">
                         <CardStars picture={restaurant} key={idx}/>
                         </Col>
                             
                        ))
                    
                    }
                    {index==3 &&
                         
                        Array.from({ length: 4 }).map((_, idx) => (
                         <Col className="cont-card">
                         <CardStars picture={hotel} key={idx}/>
                         </Col>
                             
                        ))
                    
                    }
                </Row>
            </Container>
        
        </div>

        
    )
}

export default HistoryProfile
