export default function BudgetInput({ handleInputChange }) {
  // This code block prevents letter being used in input box & limits to 3 characters
  const validateInput = (event) => {
    const regex = /^[0-9]{1,3}$/; // regular expression to allow only 1 to 3 numerical characters
    if (!regex.test(event.target.value)) {
      event.target.value = ""; // clear the input if it does not match the regular expression
    }
    handleInputChange(event);
  };

  return (
    <form>
      <div className="wallet-budget-input-div">
        <label htmlFor="fname"></label>
        <input
          className="wallet-budget-input"
          type="text"
          id="fname"
          name="fname"
          onChange={validateInput}
          maxLength={3}
        />
        <br />
      </div>
    </form>
  );
}
