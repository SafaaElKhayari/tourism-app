import React from 'react'
import NavBar from '../home/NavBar'
import Footer from '../../components/navigation/footer'
import headerProfile from './headerProfile.css'
import HeaderProfile from './headerProfile'
import TabsProfile from './tabsProfile'
import HistoryProfile from './HistoryProfile'
import { useState,useContext } from 'react'
import UserContext from '../../Context/user'
function Profile({profile,setAuth,setUnderlineFunction,underline}) {
    const [index,setIndex]=useState(0);
    const indexSetter=(ind)=>{
        setIndex(ind);
    }



    const {user,isAuthenticated} = useContext(UserContext);
    

    
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
