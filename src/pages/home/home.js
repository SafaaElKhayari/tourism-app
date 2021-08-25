<<<<<<< HEAD
import React from 'react'
import NavBar from './NavBar'
import Header_home from './Header_home'
import Popular_destination from './Popular_destination'

function home() {
    return (
        <div>
            <NavBar />
            <Header_home/>
             <Popular_destination/>

        </div>
    )
=======
import React, { Component } from 'react'
import DescriptionSection from './descriptionSection'
import Footer from '../../components/navigation/footer'
import UpcomingTrips from './upcomingTrips'
import "../../styles/home.css"

export default class Home extends Component {
    render() {
        return (
            <div>
                <DescriptionSection/>
                <UpcomingTrips/>
                <Footer/> 
            </div>
        )
    }
>>>>>>> 1c6ef9b276930b2bc8a6b48346d037653755d12b
}
