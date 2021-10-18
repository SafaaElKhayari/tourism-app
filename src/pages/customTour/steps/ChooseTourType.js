import React from 'react'
import QuestionComponent from '../question'
import { Icon } from '@iconify/react';


function ChooseTourType(props) {
    return (
        <div>
            <h3 className="question">{props.title}</h3>
            <h5 className="subquestion">{props.subtitle}</h5>
            <QuestionComponent 
                firstOptionIcon=  {<Icon icon="emojione-monotone:white-question-mark" color="gray" width="70" />}
                firstOptionTitle="Customize your tour"
                firstOptionDescription="We let you choose the places you want to visit"
                firstOptColor=""
                firstOptionClicked={props.customizeTour}
                            
                secondOptionIcon=  {<Icon icon="flat-ui:magic" width="70" height="70"/>}
                secondOptionTitle="Choose an existing tour "
                secondOptionDescription="You can follow one of our suggested tours "
                secondOptColor=""
                secondOptionClicked={props.chooseTour}
                            />
        </div>
    )
}

export default ChooseTourType
