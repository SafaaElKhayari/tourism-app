import React, { Component } from 'react'
import HotelsComponent from '../hotels'


export default class ChooseHotel extends Component {
    render() {
        return (
            <div>
                <h3 className="question">{this.props.title}</h3>
                <h5 className="subquestion">{this.props.subtitle}</h5>
                <HotelsComponent/>
            </div>
        )
    }
}
