// RecipeRender.js
export default function RecipeRender({ dayRecipe, familySize }) {
  //we want a fn that takes in day of the week, size of family and the plan type and to render the appropriate data on the page 

if (dayRecipe === null) {
  return (
    <div className="kitchen-get-started-container">
    <h1 className="kitchen-get-started-text">Pick your plan, household size and day of the week & start cooking up something wonderful!</h1>
    <img className="kitchen-get-started-image" src="https://images.pexels.com/photos/4259140/pexels-photo-4259140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="family-cooking-together-in-kitchen"/>
    </div>
  )
} else {


  // Render recipe data -------------------
  return (
    <>

    <div className="Recipe-Container">
      {dayRecipe && (
        <>
          <h2 className="recipe-name">{dayRecipe.RecipeName}</h2>
          {/* <h3 className="recipe-type">Meal plan: {dayRecipe.RecipeType}</h3> */}

          <img src={dayRecipe.Photo} alt={dayRecipe.PhotoAlt} />
<div className="Recipe-Timings-Container">
          <h3>Preparation time: {dayRecipe.PrepTime}</h3>
          <h3>Cooking time: {dayRecipe.CookingTime}</h3>

          
</div>
<div className="Recipe-Ingredients-Container">
          <h4>Ingredient List:</h4>
          {dayRecipe.IngredientUsage.map((ingredient, index)=>{
            return <ul>
                      <li key={index}>{ingredient.Amount[familySize]} {ingredient.IngredientName} - Cost £{ingredient.Price[familySize]} </li>
                  </ul> 
              })}

         
        </div>  
        <div className="Recipe-Instructions-Container">
          <h4>Instructions:</h4>
          {dayRecipe.Instructions.map((instruction, index) => {
            return <p key={index}>{instruction}</p>;
          })}
</div>
          
<div className="Recipe-Price-Container">
          <h3>Total Price: £{dayRecipe.RecipePrice[familySize]}</h3>

          </div>

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
