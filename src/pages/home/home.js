import React, { Component } from 'react'
import DescriptionSection from './descriptionSection'
import Footer from '../../components/navigation/footer'
import UpcomingTrips from './upcomingTrips'

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
}
