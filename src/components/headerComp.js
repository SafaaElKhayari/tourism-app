
import  '../styles/headerComp.css'
 





const HeadSection =(props)=>{

 const discoverScroll =(e)=>{
  window.scrollBy(0,400)
  }

  



 
  
    return (
        <div  className="head-container d-flex bg align-items-center justify-content-center text-center" style ={props.style}>
          <div className="head">
              <h1 className="text-white mb-1 head-title">{props.title}</h1>
              <button type="button" onClick={discoverScroll} className="discover-btn btn btn-rounded"> Discover </button>
          </div>
          
        </div> 
        
    
    );
  }

export default HeadSection;