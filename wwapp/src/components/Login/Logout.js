import React from "react";
import "./Login.css";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
// import { ThemeSupa } from "@supabase/auth-ui-shared";
import {supabase} from "./Login.js"

// const supabase = createClient(
//     "https://vdwwjhldkqhbmwtszcas.supabase.co",
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkd3dqaGxka3FoYm13dHN6Y2FzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYxNTA4MjYsImV4cCI6MjAwMTcyNjgyNn0.5ATbh7xJDjVK57XPGsJmkwxps0fV0iyoOCRvUU2VMlc"
//   );

// TO DO - Research the following function, the move into burger menu ??
export default function Logout() {
    const handleLogout = async () => {
      try {
        await supabase.auth.signOut();
        // Perform any additional logic or state updates after successful logout
        console.log("testing to see if Logout is running!")
      } catch (error) {
        console.error("Error logging out:", error);
      }
    };


    return (
      <div>
        {/* Your component JSX */}
        <button onClick={handleLogout}>Log Out</button>
      </div>
    );
  }