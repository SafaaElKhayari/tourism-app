import React, { Component } from 'react'
import { EOS_BUBBLE_LOADING_ANIMATED } from 'eos-icons-react';

export default class LoadingTour extends Component {
    render() {
        return (
            <div>
                <h3 className="question">{this.props.title}</h3>
                <h5 className="subquestion">{this.props.subtitle}</h5>
                <div className="loading_container">
                    <EOS_BUBBLE_LOADING_ANIMATED
                        className="loading_icon"
                        color="#0A4843"
                        size="xxxl"
                        />
                        <div className="loading_text">
                            <span>Thank you for using our app. We appreciate it !</span>
                        </div>
                </div>

             </div>
        )
    }
}
