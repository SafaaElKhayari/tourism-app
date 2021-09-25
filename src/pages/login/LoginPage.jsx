import React, { Component } from 'react'
import NavBar from '../home/NavBar'
import LoginForm from './LoginForm'
import RegisterPage from './RegisterPage'

export default class LoginPage extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <div className="maincontainer registration">
                    <div className="container-fluid">
                        <div className="row no-gutter">               
                            <div className="col-md-6 d-none d-md-flex bg-image"></div>
                            <div className="col-md-6 bg-light">
                                <div className="login d-flex align-items-center py-5">
                                    <div className="container">
                                        <div className="row">
                                            <LoginForm/>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
    }
