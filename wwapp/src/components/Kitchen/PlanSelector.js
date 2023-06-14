export default function PlanSelector({handlePlanChange}) {
    const plan = [
        {id: "1", name: "Saver"},
        {id: "2", name: "Classic"},
        {id: "3", name: "Exclusive"}
    ];
    return (
        <>
        <div>
            {plan.map((plan)=>(
                <button
                key={plan.id}
                data-id={plan.id}
                onClick={(e)=> handlePlanChange(e.target.dataset.id)}
                className="SpanClass">{plan.name}</button>
            ))}
        </div>
        </>
    )
}