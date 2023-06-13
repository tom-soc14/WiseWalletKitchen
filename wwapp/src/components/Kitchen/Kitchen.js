import "./Kitchen.css";
import DaySelector from './DaySelector.js'

function Kitchen({ handleRecipeChange, dayRecipe }) {

return (
    <div>
       <h1 className="titleHeader">Recipes</h1>
       <p>Your week</p>
       <div className="Orange">
       <DaySelector dayRecipe={dayRecipe} handleRecipeChange={handleRecipeChange}/>
      

       
        {/* <button data-id="0" onClick={(e) => handleRecipeChange(e.target.dataset.id)} className="SpanClass">
          M
        </button>
        <button data-id="1" onClick={(e) => handleRecipeChange(e.target.dataset.id)} className="SpanClass">
          T
        </button>
        <button data-id="2" onClick={(e) => handleRecipeChange(e.target.dataset.id)} className="SpanClass">
          W
        </button>
        <button data-id="3" onClick={(e) => handleRecipeChange(e.target.dataset.id)} className="SpanClass">
          T
        </button>
        <button data-id="4" onClick={(e) => handleRecipeChange(e.target.dataset.id)} className="SpanClass">
          F
        </button>
        <button data-id="5" onClick={(e) => handleRecipeChange(e.target.dataset.id)} className="SpanClass">
          S
        </button>
        <button data-id="6" onClick={(e) => handleRecipeChange(e.target.dataset.id)} className="SpanClass">
          S
        </button> */}
      </div>

  {/* <label>Number in Household:</label>
      <select onChange={(e) => handlePriceChange(e.target.value)}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
      </select> */}

      <div className="recipeRender">
        <div className="recipeContent">

        {dayRecipe && (
          <>
          <h2>{dayRecipe.RecipeName}</h2>
          {dayRecipe.Instructions.map((instruction, index) => {
            return <p key={index}>{instruction}</p>;
          })} 
          </>
        )}

          {/* <h2>Price: £{recipePrice}</h2> */}
        </div>
      </div> 
   
    </div>
  );
}

export default Kitchen;
