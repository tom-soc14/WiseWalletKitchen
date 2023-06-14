import React from "react";
import CanvasJSReact from "@canvasjs/react-charts";
import "./Wallet.css";

const averageWeeklySpend = 107.5 * 4;

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const weeklySpend = [50, 70, 90, 40];

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLineGraph: false,
      showBarGraph: true, // Set showBarGraph to true initially
    };
  }

  handleWeeklySavingsClick = () => {
    this.setState({ showLineGraph: false, showBarGraph: true });
  };

  handleMonthlySavingsClick = () => {
    this.setState({ showBarGraph: false, showLineGraph: true });
  };

  calculateWeeklySavings = () => {
    const totalSpend = weeklySpend.reduce((acc, val) => acc + val, 0);
    const userSavings = averageWeeklySpend - totalSpend;
    const userSavingDecimal = Math.round(userSavings * 100) / 100;
    return userSavingDecimal;
  };

  calculateMonthlySavings = () => {
    const totalSpend = weeklySpend.reduce((acc, val) => acc + val, 0) * 4;
    const userSavings = averageWeeklySpend * 4 - totalSpend;
    const userSavingDecimal = Math.round(userSavings * 100) / 100;
    return userSavingDecimal;
  };

  render() {
    const { showLineGraph, showBarGraph } = this.state;

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
            { label: "Money Saved", y: this.calculateWeeklySavings() },
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
        <button
          className="graphSavingsButton"
          onClick={this.handleWeeklySavingsClick}
        >
          Weekly Savings
        </button>
        <button
          className="graphSavingsButton"
          onClick={this.handleMonthlySavingsClick}
        >
          Monthly Savings
        </button>
        <p className="userPageSavings">
          {showBarGraph ? "This week you saved:" : "This month you saved:"}
        </p>
        <p className="userPageSavingsNumber">
          {showBarGraph
            ? this.calculateWeeklySavings()
            : this.calculateMonthlySavings()}
        </p>
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
