import React,{ useState,useEffect } from 'react'
import { Container, Nav, Row,Col,Card} from 'react-bootstrap';
import "bootstrap-css-only/css/bootstrap.min.css"
import"mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import StarRating from '../../components/rating';
import RestauCard from './restau_card';
import { Spinner } from 'react-bootstrap';



function RestaurantsComponent() {
    const [counter,setCounter] = useState(0);
    const [closeAlert,setCloseAlert] = useState(false);
    const [restos, setrestos] = useState([])
    const [isLoading, setisLoading] = useState(true);

    const getRestaus = async() =>{
        try {
            const response = await fetch ("http://localhost:8000/customTour/chooseARestaurant/");
            const jsonData = await response.json();
            setrestos(jsonData);
            setisLoading(false)
            // setPlaces(shuffle(places))

        } catch (error) {
            console.error(error.message);
        }
    }

    //console.log(restos)
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

    useEffect(()=>{
        getRestaus();   
    },[]);
           
           
    return (
        <div>
             <Container fluid>
             {closeAlert && <div className="alert alert-primary alert-dismissible alert-color" role="alert" id="liveAlert">
            <strong>Yaayyy !</strong>  You have added {counter} restaurants to your tour. We hope you enjoy the dishes .
            <button type="button" onClick={()=>{setCloseAlert(false)}} className="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
          </div> }
          {(isLoading && <div><h3 className="pt-5 loading-text">Fetching magic for you ... </h3>  <Spinner animation="border" variant="success" size="xxl" /></div>)}
                {!isLoading &&
                    <Row className="pt-2">
                    {restos.map(resto =>(
                         <RestauCard restaurant={resto} key={resto.id} idx={resto.id} addItem={addItem} removeItem={removeItem} counter={counter} />

                    ))}
                    
                </Row>
                }
                
            </Container>
        </div>
    )
}

export default RestaurantsComponent
