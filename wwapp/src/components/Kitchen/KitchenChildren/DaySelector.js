export default function DaySelector({ handleRecipeChange }) {
  // |Identify different day buttons ------------------
  const days = [
    { id: "0", name: "Mon" },
    { id: "1", name: "Tue" },
    { id: "2", name: "Wed" },
    { id: "3", name: "Thu" },
    { id: "4", name: "Fri" },
    { id: "5", name: "Sat" },
    { id: "6", name: "Sun" },
  ];

  // Renders the button Mon to Fri
  return (
  
  

        <div className="day-selector-buttons-container" data-testid="daySelectorComponentTest">

         {days.map((day) => (
            <button
              key={day.id}
              data-id={day.id}
              onClick={(e) => handleRecipeChange(e.target.dataset.id)}
              className="day-button"
              aria-label="select-which-day-of-the-week"
          >
            {day.name}  
          </button>
        ))}

      </div>

  );
}
