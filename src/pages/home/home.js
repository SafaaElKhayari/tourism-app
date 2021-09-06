import React from 'react'
import NavBar from './NavBar'
import Header_home from './Header_home'
import Popular_destination from './Popular_destination'
import DescriptionSection from './descriptionSection'
import Footer from '../../components/navigation/footer'
import UpcomingTrips from './upcomingTrips'
import "../../styles/home.css"

function home() {
    return (
        <div>
            <NavBar scro={false}/>
            <Header_home/>
            <DescriptionSection/>
            <Popular_destination/>
            <UpcomingTrips/>
            <Footer/>

        </div>
    )
    }

    export default home;
