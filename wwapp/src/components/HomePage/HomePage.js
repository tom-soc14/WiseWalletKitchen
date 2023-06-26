import React from "react";
import {Link} from "react-router-dom";

import HomePageStoryImages from './HomePageChildren/HomePageStoryImages.js'; 



function HomePage() {

    return (
        <div className="HomePage">
          <h1 className='Generic-Title'>Welcome to Wise Wallet Kitchen</h1>

          <HomePageStoryImages />
     
          <br/>
        <Link to="/about" className="Link-about-button"><button className="about-button">Click to see how we can help you</button></Link>
      <Link className="Link-button-sign-up" to="/login"><button data-testid="signUpBtn" className="HomePage-button-sign-up">Sign Up or Login now</button></Link>
     
      <br />
    </div>
  );
}

        

export default HomePage;
