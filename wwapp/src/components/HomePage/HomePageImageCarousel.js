import React, { useState, useEffect } from "react";

const HomePageImageCarousel = ({ image }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
    const timer = setTimeout(() => {
      setIsActive(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [image]);

  return (
    <div className={`carousel ${isActive ? "active" : ""}`}>
      <div className="carousel-image">
        <img src={image.src} alt="Carousel" />
          <div className="carousel-text">
          <p>{image.text}</p>
          </div>
      </div>

    </div>
  );
};

export default HomePageImageCarousel;
