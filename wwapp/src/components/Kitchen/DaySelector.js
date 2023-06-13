export default function DaySelector(props) {
    const days = [
      { id: "0", name: "M" },
      { id: "1", name: "T" },
      { id: "2", name: "W" },
      { id: "3", name: "T" },
      { id: "4", name: "F" },
      { id: "5", name: "S" },
      { id: "6", name: "S" },
    ];
     return (
      <>
        <div className="Orange">
          {days.map((day) => (
            <button
              key={day.id}
              data-id={day.id}
              onClick={(e) => props.handleRecipeChange(e.target.dataset.id)}
              className="SpanClass"
            >
              {day.name}
            </button>
          ))}
        </div>
      </>
    );
  }