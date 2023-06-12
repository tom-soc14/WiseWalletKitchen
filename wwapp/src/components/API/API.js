import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

// variable to store the database URL 
const supabaseUrl = "https://vdwwjhldkqhbmwtszcas.supabase.co";
//variable to store the database PUBLIC API (doesn't have to be secret for this)
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkd3dqaGxka3FoYm13dHN6Y2FzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYxNTA4MjYsImV4cCI6MjAwMTcyNjgyNn0.5ATbh7xJDjVK57XPGsJmkwxps0fV0iyoOCRvUU2VMlc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default function API() {
    //state to store the fetched recipe data
    const [recipes, setRecipes] = useState(null);
  
    //fetching recipe data currently on mount (as stated by the [])
    useEffect(() => {
      fetchRecipes();
    }, []);
    //function to fetch from supabase (async)
    const fetchRecipes = async () => {
      try {
        //fetching all information from the DummyRecipeData folder
        const { data, error } = await supabase.from("DummyRecipeData").select("*");
        if (error) {
          console.error("Error fetching recipes:", error);
        } else {
          console.log("Fetched articles:", data);
          setRecipes(data);
        }
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };
  
    return (
        <div className="recipe-viewer">
          {recipes && (
            <>
              {recipes.map((recipes) => (
                <div className="full-recipe-list">
                  <h3>{recipes.RecipeName}</h3>
                  <p>{recipes.Instructions}</p>
               
               </div>
              ))}
            </>
          )}
        </div>
      );
    }
  