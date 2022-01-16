import React,{ useState,useEffect,useRef,useCallback} from 'react'
import logo from '../../assets/logos/logo2.svg'
import './navBar.css'
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaSignOutAlt } from "react-icons/fa";




function NavBar({setAuth, scro=true ,isAuthenticated, profile=false,setUnderlineFunction,underline}) {
    
   
    const underlineRef = useRef(null);
    const [scroll,setScroll] = useState(scro);
    const [showMenu,setShowMenu]=useState(false);
    window.onscroll = function() {myFunction()};
   // console.log(window.location.href)
 
    
    function myFunction() {
        if(!scro){
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop >20) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        }
    }
    const handleClick = useCallback(
        (e) => {
            
                window.scrollTo(0,0);
                const text =e.target.getBoundingClientRect();
                const left = text.left;
                const top =text.top;
                const width=text.width;
                const under_top=top+50;
                const under_left=left+12;
                const under_width=width-28;
                setUnderlineFunction(under_left,under_width,under_top);
               
            
        },
        [setUnderlineFunction],
    )
    

     //console.log(isAuthenticated)
    const handleWindow = () =>{
        window.scrollTo(0,0);
    }

    const handleToggleClick =(e)=>{
        setShowMenu(!showMenu);
    }
    //log out 
    const logout = async e => {
        e.preventDefault();
        try {
          localStorage.removeItem("token");
          setAuth(false);
        } catch (err) {
          console.error(err.message);
        }
      };
     
   useEffect(
       ()=>{
           const line=underlineRef.current;
         if(underline.left){
        
        line.style.left=`${underline.left}px`;
        line.style.top=`${underline.top}px`;
        line.style.width=`${underline.width}px`;
        //console.log(underline)
    }
    
    }  ,[handleClick]
       
   )
    return (
        
        <nav className = {`${scroll ? 'Nav navbar   navbar-expand-lg navbar-light  fixed-top bg-light'
         : 'Nav navbar   navbar-expand-lg navbar-light  fixed-top'
          }`}>
            <div className="container-fluid">
            <Link  onClick={handleWindow } to="/"> <img className="navbar-logo" src={logo} alt="logo" /> </Link>
                
                <div className="nav-header navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className={`${showMenu?"sidebar hov  nav-item":"close-side-bar  nav-item"}`} >
                         <Link  tabindex="1" className="nav-link"  aria-current="true"  onClick={handleClick} to="/">Home </Link>
                            <div ref={underlineRef} className="underline"></div>
                        </li>
                        <li  className={`${showMenu?"sidebar hov nav-item":"close-side-bar nav-item"}`} >
                        <Link to="/Destinations" className="nav-link "  onClick={handleClick}>Destinations </Link>
                        </li>
                        <li  className={`${showMenu?"sidebar hov  nav-item":"close-side-bar  nav-item"}`} >
                        <Link to="/Trips" onClick={handleClick}  className="nav-link" >Trips</Link>   
                        </li>
                        <li className={`${showMenu?"sidebar hov  nav-item":"close-side-bar  nav-item"}`} >
                        <Link to="/LoginPage" className="nav-link"  tabIndex="-1" aria-disabled="true" onClick={handleClick}>Tours</Link>  
                        </li>
        
                        <div className="container-sm sign">
                        <button onClick={handleToggleClick} className='toggle-btn'><FaBars /></button>
                        
                           { isAuthenticated ?  
                            
                            <Link to="/Profile">
                             {profile?<button onClick={e => logout(e)} type="button" className=" btn btn-rounded  profile-btn">
                             <FaSignOutAlt/>  Sign Out</button>:
                             <button  type="button" className=" btn btn-rounded  profile-btn">
                            <i class="far fa-user pr-2"   aria-hidden="true"></i>Profile</button>}
                            
                            </Link>:
                         <div>
                         <Link to="/LoginPageHome"> 
                            <button type="button" className="btn sign-btn">sign in </button>
                         </Link>
                        <Link to="/Registration">
                            <button type="button" className="btn btn-dark">sign up</button> 
                        </Link>
                        </div> 
                    }
                            
                        </div>
                    </ul>

                </div>
            </div>
        </nav>
    )

}
export default NavBar;
