import React, { Component } from 'react'
import Footer from '../../components/navigation/footer'
import NavBar from '../home/NavBar'
import StepperComponent from './stepper'
import './customTour.css'
/* import headerTours from "../../assets/header-tours.jpeg"
import HeadSection from '../../components/headerComp'
import RestaurantsComponent from './restaurants'
import AddRestaurant from './steps/AddRestaurant'
import ChooseRestaurant from './steps/ChooseRestaurant'
import HotelsComponent from './hotels' */



export default function customTour({isAuthenticated,underline,setUnderlineFunction}) {
    return (
        <div>
        <NavBar isAuthenticated={isAuthenticated} underline={underline} setUnderlineFunction={setUnderlineFunction} />
        <StepperComponent/>
        <Footer/>
    </div>
    )
}
