export default function RecipeRender(props) {
    return (
        <div className="recipeContent">

        {props.dayRecipe && (
          <>
          <h2>{props.dayRecipe.RecipeName}</h2>
          {props.dayRecipe.Instructions.map((instruction, index) => {
            return <p key={index}>{instruction}</p>;
          })} 
          </>
        )}
        </div>
    )
}