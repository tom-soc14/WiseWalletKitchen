export default function RenderPlan({ plan, familySize }) {



  // Render recipe data -------------------
  return (
    <div className="recipeContent">
      <h2>{plan}</h2>
      <p>{familySize}</p>
      <h3>£</h3>
    </div>
  );
}
