import "./Kitchen.css";
import DaySelector from "./KitchenChildren/DaySelector.js";
import RecipeRender from "./KitchenChildren/RecipeRender.js";
import FamilySelector from "./KitchenChildren/FamilySelector.js";
import RecipePlanSelector from "./KitchenChildren/RecipePlanSelector.js";
import WeeklyPlan from "./KitchenChildren/WeeklyPlan.js";

// Props -----------------------
export default function Kitchen({
  handleRecipeChange,
  dayRecipe,
  handleFamilySize,
  familySize,
  handlePlanChange,
  plan, 
  recipes, 
  setWeeklyRecipeArray
}) {
  // Render components -----------------
  return (
    <>
      <h1 className="titleHeader">Recipes</h1>
      <p>Your week</p>
      <div className="Orange">
      <RecipePlanSelector handlePlanChange={handlePlanChange} plan={plan} />
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
          <RecipeRender dayRecipe={dayRecipe} familySize={familySize}/>
          <WeeklyPlan plan={plan} recipes={recipes} setWeeklyRecipeArray={setWeeklyRecipeArray}/>
        </div>
      </div>
    </>
  );
}
