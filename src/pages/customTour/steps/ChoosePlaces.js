import React from 'react'
import Places from '../../../components/places'

function ChoosePlaces(props) {
    return (
        <div>
            <h3 className="question">{props.title}</h3>
            <h5 className="subquestion">{props.subtitle}</h5>
            <Places/>
        </div>
    )   
}

export default ChoosePlaces
