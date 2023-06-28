export default function FamilySelector({ handleFamilySize }) {
  const size = [
    { id: "0", name: "1" },
    { id: "1", name: "2" },
    { id: "2", name: "3" },
    { id: "3", name: "4" },
  ];

  const handleChange = (e) => {
    handleFamilySize(e.target.value);
  };

  return (
    <div data-testid="familyselectortest">
      <select
        onChange={handleChange}
        className="recipe-plan-dropdown"
        defaultValue=""
        aria-label="select-people-in-household"
      >
        <option value="" disabled>
          Household
        </option>
        {size.map((size) => (
          <option key={size.id} value={size.id}>
            {size.name}
          </option>
        ))}
      </select>
    </div>
  );
}
