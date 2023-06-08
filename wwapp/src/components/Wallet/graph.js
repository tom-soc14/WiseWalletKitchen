import React from "react";
import CanvasJSReact from "@canvasjs/react-charts";
import "./Wallet.css";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLineGraph: false,
      showBarGraph: false,
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
            { label: "Monday Saved", y: userSavings },
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
            // Hardcoded data for 30 days of savings
            { label: "Week 1", y: 50 },
            { label: "Week 2", y: 70 },
            { label: "Week 3", y: 100 },
            // Add more data points for the remaining days
            // ...
            { label: "Day 30", y: 200 },
          ],
        },
      ],
    };

    return (
      <div>
        <button onClick={this.handleWeeklySavingsClick}>Weekly Savings</button>
        <button onClick={this.handleMonthlySavingsClick}>Monthly Savings</button>
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
