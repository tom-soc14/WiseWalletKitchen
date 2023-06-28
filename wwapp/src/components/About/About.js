// import kitchenExample from "./kitchen.jpeg";
// import walletExample from "./wallet.jpeg";

import { Link } from "react-router-dom";
import AboutStoryImages from "./AboutChildren/AboutStoryImages.js";

function About() {
  return (
    <div className="about-container">
    <h2 className="Homepage-Title">About us</h2>
      <AboutStoryImages />
      <Link className="Link-button-sign-up" to="/login">
        <button className="HomePage-button-sign-up" aria-label="sign-up-button">Sign Up Today</button>
      </Link>
    </div>
  );
}

export default About;
