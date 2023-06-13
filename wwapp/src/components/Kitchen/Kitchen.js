import "./Kitchen.css";
import DaySelector from "./DaySelector.js";
import RecipeRender from "./RecipeRender.js";

export default function Kitchen({ handleRecipeChange, dayRecipe }) {
  return (
    <>
      <h1 className="titleHeader">Recipes</h1>
      <p>Your week</p>
      <div className="Orange">
        <DaySelector
          dayRecipe={dayRecipe}
          handleRecipeChange={handleRecipeChange}
        />
      </div>

      <div className="recipeRender">
        <div className="recipeContent">
          <RecipeRender dayRecipe={dayRecipe} />
        </div>
      </div>
    </>
  );
}
