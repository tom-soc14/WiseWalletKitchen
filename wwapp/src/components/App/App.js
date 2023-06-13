import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import HomePage from "../HomePage/HomePage.js";
import Kitchen from "../Kitchen/Kitchen.js";
import Login from '../Login/Login.js';
import Wallet from "../Wallet/Wallet.js";

import recipeDataV2 from "./recipeDataV2.js";

import API from "../API/API.js";


import './App.css';


function App() {

  const [weeklyPrice, setWeeklyPrice] = useState('');


useEffect(() => {
  function weeklyPrice2() {
    let totalPriceNum = 0;
    for (let i = 0; i < 6; i++) {
      // For loop only goes to 6, not whole array
      totalPriceNum = totalPriceNum + recipeDataV2[i].Price[0];
    }
    let totalPrice = Math.round(totalPriceNum * 100) / 100;
    setWeeklyPrice(totalPrice);
    return "£" + totalPrice;
  }
  weeklyPrice2();
},[])






//      <Kitchen />

  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kitchen" element={<Kitchen  />} /> 
        <Route path="/login" element={<Login />} />

        <Route path="/wallet" element={<Wallet weeklyPrice={weeklyPrice}/>} />

    
        <Route path="/API" element={<API />} />

      </Routes>
    </BrowserRouter>
  );
  
  }
export default App;







