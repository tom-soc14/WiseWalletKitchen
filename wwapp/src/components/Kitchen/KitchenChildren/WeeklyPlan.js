import { useEffect } from "react";

export default function WeeklyPlan({ recipes, plan, setWeeklyRecipeArray }) {
  useEffect(() => {
    let weeklyPlanRecipes = [];

    if (recipes && recipes.length > 0) {
      for (let i = 0; i < recipes.length; i++) {
        if (recipes[i].RecipeType === plan) {
          weeklyPlanRecipes.push(recipes[i]);
        }
      }
    } else {
    }

    setWeeklyRecipeArray(weeklyPlanRecipes);
  }, [recipes, plan, setWeeklyRecipeArray]);

  return <></>;
}
