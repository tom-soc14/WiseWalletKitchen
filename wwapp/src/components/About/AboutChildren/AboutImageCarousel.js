import React, { useState, useEffect } from "react";

const AboutImageCarousel = ({ image, handlePreviousImage, handleNextImage }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
    const timer = setTimeout(() => {
      if (image.id===3) {
        setIsActive(true)
      } else {
      setIsActive(false);}

    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [image]);
  

  return (
    <div data-testid="aboutimagecarouseltest" className={`carousel ${isActive ? "active" : ""}`}>
      <div className="carousel-image">
        <img src={image.src} alt="Carousel" />
          <div className="carousel-buttons">
          <button onClick={handlePreviousImage} className="carousel-button-previous">&#8249;</button>
          <button onClick={handleNextImage} className="carousel-button-next">&#8250;</button>
          {/* <button onClick={handleReplay} className="replay-button">Click here to start over</button> */}
          </div>
      </div>
      <div className="carousel-text">
<p>{image.text}</p>
</div>
    </div>
  );
};

export default AboutImageCarousel;