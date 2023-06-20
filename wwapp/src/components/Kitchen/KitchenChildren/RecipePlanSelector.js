export default function RecipePlanSelector({ handlePlanChange }) {
  const plan = [
    { id: "Saver", name: "Saver" },
    { id: "Classic", name: "Classic" },
    { id: "Premium", name: "Premium" },
  ];

  const handleChange = (e) => {
    handlePlanChange(e.target.value);
  };

  return (
    <>
      <div className="recipe-plan-selector-container">
        
        <div className="recipe-plan-dropdown-container">
          <select onChange={handleChange} className="recipe-plan-dropdown">
            <option disabled selected value="">
              Select plan
            </option>
            {plan.map((plan) => (
              <option key={plan.id} value={plan.id}>
                {plan.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}
