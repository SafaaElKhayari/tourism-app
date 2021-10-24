


import React, { Fragment,Suspense, useState, useEffect } from "react";
import LoginPage from './pages/login/LoginPage';
import Registration from './pages/login/RegisterPage';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

 import CustomTour from './pages/customTour/customTour';
// import customTour from './pages/customTour/customTour';
// import StepperExample from './pages/customTour/customTour';
import Profile from './pages/profile/Profile';
import DestinationsPage from './pages/destination/destination'
import Home from './pages/home/home'
import Trips from './pages/trips/Trips';
import DiscoverTours from './pages/DiscoverTours/DiscoverTours';

function App() {
  const checkAuthenticated = async () => {
    try {
      const res = await fetch("http://localhost:5000/authentication/verify", {
        method: "POST",
        headers: { jwt_token: localStorage.token }
      });

      const parseRes = await res.json();

      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    checkAuthenticated();
  }, []);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  console.log(isAuthenticated)

  const setAuth = boolean => {
    setIsAuthenticated(boolean);
  };

  const [underline,setUnderline]=useState({left:0,width:0,top:0});
  console.log(underline)

  const setUnderlineFunction = (left,width,top) => {
    setUnderline(()=>{
     return {...underline,left,width,top}
    })
  };
      
  return (
    
  <div className="App">
  <Switch>
  
      <Route path="/" exact render={(props)=> <Home  setAuth={setAuth} isAuthenticated={isAuthenticated} setUnderlineFunction={setUnderlineFunction} underline={underline}/>}/>  
      <Route path="/Destinations" exact render={()=> <DestinationsPage isAuthenticated={isAuthenticated} setUnderlineFunction={setUnderlineFunction} underline={underline}/>}/>
      <Route path="/Trips" exact render={()=> <Trips  isAuthenticated={isAuthenticated} setUnderlineFunction={setUnderlineFunction} underline={underline}/>}/>
      <Route
        exact 
        path="/LoginPage"
        render={() =>
          !isAuthenticated ? (
            <LoginPage  setAuth={setAuth} isAuthenticated={isAuthenticated} setUnderlineFunction={setUnderlineFunction} underline={underline}/>
          ) : (
            <Redirect to="/CustomTour" />
          )
        }
      />
    <Route
      exact
      path="/LoginPageHome"
      render={() =>
        !isAuthenticated ? (
          <LoginPage  setAuth={setAuth} isAuthenticated={isAuthenticated} setUnderlineFunction={setUnderlineFunction} underline={underline}/>
        ) : (
          <Redirect to="/" />
        )
      }
    />
   <Route
    exact
    path="/Profile"
    render={() =>
      isAuthenticated ? (
        <Profile profile={true} setAuth={setAuth} isAuthenticated={isAuthenticated} setUnderlineFunction={setUnderlineFunction} underline={underline} />
      ) : (
        <Redirect to="/LoginPageHome" />
      )
    }
  />
  <Route
    exact
    path="/Registration"
    render={props =>
      !isAuthenticated ? (
      <Registration setAuth={setAuth} underline={underline} setUnderlineFunction={setUnderlineFunction}/>
    
      ) : (
        <Redirect to="/" />
      )
    }
  />
  
  {  <Route
    exact
    path="/CustomTour"
    render={props =>
      isAuthenticated ? (
        <Suspense  fallback={<div> Chargement...</div>} >
            <CustomTour isAuthenticated={isAuthenticated} setUnderlineFunction={setUnderlineFunction} underline={underline}/>
        </Suspense>
      ) : (
        <Redirect to="/LoginPage" />
      )
    }
  />}
    
  <Route path="/DiscoverTours" render={()=> <DiscoverTours isAuthenticated={isAuthenticated} setUnderlineFunction={setUnderlineFunction} underline={underline}/>}/>
    
    

    
      
  </Switch>
 
</div>
  );
}

export default App;