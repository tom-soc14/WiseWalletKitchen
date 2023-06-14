import React from 'react';
import './HomePage.css';
import kitchenExample from "./kitchen.jpeg";
import walletExample from "./wallet.jpeg"
import HomePageStoryImages from './HomePageStoryImages.js'; 
import './HomePageImageCarousel.css';

function HomePage() {

    return (
        <div className="HomePage">
        <h1 className='HomePage-title'>Wise Wallet Kitchen</h1>
        <HomePageStoryImages />
        <img  className="intro-image" alt="mother and daughter preparing food in kitchen" src="https://images.pexels.com/photos/4259707/pexels-photo-4259707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <br/>
        <div className="app-information-container">
        <p className="app-information">

Join us to so we can show you the perfect recipe for your tea tonight, all while saving money and making wise choices for your household. Wise Wallet Kitchen brings you the best of both worlds: a kitchen filled with delicious recipes and a wallet that helps you save and track your expenses.
<br/><br/>
Cooking made easy:<br/>
Explore our collection of delicious recipes for dinner, handpicked to suit your taste buds.
Each recipe comes with a complete list of ingredients, making it convenient for you to plan your shopping trip.
We provide the price for the entire meal and the individual ingredients, helping you budget your expenses wisely.
<br/><br/>
Tailored plans for every budget:<br/>
Choose from our three different plans - Saver, Classic, or Premium - based on your budget and preferences.
Whether you're cooking for one or have a family of four, we've got you covered. Simply let us know the number of people in your household, and we'll provide recipes and ingredients accordingly.
<br/><br/>
Save more, spend smarter:<br/>
With our wallet, you can effortlessly compare your expenses against the UK national average and see how much you're saving.
Watch your savings grow as you make informed choices and optimise your spending habits.
We help you track your progress and visualise your future finances.</p>
        </div>


        <div className="app-examples">
        <div className="wallet-example">
            <img className="example-images" alt="Wallet page example" src={walletExample}></img>
        </div>
        <div className="kitchen-example">
        <img className="example-images" alt="Kitchen page example" src={kitchenExample}></img>
        </div>
        </div>
        <button className="HomePage-button-sign-up">Sign Up or Login now</button>
        <br/>
        </div> )

        };



export default HomePage;
