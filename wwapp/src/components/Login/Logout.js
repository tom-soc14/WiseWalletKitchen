import "./Login.css";
// import { useState, useEffect } from "react";
// import { createClient } from "@supabase/supabase-js";
// import { Auth } from "@supabase/auth-ui-react";
// import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "./Login.js";



// TO DO - Research the following function, the move into burger menu ??
export default function Logout() {


  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      
      // Perform any additional logic or state updates after successful logout
      console.log("Log out was successful...!");
      // Navigate back to the HomePage
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  // useEffect(() => {
  //   handleLogout().then(() => {
  //     navigate("/");
  //   });
  // }, []);
  

  
  //NEW - removed button and called function everytime
  handleLogout();
  
  return null;
}



// useEffect(() => {
  
//     //NEW - Call the handleLogIn props to pass up for logInAccess ✅
//     handleLogout();
//     // Redirect to homepage after a short delay
    
//       navigate("/");
   
//     return () => {
      
//       console.log("logout session reset data. Test 3 ✅")
//     };
//   })