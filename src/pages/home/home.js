import React, { Component } from 'react'
import DescriptionSection from '../../components/descriptionSection'
import Footer from '../../components/navigation/footer'
import UpcomingTrips from '../../components/upcomingTrips'

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
