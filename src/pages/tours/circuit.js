import React,{ useState,useEffect } from 'react'
import {Spinner} from 'react-bootstrap'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import '../../styles/circuit.css'
import medinaaa from '../../assets/medinaaa.jpg'
import CHEFCHAOUEN_KASBAH from '../../assets/CHEFCHAOUEN_KASBAH.jpg'
import restau from '../../assets/restau.jpg'




function Circuit() {
	const [tours, settours] = useState([]);
	const [isLoading, setisLoading] = useState(true);
	const table=[medinaaa,CHEFCHAOUEN_KASBAH,restau];
	const [value,setValue]=useState(0);
	
	if(value>table.length-1){
		setValue(0);
	}
	if(value<0){
		setValue(table.length-1);
	}

	const getTours = async() =>{
        try {
            const response = await fetch ("http://localhost:8000/tours");
            const jsonData = await response.json();
            settours(jsonData);
            setisLoading(false)

        } catch (error) {
            console.error(error.message);
        }
    }

	useEffect(() => {
		getTours();
		
	}, [])

	const setImg=(img)=>{
		const buffer = img;
        const b64 = new Buffer(buffer).toString('base64')
		return b64;
	}

    return (
    <div className="py-4 cont" >
		{(isLoading && 
			<div>
				<h3 className="pt-5 loading-text">Fetching magic for you ... </h3>
				<Spinner animation="border" variant="success" size="xxl" />
			</div>)}
			{console.log(tours)}
			{!isLoading &&
		<div className="container py-3">
		<div className="title h1 text-center">Let’s make your best journey ever  </div>
			{tours.map(tour => (<div className="card" key={tour.id}>
			<div className="row ">
			  <div className="col-md-7 px-3">
				<div className="card-block px-6">
				  <h4 className="card-title trip-name">{tour.name}</h4>
				  <p className="card-text para-tours">
				  {tour.description}
				</p>
				  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>	
				  <Stepper activeStep={3} alternativeLabel>
						<Step> <StepLabel>{tour.step1}</StepLabel></Step>
						<Step><StepLabel>{tour.step2}</StepLabel></Step>
						<Step><StepLabel>{tour.step3}</StepLabel></Step>
					</Stepper>
				  <div className="container-sm btn_cont">
					<button className="button--pan button "><span>TAKE ME THERE</span></button>
				  </div>
				
				</div>
			 </div>
			  <div className="col-md-5">
			<div className="carousel-inner"> 
				<img  className="img-caro w-100" src={`data:${'image/jpg'};base64,${setImg(tour.image)}`}  alt=""/>  
			</div>

			  {/* <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel"> */}
			  {/* <div className="carousel-indicators">
				<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className={`${value===0?"active":null}`} ></button>
				<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className={`${value===1?"active":null}`}></button>
				<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className={`${value===2?"active":null}`}></button>
			  </div> */}
			  {/* <div className="carousel-inner"> */}

				  {/* <img  className="img-caro w-100" src={`data:${'image/jpg'};base64,${setImg(tour.image)}`} alt=""/>   */}
				{/* <div className="carousel-caption d-none d-md-block"> */}
				  {/* <h5 className="places_name">{places[value]}</h5> */}
				{/* </div> */}
			  {/* </div>
			  
			  <button onClick={()=>{setValue(value-1)}} className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			  </button>

			  <button onClick={()=>{setValue(value+1)}} className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			  </button> */}
			{/* </div> */}
			   </div>
		  



			</div>
		  </div>))}
		  </div>	   
	
		
		}
		</div>


		

		











    )
}

export default Circuit
