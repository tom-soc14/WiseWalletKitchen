import React from "react";
import Graph from "./graph.js";
//import fruitPicture from "./fruitPicture.jpg";
import PlanSelector from "./PlanSelector.js";

import WalletFamilySelector from "./WalletFamilySelector.js";
import BudgetInput from "./BudgetInput.js";
import { useState } from "react";

export const weeklySaverCost = [22, 29, 40.5, 49];
export const weeklyClassicCost = [91, 110, 129, 148];
export const weeklyExclusiveCost = [158, 183, 207, 231];
// render the Wallet page
export default function Wallet({
  handlePlanChange,
  plan,
  handleFamilySize,
  familySize,
}) {
  const [budget, setBudget] = useState(0);

  let totalCost = 0;

  const costs = {
    Saver: weeklySaverCost,
    Classic: weeklyClassicCost,
    Exclusive: weeklyExclusiveCost,
  };
  totalCost = costs[plan][familySize];

  let savings = budget - totalCost;

  const handleInputChange = (e) => {
    setBudget(e.target.value);
  };

  return (
    <div className="WalletPage">
      {/* <p>{props.weeklyPrice}</p> */}
      <div className="WalletPageTitle">
        <h1>Savings</h1>
      </div>

      <div className="WalletPageInfoBox">
        <div className="WalletPageInfoContents">
          <h2>Enter your budget:</h2>

          <BudgetInput handleInputChange={handleInputChange} />

          <h3>Your budget is £{budget}</h3>

          <PlanSelector handlePlanChange={handlePlanChange} />

          <h3>Your plan is {plan}</h3>
          
          <WalletFamilySelector handleFamilySize={handleFamilySize} />
          
          <h2>Weekly Cost of Plan £{totalCost}</h2>
          <h2>This week you will save: £{savings}</h2>
          <h5>*Compared to the National Average</h5>
        </div>
        {/* display graph component */}
        <div className="WalletPageInfoGraph">
          <Graph />
        </div>
      </div>
      {/* Removed the Footer to put it in App.js */}
      {/* 
      <footer>
        <img src={fruitPicture} alt="fruit" className="WalletPageImg" />
      </footer> 
      */}
    </div>
  );
}

// // calculate the user savings
// function calculateSavings() {
//   let userSavings = averageWeeklySpend - weeklyPlanCost;
//   let userSavingDecimal = Math.round(userSavings*100)/100;
//   return userSavingDecimal;
// }

// calculate the monthly savings
// function calculateMonthlySavings() {
//   let userSavings = calculateSavings();
//   let monthlySavings = userSavings * weeklySpend.length;
//   return monthlySavings;
// }
