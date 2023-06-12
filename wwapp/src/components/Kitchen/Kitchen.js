
import saladRice from "./img/saladRice.jpeg";
import "./Kitchen.css";

import recipeDataV2 from "./recipeDataV2.js";
import { useState } from "react";

// To Do - 08/09/2023
// Integrate the recipeDataV2 into the Kitchen.js ✅
// Render a drop down menu with 4 options
// Change the Total price with each selection of the drop down menu

// To Do - 09/09/2023
// Render a drop down menu with 4 different options
// 1, 2, 3, 4 people
// Have the drop down option update the state of the total price calculator to the index the array

/* Plan
- on each click of a button, a diferrent recipe in the array should render
-  use of useState
- a function needed to update useState
- each button needs an id to be able to pass to that function
- we render the instruction variable from useState underneath 
*/
console.log(recipeDataV2);


function Kitchen({ weeklyPriceChange }) {
  const [recipe, setRecipe] = useState(recipeDataV2[0]);
  const [recipePrice, setRecipePrice] = useState(recipeDataV2[0].Price[0]);
  const [selectedValue, setSelectedValue] = useState([0])



/*
The code below is looking at the event.target.value which corresponds to 
The Number in Household options 1,2,3,4. However because we are dealing
with an array we cannot use those numbers directly as arrays start counting
at 0. Because of this we use a switch statement below to change each value
down one e.g 1 to 0, 2 to 1 etc, that way the position in the array for the 
Price is correct.
*/

function updateRecipePrice(event) {
  const selectedValue = parseInt(event.target.value) -1;
  setSelectedValue(selectedValue);
  setRecipePrice(recipe.Price[selectedValue]);
}

function updateDayRecipe(event) {
  const recipeIndex = parseInt(event.target.dataset.id);
  setRecipe(recipeDataV2[recipeIndex]);
  setRecipePrice(recipeDataV2[recipeIndex].Price[selectedValue]);
}

  //PLAN weeklyPrice function
  //Take in recipe array ✅
  //Loop through recipeData and sum each items price with [i] ✅
  //This function will have to be updated eventually for the user Selection ✅
  function weeklyPrice() {
    let totalPriceNum = 0;
    for (let i = 0; i < 6; i++) {
      // For loop only goes to 6, not whole array
      totalPriceNum = totalPriceNum + recipeDataV2[i].Price[0];
    }
    let totalPrice = Math.round(totalPriceNum * 100) / 100;
    weeklyPriceChange(totalPrice);
    return "£" + totalPrice;
  }

  return (
    <div>
      <h1 className="titleHeader">Recipes</h1>
      <img src={saladRice} alt="salad-rice"></img>
      <div className="Orange">
        <p>Your week</p>
        <button data-id="0" onClick={updateDayRecipe} className="SpanClass">
          M
        </button>
        <button data-id="1" onClick={updateDayRecipe} className="SpanClass">
          T
        </button>
        <button data-id="2" onClick={updateDayRecipe} className="SpanClass">
          W
        </button>
        <button data-id="3" onClick={updateDayRecipe} className="SpanClass">
          T
        </button>
        <button data-id="4" onClick={updateDayRecipe} className="SpanClass">
          F
        </button>
        <button data-id="5" onClick={updateDayRecipe} className="SpanClass">
          S
        </button>
        <button data-id="6" onClick={updateDayRecipe} className="SpanClass">
          S
        </button>
        <p>Total Weekly Price: {weeklyPrice()}</p>
      </div>

      {/* 
      Render a drop down box with 4 options: 1,2,3,4 
      + Each option needs to change the Price being rendered at the bottom of the recipe
      + Create a function with a switch statement that updates the rendered price based on the drop down option selected
      */}

      
      <label>Number in Household:</label>
      <select onChange={updateRecipePrice}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
      </select>

      <div className="recipeRender">
        <div className="recipeContent">
          <h2>{recipe.RecipeName}</h2>
          {recipe.Instructions.map((instruction, index) => {
            return <p key={index}>{instruction}</p>;
          })}

          <h2>Price: £{recipePrice}</h2>
        </div>
        <img
          className="foodImage"
          src={recipe.Photo}
          alt={recipe.PhotoAlt}
        ></img>
      </div>
    </div>
  );
}

export default Kitchen;
