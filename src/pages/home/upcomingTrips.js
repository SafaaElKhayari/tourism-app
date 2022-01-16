import React from 'react';
import { useState ,useEffect} from 'react';
import {Button,Row,Col, Container} from 'react-bootstrap';
import "bootstrap-css-only/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import moment from 'moment';

const UpcomingTrips =()=>{  
    const [trips, setTrips] = useState([]);
    const getTrips = async() =>{
        try {
            
            const response = await fetch ("http://localhost:8000/trips");
            const jsonData = await response.json();
            setTrips(jsonData);

        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(()=>{
        getTrips();
    },[]);

    const handleCategory=(category)=>{
        let categorySection; 
        if(category === "Natural"){
           categorySection= <div className="category" style={{ backgroundColor: "#044026" }}><i className="fab fa-pagelines mr-2"></i>{category}</div>

        }else if (category === "Cultural"){
            categorySection= <div className="category" style={{ backgroundColor: "#603511" }}><i className="fas fa-landmark mr-2"></i>{category}</div>
        }
        else if (category === "Beach"){
            categorySection = <div className="category" style={{ backgroundColor: "#0349a3" }}><i className="fas fa-swimmer mr-2"></i>{category}</div>
        }
        return categorySection
    }



    const setImg=(img)=>{
        const b64 = new Buffer(img).toString('base64')
        return b64;}

    const mimeType = 'image/jpg'

    return (
        
    <Container className="container trips">
         {/* {console.log(getFirstElts(trips))} */}

        <Row> 
            <Col sm>
            {trips.slice(0,1).map((trip)=>(
                <div className="post-module">
                <div className="thumbnail">
                <div className="d-flex flex-column date pl-1 pr-1" style={{backgroundColor: "#044026"}}>
                    <div className="day text-center">{(new Date(trip.date)).getUTCDate()}</div>
                    <div className="month text-center">{moment(new Date(trip.date)).format("MMM")}</div>
                </div>
                    <img src={`data:${mimeType};base64,${setImg(trip.image)}`} alt="tripImg"/>
                </div>
            <div className="post-content">
                {handleCategory(trip.category)}
                <h1 className="title">{trip.name}</h1>
                <div className="joinBtn text-center">
                    <Button variant="dark">Join Now</Button>{' '}
                </div>
                <div className="post-meta float-right">
                    <small className="text-muted">
                        <span className="timestamp"><i className="far fa-clock"></i> {trip.duration} hours </span>
                    </small>
                </div>
            </div>
            </div>)) 
            }            
            </Col>
            <Col sm>
            {trips.slice(4,5).map((trip)=>(
                <div className="post-module">
                <div className="thumbnail">
                <div className="d-flex flex-column date pl-1 pr-1" style={{ backgroundColor: "#603511" }}>
                    <div className="day text-center">{(new Date(trip.date)).getUTCDate()}</div>
                    <div className="month text-center">{moment(new Date(trip.date)).format("MMM")}</div>
                </div>
                    <img src={`data:${mimeType};base64,${setImg(trip.image)}`} alt="tripImg"/>
                </div>
            <div className="post-content">
            {handleCategory(trip.category)}
                <h1 className="title">{trip.name}</h1>
                <div className="joinBtn text-center">
                    <Button variant="dark">Join Now</Button>{' '}
                </div>
                <div className="post-meta float-right">
                    <small className="text-muted">
                        <span className="timestamp"><i className="far fa-clock"></i> {trip.duration} hours </span>
                    </small>
                </div>
            </div>
            </div>))
            }      
            </Col>
            <Col sm>
            {trips.slice(3,4).map((trip)=>(
                <div className="post-module">
                <div className="thumbnail">
                <div className="d-flex flex-column date pl-1 pr-1" style={{backgroundColor: "#044026"}}>
                    <div className="day text-center">{(new Date(trip.date)).getUTCDate()}</div>
                    <div className="month text-center">{moment(new Date(trip.date)).format("MMM")}</div>
                    </div>
                    <img src={`data:${mimeType};base64,${setImg(trip.image)}`} alt="tripImg"/>
                </div>
            <div className="post-content">
            {handleCategory(trip.category)}
                <h1 className="title">{trip.name}</h1>
                <div className="joinBtn text-center">
                    <Button variant="dark">Join Now</Button>{' '}
                </div>
                <div className="post-meta float-right">
                    <small className="text-muted">
                        <span className="timestamp"><i className="far fa-clock"></i> {trip.duration} hours </span>
                    </small>
                </div>
            </div>
            </div>))
            }        
            </Col>
            

            
        </Row>
            


       
    </Container>
    )
}

export default UpcomingTrips;