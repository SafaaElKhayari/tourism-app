import React from 'react'
import './header_home.css'
//import chaouen from '../../assets/logos/chaouen.jpeg'
import header1 from '../../assets/header1.jpg'
//import header2 from '../../assets/header2.jpg'
//import Doors from '../../assets/Doors.jpg'

import "bootstrap-css-only/css/bootstrap.min.css";
import { MDBContainer } from 'mdbreact';
import { Link } from 'react-router-dom';

function Header_home() {
    return (
        <div className="top_container">
                 <img className='header_pic' src={header1} alt="chefchaouen" /> 
                <MDBContainer className="container_header" breakpoint="xxl">
                    <h1 className='header_title'>Don’t believe <br/>What they say !<br/> Explore & see </h1>
                    <h3 className='header_text'>For those of you like me who have the flexibility to choose a vacation, you can choose the tour and discover the city of Chefchaouen </h3>
                    <Link to="/CustomTour"> <button type="button" className="create-tour btn">CREATE YOUR TOUR</button></Link>
                    <div className="d-inline-flex p-2">
                    <div className="underline_button"> </div>
                     <span className="or"> or</span>
                    <div className="underline_button2"></div>
                    </div>
                    
                    <Link to="/DiscoverTours"><button type="button" className="discover_tour btn btn-light"> DISCOVER OUR TOURS</button> </Link>
    
                </MDBContainer>
                
        </div>


           
    )
}



export default Header_home


