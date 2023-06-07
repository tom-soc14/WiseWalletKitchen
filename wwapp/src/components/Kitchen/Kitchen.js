import saladRice from './saladRice.jpeg';
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
const [recipe, setRecipe] = useState(recipeData);
console.log(recipe);

function updateDayRecipe(event) {
    console.log(event.target.dataset.id);
    console.log(recipeData[event.target.dataset.id])
    setRecipe(recipeData[event.target.dataset.id])
    
}

    return (
        <div>
        <h1>Your Recipes</h1>
        <img src ={saladRice} alt="salad-rice"></img>
            <div className="Orange">
                <p>Your week</p>
                <button data-id="0" onClick={updateDayRecipe} className="SpanClass">M</button>
                <button data-id="1" onClick={updateDayRecipe} className="SpanClass">T</button>
                <button data-id="2" onClick={updateDayRecipe} className="SpanClass">W</button>
                <button data-id="3" onClick={updateDayRecipe} className="SpanClass">T</button>
                <button data-id="4" onClick={updateDayRecipe} className="SpanClass">F</button>
                <button className="SpanClass">S</button>
                <button className="SpanClass">S</button>
            </div>
            <h2>{recipe.RecipeName}</h2>
        <p>{recipe.Instructions}</p>
        </div>
    )}

    export default Kitchen;