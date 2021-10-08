import React from 'react'
import NavBar from '../home/NavBar'
import Footer from '../../components/navigation/footer'
import headerProfile from './headerProfile.css'
import HeaderProfile from './headerProfile'
import TabsProfile from './tabsProfile'
import HistoryProfile from './HistoryProfile'
import { useState } from 'react'
function Profile({isAuthenticated,profile,setAuth}) {
    const [index,setIndex]=useState(0);
    const indexSetter=(ind)=>{
        setIndex(ind);
    }





    
    return (
        <div>
            <NavBar setAuth={setAuth} isAuthenticated={isAuthenticated} profile={profile} />
            <HeaderProfile/>
            <TabsProfile indexSetter={indexSetter}/>
            <HistoryProfile index={index}/>
            <Footer/>
        </div>
    )
}

export default Profile
