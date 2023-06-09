import saladRice from './saladRice.jpeg';
import './Kitchen.css'
import recipeData from './recipeData.js'

function Kitchen() {



    return (
        <div>
        <h1>Your Recipes</h1>
        <img src ={saladRice}></img>
            <div className="Orange">
                <p>Your week</p>
                <span className="SpanClass">M</span>
                <span className="SpanClass">T</span>
                <span className="SpanClass">W</span>
                <span className="SpanClass">T</span>
                <span className="SpanClass">F</span>
                <button className="SpanClass">S</button>
                <button className="SpanClass">S</button>
            </div>
            <h2>{recipeData[0].RecipeName}</h2>
        <p>{recipeData[0].Instructions}</p>
        </div>
    )}

    export default Kitchen;