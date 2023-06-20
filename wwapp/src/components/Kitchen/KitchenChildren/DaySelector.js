export default function DaySelector({ handleRecipeChange }) {
  // |Identify different day buttons ------------------
  const days = [
    { id: "0", name: "M" },
    { id: "1", name: "T" },
    { id: "2", name: "W" },
    { id: "3", name: "T" },
    { id: "4", name: "F" },
    { id: "5", name: "S" },
    { id: "6", name: "S" },
  ];

  // Renders the button Mon to Fri
  return (
    <div data-testid="daySelectorComponentTest">
      <div  className="Orange">
        <h3>Choose you day of the week</h3>
        {days.map((day) => (
          <button
            key={day.id}
            data-id={day.id}
            onClick={(e) => handleRecipeChange(e.target.dataset.id)}
            className="SpanClass"
          >
            {day.name}
          </button>
        ))}
      </div>
    </div>
  );
}
