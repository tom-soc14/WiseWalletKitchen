// RecipeRender.js
export default function RecipeRender({ dayRecipe, familySize }) {
  //we want a fn that takes in day of the week, size of family and the plan type and to render the appropriate data on the page 

if (dayRecipe === null) {
  return (
    <h1>Choose your plan and day...</h1>
  )
} else {


  // Render recipe data -------------------
  return (
    <div data-testid="recipeRenderTest">

    <div className="recipeContent">
      {dayRecipe && (
        <>
          <h2>{dayRecipe.RecipeName}</h2>
          <h3>{dayRecipe.RecipeType}</h3>

          <img src={dayRecipe.Photo} alt={dayRecipe.PhotoAlt} />

          <h3>Preparation time: {dayRecipe.PrepTime}</h3>
          <h3>Cooking time: {dayRecipe.CookingTime}</h3>

          <br></br>

          <h4>Ingredient List:</h4>
          {dayRecipe.IngredientUsage.map((ingredient, index)=>{
            return <ul>
                      <li key={index}>{ingredient.Amount[familySize]} {ingredient.IngredientName} - Cost £{ingredient.Price[familySize]} </li>
                  </ul> 
              })}

          <br></br>
          
          <h4>Instructions:</h4>
          {dayRecipe.Instructions.map((instruction, index) => {
            return <p key={index}>{instruction}</p>;
          })}

          <br></br>

          <h3>Total Price: £{dayRecipe.RecipePrice[familySize]}</h3>

          <br></br>

        </>
      )}
    </div>
    {/* <div className='ingredientContent'>
      {dayRecipe && (
        <>
{dayRecipe.IngredientUsage.map((ingredient, index)=>{
  return <p key={index}>{ingredient}</p>
})}
</>
      )}
      
    </div> */}
    <div className='photoContent'>
  
       <p></p>
    </div>
    </div>
  );
}
}
