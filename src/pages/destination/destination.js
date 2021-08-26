import React, { Component } from 'react'
import Places from '../../components/places'
import Footer from "../../components/navigation/footer"
import "./destinations.css"
import HeadSection from './header_destinations'
import NavBar from '../home/NavBar'

export default class DestinationsPage extends Component {
    render() {
        return (
            <div>   
                    <NavBar/>
                    <HeadSection/>
                    <Places/> 
                     <Footer/>
                
            </div>
        )
    }
}
