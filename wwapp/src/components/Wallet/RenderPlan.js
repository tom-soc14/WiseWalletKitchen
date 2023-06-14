import {weeklySaverCost, weeklyClassicCost, weeklyExclusiveCost} from './Wallet.js' 
export default function RenderPlan({ plan, familySize }) {

  // console.log(plan)
  // console.log(familySize)
  // console.log(weeklySaverCost)
  // console.log(weeklyClassicCost)
  // console.log(weeklyExclusiveCost)
let budget = 49

let totalCost = 0;

const costs = {
  Saver: weeklySaverCost,
  Classic: weeklyClassicCost,
  Exclusive: weeklyExclusiveCost
};
 totalCost = costs[plan][familySize];

let savings = budget - totalCost


  // Render recipe data -------------------
  return (
    <div className="recipeContent">
      <h1>Enter your budget: £{budget}</h1>
      <h2>{plan}</h2>
      <h3>Weekly Cost of Plan £{totalCost}</h3>
      <h1>This week you will saved: £{savings} on this plan</h1>
    </div>
  );
}
