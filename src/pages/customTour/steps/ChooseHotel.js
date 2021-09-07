import React from 'react'
import HotelsComponent from '../hotels'
import { useState } from 'react';



function ChooseHotel(props) {
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
                <HotelsComponent addItem={addItem} removeItem={removeItem} counter={counter} closeAlert={closeAlert}/>
        </div>
    )
}

export default ChooseHotel
