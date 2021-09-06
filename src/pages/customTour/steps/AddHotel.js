import React, { Component } from 'react'
import QuestionComponent from '../question'
import Emojify from 'react-emojione';
import { Icon } from '@iconify/react';

export default class AddHotel extends Component {
    render() {
        return (
            <div>
                <h3 className="question">{this.props.title}</h3>
                <h5 className="subquestion">{this.props.subtitle}</h5>
                <QuestionComponent 
                            firstOptionIcon=  {<Icon icon="dashicons:yes-alt" color="#4ecb71" width="70" height="70" />}
                            firstOptionTitle="I would love to !"
                            firstOptionDescription=""
                            firstOptColor="#4ecb71"
                            
                            secondOptionIcon=  {<Icon icon="emojione:person-gesturing-no-light-skin-tone" color="#4ecb71" width="70" height="70" /> }
                            secondOptionTitle="No, a day trip is enough."
                            secondOptionDescription=""
                            secondOptColor="#B386E2"/>
                
            </div>
        )
    }
}
