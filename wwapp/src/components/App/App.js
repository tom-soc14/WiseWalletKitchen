import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../HomePage/HomePage.js";
import Kitchen from "../Kitchen/Kitchen.js";
import Login from '../Login/Login.js'
import Wallet from "../Wallet/Wallet.js";
import NavBar from "../NavBar/NavBar.js";

import './App.css';

//the browser router was only wrapped in App.js, so the links were not working
//removed the BrowserRouter component from here and added it to index.js
function App() {
  return (
    <div className="App">
    <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kitchen" element={<Kitchen />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/wallet" element={<Wallet />} />
      </Routes>
    </div>
  );
  
  }
export default App;







