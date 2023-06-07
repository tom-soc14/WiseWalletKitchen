import React from "react";
import CanvasJSReact from "@canvasjs/react-charts";
import dummyData from "./data.json";
import "./Wallet.css";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Graph extends React.Component {
  render() {
    const options = {
      title: {
        text: "Basic Column Chart in React",
      },
      data: [
        {
          type: "column",
          dataPoints: [
            { label: dummyData[0].Item, y: dummyData[0].Price },
            { label: dummyData[1].Item, y: dummyData[1].Price },
            { label: dummyData[2].Item, y: dummyData[2].Price },
            { label: dummyData[3].Item, y: dummyData[3].Price },
            { label: dummyData[4].Item, y: dummyData[4].Price },
      
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
