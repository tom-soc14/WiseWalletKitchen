// import React from "react";


// const HomePageImageCarousel = ({ imageSrc, text, onPrev, onNext }) => {
//   return (
//     <div className="carousel">
//       <div className="carousel-image">
//         <img src={imageSrc} alt="Carousel" />
//       </div>
//       <div className="carousel-text">{text}</div>
//       <button className="carousel-arrow carousel-arrow-left" onClick={onPrev}>
//         &lt;
//       </button>
//       <button className="carousel-arrow carousel-arrow-right" onClick={onNext}>
//         &gt;
//       </button>
//     </div>
//   );
// };

// export default HomePageImageCarousel;

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
      </div>
      <div className="carousel-text">
        <p>{image.text}</p>
      </div>
    </div>
  );
};

export default HomePageImageCarousel;
