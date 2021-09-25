import React from 'react'
import Doors from '../../assets/Doors.jpg'
import { useState } from 'react';

function CardFollow() {
const [isFollow,setIsFollow]=useState(true)

    return (
        <div class="card card-prof" style={{width: "14rem"}}>
        <img src={Doors} height="160px" class="card-img-top" alt="..."/>
        <div class="card-body">
        <h5 class="card-title title-history-follow">Chefchaouen Old City Tour</h5>
        <button onClick={()=>{
            setIsFollow(!isFollow);
            console.log("hola")
        }} className={`${isFollow?"btn-unfollow":"btn-follow"}`}> {isFollow? "Unfollow":"Follow"}</button>
        </div>
</div>
    )
}

export default CardFollow
