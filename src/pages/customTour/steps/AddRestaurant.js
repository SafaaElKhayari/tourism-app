import React, { Component } from 'react'
import QuestionComponent from '../question'
import Emojify from 'react-emojione';
import { Icon } from '@iconify/react';


function AddRestaurant(props) {
    return (
        <div>
             <h3 className="question">{props.title}</h3>
                <h5 className="subquestion">{props.subtitle}</h5>
                <QuestionComponent 
                            firstOptionIcon=  {<Icon icon="dashicons:yes-alt" color="#4ecb71" width="70" height="70" />}
                            firstOptionTitle="Yes Please!"
                            firstOptionDescription=""
                            firstOptColor="#4ecb71"
                            firstOptionClicked={props.yesBtn}
                            
                            secondOptionIcon=  {<Icon icon="emojione:person-gesturing-no-light-skin-tone" color="#4ecb71" width="70" height="70" /> }
                            secondOptionTitle="No Thanks."
                            secondOptionDescription=""
                            secondOptColor="#B386E2"
                            secondOptionClicked={props.noBtn}
                            />
                
        </div>
    )
}

export default AddRestaurant
