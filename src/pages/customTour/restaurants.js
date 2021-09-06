import React, { Component } from 'react'
import { Container, Nav, Row,Col,Card} from 'react-bootstrap';
import "bootstrap-css-only/css/bootstrap.min.css"
import "mdbreact";
import image from "../../assets/restaurant.jpeg"
import "@fortawesome/fontawesome-free/css/all.min.css";
import StarRating from '../../components/rating';
import {DollarCircleOutlined} from '@ant-design/icons'


export default class RestaurantsComponent extends Component {
    render() {
        return (
           
            <Container fluid>
                <Row className="pt-2">
                    {Array.from({ length: 9 }).map((_, idx) => (
                    <Col  md={3} key={idx} sm className="restaurant-card">
                        <Card>
                            <Card.Img variant="top" src={image}/>
                            <Card.Body>
                                <Card.Title bsPrefix={'restaurant-name'}>Casa Aladdin Restaurant <StarRating className="rating-comp"/></Card.Title>
                                <Card.Text bsPrefix={'restaurant-description'}>Cuisine marocaine, méditerranéenne, Végétariens bienvenus, Choix végétaliens, Halal, Plats sans gluten
                                    <div className="restaurant-price-range justify-content-start text-muted">
                                        <DollarCircleOutlined style={{ fontSize: '12px', color: '#545454' }}/>
                                        <span>20 MAD - 40 MAD</span>
                                    </div>
                                </Card.Text>
                                 <button type="button" className="add-btn btn btn-rounded">Add</button>


                            </Card.Body>  
                           

                                                   
                        </Card>
                    </Col>
                    )
                    )
                    }
                </Row>
            </Container>

        )
    }
}
