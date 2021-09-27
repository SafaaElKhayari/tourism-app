import React from 'react' ; 
import RegisterPage from './RegisterPage' ;
import { Link } from 'react-router-dom';
import "bootstrap-css-only/css/bootstrap.min.css" ;

function LoginForm(props) {
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
    <h3 className="display-4 mb-4">Welcome back <Emoji symbol="😊"/></h3>

        {/* <p className="text-muted mb-4">Your personal account allows
         you to save your favorite destinations and rate your most liked 
         tours and trips</p> */}    
    
    <form>
                 <div className="form-group mb-4">
                                <input id="inputEmail" type="email" placeholder="Email" required="" autofocus="" className="form-control border-0 shadow-sm px-4" />
                             </div>
                            <div className="form-group mb-4">
                                <input id="inputPassword" type="password" placeholder="Password" required="" className="form-control border-0 shadow-sm px-4 text-primary" />
                            </div>
                            <button type="submit" className="sign-up btn btn-primary btn-block text-uppercase mb-2 shadow-sm">Log in</button>
                        </form>   
                        <div className="text-center d-flex justify-content-between mt-4">
                            <p className="question-signin">Don't have an account?<Link to="/Registration" href="#!" onClick={props.handleSignIn} className="link-primary">  Sign up here</Link></p>
                        </div>
    </div>
                
    )
}

export default LoginForm
