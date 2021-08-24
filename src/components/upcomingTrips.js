import React from 'react';
import '../styles/upcomingtrips.css';
import {Button,Row,Col, Container} from 'react-bootstrap';
import "bootstrap-css-only/css/bootstrap.min.css";
import tripPicture from "../images/tripImage.jpeg";
import "@fortawesome/fontawesome-free/css/all.min.css";


const UpcomingTrips =()=>{  
    return (
    <Container className="container trips">
        <Row>
            <Col sm>
                <div class="post-module">
                <div class="thumbnail">
                    <div class="date">
                        <div class="day">27</div>
                        <div class="month">Mar</div>
                    </div>
                    <img src={tripPicture} alt="tripImg"/>
                </div>
            <div class="post-content">
                <div class="category"><i class="fab fa-pagelines"></i> Natural</div>
                <h1 class="title">Full day trip to the gods bridge and waterfalls</h1>
                <div class="joinBtn text-center">
                    <Button variant="dark">Join Now</Button>{' '}
                </div>
                <div class="post-meta float-right">
                    <small class="text-muted">
                        <span class="timestamp"><i class="far fa-clock"></i> 8 hours </span>
                    </small>
                </div>
            </div>
            </div>
            </Col>
            <Col sm>
                <div class="post-module">
                <div class="thumbnail">
                    <div class="date">
                        <div class="day">27</div>
                        <div class="month">Mar</div>
                    </div>
                    <img src={tripPicture} alt="tripImg"/>
                </div>
            <div class="post-content">
                <div class="category"><i class="fab fa-pagelines"></i> Natural</div>
                <h1 class="title">Full day trip to the gods bridge and waterfalls</h1>
                <div class="joinBtn text-center">
                    <Button variant="dark">Join Now</Button>{' '}
                </div>
                <div class="post-meta float-right">
                    <small class="text-muted">
                        <span class="timestamp"><i class="far fa-clock"></i> 8 hours </span>
                    </small>
                </div>
            </div>
            </div>
            </Col>
            <Col sm>
                <div class="post-module">
                <div class="thumbnail">
                    <div class="date">
                        <div class="day">27</div>
                        <div class="month">Mar</div>
                    </div>
                    <img src={tripPicture} alt="tripImg"/>
                </div>
            <div class="post-content">
                <div class="category"><i class="fab fa-pagelines"></i> Natural</div>
                <h1 class="title">Full day trip to the gods bridge and waterfalls</h1>
                <div class="joinBtn text-center">
                    <Button variant="dark">Join Now</Button>{' '}
                </div>
                <div class="post-meta float-right">
                    <small class="text-muted">
                        <span class="timestamp"><i class="far fa-clock"></i> 8 hours </span>
                    </small>
                </div>
            </div>
            </div>
            </Col>

            
        </Row>
            


       
    </Container>
    )
}

export default UpcomingTrips;