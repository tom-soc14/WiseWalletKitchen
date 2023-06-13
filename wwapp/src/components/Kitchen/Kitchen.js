import saladRice from "./img/saladRice.jpeg";
import "./Kitchen.css";

import recipeDataV2 from "./recipeDataV2.js";
import { useState } from "react";

// To Do - 08/09/2023
// Integrate the recipeDataV2 into the Kitchen.js ✅
// Render a drop down menu with 4 options ✅
// Change the Total price with each selection of the drop down menu ✅
// Render a drop down menu with 4 different options ✅
// 1, 2, 3, 4 people ✅

// To Do - 09/09/2023
// Have the drop down option update the state of the total price calculator to the index the array
// Call the updateRecipePrice when the updateDayRecipe function is called

/* Plan
- on each click of a button, a diferrent recipe in the array should render
-  use of useState
- a function needed to update useState
- each button needs an id to be able to pass to that function
- we render the instruction variable from useState underneath 
*/


function Kitchen({ recipes, handleRecipeChange, dayRecipe }) {
  // const [recipe, setRecipe] = useState(recipeDataV2[0]);
  // const [recipePrice, setRecipePrice] = useState(recipeDataV2[0].Price[0]);
  // const [selectedValue, setSelectedValue] = useState([0])

console.log(recipes)


  // const [recipePlan, setRecipePlan] = useState(recipeDataV2[0].RecipeType);


//Create a function that sets all recipes rendered to be one of the 3 options. 
//This function will be called when the drop down menu is selected
//It selects the recipes with corresponding plan data field.
//Tested recipedataV2[0].RecipeType and it work for 0, 8 and 15 ✅

// function updateRecipePlan(event) {
//   const recipePlan = event.target.value;
//   setRecipePlan(recipePlan);
//    // Select the corresponding data set based on the selected meal option
//   let selectedRecipeData;
//   switch (recipePlan) {
//     case "Saver Plan":
//       selectedRecipeData = recipeDataV2[0].RecipeType;
//       break;
//     case "Classic Plan":
//       selectedRecipeData = recipeDataV2[8].RecipeType;
//       break;
//     case "Premium Plan":
//       selectedRecipeData = recipeDataV2[15].RecipeType
//       break;
//     default:
//       selectedRecipeData = recipeDataV2[0].RecipeType;
//       break;
//   }
//    // Set the selected recipe data
//   setRecipePlan(selectedRecipeData)
// }









  

  
  
//   //PLAN weeklyPrice function
//   //Take in recipe array ✅
//   //Loop through recipeData and sum each items price with [i] ✅
//   //This function will have to be updated eventually for the user Selection ✅
//   function weeklyPrice() {
//     let totalPriceNum = 0;
//     for (let i = 0; i < 6; i++) {
//       // For loop only goes to 6, not whole array
//       totalPriceNum = totalPriceNum + recipeDataV2[i].Price[0];
//     }
//     let totalPrice = Math.round(totalPriceNum * 100) / 100;
//     // weeklyPriceChange(totalPrice);
//     return "£" + totalPrice;
//   }






  return (
    <div>
     {/* {recipes && (
          <>
            {recipes.map((recipe) => (
              <div className="full-recipe-list">
                <h3>{recipe.RecipeName}</h3>
                <p>{recipe.RecipeType}</p>
                <p>{recipe.Instructions}</p>
                
              </div>
            ))}
          </>
        )} */}
       <h1 className="titleHeader">Recipes</h1>
      <img src={saladRice} alt="salad-rice"></img>
      <div className="Orange">
        <p>Your week</p>
        <button data-id="0" onClick={(e) => handleRecipeChange(e.target.dataset.id)} className="SpanClass">
          M
        </button>
        <button data-id="1" onClick={(e) => handleRecipeChange(e.target.dataset.id)} className="SpanClass">
          T
        </button>
        <button data-id="2" onClick={(e) => handleRecipeChange(e.target.dataset.id)} className="SpanClass">
          W
        </button>
        <button data-id="3" onClick={(e) => handleRecipeChange(e.target.dataset.id)} className="SpanClass">
          T
        </button>
        <button data-id="4" onClick={(e) => handleRecipeChange(e.target.dataset.id)} className="SpanClass">
          F
        </button>
        <button data-id="5" onClick={(e) => handleRecipeChange(e.target.dataset.id)} className="SpanClass">
          S
        </button>
        <button data-id="6" onClick={(e) => handleRecipeChange(e.target.dataset.id)} className="SpanClass">
          S
        </button>
        {/* <p>Total Weekly Price: {weeklyPrice()}</p> */}
      </div>

      {/* 
      Render a drop down box with 4 options: 1,2,3,4 
      + Each option needs to change the Price being rendered at the bottom of the recipe
      + Create a function with a switch statement that updates the rendered price based on the drop down option selected
      */}

  {/* <label>Number in Household:</label>
      <select onChange={updateRecipePrice}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
      </select> */}

      {/* <label>Meal Plan:</label>
      <select onChange={updateRecipePlan}>
        <option>Saver</option>
        <option>Classic</option>
        <option>Premium</option>
      </select> */}


    
    

    
      
      <div className="recipeRender">
        <div className="recipeContent">
        
        {dayRecipe && (
          <>
          <h2>{dayRecipe.RecipeName}</h2>
          {dayRecipe.Instructions.map((instruction, index) => {
            return <p key={index}>{instruction}</p>;
          })} 
          </>
        )}

          {/* <h2>Price: £{recipePrice}</h2> */}
        </div>
        <img
          className="foodImage"
          // src={recipes.Photo}
          // alt={recipes.PhotoAlt}
        ></img>
      </div> 
   
    </div>
  );
}

export default Kitchen;
