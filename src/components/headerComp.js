import React from "react";
import "bootstrap-css-only/css/bootstrap.min.css";


const HeadSection =(props)=>{ 
    return (
        <div className="head-container d-flex bg align-items-center justify-content-center text-center" style ={props.style}>
          <div className="head">
              <h1 className="text-white mb-1 head-title">{props.title}</h1>
              <button type="button" className="discover-btn btn btn-rounded">Discover</button>
          </div>
          
        </div> 
    
    );
  }

export default HeadSection;