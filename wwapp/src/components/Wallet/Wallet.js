import React from "react";
import "./Wallet.css";
import Graph from "./graph.js";
import fruitPicture from "./fruitPicture.jpg";
import PlanSelector from "./PlanSelector.js";
import RenderPlan from "./RenderPlan.js";
import WalletFamilySelector from "./WalletFamilySelector.js";

// render the Wallet page
export default function Wallet({ handlePlanChange, plan, recipes, handleFamilySize, familySize }) {
  const weeklySaverCost=[ 22, 29, 40.50, 49 ]
  const weeklyClassicCost=[91, 110, 129, 148 ]
  const weeklyExclusiveCost=[158,183,207, 231 ]

  // console.log("RecipePrice: ", recipePrice)

  // const averageWeeklySpend = 107.5 * 4;
  // const weeklySpend = [50, 70, 90, 40]; // Array to store weekly spend values

  // calculate the user savings
  // function calculateSavings() {
  //   // let totalSpend = 0;
  //   // for (let i = 0; i < weeklySpend.length; i++) {
  //   //   totalSpend += weeklySpend[i];
  //   // }
  //   let userSavings = averageWeeklySpend - props.weeklyPrice;
  //   let userSavingDecimal = Math.round(userSavings * 100) / 100;
  //   return userSavingDecimal;
  // }

  // console.log(props.weeklyPrice +' WALLET');

  return (
    <div>
      {/* <p>{props.weeklyPrice}</p> */}
      <h1 className="userPageTitle">Savings</h1>
      <div className="userPageInfoBox">
        <div className="userPageInfoContents">
          <p className="userPageSavings">This week you saved:</p>
          <PlanSelector handlePlanChange={handlePlanChange} />
          <WalletFamilySelector handleFamilySize={handleFamilySize}/>
          <RenderPlan plan={plan} familySize={familySize}/>
          <p className="userPageSavingsNumber">£</p>
          Congratulations
        </div>

        {/* display graph component */}
        <div className="userPageInfoGraph">
          <Graph />
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
