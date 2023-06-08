import React from "react";
import CanvasJSReact from "@canvasjs/react-charts";
import "./Wallet.css";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const weeklySpend = [50, 70, 90, 40]; 
class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLineGraph: false,
      showBarGraph: true, // Set showBarGraph to true initially
      userSavings: 20.05,
    };
  }

  handleWeeklySavingsClick = () => {
    this.setState({ showLineGraph: false, showBarGraph: true });
  };

  handleMonthlySavingsClick = () => {
    this.setState({ showBarGraph: false, showLineGraph: true });
  };

  render() {
    const { showLineGraph, showBarGraph, userSavings } = this.state;

    const weeklySavingsOptions = {
      title: {
        text: "Weekly Savings Chart",
      },
      axisY: {
        minimum: 0,
      },
      data: [
        {
          type: "column",
          dataPoints: [
            { label: "Average weekly spend", y: 107.5 },
            { label: "Weekly Plan", y: 87.45 },
            { label: "Money Saved", y: userSavings },
          ],
        },
      ],
    };

    const monthlySavingsOptions = {
      title: {
        text: "Monthly Savings Chart",
      },
      axisY: {
        minimum: 0,
      },
      data: [
        {
          type: "line",
          dataPoints: [
            // Dynamically generate data for monthly savings
            { label: "Week 1", y: weeklySpend[0] },
            { label: "Week 2", y: weeklySpend[1] },
            { label: "Week 3", y: weeklySpend[2] },
            { label: "Week 4", y: weeklySpend[3] },
          ],
        },
      ],
    };

    return (
      <div>
        <button className='graphSavingsButton' onClick={this.handleWeeklySavingsClick}>Weekly Savings</button>
        <button className='graphSavingsButton' onClick={this.handleMonthlySavingsClick}>Monthly Savings</button>
        {showBarGraph && (
          <CanvasJSChart
            options={weeklySavingsOptions}
            containerProps={{ width: "100%", height: "100%" }}
          />
        )}
        {showLineGraph && (
          <CanvasJSChart
            options={monthlySavingsOptions}
            containerProps={{ width: "100%", height: "100%" }}
          />
        )}
      </div>
    );
  }
}

export default Graph;
