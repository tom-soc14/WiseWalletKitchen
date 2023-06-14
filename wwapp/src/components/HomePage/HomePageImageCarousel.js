import React from 'react';
import './HomePageImageCarousel.css';

 const ImageWithText = ({ imageSrc, text }) => {
  return (
    <div style={{ position: 'relative' }}>
      <img src={imageSrc} alt="example" />
      <div style={{ position: 'absolute', top: 0, left: 0 }}>
        <p>{text}</p>
      </div>
    </div>
  );
};
 export default ImageWithText;