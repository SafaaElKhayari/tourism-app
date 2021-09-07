import React, { Component } from 'react'
import HotelsComponent from '../hotels'
import RestaurantsComponent from '../restaurants'
import { useState } from 'react';


function ChooseRestaurant(props) {
    const [counter,setCounter] = useState(0);
    const [closeAlert,setCloseAlert] = useState(false);

    const addItem=()=>{
        setCloseAlert(true);
        setCounter((preValue)=>{
            return preValue +1;
        })
    }
    const removeItem=()=>{
        setCounter((preValue)=>{
            return preValue -1;
        })
    }

    return (
        <div>
            <h3 className="question">{props.title}</h3>
                <h5 className="subquestion">{props.subtitle}</h5>
                <RestaurantsComponent addItem={addItem} removeItem={removeItem} counter={counter} closeAlert={closeAlert}/>
        </div>
    )
}

export default ChooseRestaurant
