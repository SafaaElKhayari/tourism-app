import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import { useState ,useEffect} from 'react';
import "bootstrap-css-only/css/bootstrap.min.css";


function RegisterForm(props) {
    const [email, setEmail] = useState("")
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [registered, setRegistered] = useState(false)
    const [error,setError]=useState("")
    const notify = () =>  toast.success("User Registration Successful! Please Login")
    
    console.log(props.setAuth)  
  
    
    // set auth true after making sure of the good registration 
    useEffect(()=>{
      const timer = setTimeout(() => {
        if(registered){
           console.log('Successfully');
           props.setAuth(true);
        }
      }, 1000);
      
      return () => clearTimeout(timer);

    },[registered])    


    
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
        //console.log("submitted");
       try {
        const body = {userName,email,password};
        const response = await fetch("http://localhost:8000/users/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        });

          const parseRes = await response.json();
          

      if (parseRes.jwtToken) {
         setRegistered(true)
        localStorage.setItem("token", parseRes.jwtToken);
        
        
      } else {
        props.setAuth(false);
        setError(parseRes)
        setPassword("")
      }

     
       //console.log(error)
        
       
      } catch (err) {
        console.error(err.message);
      }
      };
    return (
        <div className="col-lg-10 col-xl-7 mx-auto">
         <div><h3 className="display-4 mb-4 get-started">Get Started <Emoji symbol="😎"/></h3>
            <h5 className="login-Error">{error}</h5>
            <form onSubmit={onSubmitForm}>
                <div className="form-group mb-4">
                    <input value={userName}
                    onChange={e => setUserName(e.target.value)}  name="userName" id="inputName" type="text" placeholder="Your Name" autofocus="" className="form-control border-0 shadow-sm px-4" />
                 </div>
                <div className="form-group mb-4"> 
                <p id="email-note" className="form-text text-muted">We'll never share your email with anyone else.</p>
                    <input value={email}
                    onChange={e => setEmail(e.target.value)}  name="email"  id="inputEmail"  placeholder="Your Email"  autofocus="" className="form-control border-0 shadow-sm px-4" />
                   
                </div>
                
                <div className="form-group mb-4">
                    <input value={password}
                    onChange={e => setPassword(e.target.value)}  name="password"  id="inputPassword" type="password" placeholder="Create password"  className="form-control border-0 shadow-sm px-4 text-primary" />
                    <p className="password-note text-muted">Password must be at least 8 characters long</p>
                </div>
                <button onClick={notify} type="submit" className="sign-up btn btn-primary btn-block text-uppercase mb-2 shadow-sm">Sign up</button>
            </form>
                <div className="text-center d-flex justify-content-between mt-4"><p className="question-signin">Already a member?
                    <Link to="/LoginPage" className="link-primary" href="#!"> Login here</Link></p></div></div>
                    {registered && <ToastContainer />}
        </div>
        
    )   
}
 
export default RegisterForm
