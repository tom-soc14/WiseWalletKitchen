
export default function BudgetInput({handleInputChange}) {

    return (
      <form>
        <div className="wallet-budget-input-div">
        <label htmlFor="fname"></label>
        <input className="wallet-budget-input" type="text" id="fname" name="fname" onChange={handleInputChange} /><br />
        </div>
      </form>
    );
  }