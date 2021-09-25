

import React, {Suspense,lazy}from 'react';
<<<<<<< HEAD
import LoginPage from './pages/login/LoginPage';
import Registration from './pages/login/RegisterPage';
=======
import { BrowserRouter, Route, Switch } from 'react-router-dom';
>>>>>>> 9aa18658c6b4ac7626e2aab30cd4539cc97b79c7

 import CustomTour from './pages/customTour/customTour';
// import customTour from './pages/customTour/customTour';
// import StepperExample from './pages/customTour/customTour';
<<<<<<< HEAD
// import DestinationsPage from './pages/destination/destination'
// import Home from './pages/home/home'
// import Trips from './pages/trips/Trips';

// const CustomTour=lazy(()=>import('./pages/customTour/customTour'))

=======
import DestinationsPage from './pages/destination/destination'
import Home from './pages/home/home'
import Trips from './pages/trips/Trips';
import DiscoverTours from './pages/DiscoverTours/DiscoverTours';
//const CustomTour=lazy(()=>import('./pages/customTour/customTour'))
import Profile from './pages/profile/Profile';
>>>>>>> 9aa18658c6b4ac7626e2aab30cd4539cc97b79c7
function App() {
  
      
  return (
    <div className="App">
<<<<<<< HEAD
      {/* <Suspense  fallback={<div>Chargement...</div>}   >
        <CustomTour/>
      </Suspense> */}
      {/* <Home /> */}
       {/* <DestinationsPage/> */}
      {/* <Trips/> */}
      <LoginPage/>
=======
    <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/Destinations" component={DestinationsPage} />
        <Route path="/Trips" component={Trips} />
        <Route path="/CustomTour" render={()=> <Suspense  fallback={<div> Chargement...</div>}   >
        <CustomTour/>
      </Suspense>} />
      <Route path="/DiscoverTours" component={DiscoverTours} />
      <Route path="/Profile" component={Profile} />
      
        
    </Switch>
    {/* <Suspense  fallback={<div>Chargement...</div>}   >
        <CustomTour/>
      </Suspense> */}
>>>>>>> 9aa18658c6b4ac7626e2aab30cd4539cc97b79c7
  </div>
  );
}

export default App;