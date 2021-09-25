import React from 'react'
import { Container,Row,Col} from 'react-bootstrap'
import "bootstrap-css-only/css/bootstrap.min.css"
import image from "../../../assets/event.jpg"
import EventCard from '../eventCard'
import { useState } from 'react';
import Modal from '../Toasts/ToastEvent.jsx';


function AddEvents(props) {
    const [showToast,setShowToast]= useState(false);
    const [counter,setCounter] = useState(0);
    const [closeAlert,setCloseAlert] = useState(false);

    const addItem=()=>{
        setCloseAlert(true);
        setCounter((preValue)=>{
            return preValue +1 ;})
    }
    const removeItem=()=>{
        setCounter((preValue)=>{
            return preValue -1;
        })
    }
    const showModal=()=>{
        setShowToast(!showToast);
    }
    return (
        <div>
            <h3 className="question">{props.title}</h3>
            <h5 className="subquestion">{props.subtitle}</h5>
            {closeAlert && 
            <div className="alert alert-primary alert-dismissible alert-color" role="alert" id="liveAlert">
            <strong>Interesting!</strong> {counter} event(s) added to your trip.
            <button type="button" onClick={()=>{setCloseAlert(false)}} className="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
          </div> }
            <Container fluid className="events">
                {showToast && <Modal showModal={showModal}/>}
                <Row xs={1} md={3} className="g-5 event-cards">
                    {Array.from({ length: 6}).map((_, idx) => (
                    <Col sm className="event-cards__item ">
                        <EventCard 
                            imgUrl={image} 
                            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
                            deleniti dicta officia temporibus magni! Sint soluta excepturi
                            suscipit alias ut!"
                            addItem={addItem} 
                            removeItem={removeItem}
                            counter={counter}
                            key={idx}
                            idx={idx}
                            showModal={showModal}
                            
                            />
                    </Col>
                        )
                        )
                        }
                </Row>
            </Container>
        </div>
    )
}

export default AddEvents
