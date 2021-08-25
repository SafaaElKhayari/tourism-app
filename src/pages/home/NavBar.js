import React from 'react'
import logo from '../../assets/logos/logo2.svg'
import './navBar.css'
import 'bootstrap/dist/css/bootstrap.css';
import { useState,useEffect,useRef} from 'react';

function NavBar() {
    const underline = useRef(null);
    const menu =useRef(null);

    const [scroll,setScroll] = useState(false);
    const [text,setText]=useState('Home');
    window.onscroll = function() {myFunction()};

    function myFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        setScroll(true);
    } else {
        setScroll(false);
    }
    }
    const handleClick = (e)=>{
        //const text = e.target.textContent;
        //console.log(text);
        //setText(text);
        const text =e.target.getBoundingClientRect();
        const left = text.left;
        const top =text.top;
        const width=text.width;
        const under_top=top+50;
        const under_left=left+12;
        const under_width=width-28;
         console.log(under_top);
        const line=underline.current;
        line.style.left=`${under_left}px`;
        line.style.top=`${under_top}px`;
        line.style.width=`${under_width}px`;
       
    }
    
    return (
        
        <nav class = {`${scroll ? 'navbar navbar-nav-scroll  navbar-expand-lg navbar-light  fixed-top bg-light'
         : 'navbar navbar-nav-scroll  navbar-expand-lg navbar-light  fixed-top'
          }`}>
            <div class="container-fluid">
                <img className="logo" src={logo} alt="logo" />

                <div class="nav-header navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link"  aria-current="page" href="#" onClick={handleClick}>Home</a>
                            <div ref={underline} className="underline"></div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link"  href="#" onClick={handleClick}>Destinations</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" onClick={handleClick}>Trips</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" tabindex="-1" aria-disabled="true" onClick={handleClick}>Tours</a>
                        </li>
                        <div className="sign">
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
