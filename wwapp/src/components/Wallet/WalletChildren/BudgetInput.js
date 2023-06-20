
export default function BudgetInput({handleInputChange}) {

    return (
      <form>
        <label htmlFor="fname"></label>
        <input className="wallet-budget-input" type="text" id="fname" name="fname" onChange={handleInputChange} /><br />
      </form>
    );
  }