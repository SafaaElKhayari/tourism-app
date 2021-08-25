
import React, { Component } from 'react'
import DescriptionSection from './descriptionSection'
import Footer from '../../components/navigation/footer'
import UpcomingTrips from './upcomingTrips'
import "../../styles/home.css"
import NavBar from './NavBar'
import Header_home from './Header_home'
import Popular_destination from './Popular_destination'

function home() {
    return (
        <div>
             <NavBar />
             <Header_home/>
             <Popular_destination/>
             <DescriptionSection/>
             <UpcomingTrips/>
                <Footer/>
        </div>
    )

}
