import React from 'react'
import Doors from '../../assets/Doors.jpg'
import { useState } from 'react';

import {MdEdit  } from "react-icons/md";
function CardFollow() {
const [isFollow,setIsFollow]=useState(true)
    return (
        <div class="card card-prof" style={{width: "14rem"}}>
        <img src={Doors}  class="card-img-top" alt="..."/>
        <div class="card-body">
        <h5 class="card-title title-history">Chefchaouen Old City Tour</h5>
        <button onClick={()=>{
            setIsFollow(!isFollow);
        }} className={`${isFollow?"btn-unfollow":"btn-follow"}`}> {isFollow? "Unfollow":"follow"}</button>
        </div>
</div>
    )
}

export default CardFollow
