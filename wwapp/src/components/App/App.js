import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../HomePage/HomePage.js";
import Kitchen from "../Kitchen/Kitchen.js";
import Login from '../Login/Login.js';
import Wallet from "../Wallet/Wallet.js";
import API from "../API/API.js";

import './App.css';


function App() {


     <Kitchen />

  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kitchen" element={<Kitchen />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/API" element={<API />} />
      </Routes>
    </BrowserRouter>
  );
  
  }
export default App;







