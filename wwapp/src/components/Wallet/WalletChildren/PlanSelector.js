export default function PlanSelector({ handlePlanChange }) {
  const plan = [
    { id: "Saver", name: "Saver" },
    { id: "Classic", name: "Classic" },
    { id: "Premium", name: "Premium" },
  ];
  return (
    <>
      <div>
        {plan.map((plan) => (
          <button
            key={plan.id}
            data-id={plan.id}
            onClick={(e) => handlePlanChange(e.target.dataset.id)}
            className="Button"
          >
            {plan.name}
          </button>
        ))}
      </div>
    </>
  );
}
