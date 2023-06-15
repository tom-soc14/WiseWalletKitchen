import "./App.css";

import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import HomePage from "../HomePage/HomePage.js";
import Kitchen from "../Kitchen/Kitchen.js";
import Login from "../Login/Login.js";
import Wallet from "../Wallet/Wallet.js";
import NavBar from "../NavBar/NavBar.js";
import { createClient } from "@supabase/supabase-js";

export default function App() {
  // State ---------------
  const [recipes, setRecipes] = useState(null);
  const [dayRecipe, setDayRecipe] = useState(null);
  const [familySize, setFamilySize] = useState(3);
  const [plan, setPlan] = useState("Saver");
  const [walletData, setWalletData] = useState(null);
  // let recipes=[];

  // API -----------------
  const supabaseUrl = "https://vdwwjhldkqhbmwtszcas.supabase.co";

  const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkd3dqaGxka3FoYm13dHN6Y2FzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYxNTA4MjYsImV4cCI6MjAwMTcyNjgyNn0.5ATbh7xJDjVK57XPGsJmkwxps0fV0iyoOCRvUU2VMlc";
  const supabase = createClient(supabaseUrl, supabaseKey);

  const fetchRecipes = async () => {
    try {
      const { data, error } = await supabase
      .from("RecipeData")
        .select(
          `
            *,
            IngredientUsage: RecipeId (*)
            `
        )
        .order("RecipeId");

      if (error) {
        console.error("Error fetching recipes:", error);
      } else {
        setRecipes(data);
        setWalletData(data);
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  // console.log("Recipes outside function: ", recipes)
  // useEffects --------------
  useEffect(() => {
    fetchRecipes();
  }, []);

  useEffect(() => {}, [familySize]);

  useEffect(() => {}, [plan]);

  // handleChange ---------------
  const handleRecipeChange = (selectedValue) => {
    setDayRecipe(recipes[selectedValue]);
  };

  const handleFamilySize = (selectedValue) => {
    setFamilySize(selectedValue);
  };

  const handlePlanChange = (selectedValue) => {
    setPlan(selectedValue);
  };

  // render components
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/kitchen"
          element={
            <Kitchen
              dayRecipe={dayRecipe}
              familySize={familySize}
              handleRecipeChange={handleRecipeChange}
              handleFamilySize={handleFamilySize}
              handlePlanChange={handlePlanChange}
            />
          }
        />
        <Route path="/login" element={<Login />} />

        <Route
          path="/wallet"
          element={
            <Wallet
              plan={plan}
              handlePlanChange={handlePlanChange}
              walletData={walletData}
              familySize={familySize}
              handleFamilySize={handleFamilySize}
            />
          }
        />
      </Routes>
    </div>
  );
}

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
