import React from "react";


const HomePageImageCarousel = ({ imageSrc, text, onPrev, onNext }) => {
  return (
    <div className="carousel">
      <div className="carousel-image">
        <img src={imageSrc} alt="Carousel" />
      </div>
      <div className="carousel-text">{text}</div>
      <button className="carousel-arrow carousel-arrow-left" onClick={onPrev}>
        &lt;
      </button>
      <button className="carousel-arrow carousel-arrow-right" onClick={onNext}>
        &gt;
      </button>
    </div>
  );
};

export default HomePageImageCarousel;