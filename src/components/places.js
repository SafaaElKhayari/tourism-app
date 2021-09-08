import React from 'react'
import { Container, Nav, Row,Col} from 'react-bootstrap'
import "mdbreact";
import "../styles/places.css"
import "./rating";
import { useState } from 'react';
import CardComp from './CardComp';
import Modal from '../pages/customTour/Toasts/ToastPlaces.jsx';

function Places({card_mode}) {
    const [showToast,setShowToast]= useState(false);
    const [counter,setCounter]=useState(0);
    const [closeAlert,setCloseAlert] = useState(false);
   

    const addItem=()=>{
        setCloseAlert(true);
        setCounter((preValue)=>{
            return preValue +1;
        })
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
       <div className="py-4" >

         <Container>
            <Row className="categories-menu">
                <Col>
                    <Nav className="justify-content-center" activeKey="/all">
                        <Nav.Item  bsPrefix={"link"}>
                            <Nav.Link eventKey="/all">All</Nav.Link>
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
    
            {closeAlert && <div class="alert alert-primary alert-dismissible alert-color" role="alert" id="liveAlert">
            <strong>Amazing!  </strong>you are about to discover  {counter} places in chefchaouen .
            <button type="button" onClick={()=>{setCloseAlert(false)}} class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
          </div> }
          {showToast && <Modal showModal={showModal}/>}
            <Row md={4} className="pt-2">   
                {Array.from({ length: 16 }).map((_, idx) => (
                
               <CardComp  key={idx} idx={idx} card_mode={card_mode} addItem={addItem} removeItem={removeItem} counter={counter} showModal={showModal}/>
))}
            </Row>
        </Container> 


        </div>
    )
}

export default Places

