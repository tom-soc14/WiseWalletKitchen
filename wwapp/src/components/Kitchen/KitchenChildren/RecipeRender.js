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
    <>

    <div className="recipeContent">
      {dayRecipe && (
        <>
          <h2>{dayRecipe.RecipeName}</h2>
          <h3>{dayRecipe.RecipeType}</h3>
          <img src={dayRecipe.Photo} alt={dayRecipe.PhotoAlt} />
          {dayRecipe.Instructions.map((instruction, index) => {
            return <p key={index}>{instruction}</p>;
          })}
          {dayRecipe.IngredientUsage.map((ingredient, index)=>{
  return <ul>
<li key={index}>{ingredient.Amount[familySize]} {ingredient.IngredientName} - Cost £{ingredient.Price[familySize]} </li>
  </ul> 
})}
<p>Total Price: £{dayRecipe.RecipePrice[familySize]}</p>
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
    </>
  );
}
}
