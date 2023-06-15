import React from "react";

// let priceSum1 = 0;
// let priceSum2 = 0;
// let priceSum3 = 0;
// let priceSum4 = 0;


export default function WeeklyCostCalculator({walletData, familySize}) {
  let priceSum = 0;
    console.log("walletData:", walletData)
    if (walletData && walletData.length > 0) {
      for (let i = 0; i < walletData.length; i++) {
        if (walletData[i].RecipeType === "Saver") {
          console.log("test of saver:", walletData[i].RecipeType)
  
          for (let j = 0; j < walletData[i].RecipePrice.length; j ++){
            // priceSum += walletData[i].RecipePrice[familySize]
            // console.log("priceSum", priceSum)
            if (j === familySize){
          console.log("test price:", walletData[i].RecipePrice[j]);
          priceSum += walletData[i].RecipePrice[j]
          console.log("priceSum:", priceSum)
            }
          }
        }
      }
      console.log("pricesum-end of fn:", priceSum);
    } else {
      console.log("No accessible wallet data available.");
    }
  
  console.log("price sum outside fn:", priceSum)
  
//   console.log("fn:", WeeklyCostCalculator(walletData))

  return (
    <div className="weekly-cost-calculator">
    <p>You've spent £{priceSum} this week - test</p>
    </div>
  )
};