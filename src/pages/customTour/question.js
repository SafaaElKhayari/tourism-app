import React from 'react'
import Emojify from 'react-emojione';
import { Icon } from '@iconify/react';


function QuestionComponent(props) {
    return (
        <div className="container">
                <div className="row justify-content-evenly">
                    {/* First option */}
                    <div className="col-4 tour-type-option" onClick={props.firstOptionClicked}>
                        <div className="option-icon">{props.firstOptionIcon}</div>
                        <h5 className="option-title" style={{color:props.firstOptColor}}>{props.firstOptionTitle}</h5>
                        <p className="option-description">{props.firstOptionDescription}</p>
                    </div>

                    {/* Second Option */}
                    <div className="col-4 md-4 tour-type-option" onClick={props.secondOptionClicked}>
                        <div className="option-icon">{props.secondOptionIcon}</div>
                        <h5 className="option-title" style={{color:props.secondOptColor}}>{props.secondOptionTitle}</h5>
                        <p className="option-description">{props.secondOptionDescription}</p>
                    </div>
                </div>
            </div>
    )
}

export default QuestionComponent
