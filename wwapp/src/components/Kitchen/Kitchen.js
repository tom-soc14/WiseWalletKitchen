// import "./Kitchen.css";
import DaySelector from "./DaySelector.js";
import RecipeRender from "./RecipeRender.js";
import FamilySelector from "./FamilySelector.js";
import fruitPicture from "../Wallet/fruitPicture.jpg";

// Props -----------------------
export default function Kitchen({
  handleRecipeChange,
  dayRecipe,
  handleFamilySize,
  familySize,
}) {
  // Render components -----------------
  return (
    <>
      <h1 className="titleHeader">Recipes</h1>
      <p>Your week</p>
      <div className="Orange">
        <DaySelector
          dayRecipe={dayRecipe}
          handleRecipeChange={handleRecipeChange}
        />
      </div>
      <div>
        <FamilySelector handleFamilySize={handleFamilySize} />
      </div>
      <div className="recipeRender">
        <div className="recipeContent">
          <RecipeRender dayRecipe={dayRecipe} familySize={familySize} />
        </div>
      </div>
      <footer>
        <img src={fruitPicture} alt="fruit" className="WalletPageImg" />
      </footer>
    </>
  );
}
