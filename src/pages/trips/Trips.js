import React from 'react'
import NavBar from '../home/NavBar'
import Footer from '../../components/navigation/footer'
import '../../styles/Trips_header.css'
import Trips_header from './Trips_header'
import HeadSection from '../../components/headerComp'
import tripsHeadImage from "../../assets/headImage2.jpg"

function Trips() {
    return (
        <div>
        <NavBar/>
        <HeadSection style={{backgroundImage: `url(${tripsHeadImage})`}} title="Exclusive trips chosen just for you" />
        <Trips_header/>
        <Footer/>
        </div>
    )
}

export default Trips;
