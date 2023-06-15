import "./Kitchen.css";
import DaySelector from "./DaySelector.js";
import RecipeRender from "./RecipeRender.js";
import FamilySelector from "./FamilySelector.js";
import RecipePlanSelector from "./RecipePlanSelector.js";

// Props -----------------------
export default function Kitchen({
  handleRecipeChange,
  dayRecipe,
  handleFamilySize,
  familySize,
  handlePlanChange
}) {
  // Render components -----------------
  return (
    <>
      <h1 className="titleHeader">Recipes</h1>
      <p>Your week</p>
      <div className="Orange">
      <RecipePlanSelector handlePlanChange={handlePlanChange}/>
      <div>
        <FamilySelector handleFamilySize={handleFamilySize} />
      </div>
        <DaySelector
          dayRecipe={dayRecipe}
          handleRecipeChange={handleRecipeChange}
        />
      </div>
      
      <div className="recipeRender">
        <div className="recipeContent">
          <RecipeRender dayRecipe={dayRecipe} familySize={familySize} />
        </div>
      </div>
    </>
  );
}
