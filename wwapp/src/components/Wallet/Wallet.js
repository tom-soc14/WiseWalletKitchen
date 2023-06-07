import React from "react";
import "./Wallet.css";
// import dummyData from "./data.json"

// write a funciton that renders the Wallet page
// Must include:
// Variable to take the user data to diplay on the page
// + User average spending per week vs national average in body => P element
// + User weekly plan to poopulate the 'savings' graph for the year
// Header
// + Header logo with link to HomePage
// + Header burger menu
// Body title element
// + "savings" to be rendered in a green oval box
// Body elements x2
// + Body: P element - contains a description of how much the user has saved compared to naitonal average
// + Body: Graph element - contains data of how much user is saving over the year
// Lower body
// + image element to make it look nice

// make the data from the data.json file available to the wallet function as a variable

function Wallet() {
  return (
    <body>
      <h1 className="userPageTitle">Savings</h1>
      <div className="userPageInfoBox">
        <p className="userPageInfoContents">
          Congratulations on your successful month of saving! This month, you
          have managed to diligently track your expenses and make conscious
          decisions to prioritize your financial goals. By adhering to a budget
          and making thoughtful spending choices, you have successfully saved a
          significant amount of money. This achievement reflects your commitment
          and discipline towards building a strong financial foundation. With
          this positive momentum, you are well on your way to achieving even
          greater savings and financial stability in the future. Keep up the
          excellent work!
        </p>
        <img
          src="https://www.merriam-webster.com/assets/mw/images/source-original/2021-03-03_12-19-53---31b3b37cbe2e2c66c02dd4c5dbfd2069.png"
          alt="stonksGraph"
          className="userPageInfoContents"
        />
      </div>
    </body>
  );
}

export default Wallet;
