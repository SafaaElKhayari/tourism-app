import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginPage from './LoginPage'
import "bootstrap-css-only/css/bootstrap.min.css";


function RegisterForm(props) {
    const Emoji = props => (
        <span
          className="emoji"
          role="img"
          aria-label={props.label ? props.label : ""}
          aria-hidden={props.label ? "false" : "true"}
        >
          {props.symbol}
        </span>
      )
    return (
        <div className="col-lg-10 col-xl-7 mx-auto">
            <h3 className="display-4 mb-4">Get Started <Emoji symbol="😎"/></h3>
            <form>
                <div className="form-group mb-4">
                    <input id="inputName" type="text" placeholder="Your Name" required="" autofocus="" className="form-control border-0 shadow-sm px-4" />
                 </div>
                <div className="form-group mb-4">
                    <input id="inputEmail" type="email" placeholder="Your Email" required="" autofocus="" className="form-control border-0 shadow-sm px-4" />
                    <p id="email-note" className="form-text text-muted">We'll never share your email with anyone else.</p>
                </div>
                <div className="form-group mb-4">
                    <input id="inputConfirmEmail" type="email" placeholder="Confirm your e-mail" required="" autofocus="" className="form-control  border-0 shadow-sm px-4" />
                </div>
                <div className="form-group mb-4">
                    <input id="inputPassword" type="password" placeholder="Create password" required="" className="form-control border-0 shadow-sm px-4 text-primary" />
                    <p className="password-note text-muted">Password must be at least 8 characters long</p>
                </div>
                <button type="submit" className="sign-up btn btn-primary btn-block text-uppercase mb-2 shadow-sm">Sign up</button>
            </form>
                <div className="text-center d-flex justify-content-between mt-4"><p className="question-signin">Already a member?
                    <a className="link-primary" href="#!"> Login here</a></p></div>
        </div>
        
    )   
}

export default RegisterForm
