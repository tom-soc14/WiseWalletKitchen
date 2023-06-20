import React from "react";


import Graph from "./WalletChildren/graph.js";
import PlanSelector from "./WalletChildren/PlanSelector.js";
import WeeklyCostCalculator from "./WalletChildren/WeeklyCostCalculator.js";
import WalletFamilySelector from "./WalletChildren/WalletFamilySelector.js";
import BudgetInput from "./WalletChildren/BudgetInput.js";
import { useState } from "react";


// render the Wallet page
export default function Wallet({
  handlePlanChange,
  plan,
  handleFamilySize,
  familySize,
  walletData
}) {
  const [budget, setBudget] = useState(0);
  const [cost, setCost] = useState(0);

  // average weekly spend for 1,2,3,4 people
  // source: https://www.nimblefins.co.uk/average-uk-household-cost-food#week
  const averageWeeklySpendArray = [45, 96, 132, 167];
  const averageWeeklySpend = averageWeeklySpendArray[familySize];

  //event handler for text input to set the users budget
  const handleInputChange = (e) => {
    setBudget(e.target.value);
  };

  //function to handle the total cost and calculation
  const handleCostChange = (newCost) => {
    setCost(newCost);
  };
  const savings = budget - cost;
  const calculateWeeklySavings = Math.round(savings * 100) / 100;


  return (
    <div className="WalletPage">
      {/* <p>{props.weeklyPrice}</p> */}

      <h1 className="WalletPageTitle">Savings</h1>
      <div className="WalletPageInfoBox">
        <div className="WalletPageInfoContents">
          <h1 className="wallet-info-text">Enter your budget:</h1>
          <BudgetInput handleInputChange={handleInputChange} />
          <h2 className="wallet-info-text">Your budget is £{budget}</h2>
          <PlanSelector handlePlanChange={handlePlanChange} />

          <h3 className="wallet-info-text">Your plan is {plan}</h3>
          
          <WalletFamilySelector handleFamilySize={handleFamilySize} />
          
          <h2 className="wallet-info-text">Weekly Cost of Plan £{cost}</h2>
          <h2 className="wallet-info-text">This week you will save: £{savings}</h2>
          <h5 className="wallet-info-text">*Compared to the National Average</h5>

        </div>

        {/* display graph component */}

        {/* <div className="WalletPageInfoGraph"> */}
          <Graph
            cost={cost}
            averageWeeklySpend={averageWeeklySpend}
            calculateWeeklySavings={calculateWeeklySavings}
          />
        {/* </div> */}
      </div>
    
      <WeeklyCostCalculator
        walletData={walletData}
        familySize={familySize}
        plan={plan}
        onCostChange={handleCostChange}
      />

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

//Below has been moved into weeklycostcalculator component and no longer need hard coded data
// export const weeklySaverCost = [22, 29, 40.5, 49];
// export const weeklyClassicCost = [91, 110, 129, 148];
// export const weeklyPremiumCost = [158, 183, 207, 231];
// const costs = {
//   Saver: weeklySaverCost,
//   Classic: weeklyClassicCost,
//   Premium: weeklyPremiumCost
// };

//want to extract the cost of the recipe from walletData
//need to specify which plan is being used
//currently only have 7 days worth of data so the total weekly cost would be all of those from the saver menu for example
//function needs to take in the name of the plan (can hard code that for now maybe??) extract the price and then add them together

// console.log("walletData:", walletData)
// let priceSum1 = 0;
// let priceSum2 = 0;
// let priceSum3 = 0;
// let priceSum4 = 0;
// let priceSum = 0;

//function to specifically add the 7 days of data we have for the Saver plan
//taking in the variable of accessibleWalletData so that we can access this and wait for it to no longer be null
// function weeklySaverCostFromData(walletData) {
//   if (walletData && walletData.length > 0) {
//     for (let i = 0; i < walletData.length; i++) {
//       if (walletData[i].RecipeType === "Saver") {
//         console.log("test of saver:", walletData[i].RecipeType)

//         for (let j = 0; j < walletData[i].RecipePrice.length; j ++){
//           priceSum += walletData[i].RecipePrice[familySize]
//           console.log("priceSum", priceSum)
//         //   if (j === 3){
//         // console.log("test price:", accessibleWalletData[i].RecipePrice[j]);
//         // priceSum4 += accessibleWalletData[i].RecipePrice[j]
//         // console.log("priceSum:", priceSum4)
//         //   }
//         }
//       }
//     }

//   } else {
//     console.log("No accessible wallet data available.");
//   }
// }
// console.log("price sum outside fn:", priceSum)
// weeklySaverCostFromData(walletData);
// console.log("fn:", weeklySaverCostFromData(walletData))
