import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import HomePage from "../HomePage/HomePage.js";
import Kitchen from "../Kitchen/Kitchen.js";
import Login from '../Login/Login.js';
import Wallet from "../Wallet/Wallet.js";
import recipeDataV2 from "./recipeDataV2.js";
import { createClient } from "@supabase/supabase-js";



function App() {
const [weeklyPrice, setWeeklyPrice] = useState('');
const [recipes, setRecipes] = useState(null);


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
  fetchRecipes();
},[])

const supabaseUrl = "https://vdwwjhldkqhbmwtszcas.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkd3dqaGxka3FoYm13dHN6Y2FzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYxNTA4MjYsImV4cCI6MjAwMTcyNjgyNn0.5ATbh7xJDjVK57XPGsJmkwxps0fV0iyoOCRvUU2VMlc";
const supabase = createClient(supabaseUrl, supabaseKey);


  const fetchRecipes = async () => {
  try {
    const { data, error } = await supabase
      .from("RecipeData")
      .select('*')
     

    if (error) {
      console.error("Error fetching recipes:", error);
    } else {
      setRecipes(data);
      // console.log('hello');
    }
  } catch (error) {
    console.error("Error fetching recipes:", error);
  }
};

// console.log(recipes)

// function allRecipes () {
//   recipes.map(recipe=> {
//     recipe.DummyRecipeData.RecipeName;
//   })
// }



  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kitchen" element={<Kitchen recipes={recipes}/>} /> 
        <Route path="/login" element={<Login />} />

        <Route path="/wallet" element={<Wallet weeklyPrice={weeklyPrice}/>} />

    
        {/* <Route path="/API" element={<API />} /> */}

      </Routes>
    </BrowserRouter>
  );
  
  }
export default App;







