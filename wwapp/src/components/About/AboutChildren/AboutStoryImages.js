import React, { useState, useEffect } from "react";
import AboutImageCarousel from "./AboutImageCarousel.js";
import exampleGraph from "./exampleGraph.jpeg";
import exampleRecipe from "./exampleRecipe.jpeg";
import exampleBudgetFilledIn from "./exampleBudgetFilledIn.jpeg";

const images = [
  {
    id: 0,
    src: exampleRecipe,
    text: "Join us to so we can show you the perfect recipe for your tea tonight, all while saving money and making wise choices for your household. Wise Wallet Kitchen brings you the best of both worlds: a kitchen filled with delicious recipes and a wallet that helps you save and track your expenses.",
  },
  {
    id: 1,
    src: exampleBudgetFilledIn,
    text: "Cooking made easy: Explore our collection of delicious recipes for dinner, handpicked to suit your taste buds. Each recipe comes with a complete list of ingredients, making it convenient for you to plan your shopping trip. We provide the price for the entire meal and the individual ingredients, helping you budget your expenses wisely.",
  },
  {
    id: 2,
    src: exampleGraph,
    text: "Tailored plans for every budget: Choose from our three different plans - Saver, Classic, or Premium - based on your budget and preferences. Whether you're cooking for one or have a family of four, we've got you covered. Simply let us know the number of people in your household, and we'll provide recipes and ingredients accordingly.",
  },
  {
    id: 3,
    src: exampleGraph,
    text: "Save more, spend smarter: With our wallet, you can effortlessly compare your expenses against the UK national average and see how much you're saving. Watch your savings grow as you make informed choices and optimise your spending habits. We help you track your progress and visualise your future finances.",
  },
];

const AboutStoryImages = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setCurrentImageIndex((prevIndex) =>
        prevIndex + 1 >= images.length ? images.length - 1 : prevIndex + 1
      );
    }, 8000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // function handleReplay() {
  //   setCurrentImageIndex(0)
  // }

  function handlePreviousImage() {
    if (currentImageIndex <= 0) {
      setCurrentImageIndex(0);
    } else {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  }

  function handleNextImage() {
    if (currentImageIndex === images.length - 1) {
      setCurrentImageIndex(0);
    } else {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  }

  return (
    <div className="carousel-container">
      <AboutImageCarousel
        image={images[currentImageIndex]}
        key={currentImageIndex}
        // handleReplay={handleReplay}
        handlePreviousImage={handlePreviousImage}
        handleNextImage={handleNextImage}
      />
    </div>
  );
};

export default AboutStoryImages;
