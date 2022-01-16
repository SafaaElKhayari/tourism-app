import React from 'react';
import './login.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import RegisterForm from './RegisterForm';
import NavBar from '../home/NavBar';

function RegisterPage({setAuth, underline, setUnderlineFunction}) {
    return (
        <div>
            <NavBar underline={underline} setUnderlineFunction={setUnderlineFunction}/>
            <div className="maincontainer registration">
            <div className="container-fluid">
                <div className="row no-gutter">               
                    <div className="col-md-6 d-none d-md-flex bg-image"></div>
                    <div className="col-md-6 bg-light">
                    <div className="login d-flex align-items-center py-5">
                        <div className="container">
                            <div className="row">
                                    {/* <p className="text-muted mb-4">Your personal account allows you to save your favorite destinations and rate your most liked tours and trips</p> */}
                                <RegisterForm setAuth={setAuth}/>
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

export default RegisterPage
