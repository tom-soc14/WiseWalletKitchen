import "./App.css";

import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import HomePage from "../HomePage/HomePage.js";
import Kitchen from "../Kitchen/Kitchen.js";
import Login from "../Login/Login.js";
import Wallet from "../Wallet/Wallet.js";
import NavBar from "../NavBar/NavBar.js";
import About from "../About/About.js";
import OurTeamPage from '../OurTeamPage/OurTeamPage.js'
import Footer from "../Footer/Footer.js";
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import { Auth } from "@supabase/auth-ui-react";
import owl from '../NavBar/WWK_Logo_Large.png';

// import { weeklyPlanRecipes } from "../Kitchen/KitchenChildren/WeeklyPlan.js";

export default function App() {
  // State ---------------------------------------------------------------------------
  const [recipes, setRecipes] = useState(null);
  const [familySize, setFamilySize] = useState(3);
  const [plan, setPlan] = useState(null);
  const [walletData, setWalletData] = useState(null);
  const [weeklyRecipeArray, setWeeklyRecipeArray] = useState([]);
  const [dayRecipe, setDayRecipe] = useState(null);
  //NEW - Login Access ---------------------------------------------------------------
  const [logInAccess, setLogInAccess] = useState(false); 
  const [session, setSession] = useState(null);

  // let recipes=[];

  const navigate = useNavigate();

  // API -----------------------------------------------------------------------------

  const supabaseUrl = process.env.REACT_APP_DB_URL;

  const supabaseKey = process.env.REACT_APP_DB_KEY;  
  
   const supabase = createClient(supabaseUrl, supabaseKey);


  const fetchRecipes = async () => {
    try {
      const { data, error } = await supabase
        .from("RecipeData")
        .select(
          `
            *,
            IngredientUsage: RecipeId (*)
            `
        )
        .order("RecipeId");

      if (error) {
        console.error("Error fetching recipes:", error);
      } else {
        setRecipes(data);
        setWalletData(data);
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  //NEW - Login Access ---------------------------------------------------------------
  // - set boolean statement for navbar rendering logIN ✅
  // - set boolean statement for navbar rendering logOUT ✅
  // - call logout func when logout is passed from NavBar ✅
  // - Console to check logout being called 🔗
  function handleLogIn() {
    setLogInAccess(true);
  }
  function handleLogOut() {
    // Logout();
    setLogInAccess(false);
    supabase.auth.signOut();
    navigate("/");
    localStorage.clear();
    console.log("Logout being called.");
  }
  useEffect(() => {}, [logInAccess]);
  // console.log("Recipes outside function: ", recipes)
  // useEffects ----------------------------------------------------------------------
  useEffect(() => {
    fetchRecipes();

    //eslint-disable-next-line
  }, []);
  useEffect(() => {}, [familySize]);
  useEffect(() => {}, [plan]);

  // handleChange --------------------------------------------------------------------
  const handleRecipeChange = (selectedValue) => {
    setDayRecipe(weeklyRecipeArray[selectedValue]);
  };

  const handleFamilySize = (selectedValue) => {
    setFamilySize(selectedValue);
  };

  const handlePlanChange = (selectedValue) => {
    setPlan(selectedValue);
  };



  // Login Function -----------------------------------------------------------


    // const navigate = useNavigate();
  
    useEffect(() => {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session);
      });
  
      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session);
      
      });
  
      return () => subscription.unsubscribe();
      
    }, []);
  
  
    
  
  
    // Timeout and also handleLogin props for NavBar ---------------------------
    // useEffect(() => {
    //   if (session) {
    //     //NEW - Call the handleLogIn props to pass up for logInAccess ✅
    //     handleLogIn();
    //     // Redirect to homepage after a short delay
    //     const redirectTimeout = setTimeout(() => {
    //       navigate("/kitchen");
    //     }, 3000);
    //     return () => {
    //       clearTimeout(redirectTimeout);
    //       // console.log("login session reset data. Test 2 ✅")
    //     };
    //   } else {
    //   }
  
    //   //NEW - the line below may not need handleLogIn? (CHECK 🟠) ---------------
    // }, [session, navigate, handleLogIn]);
  
  


  // render components ---------------------------------------------------------------
 
 
  if (!session) {
    return <div className="LoginPage">
    <div className="LoginForm-image">
    <div className="LoginForm">
      <Auth supabaseClient={supabase} />
      </div>
    </div>
  </div>;
  } else {
    // console.log("log in was successful...");
    return (
      <div className="login-container">
        {/* <div className="Generic-TitleLogin">Logged in! Redirecting to Kitchen...</div>
        <img src={owl} className="owlImageLogin" alt="owl logo"></img> */}
        <h1>Hello world!</h1>
      </div>
    );
  }
}

 
  // return (
  //   <div className="App">
  //     {/* NEW - Hand props down to login: logInAccess=boolean / handleLogOut=function */}
  //     <NavBar logInAccess={logInAccess} handleLogOut={handleLogOut} />

  //     <Routes>
  //       <Route path="/" element={<HomePage />} />
  //       <Route path="/about" element={<About />} />
  //       <Route
  //         path="/kitchen"
  //         element={
  //           <Kitchen
  //             plan={plan}
  //             recipes={recipes}
  //             dayRecipe={dayRecipe}
  //             familySize={familySize}
  //             handleRecipeChange={handleRecipeChange}
  //             handleFamilySize={handleFamilySize}
  //             handlePlanChange={handlePlanChange}
  //             setWeeklyRecipeArray={setWeeklyRecipeArray}
  //           />
  //         }
  //       />

  //       {/* NEW - Hand props down to login so LogIn func can be called above  */}
  //       <Route path="/login" element={<Login handleLogIn={handleLogIn} />} />

  //       <Route
  //         path="/wallet"
  //         element={
  //           <Wallet
  //             plan={plan}
  //             handlePlanChange={handlePlanChange}
  //             walletData={walletData}
  //             familySize={familySize}
  //             handleFamilySize={handleFamilySize}
  //           />
  //         }
  //       />
  //       <Route path="/ourteampage" element={<OurTeamPage/>} />
  //     </Routes>
  //     <Footer/>
  //   </div>
  // );


// const [weeklyPrice, setWeeklyPrice] = useState("");
// function weeklyPrice2() {
//   let totalPriceNum = 0;
//   for (let i = 0; i < 6; i++) {
//     // For loop only goes to 6, not whole array
//     totalPriceNum = totalPriceNum + recipeDataV2[i].Price[0];
//   }
//   let totalPrice = Math.round(totalPriceNum * 100) / 100;
//   setWeeklyPrice(totalPrice);
//   return "£" + totalPrice;
// }
// weeklyPrice2();
