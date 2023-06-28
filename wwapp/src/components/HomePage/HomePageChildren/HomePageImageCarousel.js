import React, { useState, useEffect } from "react";

const HomePageImageCarousel = ({
  image,
  handlePreviousImage,
  handleNextImage,
}) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
    const timer = setTimeout(() => {
      if (image.id === 4) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [image]);

  return (
    <div
      data-testid="imagecarouseltest"
      className={`carousel ${isActive ? "active" : ""}`}
    >
      <div className="carousel-image">
        <img src={image.src} alt="Carousel" />
        <div className="carousel-buttons">
          <button
            onClick={handlePreviousImage}
            className="carousel-button-previous"
            aria-label="go-to-previous-pic"
          >
            &#8249;
          </button>
          <button
            onClick={handleNextImage}
            className="carousel-button-next"
            aria-label="go-to-next-pic"
          >
            &#8250;
          </button>
          {/* <button onClick={handleReplay} className="replay-button">Click here to start over</button> */}
        </div>
      </div>
      <div className="carousel-text">
        <p>{image.text}</p>
      </div>
    </div>
  );
};

export default HomePageImageCarousel;
