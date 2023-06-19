import { useEffect } from "react";

export default function WeeklyPlan({ recipes, plan, setWeeklyRecipeArray }) {
  useEffect(() => {
    let weeklyPlanRecipes = [];

    if (recipes && recipes.length > 0) {
      console.log("recipes data in weekly plan:", recipes);

      for (let i = 0; i < recipes.length; i++) {
        if (recipes[i].RecipeType === plan) {
          weeklyPlanRecipes.push(recipes[i]);
          console.log("test:", weeklyPlanRecipes);
        }
      }
    } else {
      console.log("no data yet");
    }

    setWeeklyRecipeArray(weeklyPlanRecipes);
  }, [recipes, plan, setWeeklyRecipeArray]);

  
  return <></>;
}
