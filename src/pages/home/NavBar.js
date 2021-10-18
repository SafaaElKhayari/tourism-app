import React,{ useState,useRef} from 'react'
import logo from '../../assets/logos/logo2.svg'
import './navBar.css'
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function NavBar({scro=true}) {
    const underline = useRef(null);
    const [scroll,setScroll] = useState(scro);
    const [showMenu,setShowMenu]=useState(false)
    window.onscroll = function() {myFunction()};

    function myFunction() {
        if(!scro){
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop >20) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        }
    }
    const handleClick = (e)=>{
        const text =e.target.getBoundingClientRect();
        const left = text.left;
        const top =text.top;
        const width=text.width;
        const under_top=top+50;
        const under_left=left+12;
        const under_width=width-28;
        const line=underline.current;
        line.style.left=`${under_left}px`;
        line.style.top=`${under_top}px`;
        line.style.width=`${under_width}px`;
        console.log("clicked")
     
    }

    const handleToggleClick =(e)=>{
        setShowMenu(!showMenu);
    }
 
    return (
        
        <nav className = {`${scroll ? 'Nav navbar   navbar-expand-lg navbar-light  fixed-top bg-light'
         : 'Nav navbar   navbar-expand-lg navbar-light  fixed-top'
          }`}>
            <div className="container-fluid">
            <Link to="/"> <img className="navbar-logo" src={logo} alt="logo" /> </Link>
                
                <div className="nav-header navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className={`${showMenu?"sidebar hov":"close-side-bar"}`} className="nav-item">
                         <Link className="nav-link"  aria-current="close-side-barage" onClick={handleClick} to="/">Home </Link>
                            <div ref={underline} className="underline"></div>
                        </li>
                        <li  className={`${showMenu?"sidebar hov":"close-side-bar"}`} className="nav-item">
                        <Link to="/Destinations" className="nav-link "  onClick={handleClick}>Destinations </Link>
                        </li>
                        <li className={`${showMenu?"sidebar hov ":"close-side-bar"}`} className="nav-item ">
                        <Link to="/Trips" className="nav-link"  onClick={handleClick}>Trips</Link>   
                        </li>
                        <li className={`${showMenu?"sidebar hov":"close-side-bar"}`} className="nav-item">
                        <Link to="/CustomTour" className="nav-link"  tabIndex="-1" aria-disabled="true" onClick={handleClick}>Tours</Link>  
                        </li>
        
                        <div className="container-sm" className="sign">
                        <button onClick={handleToggleClick} className='toggle-btn'><FaBars /></button>
                            <Link to="/Profile"> <button type="button" className="btn sign-btn">sign in </button></Link>
                            <button type="button" className="btn btn-dark">sign up</button>
                        </div>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default NavBar
