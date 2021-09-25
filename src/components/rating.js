import React,{useState} from 'react';
import { FaStar } from 'react-icons/fa';
import "../styles/rating.css"


const StarRating = ({size=13}) =>{
    //for now 
    const [rating,setRating] =useState(4);
    const [hover,setHover] =useState(null);
    return (
        <div >
            {[ ...Array(5)].map((star,i)=>{
                const ratingValue = i+1;
                return (
                <label key={i}>
                    <input 
                        type="radio" 
                        name="rating" 
                        value={ratingValue} 
                        onClick={() => setRating(ratingValue)}
                    />
                    <FaStar
                     className="star" 
                     color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"} 
                     size= {size}
                     onMouseEnter={()=>setHover(ratingValue)}
                     onMouseLeave={()=>setHover(null)}
                    />
                </label>);

            })}
            {/* <p>Rating :{rating}</p> */}
        </div>
    );
}

export default StarRating;