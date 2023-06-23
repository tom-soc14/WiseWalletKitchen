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
  
      <div className="recipe-household-container" data-testid="familyselectortest">
        <div className="recipe-household-text"></div>
        <div className="recipe-household-dropdown-container">
          <select onChange={handleChange} className="recipe-household-dropdown" defaultValue="">
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
      </div>
     
  );
}