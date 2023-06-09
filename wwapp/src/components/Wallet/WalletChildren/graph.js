import CanvasJSReact from "@canvasjs/react-charts";
import "../Wallet.css";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Graph({cost, averageWeeklySpend, calculateWeeklySavings}) {

  const weeklySavingsOptions = {
      backgroundColor:  '#ebebd3'
    ,
    title: {
      text: "Weekly Savings Chart",
      fontSize: 20,
      fontFamily: "Montserrat",
      fontWeight: "bold"
    },
    axisY: {
      minimum: 0,
    },
    data: [
      {
        type: "column",
        dataPoints: [
          { label: "Average Spend", y: averageWeeklySpend },
          { label: "Weekly Plan", y: cost },
          { label: "Money Saved", y: calculateWeeklySavings },
        ],
      }
    ],
    // maintainAspectRatio: false,
    // responsive: true
    
  };
  
  return (
    <div className="graph-container">
        <CanvasJSChart 
          options={weeklySavingsOptions}
          containerProps={{ maxHeight:"500px", width: "90%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center",alignSelf: "center"}}
        />
    </div>
  );
}

export default Graph;

  // const [showLineGraph, setShowLineGraph] = useState(false);
  // const [showBarGraph, setShowBarGraph] = useState(true);

  // const handleWeeklySavingsClick = () => {
  //   setShowLineGraph(false);
  //   setShowBarGraph(true);
  // };

  // const handleMonthlySavingsClick = () => {
  //   setShowBarGraph(false);
  //   setShowLineGraph(true);
  // };

  // const calculateWeeklySavings = () => {
  //   const totalSpend = totalCost;
  //   const userSavings = savings;
  //   const userSavingDecimal = Math.round(userSavings * 100) / 100;
  //   return userSavingDecimal;
  // };

  // const calculateMonthlySavings = () => {
  //   const totalSpend = totalCost * 4;
  //   const userSavings = averageWeeklySpend * 4 - (totalSpend*4);
  //   const userSavingDecimal = Math.round(userSavings * 100) / 100;
  //   return userSavingDecimal;
  // };

    // const monthlySavingsOptions = {
  //   title: {
  //     text: "Monthly Savings Chart",
  //   },
  //   axisY: {
  //     minimum: 0,
  //   },
  //   data: [
  //     {
  //       type: "line",
  //       dataPoints: [
  //         // Dynamically generate data for monthly savings
  //         { label: "Week 1", y: weeklySpend[0] },
  //         { label: "Week 2", y: weeklySpend[1] },
  //         { label: "Week 3", y: weeklySpend[2] },
  //         { label: "Week 4", y: weeklySpend[3] },
  //       ],
  //     },
  //   ],
  // };
   /* <button className="graphSavingsButton" onClick={handleWeeklySavingsClick}>
        Weekly Savings
      </button>
      <button
        className="graphSavingsButton"
        onClick={handleMonthlySavingsClick}
      >
        Monthly Savings
      </button> */
      /* <p className="userPageSavings">
        {showBarGraph ? "This week you saved:" : "This month you saved:"}
      </p>
      <p className="userPageSavingsNumber">
        {showBarGraph
          ? calculateWeeklySavings
          : 0}
      </p> */