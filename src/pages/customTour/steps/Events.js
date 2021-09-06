
import React, { Component } from 'react'
import { Container,Row,Col} from 'react-bootstrap'
import "bootstrap-css-only/css/bootstrap.min.css"
import image from "../../../assets/event.jpg"
import EventCard from '../eventCard'

export default class AddEvents extends Component {
    render() {
        return (
            <div>
                <h3 className="question">{this.props.title}</h3>
                <h5 className="subquestion">{this.props.subtitle}</h5>
                <Container fluid className="events">
                    <Row xs={1} md={3} className="g-5 event-cards">
                        {Array.from({ length: 6}).map((_, idx) => (
                        <Col sm className="event-cards__item ">
                            <EventCard 
                                imgUrl={image} 
                                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
                                deleniti dicta officia temporibus magni! Sint soluta excepturi
                                suscipit alias ut!"/>
                        </Col>
                        )
                        )
                        }
                    </Row>
                </Container>
                    
            
        </div>
        )
    }
}
// xs={4} md={2} className="g-4"