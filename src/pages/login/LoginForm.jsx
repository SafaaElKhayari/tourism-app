import React from 'react' ; 
import { Link } from 'react-router-dom';
import "bootstrap-css-only/css/bootstrap.min.css" ;
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function LoginForm(props) {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [error,setError]=useState("")
    const notify = () =>  toast.success("Successful Login! Please Wait...")
  
    
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
    const onSubmitForm = async e => {

      e.preventDefault();
      setError("")
     try {
      const body = {email,password};
      const response = await fetch("http://localhost:8000/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" ,
        'Accept': 'application/json'},
        body: JSON.stringify(body)
      }) 

      const parseRes = await response.json();

      if (parseRes.jwtToken) {

        localStorage.setItem("token", parseRes.jwtToken);
         const timer = setTimeout(() => {
         props.setAuth(true);

        }, 1000); 
        
        
      } else {
        setError(parseRes)
        setPassword("")
        props.setAuth(false);
        
      }
      
     
     
    
     

      /*  */
    } catch (err) {
      console.error(err.message);
    }
    };
   
    return (
    <div className="col-lg-10 col-xl-7 mx-auto">
   
    <h4 className="display-4 mb-4 welcome-back">Welcome back <Emoji symbol="😊"/></h4>
     <h5 className="login-Error">{error}</h5>
        {/* <p className="text-muted mb-4">Your personal account allows
         you to save your favorite destinations and rate your most liked 
         tours and trips</p> */}    
    
    <form onSubmit={onSubmitForm} >
                 <div className="form-group mb-4">
                                <input value={email}
                                onChange={e => setEmail(e.target.value)} id="email" name="email" type="email" placeholder="Email" required="" autofocus="" className="form-control border-0 shadow-sm px-4" />
                             </div>
                            <div className="form-group mb-4">
                                <input  value={password}
                                onChange={e => setPassword(e.target.value)} name="password" id="inputPassword" type="password" placeholder="Password" required="" className="form-control border-0 shadow-sm px-4 text-primary" />
                            </div>
                            <button  onClick={notify} type="submit" className="sign-up btn btn-primary btn-block text-uppercase mb-2 shadow-sm">Log in</button>
                        </form>   
                        <div className="text-center d-flex justify-content-between mt-4">
                            <p className="question-signin">Don't have an account?<Link to="/Registration" href="#!" onClick={props.handleSignIn} className="link-primary">  Sign up here</Link></p>
                        </div>
                      {error==="" && <ToastContainer />} 
    </div>
                
    )
}

export default LoginForm
