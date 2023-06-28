import React, { useState, useEffect } from "react";
import AboutImageCarousel from "./AboutImageCarousel.js";
import budget from './budget.jpeg';
import graph from './graph.jpeg';
import recipe from './recipe.jpeg';
import Owl from "../../NavBar/WWK_Logo_Large.png";

const images = [
  {
    id: 0,
    src: Owl,
    text: "Uncover the ultimate budget recipe, saving money and making wise choices, with Wise Wallet Kitchen — a deliciously frugal kitchen solution.",
  },
  {
    id: 1,
    src: recipe,
    text: "Dive into our curated dinner recipes, tailored to your palate, complete with ingredients and budget-friendly pricing.",
  },
  {
    id: 2,
    src: budget,
    text: "Personalised options for any budget: Select from our Saver, Classic, or Premium plans to suit your preferences and finances. ",
  },
  {
    id: 3,
    src: graph,
    text: "Watch your savings grow as you make informed choices. We help you track your progress and visualise your future finances.",
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
