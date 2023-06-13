import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import HomePage from "../HomePage/HomePage.js";
import Kitchen from "../Kitchen/Kitchen.js";
import Login from "../Login/Login.js";
import Wallet from "../Wallet/Wallet.js";
import { createClient } from "@supabase/supabase-js";

export default function App() {
  const [recipes, setRecipes] = useState(null);


  const [dayRecipe, setDayRecipe] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);
  // const [recipePrice, setRecipePrice] = useState(null);

  const pricingData = recipes;

  useEffect(() => {
   
    fetchRecipes();
  }, []);

  const supabaseUrl = "https://vdwwjhldkqhbmwtszcas.supabase.co";

  const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkd3dqaGxka3FoYm13dHN6Y2FzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYxNTA4MjYsImV4cCI6MjAwMTcyNjgyNn0.5ATbh7xJDjVK57XPGsJmkwxps0fV0iyoOCRvUU2VMlc";
  const supabase = createClient(supabaseUrl, supabaseKey);

  const fetchRecipes = async () => {
    try {
      const { data, error } = await supabase
      .from("RecipeData").select("*");

      if (error) {
        console.error("Error fetching recipes:", error);
      } else {
        setRecipes(data);
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const handleRecipeChange = (event) => {
      setDayRecipe(recipes[event]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/kitchen"
          element={
            <Kitchen
              dayRecipe={dayRecipe}
              handleRecipeChange={handleRecipeChange}
            />
          }
        />
        <Route path="/login" element={<Login />} />

        {/* <Route path="/wallet" element={<Wallet weeklyPrice={weeklyPrice} pricingData={pricingData} />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

  // const [weeklyPrice, setWeeklyPrice] = useState("");
 // function weeklyPrice2() {
    //   let totalPriceNum = 0;
    //   for (let i = 0; i < 6; i++) {
    //     // For loop only goes to 6, not whole array
    //     totalPriceNum = totalPriceNum + recipeDataV2[i].Price[0];
    //   }
    //   let totalPrice = Math.round(totalPriceNum * 100) / 100;
    //   setWeeklyPrice(totalPrice);
    //   return "£" + totalPrice;
    // }
    // weeklyPrice2();