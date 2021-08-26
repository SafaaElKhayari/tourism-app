import React from 'react'
import NavBar from '../home/NavBar'
import Footer from '../../components/navigation/footer'
import HeadTrip from './headTrip'
import '../../styles/Trips_header.css'
import Trips_header from './Trips_header'

function Trips() {
    return (
        <div>
        <NavBar/>
        <HeadTrip/>
        <Trips_header/>
        <Footer/>
        </div>
    )
}

export default Trips;
