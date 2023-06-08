import saladRice from './img/saladRice.jpeg';
import './Kitchen.css'
import recipeData from './recipeData';
import { useState } from 'react';

/* Plan
- on each click of a button, a diferrent recipe in the array should render
-  use of useState
- a function needed to update useState
- each button needs an id to be able to pass to that function
- we render the instruction variable from useState underneath 
*/

function Kitchen() {
const [recipe, setRecipe] = useState(recipeData[0]);



function updateDayRecipe(event) {

    setRecipe(recipeData[event.target.dataset.id])
}

//PLAN weeklyPrice function
//Take in recipe array
//Loop through recipeData and sum each items price with [i]
//This function will have to be updated eventually for the user Selection.

function weeklyPrice() {
    let totalPriceNum = 0;
for (let i = 0; i<recipeData.length; i++) {
    totalPriceNum = totalPriceNum + recipeData[i].Price;
}

let totalPrice = Math.round(totalPriceNum*100)/100;
  return ("£" + totalPrice);
}




    return (
        <div>
        <h1 className="titleHeader">Recipes</h1>
        <img src ={saladRice} alt="salad-rice"></img>
            <div className="Orange">
                <p>Your week</p>   
                <button data-id="0" onClick={updateDayRecipe} className="SpanClass">M</button>
                <button data-id="1" onClick={updateDayRecipe} className="SpanClass">T</button>
                <button data-id="2" onClick={updateDayRecipe} className="SpanClass">W</button>
                <button data-id="3" onClick={updateDayRecipe} className="SpanClass">T</button>
                <button data-id="4" onClick={updateDayRecipe} className="SpanClass">F</button>
                <button data-id="5" onClick={updateDayRecipe} className="SpanClass">S</button>
                <button data-id="6" onClick={updateDayRecipe} className="SpanClass">S</button>
                <p>Total Weekly Price: {weeklyPrice()}</p>
            </div>
            <div className="recipeRender">
                <div className="recipeContent">
                    <h2>{recipe.RecipeName}</h2>
                    {recipe.Instructions.map((instruction, index) => {
                        return <p key={index}>{instruction}</p>
                    })}
                    
                    <h2>Price: £{recipe.Price}</h2>
                </div>
                <img className="foodImage" src ={recipe.Photo} alt = {recipe.PhotoAlt}></img>
            </div>
        </div>
    )}

    export default Kitchen;