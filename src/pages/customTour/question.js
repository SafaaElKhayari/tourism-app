import React, { Component } from 'react'
import Emojify from 'react-emojione';
import { Icon } from '@iconify/react';


export default class QuestionComponent extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-evenly">
                    {/* First option */}
                    <div className="col-4 tour-type-option">
                        <div className="option-icon">{this.props.firstOptionIcon}</div>
                        <h5 className="option-title" style={{color:this.props.firstOptColor}}>{this.props.firstOptionTitle}</h5>
                        <p className="option-description">{this.props.firstOptionDescription}</p>
                    </div>
                    {/* Second Option */}
                    <div className="col-4 md-4 tour-type-option">
                        <div className="option-icon">{this.props.secondOptionIcon}</div>
                        <h5 className="option-title" style={{color:this.props.secondOptColor}}>{this.props.secondOptionTitle}</h5>
                        <p className="option-description">{this.props.secondOptionDescription}</p>
                    </div>

                </div>


                
            </div>
            
        )
    }
}
