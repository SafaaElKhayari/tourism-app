import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css"
import { BrowserRouter, Route, Switch } from 'react-router-dom';



ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>, 
  document.getElementById('root')
)

