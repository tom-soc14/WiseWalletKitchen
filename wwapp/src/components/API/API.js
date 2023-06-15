import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

// variable to store the database URL
const supabaseUrl = "https://vdwwjhldkqhbmwtszcas.supabase.co";
//variable to store the database PUBLIC API (doesn't have to be secret for this)
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkd3dqaGxka3FoYm13dHN6Y2FzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYxNTA4MjYsImV4cCI6MjAwMTcyNjgyNn0.5ATbh7xJDjVK57XPGsJmkwxps0fV0iyoOCRvUU2VMlc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default function API() {
  const [recipes, setRecipes] = useState(null);

  // useEffect hook with empty dependency array to fetch recipes on component mount
  useEffect(() => {
    fetchRecipes();
  }, []);

  // Fetch recipes from Supabase database
  const fetchRecipes = async () => {
    try {
      // Use Supabase client to query RecipeData table and IngredientUsage relationship
      const { data, error } = await supabase
        .from("RecipeData")
        .select(
          `
            *,
            IngredientUsage: RecipeId (*)
            `
        )
        .order("RecipeId");

      // Handle any error that occurred during the API call
      if (error) {
        console.error("Error fetching recipes:", error);
      } else {
        // Update the recipes state with the fetched data
        setRecipes(data);
        console.log(data);
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  console.log("just testing!");

  return (
    <div className="recipe-viewer">
      {recipes && (
        <>
          {recipes.map((recipe) => (
            <div key={recipe.RecipeId} className="full-recipe-list">
              <img
                src={recipe.Photo}
                alt={recipe.PhotoAlt}
                style={{ width: "200px", height: "auto" }}
              />
            </div>
          ))}
        </>
      )}
      {/* {ingredientUsage && (
          <>
            {ingredientUsage.map((ingredient) => (
              <div className="full-ingredient-usage">
                <h3>{ingredient.RecipeID}</h3>
                <p>{ingredient.id}</p>
                <p>{ingredient.IngredientID}</p>
                <p>{ingredient.Amount}</p>
              </div>
            ))}
          </>
        )} */}
    </div>
  );
}

// This is legacy code before we realised how to join the tables in 1 function

//   const fetchIngredientUsage = async () => {
//     try {
//       const {data, error } = await supabase
//       .from("IngredientUsage")
//       .select("*");
//       if (error) {
//         console.log("Error fetching recipes", error);
//       } else {
//         setIngredientUsage(data)
//       }
//       } catch (error) {
//         console.error("Error fetching articles:", error)
//       }
//     }
