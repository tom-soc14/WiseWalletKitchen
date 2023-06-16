import React, { useState, useEffect } from "react";
import HomePageImageCarousel from "./HomePageImageCarousel.js";
import "./HomePageImageCarousel.css";

const images = [
  {
    id: 0,
    src:
      "https://images.pexels.com/photos/264529/pexels-photo-264529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text:
      "The cost of of living is impacting us all",
  },
  {
    id: 1,
    src: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text: 'Having structure to your purchases can help you save',
    },
    {
      id: 2,
    src: 'https://images.pexels.com/photos/4199116/pexels-photo-4199116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        text: 'Making the right choice is key to saving',
    },
    {
      id: 3,
    src: 'https://images.pexels.com/photos/4049869/pexels-photo-4049869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text: 'Our App is designed to help you make that choice',
    },
    {
      id: 4,
    src: 'https://images.pexels.com/photos/4259707/pexels-photo-4259707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text: "We'll give you delicious recipes and allow you to save",
       }
];

const HomePageStoryImages = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setCurrentImageIndex((prevIndex) => (prevIndex + 1 >= images.length) ? images.length - 1 : prevIndex + 1);
    }, 8000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  function handleReplay() {
    setCurrentImageIndex(0)
  }

  return (
    <div className="carousel-container">
      <HomePageImageCarousel
        image={images[currentImageIndex]}
        key={currentImageIndex}
        handleReplay={handleReplay}
      />
  
    </div>
  );
};

export default HomePageStoryImages;



//    text:
// "We’ve been just where you’re standing now. Standing in the aisle or even in the queue. Vouchers in one hand, bank card in the other. Your eyes quickly dart back and forth from floor to ceiling as you process the sums.",
// Once, twice. You review each and every voucher, adding the up discounts. Three times. And a fourth. Now you’re sure. You don’t have enough to pay for the shopping this time. Shaking your head, you quickly scan your cart to see which items can go.
// But what do you sacrifice? There’s hardly anything you selected that identifies as a luxury. Yes, there is the New York style cheesecake topped with passion fruit. But the kids haven’t had a proper dessert in weeks. All that’s present are what you would have labelled essentials only six months ago. How soon will it be before you start having to skip meals?
// And that’s when you feel that little tug on your arm right between the funny bone and elbow. You turn around to find us standing next to you with a big smile, not with hands out but arms open. One of them is holding a plan containing recipes that will let you shop with more confidence because the ingredients meet your budget.
//We’re Wise Wallet Kitchen and we’re here to help you save money and make wise choices for your household. We bring you the best of both worlds: a kitchen filled with delicious recipes and a wallet that helps you save and track your expenses.