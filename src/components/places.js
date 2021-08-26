import React, { Component } from 'react'
import { Container, Nav, Row,Col,Card} from 'react-bootstrap';
import "bootstrap-css-only/css/bootstrap.min.css"
import "mdbreact";
import placesImage from "../assets/places_img.jpeg"
import "../styles/places.css"
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./rating";
import StarRating from './rating';


export default class Places extends Component {
    render() {
        return (
            <div className="py-4" >
                
            <Container>
                <Row className="categories-menu">
                    <Col>
                        <Nav className="justify-content-center" defaultActiveKey="/all">
                            <Nav.Item  bsPrefix={"link"} >
                                <Nav.Link href="/all">All</Nav.Link>
                            </Nav.Item >
                            <Nav.Item  bsPrefix={"link"} >
                                <Nav.Link eventKey="natural">Natural</Nav.Link>
                            </Nav.Item  >
                            <Nav.Item bsPrefix={"link"}>
                                <Nav.Link  eventKey="cutural">Cultural</Nav.Link>
                            </Nav.Item >
                            <Nav.Item bsPrefix={"link"}>
                                <Nav.Link  eventKey="beach">Beach</Nav.Link>
                            </Nav.Item >
                        </Nav>
                    </Col>
                </Row>
                <Row md={4} className="pt-2">
                    {Array.from({ length: 16 }).map((_, idx) => (
                    <Col className="place-card">
                        <Card>
                            <Card.Img variant="top" src={placesImage}/>
                            <Card.Body>
                                <Card.Subtitle bsPrefix={"place-category"}>
                                    <i class="fas fa-university"></i> Culture 
                                    <div className="rating-comp"><StarRating/></div>
                                </Card.Subtitle>
                                <Card.Title bsPrefix={'place-name'}>Medina</Card.Title>
                                <Card.Text bsPrefix={'place-description'}>If you are looking for unique souvenirs from Morocco, you will certainly find them in Chefchaouen's medina, where the streets are ....</Card.Text>
                            </Card.Body>
                        </Card>
                        <button type="button" className="see-more-btn btn btn-rounded">See more</button>
                    </Col>

    ))}
                </Row>
            </Container>
            </div>
           
        )
    }
}
