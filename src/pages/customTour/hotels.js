import React, { Component } from 'react'
import { Container, Nav, Row,Col,Card} from 'react-bootstrap';
import "bootstrap-css-only/css/bootstrap.min.css"
import "mdbreact";
import image from "../../assets/hotel.jpeg"
import "@fortawesome/fontawesome-free/css/all.min.css";
import StarRating from '../../components/rating';
import {DollarCircleOutlined} from '@ant-design/icons'


export default class HotelsComponent extends Component {
    render() {
        return (
            <Container fluid>
                <Row  className="pt-2">
                    {Array.from({ length: 8 }).map((_, idx) => (
                    <Col md={3}sm className="hotel-card" key={idx}>
                        <Card>
                            <Card.Img variant="top" src={image}/>
                            <Card.Body>
                                <Card.Title bsPrefix={'hotel-name'}>the hermitage of akchour<StarRating className="rating-comp"/></Card.Title>
                                <Card.Text bsPrefix={'hotel-description'}>The hotel has a roof terrace. In addition, Casa Sabila has a free breakfast, providing a pleasant place to rest after a busy day.</Card.Text>
                                <div className="hotel-price-range justify-content-start text-muted">
                                    <DollarCircleOutlined style={{ fontSize: '12px', color: '#545454' }}/>
                                    <span>523 MAD</span>
                                </div>
                            </Card.Body>
                        </Card>
                        <button type="button" className="add-btn btn btn-rounded">Add</button>
                    </Col>
                    ))}
                </Row>
            </Container>

        )
    }
}
