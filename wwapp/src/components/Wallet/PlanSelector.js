export default function PlanSelector({ handlePlanChange }) {
  const plan = [
    { id: "Saver", name: "Saver" },
    { id: "Classic", name: "Classic" },
    { id: "Exclusive", name: "Exclusive" },
  ];
  return (
    <>
      <div>
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
    </>
  );
}
