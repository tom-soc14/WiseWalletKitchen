// import kitchenExample from "./kitchen.jpeg";
// import walletExample from "./wallet.jpeg";

import { Link } from "react-router-dom";
import AboutImageCarousel from "./AboutChildren/AboutImageCarousel.js";

function About() {
  return (
    <div className="about-container">
      <AboutImageCarousel />
      <Link className="Link-button-sign-up" to="/login">
        <button className="HomePage-button-sign-up">Sign Up Today</button>
      </Link>
    </div>
  );
}

export default About;
