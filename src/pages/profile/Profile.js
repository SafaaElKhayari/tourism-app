import React from 'react'
import NavBar from '../home/NavBar'
import Footer from '../../components/navigation/footer'
import headerProfile from './headerProfile.css'
import HeaderProfile from './headerProfile'
import TabsProfile from './tabsProfile'
import HistoryProfile from './HistoryProfile'
import { useState } from 'react'
function Profile({isAuthenticated,profile,setAuth,setUnderlineFunction,underline}) {
    const [index,setIndex]=useState(0);
    const indexSetter=(ind)=>{
        setIndex(ind);
    }





    
    return (
        <div>
            <NavBar setAuth={setAuth} isAuthenticated={isAuthenticated} profile={profile} setUnderlineFunction={setUnderlineFunction} underline={underline}/>
            <HeaderProfile/>
            <TabsProfile indexSetter={indexSetter}/>
            <HistoryProfile index={index}/>
            <Footer/>
        </div>
    )
}

export default Profile
