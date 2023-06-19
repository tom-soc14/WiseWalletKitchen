import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App.js';
//import browserRouter from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';

//wrapped the App component in a BrowserRouter component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
);

//the browser router was only wrapped in App.js, so the links were not working
//removed the BrowserRouter component from here and added it to index.js


