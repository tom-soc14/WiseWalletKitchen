// import './HomePage.css';
import React from "react";
import kitchenExample from "./kitchen.jpeg";
import walletExample from "./wallet.jpeg";

function HomePage() {
  return (
    <div className="HomePage">
      <div className="introText">
        <h1>Welcome to Wise Wallet Kitchen!</h1>
        <p>
          We’ve been just where you’re standing now. <br />
          Standing in the aisle or even in the queue. Vouchers in one hand, bank
          card in the other. Your eyes staring down at your shoes and then
          darting back up at the ceiling as you process the sums. Once, twice.
          You review each and every voucher adding the discounts up. Three
          times. And a fourth. Now you’re sure. You don’t have enough this time.
          Shaking your head, you quickly scan your shopping because some items
          have to go. <br />
          But what do you sacrifice? There’s hardly anything you selected that’s
          seen as a luxury. Yes, there is the New York style cheesecake topped
          with passion fruit. But the kids haven’t had a proper dessert in
          weeks. <br />
          All that’s present are what you would have labelled essentials only
          six months ago. How soon will it be before you start having to skip
          meals? And that’s when you feel that little tug on your arm right
          between the funny bone and the elbow. You turn around to find us
          standing next to you with a big smile and more importantly a plan
          containing recipes that will let you shop with more confidence because
          the ingredients meet your budget. By making a few small adjustments in
          what you’re purchasing, you can keep all the items in your cart,
          including the cheesecake, and still have enough to throw in a cheeky
          sweet for yourself. Victory! Welcome Wise Wallet Kitchen.{" "}
        </p>
      </div>
      <div className="HomePage--ImageCarousel">
      <img
        alt="mother and daughter preparing food in kitchen"
        src="https://images.pexels.com/photos/4259707/pexels-photo-4259707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      </div>
      <br />
      <p className="app-information">App Information</p>
      <div className="app-examples">
        <div className="wallet-example">
          <img
            className="example-images"
            alt="Wallet page example"
            src={walletExample}
          ></img>
        </div>
        <div className="kitchen-example">
          <img
            className="example-images"
            alt="Kitchen page example"
            src={kitchenExample}
          ></img>
        </div>
      </div>
      <button className="HomePage-button-sign-up">Sign Up or Login now</button>
      <br />
    </div>
  );
}

export default HomePage;
