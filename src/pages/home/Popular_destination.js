import './popular_destinations.css'
import akshur from '../../assets/logos/akshur.jpg'
import medina2 from '../../assets/logos/medina2.jpg'
import Stehat_beatch from '../../assets/logos/Stehat_beatch.jpg'
import { FiMapPin } from "react-icons/fi";
import React from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';

function Popular_destination() {
  let circleClasses = "inline-block p-7 rounded-full w-20 mx-auto";
  let iconGreen = { color: "#0a4843", fontSize: "1.5em" };
  let iconBlue = { color: "#032d55", fontSize: "1.5em" };


    return (
      <MDBContainer breakpoint="xxl"> <div className="main_container">
        <h2 className="popular_destinations"> Popular Destinations in Chefchaouen</h2>
        <div className="pop_images">
          
          <div className="small_container2 ">
              <span className="icon2"> <FiMapPin style={iconGreen}/></span> 
              <h3 className="text2">Akshur </h3>
          </div> 
          <div className="small_container3">
            <span className="icon3"> <FiMapPin style={iconBlue}/></span> 
            <h3 className="text3">Beach </h3>
          </div> 
          <div className="small_container1 ">
            <span className="icon1"> <FiMapPin style={iconGreen}/></span> 
            <h3 className="text1">Medina</h3>
          </div>
          <figure><img className="img2" src={akshur} alt="akshur"/></figure>
          <figure><img className="img3" src={Stehat_beatch} alt="beach"/> </figure>
          <figure><img className="img1" src={medina2} alt="medina"/></figure> 
        </div>
       <div className="border1"></div>
       <div className="border2"></div>
       <div className="border3"></div>
      </div></MDBContainer>
     
      
   
    )
}

export default Popular_destination
