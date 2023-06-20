export default function FamilySelector({ handleFamilySize }) {
  // Identify different plan buttons
  const size = [
    { id: "0", name: "1" },
    { id: "1", name: "2" },
    { id: "2", name: "3" },
    { id: "3", name: "4" },
  ];
  return (
      <div data-testid="familyselectortest">
        <h3>Choose you family size:</h3>
        {size.map((size) => (
          <button
            key={size.id}
            data-id={size.id}
            onClick={(e) => handleFamilySize(e.target.dataset.id)}
            className="SpanClass"
          >
            {size.name}
          </button>
        ))}
      </div>
  );
}
