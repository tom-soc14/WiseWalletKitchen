import React from 'react';

import './HomePage.css';

import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

const supabase = createClient('https://vdwwjhldkqhbmwtszcas.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkd3dqaGxka3FoYm13dHN6Y2FzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYxNTA4MjYsImV4cCI6MjAwMTcyNjgyNn0.5ATbh7xJDjVK57XPGsJmkwxps0fV0iyoOCRvUU2VMlc')


function HomePage() {
    const [session, setSession] = useState(null)

    useEffect(() => {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session)
      })
  
      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
      })
  
      return () => subscription.unsubscribe()
    }, [])
  
    if (!session) {
      return (<Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />)
    }
    else {
      return (<div>Logged in!</div>)
    }
    return (
        <div className="HomePage">
        <h1 className='HomePage-title'>Welcome to Wise Wallet Kitchen!</h1>
        <p className="intro-pitch">We’ve been just where you’re standing now. Standing in the aisle or even in cue. 
        Stack of coupons in one hand, bank card in the other. Your eyes staring down at your shoes and then darting back up at the ceiling as you process the sums. 
        Once, twice. You review each and every coupon adding their discount to the tally. Three times. And a fourth. Now you’re sure. 
        You don’t have enough for the shop. Shaking your head, you quickly scan your shopping cart because some items have got to go. 
        But will you sacrifice? There’s hardly anything you selected that’s seen as a luxury. 
        Yes, there is the New York style cheesecake topped with passion fruit compote. But the kids haven’t had a proper dessert in weeks. 
        All that’s present are what you would have labelled essentials only six months ago. How soon will it be before you start having to skip meals? 
        And that’s when you feel that little tug on your arm right between the funny bone and the elbow. 
        You turn around to find us standing next to you with a big smile and more importantly a plan containing recipes 
        that will let you shop with more confidence because the ingredients meet your budget. 
        By making a few small adjustments in what you’re purchasing, you can keep all the items in your cart, 
        including the cheesecake, and still have enough to throw in a cheeky sweet for yourself. 
        Victory! Welcome Wise Wallet Kitchen. </p>
        <img alt="mother and daughter preparing food in kitchen" src="https://images.pexels.com/photos/4259707/pexels-photo-4259707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <br/>
        <button className="HomePage-button-sign-up">Sign Up and Start Saving Today</button>
        <br/>
        <button className="HomePage-button-log-in">Log In</button>
        </div> )

        };



export default HomePage;