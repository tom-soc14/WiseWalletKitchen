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
    <div data-testid="recipeplanselectortest">
      <select
        onChange={handleChange}
        className="recipe-plan-dropdown"
        defaultValue=""
        aria-label="pick-your-recipe-plan"
      >
        <option value="" disabled>
          Plan
        </option>
        {plan.map((plan) => (
          <option key={plan.id} value={plan.id}>
            {plan.name}
          </option>
        ))}
      </select>
    </div>
  );
}
