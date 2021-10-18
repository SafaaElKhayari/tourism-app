import React,{ useState,useEffect }  from 'react'
import { Container,Row,Col,Spinner} from 'react-bootstrap'
import EventCard from '../eventCard'
import Modal from '../Toasts/ToastEvent.jsx';


function AddEvents(props) {
    const [showToast,setShowToast]= useState(false);
    const [counter,setCounter] = useState(0);
    const [closeAlert,setCloseAlert] = useState(false);
    const [events, setevents] = useState([]);
    const [isLoading, setisLoading] = useState(true);


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
    const getEvents = async() =>{
        try {
            const response = await fetch ("http://localhost:5000/customTour/chooseAnEvent");
            const jsonData = await response.json();
            setevents(jsonData);
            setisLoading(false);

        } catch (error) {
            console.error(error.message);
        }
    }
    

    useEffect(()=>{
        getEvents();   
    },[]);
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
                {(isLoading && <div><h3 className="pt-5 loading-text">Fetching magic for you ... </h3>  <Spinner animation="border" variant="success" size="xxl" /></div>)}
                {!isLoading &&
                    <Row xs={1} md={3} className="g-5 event-cards">
                        {events.map(event => (
                        <Col sm className="event-cards__item ">
                            <EventCard 
                                event = {event}
                                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
                                deleniti dicta officia temporibus magni! Sint soluta excepturi
                                suscipit alias ut!"
                                addItem={addItem} 
                                removeItem={removeItem}
                                counter={counter}
                                key={event.id}
                                idx={event.id}
                                showModal={showModal}
                                
                                />
                        </Col>
                            )
                            )
                            }
                    </Row>
                }
                
            </Container>
        </div>
    )
}

export default AddEvents
