import React from 'react'
import './header_home.css'
import chaouen from '../../assets/logos/chaouen.jpeg'
import "bootstrap-css-only/css/bootstrap.min.css";

function Header_home() {
    return (
        <div>
                <img className='header_pic' src={chaouen} alt="chefchaouen" /> 
                <h1 className='header_title'>Don’t believe <br/>What they say !<br/> Explore & see </h1>
                <h3 className='header_text'>For those of you like me who have the flexibility to choose a vacation, you can choose the tour and discover the city of Chefchaouen </h3>
                <button type="button" className="create-tour btn">CREATE YOUR TOUR</button>
                <div className="underline_button"> </div>
                <span className="or"> or</span>
                <div className="underline_button2"></div>
                <button type="button" className="discover_tour btn btn-light">DISCOVER OUR TOURS</button>
        </div>

           
    )
}



export default Header_home


