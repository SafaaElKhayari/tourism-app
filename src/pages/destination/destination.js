import React, { Component } from 'react'
import Places from '../../components/places'
import Footer from "../../components/navigation/footer"
import "../../styles/headerComp.css"
import HeadSection from '../../components/headerComp'
import NavBar from '../home/NavBar'
import Circuit from '../tours/circuit'
import destinationsHeadImg from "../../assets/headImage.png"
import  Map  from '../../Map'
import MapHere from '../customTour/MapHere'


export default function destination({isAuthenticated,setUnderlineFunction,underline}) {
    return (
        <div>
        <NavBar isAuthenticated={isAuthenticated} setUnderlineFunction={setUnderlineFunction} underline={underline}/>
        {/* <Circuit/> */}
        {/* <HeadSection style={{backgroundImage: `url(${destinationsHeadImg})`}} title='We provide Chefchaouen Top Destinations for you !'/>
        <Places card_mode={false}/> */}
        <div className="map-test"><MapHere/></div>
         <Footer/>
        </div>
    )
}

