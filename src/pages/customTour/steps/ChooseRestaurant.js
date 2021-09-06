import React, { Component } from 'react'
import HotelsComponent from '../hotels'
import RestaurantsComponent from '../restaurants'


export default class ChooseRestaurant extends Component {
    render() {
        return (
            <div>
                <h3 className="question">{this.props.title}</h3>
                <h5 className="subquestion">{this.props.subtitle}</h5>
                <RestaurantsComponent/>
            </div>
        )
    }
}
