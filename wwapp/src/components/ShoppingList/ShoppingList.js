




export default function ShoppingList( {weeklyRecipeArray}) {
    return (
       <div data-testid = "shoppingListTestid">
        <h1>Shopping List</h1>
        {console.log(weeklyRecipeArray + " SHOPPING LIST")}
       </div>
    )
}