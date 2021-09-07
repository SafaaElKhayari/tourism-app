import React, { Component } from 'react'
import Footer from '../../components/navigation/footer'
import NavBar from '../home/NavBar'
import StepperComponent from './stepper'
import './customTour.css'
import RestaurantsComponent from './restaurants'
import AddRestaurant from './steps/AddRestaurant'
import ChooseRestaurant from './steps/ChooseRestaurant'
import HotelsComponent from './hotels'




export default class CustomTour extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <StepperComponent/>
                <Footer/>
            </div>
        )
    }
}
