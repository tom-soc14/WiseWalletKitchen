// RecipeRender.js
export default function RecipeRender({ dayRecipe, familySize }) {
  //we want a fn that takes in day of the week, size of family and the plan type and to render the appropriate data on the page

  if (dayRecipe === null) {
    return (
      <div>
        <h1 className="Generic-Title">
          Choose your options above
        </h1>
        <img
          className="kitchen-get-started-image"
          src="https://images.pexels.com/photos/4259140/pexels-photo-4259140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="family-cooking-together-in-kitchen"
        />
        <h1 className="Generic-Title">
        For the right recipe for the right price
        </h1>
      </div>
    );
  } else {
    // Render recipe data -------------------
    return (
   
        <div className="Recipe-Container" data-testid="recipeRenderTest">
          {dayRecipe && (
            <>
            <div className="recipe-name-container">
              <h2 className="recipe-name">{dayRecipe.RecipeName}</h2></div>
              <div className="Recipe-Timings-Container">
                <h4>Prep: {dayRecipe.PrepTime}</h4>
                <h4>Cooking: {dayRecipe.CookingTime}</h4>
              </div>
              {/* <h3 className="recipe-type">Meal plan: {dayRecipe.RecipeType}</h3> */}
              <div className="recipe-image-container">
                <img src={dayRecipe.Photo} alt={dayRecipe.PhotoAlt} className="recipe-image"/>
              </div>
              <div className="recipe-ingredients-container">
                {dayRecipe.IngredientUsage.map((ingredient, index) => {
                  return (
                    <ul key={index}>
                      <li>
                        {ingredient.Amount[familySize]}{" "} - {" "}
                        {ingredient.IngredientName} -  £
                        {ingredient.Price[familySize].toFixed(2)}
                      </li>
                    </ul>
                  );
                })}
              </div>
              <div className="recipe-instructions-container">
                <h3>Instructions:</h3>
                {dayRecipe.Instructions.map((instruction, index) => {
                  return <p key={index}>{instruction}</p>;
                })}
              </div>

              <div className="Recipe-Price-Container" >
                <h3>Total Price: £{dayRecipe.RecipePrice[familySize].toFixed(2)}</h3>
              </div>
            </>
          )}
        </div>
       
    
    );
  }
}

