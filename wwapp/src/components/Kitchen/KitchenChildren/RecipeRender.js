// RecipeRender.js
export default function RecipeRender({ dayRecipe, familySize }) {
  //we want a fn that takes in day of the week, size of family and the plan type and to render the appropriate data on the page 




  // Render recipe data -------------------
  return (
    <div className="recipeContent">
      {dayRecipe && (
        <>
          <h2>{dayRecipe.RecipeName}</h2>
          <h3>{dayRecipe.RecipeType}</h3>
          <p>£{dayRecipe.RecipePrice[familySize]}</p>
          {dayRecipe.Instructions.map((instruction, index) => {
            return <p key={index}>{instruction}</p>;
          })}
        </>
      )}
    </div>
  );
}
