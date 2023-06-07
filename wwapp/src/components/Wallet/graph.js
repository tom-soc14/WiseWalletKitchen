import React from "react";
import CanvasJSReact from "@canvasjs/react-charts";
import dummyData from "./data.json";
import "./Wallet.css";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Graph extends React.Component {
  render() {
    const options = {
      title: {
        text: "Weekly Savings Chart",
      },

      axisY: {
        minimum: 0,
        //   maximum: 90
      },
      data: [
        {
          type: "column",
          dataPoints: [
            { label: "Average weekly spend", y: 107.5 },
            { label: "Weekly Plan", y: 87.45 },
            { label: "Monday Saved", y: 20.05 },
          ],
        },
      ],
    };

    return (
      <div>
        <CanvasJSChart
          options={options}
          containerProps={{ width: "100%", height: "100%" }}
        />
      </div>
    );
  }
}

export default Graph;

//
