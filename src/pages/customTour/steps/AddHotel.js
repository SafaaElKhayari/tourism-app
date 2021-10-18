import React from 'react'
import QuestionComponent from '../question'
import { Icon } from '@iconify/react';



function AddHotel(props) {
    return (
        <div>
            <h3 className="question">{props.title}</h3>
                <h5 className="subquestion">{props.subtitle}</h5>
                <QuestionComponent 
                        firstOptionIcon={<Icon icon="dashicons:yes-alt" color="#4ecb71" width="70" height="70" />}
                        firstOptionTitle="I would love to !"
                        firstOptionDescription=""
                        firstOptColor="#4ecb71"
                        firstOptionClicked={props.yesBtn}
                            
                        secondOptionIcon=  {<Icon icon="emojione:person-gesturing-no-light-skin-tone" color="#4ecb71" width="70" height="70" /> }
                        secondOptionTitle="No, a day trip is enough."
                        secondOptionDescription=""
                        secondOptColor="#B386E2"
                        secondOptionClicked={props.noBtn}
                        />
        </div>
    )
}

export default AddHotel
