import React,{ useState,useEffect} from 'react';
import { Container, Nav, Row,Col,Card} from 'react-bootstrap'
import {FaCheckCircle, FaSpinner} from "react-icons/fa"
import "mdbreact";
import { Spinner } from 'react-bootstrap';



import "../styles/places.css"
import "./rating";
import CardComp from './CardComp';
import Modal from '../pages/customTour/Toasts/ToastPlaces.jsx';
import StarRating from './rating';



export default function Places({card_mode},props) {
    const [places, setPlaces] = useState([]);
    const [showToast,setShowToast]= useState(false);
    const [counter,setCounter]=useState(0);
    const [closeAlert,setCloseAlert] = useState(false);
    const [isLoading, setisLoading] = useState(true);
    const choose_mode=card_mode;

    const addItem=()=>{
        setCloseAlert(true);
        setCounter((preValue)=>{return preValue +1;})
    }
    const removeItem=()=>{
        setCounter((preValue)=>{return preValue -1;})
    }
    const showModal=()=>{
        setShowToast(!showToast); }

    const getPlaces = async() =>{
        try {
            const response = await fetch ("http://localhost:5000/places");
            const jsonData = await response.json();
            setPlaces(jsonData);
            setisLoading(false)
            // setPlaces(shuffle(places))
        } catch (error) {console.error(error.message);}
    }

    // const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);
    

    useEffect(()=>{
        getPlaces();   
    },[]);
    
    
    return (
        <div className="py-4" data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="100">
         <Container id="scrollspyHeading1"  > 
            <Row className="categories-menu" >
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
          {showToast && <Modal showModal={showModal} />}
          <div>
</div>                              
                {(isLoading && <div><h3 className="pt-5 loading-text">Fetching magic for you ... </h3>  <Spinner animation="border" variant="success" size="xxl" /></div>)}
                {!isLoading &&
                <Row md={4} className="pt-2">
                        {places.map(place =>(
                            <CardComp place={place} key={place.id} idx={place.id} card_mode={card_mode} addItem={addItem} removeItem={removeItem} counter={counter} showModal={showModal}  /> 
            
                        ))}
                </Row>
                }
        {/* {                places.filter(place => place.category=="Natural").map(filteredPlace => (
                            <CardComp place={filteredPlace} key={filteredPlace.id} idx={filteredPlace.id} card_mode={card_mode} addItem={addItem} removeItem={removeItem} counter={counter} showModal={showModal} />
        ))} */}
                    
                    

        </Container> 

    </div>
    )}



//                     places.filter(place => place.category =="Beach").map(filteredPlace => (
//                     <CardComp place={filteredPlace} key={filteredPlace.id} idx={filteredPlace.id} card_mode={card_mode} addItem={addItem} removeItem={removeItem} counter={counter} showModal={showModal} />
// ))

