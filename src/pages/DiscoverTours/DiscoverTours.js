import React from 'react'
import NavBar from '../home/NavBar'
import HeadSection from '../../components/headerComp'
import Circuit from '../tours/circuit'
import Footer from '../../components/navigation/footer'
import headerTours from '../../assets/header-tours.jpeg'

function DiscoverTours() {
    return (
        <div>
        <NavBar/>
        <HeadSection style={{backgroundImage: `url(${headerTours})`}} title='Discover the amazing tours we provide !'/>
        <Circuit/>
        <Footer/>
        </div>
    )
}

export default DiscoverTours
