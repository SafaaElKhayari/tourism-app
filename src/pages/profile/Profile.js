import React from 'react'
import NavBar from '../home/NavBar'
import Footer from '../../components/navigation/footer'
import headerProfile from './headerProfile.css'
import HeaderProfile from './headerProfile'
import TabsProfile from './tabsProfile'
import HistoryProfile from './HistoryProfile'
import { useState } from 'react'
function Profile() {
    const [index,setIndex]=useState(0);
    const indexSetter=(ind)=>{
        setIndex(ind);
    }
    return (
        <div  >
            <NavBar/>
            <HeaderProfile/>
            <TabsProfile indexSetter={indexSetter}/>
            <HistoryProfile index={index}/>
            <Footer/>
        </div>
    )
}

export default Profile
