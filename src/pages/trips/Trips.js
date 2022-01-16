import React from 'react'
import NavBar from '../home/NavBar'
import Footer from '../../components/navigation/footer'
import '../../styles/Trips_header.css'
//import TripsHeader from './TripsComponent'
import HeadSection from '../../components/headerComp'
import tripsHeadImage from "../../assets/headImage2.jpg"
import TripsComponent from './TripsComponent'

function Trips({isAuthenticated,setUnderlineFunction,underline}) {
    return (
        <div>
        <NavBar isAuthenticated={isAuthenticated} setUnderlineFunction={setUnderlineFunction} underline={underline}/>
        <HeadSection style={{backgroundImage: `url(${tripsHeadImage})`}} title="Exclusive trips chosen just for you" />
        <TripsComponent/>
        <Footer/>
        </div>
    )
}
export default Trips;
