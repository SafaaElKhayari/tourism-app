
// import CustomTour from './pages/customTour/customTour';
import React, {Suspense,lazy}from 'react';

// import customTour from './pages/customTour/customTour';
import StepperExample from './pages/customTour/customTour';
import DestinationsPage from './pages/destination/destination'
import Home from './pages/home/home'
import Trips from './pages/trips/Trips';
const CustomTour=lazy(()=>import('./pages/customTour/customTour'))
function App() {
  return (
    <div className="App">
      <Suspense  fallback={<div>Chargement...</div>}   >
        <CustomTour/>
      </Suspense>
      {/* <Home /> */}
       {/* <DestinationsPage/> */}
      {/* <Trips/> */}
    </div>
  );
}

export default App;