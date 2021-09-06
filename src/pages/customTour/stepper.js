import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import ChooseTourType from './steps/ChooseTourType';
import AddRestaurant from './steps/AddRestaurant';
import AddHotel from './steps/AddHotel';
import { useState } from "react";
import ChooseRestaurant from './steps/ChooseRestaurant';
import ChooseHotel from './steps/ChooseHotel';
import AddEvents from './steps/Events';
import LoadingTour from './steps/LoadingTour';
import ChoosePlaces from './steps/ChoosePlaces';

export default function StepperComponent(){
    const [page,setPage] = useState(1);

    function goNextPage(){
        if(page === 8) return;
        setPage((page) => page + 1);}

    function goPrevPage(){
        if(page === 1) return;
        setPage((page) => page - 1);}
    
        return (
            <div className="d-flex stepper-container" style={{background:`linear-gradient(180deg, #C5C2C2 27.6%, #0A4843 95.31%)`}}>
                <div className="stepper-content">
                    <div className="stepper-inner container">
                        <div>
                            <progress max="8" value={page} />
                        </div>
                        <div>
                            {page === 1 && <ChooseTourType title="Let's get started" subtitle="What do you prefer ?"/>}
                            {page === 2 && <ChoosePlaces title="Now let's talk food !" subtitle="Would you prefer to add a restaurant or a café to your tour ?"/>}
                            {page === 3 && <AddRestaurant title="Now let's talk food !" subtitle="Would you prefer to add a restaurant or a café to your tour ?"/>}
                            {page ===4 && <AddHotel title="What about spending the night under the beautiful sky of the blue city ?" subtitle="Would you like a hotel for the night?"/>}
                            {page ===5 && <ChooseRestaurant title="Some good places in Chefchaouen" subtitle="Please pick at least one restaurant"/>}
                            {page ===6 && <ChooseHotel title="Hotels and resorts in Chefchaouen" subtitle="Please pick a hotel"/>}
                            {page ===7 && <AddEvents title="Let’s add some activities !" subtitle="Here are some upcoming cultural events in Chefchaouen, would you like to add some to your tour ?"/>}
                            {page === 8 && <LoadingTour title="Generating your path for an amazing journey" subtitle="Please Wait !" />}
                        </div>
                        
                        {page !== 1 && page !==7 && page!==8
                        && 
                        <div  className="btn-container">
                            <button onClick={goPrevPage} className="float-left btn-lg btn btn-outline-primary prev-btn">Previous</button>
                            <button onClick={goNextPage} className=" float-right btn-lg btn btn-primary next-btn">Next</button>
                        </div>}

                        {page ===1 && 
                        <div className="btn-container float-right">
                            <button onClick={goNextPage} class=" btn-lg btn btn-primary next-btn">Next</button>
                        </div>}

                        {page === 7 && 
                        <div className="btn-container">
                            <button onClick={goPrevPage} class="float-left btn-lg btn btn-outline-primary prev-btn">Previous</button>
                            <button onClick={goNextPage} class=" float-right btn-lg btn btn-success next-btn">Generate</button>
                        </div>
                        }
                        {page === 8 && 
                        <div className="btn-container">
                            <button onClick={goPrevPage} class="float-left btn-lg btn btn-outline-primary prev-btn" disabled>Previous</button>
                            <button onClick={goNextPage} class=" float-right btn-lg btn btn-primary next-btn" disabled>Next</button>
                        </div>
                        }
                    </div>
                </div>
            </div>
        )
        }
