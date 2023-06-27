import React from "react";
import "./Login.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import owl from '../NavBar/WWK_Logo_Large.png';
// import { ThemeSupa } from "@supabase/auth-ui-shared";

export const supabase = createClient(
  process.env.REACT_APP_DB_URL,
  process.env.REACT_APP_DB_KEY
);

// Login Function -----------------------------------------------------------
export default function Login({ handleLogIn }) {
  const [session, setSession] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      console.log("login session reset data. Test 1 ✅")
    });

    return () => subscription.unsubscribe();
  }, []);


  // Timeout and also handleLogin props for NavBar ---------------------------
  useEffect(() => {
    if (session) {
      //NEW - Call the handleLogIn props to pass up for logInAccess ✅
      handleLogIn();
      // Redirect to homepage after a short delay
      const redirectTimeout = setTimeout(() => {
        navigate("/kitchen");
      }, 3000);
      return () => {
        clearTimeout(redirectTimeout);
        console.log("login session reset data. Test 2 ✅")
      };
    } else {
    }

    //NEW - the line below may not need handleLogIn? (CHECK 🟠) ---------------
  }, [session, navigate, handleLogIn]);


  if (!session) {
    return <div className="LoginPage">
    <div className="LoginForm-image">
    <div className="LoginForm">
      <Auth supabaseClient={supabase} />
      </div>
    </div>
  </div>;
  } else {
    console.log("log in was successful...");
    return (
      <div>
        <div className="Generic-TitleLogin">Logged in! Redirecting to Kitchen...</div>
        <img src={owl} className="owlImageLogin" alt="owl logo"></img>
      </div>
    );
  }
}
