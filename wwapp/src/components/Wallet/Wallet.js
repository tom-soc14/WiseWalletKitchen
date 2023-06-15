import React from "react";
import "./Wallet.css";
import Graph from "./graph.js";
import fruitPicture from "./fruitPicture.jpg";
import PlanSelector from "./PlanSelector.js";

import WalletFamilySelector from "./WalletFamilySelector.js";
import BudgetInput from "./BudgetInput.js"
import {useState} from 'react'

export const weeklySaverCost=[ 22, 29, 40.50, 49 ]
export const weeklyClassicCost=[91, 110, 129, 148 ]
export const weeklyExclusiveCost=[158,183,207, 231 ]
// render the Wallet page
export default function Wallet({ walletData, handlePlanChange, plan, handleFamilySize, familySize }) {
 const [budget, setBudget] = useState(0);
 

const costs = {
  Saver: weeklySaverCost,
  Classic: weeklyClassicCost,
  Exclusive: weeklyExclusiveCost
};


//want to extract the cost of the recipe from walletData
//need to specify which plan is being used 
//currently only have 7 days worth of data so the total weekly cost would be all of those from the saver menu for example 
//function needs to take in the name of the plan (can hard code that for now maybe??) extract the price and then add them together 

// walletData && walletData.map(item => console.log("testing from wallet:", item.RecipeType))
const accessibleWalletData = walletData && walletData.map(item => item)
console.log("accessibleWalletData:", accessibleWalletData)
let priceSum1 = 0;
let priceSum2 = 0;
let priceSum3 = 0;
let priceSum4 = 0;
let priceSum = 0;

//function to specifically add the 7 days of data we have for the Saver plan 
//taking in the variable of accessibleWalletData so that we can access this and wait for it to no longer be null
function weeklySaverCostFromData(accessibleWalletData) {
  if (accessibleWalletData && accessibleWalletData.length > 0) {
    for (let i = 0; i < accessibleWalletData.length; i++) {
      if (accessibleWalletData[i].RecipeType === "Saver") {
        console.log("test of saver:", accessibleWalletData[i].RecipeType)

        for (let j = 0; j < accessibleWalletData[i].RecipePrice.length; j ++){
          priceSum += accessibleWalletData[i].RecipePrice[familySize]
          console.log("priceSum", priceSum)
        //   if (j === 3){
        // console.log("test price:", accessibleWalletData[i].RecipePrice[j]);
        // priceSum4 += accessibleWalletData[i].RecipePrice[j]
        // console.log("priceSum:", priceSum4)
        //   }
        }
      }
    }
    
  } else {
    console.log("No accessible wallet data available.");
  }
}
console.log("price sum outside fn:", priceSum)
weeklySaverCostFromData(accessibleWalletData);
console.log("fn:", weeklySaverCostFromData(accessibleWalletData))

 const totalCost = costs[plan][familySize];

 // average weekly spend for 1,2,3,4 people
 // source: https://www.nimblefins.co.uk/average-uk-household-cost-food#week
  const averageWeeklySpendArray = [45, 96, 132, 167];
  const averageWeeklySpend = averageWeeklySpendArray[familySize];

  const savings = budget - totalCost;
  const calculateWeeklySavings = Math.round(savings * 100) / 100;

  const handleInputChange = (e) => {
    setBudget(e.target.value)
  }




  return (
    <div>
      {/* <p>{props.weeklyPrice}</p> */}
      <h1 className="userPageTitle">Savings</h1>
      <div className="userPageInfoBox">
        <div className="userPageInfoContents">
          <h1>Enter your budget:</h1>
          <BudgetInput handleInputChange={handleInputChange}/>
          <h2>Your budget is £{budget}</h2>
          <PlanSelector handlePlanChange={handlePlanChange} />
          <h3>Your plan is {plan}</h3>
          <WalletFamilySelector handleFamilySize={handleFamilySize}/>
          <h2>Weekly Cost of Plan £{totalCost}</h2>
          <h1>This week you will save: £{savings} on this plan</h1>

         
          
          
        </div>

        {/* display graph component */}
        <div className="userPageInfoGraph">
          <Graph budget={budget} totalCost={totalCost} savings={savings} averageWeeklySpend={averageWeeklySpend}
          calculateWeeklySavings={calculateWeeklySavings}
          />
        </div>
      </div>
      <img src={fruitPicture} alt="fruit" className="userPageImg" />
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
