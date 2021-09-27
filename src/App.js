

import React, {Suspense,lazy}from 'react';
import LoginPage from './pages/login/LoginPage';
import Registration from './pages/login/RegisterPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

 import CustomTour from './pages/customTour/customTour';
// import customTour from './pages/customTour/customTour';
// import StepperExample from './pages/customTour/customTour';
import Profile from './pages/profile/Profile';
import DestinationsPage from './pages/destination/destination'
import Home from './pages/home/home'
import Trips from './pages/trips/Trips';
import DiscoverTours from './pages/DiscoverTours/DiscoverTours';

function App() {
  
      
  return (
    <div className="App">
    <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/Destinations" component={DestinationsPage} />
        <Route path="/Trips" component={Trips} />
        <Route path="/CustomTour" render={()=> <Suspense  fallback={<div> Chargement...</div>}   >
        <CustomTour/>
      </Suspense>} />
      <Route path="/DiscoverTours" component={DiscoverTours} />
      <Route path="/LoginPage" component={LoginPage} />
      <Route path="/Profile" component={Profile} />
      <Route path="/Registration" component={Registration} />
      

      
        
    </Switch>
    {/* <Suspense  fallback={<div>Chargement...</div>}   >
        <CustomTour/>
      </Suspense> */}
  </div>
  );
}

export default App;