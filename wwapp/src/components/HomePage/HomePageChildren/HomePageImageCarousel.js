import React, { useState, useEffect } from "react";

const HomePageImageCarousel = ({ image, handleReplay, handlePreviousImage, handleNextImage }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
    const timer = setTimeout(() => {
      if (image.id===4) {
        setIsActive(true)
      } else {
      setIsActive(false);}

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
          <button onClick={handlePreviousImage} className="carousel-image-previous">LEFT</button>
          <p>{image.text}</p>
          <button onClick={handleNextImage} className="carousel-image-next">RIGHT</button>
          <button onClick={handleReplay} className="replay-button">Click here to start over</button>
          </div>
      </div>

    </div>
  );
};

export default HomePageImageCarousel;
