import React from "react";
import {Link} from "react-router-dom";

import HomePageStoryImages from './HomePageChildren/HomePageStoryImages.js'; 



function HomePage() {

    return (
        <div className="HomePage">
          <h1 className='Homepage-Title'>Wise Wallet Kitchen</h1>
          <p className='Slogan'>Smart Eating & Savings</p>

          <HomePageStoryImages />
     
          <br/>
        <Link to="/about" className="Link-about-button" ><button className="about-button" aria-label="go-to-about-page">Click to see how we can help you</button></Link>
      <Link className="Link-button-sign-up" to="/login"><button data-testid="signUpBtn" className="HomePage-button-sign-up" aria-label="sign-up-and-log-in-button">Sign Up or Login now</button></Link>
     
      <br />
    </div>
  );
}

        

export default HomePage;
