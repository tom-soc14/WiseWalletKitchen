export default function RenderPlan({ recipes, plan }) {
  // Filter recipes by plan -------------------
  // let filteredRecipes = recipes.filter(recipe => recipe.RecipeType === plan);
  // let recipeNames = filteredRecipes.map(recipe => recipe.RecipeName);

  // Render recipe data -------------------
  return (
    <div className="recipeContent">
      <h2>{plan}</h2>
      <h3>£</h3>
    </div>
  );
}
