export default function RecipePlanSelector({ handlePlanChange }) {
  const plan = [
    { id: "Saver", name: "Saver" },
    { id: "Classic", name: "Classic" },
    { id: "Premium", name: "Premium" },
  ];
  return (
      <div data-testid="recipeplanselectortest">
        {plan.map((plan) => (
          <button
            key={plan.id}
            data-id={plan.id}
            onClick={(e) => handlePlanChange(e.target.dataset.id)}
            className="SpanClass"
          >
            {plan.name}
          </button>
        ))}
      </div>
  );
}
