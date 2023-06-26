import React from "react";
import { useEffect } from "react";

// let priceSum1 = 0;
// let priceSum2 = 0;
// let priceSum3 = 0;
// let priceSum4 = 0;

export default function WeeklyCostCalculator({
  walletData,
  familySize,
  plan,
  onCostChange,
}) {
  let priceSum = 0;

  if (walletData && walletData.length > 0) {
    for (let i = 0; i < walletData.length; i++) {
      if (walletData[i].RecipeType === plan) {
        for (let j = 0; j < walletData[i].RecipePrice.length; j++) {
          if (j === parseInt(familySize)) {
            priceSum += walletData[i].RecipePrice[j];
          }
        }
      }
    }
  } else {
  }

 
  //allows us to use priceSum when calculating the savings in wallet.js
  useEffect(() => {
    onCostChange(priceSum);
  }, [priceSum, onCostChange]);

  //   console.log("fn:", WeeklyCostCalculator(walletData))

  return <></>;
}
