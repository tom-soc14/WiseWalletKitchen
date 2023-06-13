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

  useEffect(() => {
    fetchRecipes();
  }, []);

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
        console.log(data);
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

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

  return (
    <div className="recipe-viewer">
      {recipes && (
        <>
          {recipes.map((recipe) => (
            <div className="full-recipe-list">
              <h3>{recipe.RecipeName}</h3>
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
