



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
  setWeeklyRecipeArray,
}) {
  // Render components -----------------

  return (
    
      <div className="Kitchen-Container" data-testid="kitchenComponentTest">
        <div className="Kitchen-Title-Container">
          <h2 className="Kitchen-Title">Your Kitchen, your recipes...</h2>
        </div>

        <div className="Kitchen-Household-And-Plan-Container">

          <RecipePlanSelector handlePlanChange={handlePlanChange} plan={plan} />
          
          <FamilySelector handleFamilySize={handleFamilySize} />

        </div>
          
            <DaySelector
              dayRecipe={dayRecipe}
              handleRecipeChange={handleRecipeChange}
            />
          
        

        
          <RecipeRender dayRecipe={dayRecipe} familySize={familySize} />
          <WeeklyPlan
            plan={plan}
            recipes={recipes}
            setWeeklyRecipeArray={setWeeklyRecipeArray}
          />
        
      </div>
  );
}
