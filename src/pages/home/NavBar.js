import React from 'react'
import logo from '../../assets/logos/logo2.svg'
import './navBar.css'
import { useState,useRef} from 'react';
import { FaBars } from 'react-icons/fa';

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
        console.log(left)
        console.log(width)
        console.log(under_left)
        console.log(under_width) 
    }

    const handleToggleClick =(e)=>{
        setShowMenu(!showMenu);
    }
 
    return (
        
        <nav class = {`${scroll ? 'Nav navbar   navbar-expand-lg navbar-light  fixed-top bg-light'
         : 'Nav navbar   navbar-expand-lg navbar-light  fixed-top'
          }`}>
            <div class="container-fluid">
                <img className="navbar-logo" src={logo} alt="logo" />

                <div class="nav-header navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li className={`${showMenu?"sidebar hov":"close-side-bar"}`} class="nav-item">
                            <a class="nav-link"  aria-current="close-side-barage" href="#!" onClick={handleClick}>Home</a>
                            <div ref={underline} className="underline"></div>
                        </li>
                        <li  className={`${showMenu?"sidebar hov":"close-side-bar"}`} class="nav-item">
                            <a class="nav-link "  href="#!" onClick={handleClick}>Destinations</a>
                        </li>
                        <li className={`${showMenu?"sidebar hov ":"close-side-bar"}`} class="nav-item ">
                            <a class="nav-link" href="#!" onClick={handleClick}>Trips</a>
                        </li>
                        <li className={`${showMenu?"sidebar hov":"close-side-bar"}`} class="nav-item">
                            <a class="nav-link" href="#!" tabindex="-1" aria-disabled="true" onClick={handleClick}>Tours</a>
                        </li>
        
                        <div class="container-sm" className="sign">
                        <button onClick={handleToggleClick} className='toggle-btn'><FaBars /></button>
                            <button type="button" class="btn btn-light">sign in </button>
                            <button type="button" class="btn btn-dark">sign up</button>
                        </div>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default NavBar
