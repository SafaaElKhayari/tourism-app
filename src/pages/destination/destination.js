import React, { Component } from 'react'
import Places from '../../components/places'
import Footer from "../../components/navigation/footer"
import "../../styles/headerComp.css"
import HeadSection from '../../components/headerComp'
import NavBar from '../home/NavBar'
import Circuit from '../tours/circuit'
import destinationsHeadImg from "../../assets/headImage.png"

export default class DestinationsPage extends Component {
    render() {
        return (
            <div>   
                    <NavBar/>
                    {/* <Circuit/> */}
                    <HeadSection style={{backgroundImage: `url(${destinationsHeadImg})`}} title='We provide Chefchaouen Top Destinations for you !'/>
                    <Places card_mode={false}/>
                     <Footer/>
                
            </div>
        )
    }
}
