import React from "react";
import {Link} from "react-router-dom";

import HomePageStoryImages from './HomePageChildren/HomePageStoryImages.js'; 



function HomePage() {

    return (
        <div className="HomePage">
        <h1 className='HomePage-title'>Welcome to Wise Wallet Kitchen</h1>
        <HomePageStoryImages />
        {/* <img  className="intro-image" alt="mother and daughter preparing food in kitchen" src="https://images.pexels.com/photos/4259707/pexels-photo-4259707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/> */}
        <br/>
        <Link to="/about" className="Link-about-button"><button className="about-button">Click here to see how we can help</button></Link>
      <Link className="Link-button-sign-up" to="/login"><button className="HomePage-button-sign-up">Sign Up or Login now</button></Link>
     
      <br />
    </div>
  );
}

        

export default HomePage;
