import React, { Component } from 'react'
import QuestionComponent from '../question'
import Emojify from 'react-emojione';
import { Icon } from '@iconify/react';

export default class ChooseTourType extends Component {
    render() {
        return (
            <div>
                        <h3 className="question">{this.props.title}</h3>
                        <h5 className="subquestion">{this.props.subtitle}</h5>
                <QuestionComponent 
                            firstOptionIcon=  {<Emojify style={{height: 70, width: 70}}> <span>:grey_question:</span></Emojify>}
                            firstOptionTitle="Customize your tour"
                            firstOptionDescription="We let you choose the places you want to visit"
                            firstOptColor=""
                            
                            secondOptionIcon=  {<Icon icon="flat-ui:magic" width="70" height="70"/>}
                            secondOptionTitle="Choose an existing tour "
                            secondOptionDescription="You can follow one of our suggested tours "
                            secondOptColor=""/>
                
            </div>
        )
    }
}
