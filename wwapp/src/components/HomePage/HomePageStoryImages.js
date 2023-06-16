// import React, { useState, useEffect} from "react";
// import HomePageImageCarousel from "./HomePageImageCarousel.js";
// import "./HomePageImageCarousel.css";

//  const images = [
//   {
//     src: 'https://images.pexels.com/photos/264529/pexels-photo-264529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     text: 'We’ve been just where you’re standing now. Standing in the aisle or even in the queue. Vouchers in one hand, bank card in the other. Your eyes quickly dart back and forth from floor to ceiling as you process the sums.',
//   },
//   {
//     src: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     text: 'Once, twice. You review each and every voucher, adding the discounts up. Three times. And a fourth. Now you’re sure. You don’t have enough to pay for the shopping this time. Shaking your head, you quickly scan your cart to see which items can go.',
//   },
//   {
//     src: 'https://images.pexels.com/photos/4199116/pexels-photo-4199116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     text: 'But what do you sacrifice? There’s hardly anything you selected that identifies as a luxury. Yes, there is the New York style cheesecake topped with passion fruit. But the kids haven’t had a proper dessert in weeks. All that’s present are what you would have labelled as essentials only six months ago. How soon will it be before you start having to skip meals?',
//   },
//   {
//     src: 'https://images.pexels.com/photos/4049869/pexels-photo-4049869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     text: 'And that’s when you feel that little tug on your arm right between the funny bone and elbow. You turn around to find us standing next to you with a big smile, not with hands out but arms open with one of them holding a plan containing recipes that will let you shop with more confidence because the ingredients meet your budget.',
//   },
//   {
//     src: 'https://images.pexels.com/photos/4259707/pexels-photo-4259707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     text: 'We’re Wise Wallet Kitchen and we’re here to help you save money and make wise choices for your household. We bring you the best of both worlds: a kitchen filled with delicious recipes and a wallet that helps you save and track your expenses.',
//   }
//  ];


// const HomePageStoryImages = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const handleKeyPress = (event) => {
//       if (event.key === "ArrowLeft") {
//         setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//       } else if (event.key === "ArrowRight") {
//         setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//       }
//     };

//     window.addEventListener("keydown", handleKeyPress);

//     return () => {
//       window.removeEventListener("keydown", handleKeyPress);
//     };
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   const goToPrevImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   const goToNextImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   return (
//     <div>
//       <div className="image-container">
//         <HomePageImageCarousel
//           imageSrc={images[currentImageIndex].src}
//           text={images[currentImageIndex].text}
//           onPrev={goToPrevImage} 
//           onNext={goToNextImage}
//         />
//       </div>
//     </div>
//   );
// };

// export default HomePageStoryImages;

// import React, { useState, useEffect} from "react";
// import HomePageImageCarousel from "./HomePageImageCarousel.js";
// import "./HomePageImageCarousel.css";
//  const images = [
//   {
//     src: 'https://images.pexels.com/photos/264529/pexels-photo-264529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     text: 'We’ve been just where you’re standing now. Standing in the aisle or even in the queue. Vouchers in one hand, bank card in the other. Your eyes quickly dart back and forth from floor to ceiling as you process the sums.',
//   },
//   {
//     src: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     text: 'Once, twice. You review each and every voucher, adding the discounts up. Three times. And a fourth. Now you’re sure. You don’t have enough to pay for the shopping this time. Shaking your head, you quickly scan your cart to see which items can go.',
//   },
//   {
//     src: 'https://images.pexels.com/photos/4199116/pexels-photo-4199116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     text: 'But what do you sacrifice? There’s hardly anything you selected that identifies as a luxury. Yes, there is the New York style cheesecake topped with passion fruit. But the kids haven’t had a proper dessert in weeks. All that’s present are what you would have labelled as essentials only six months ago. How soon will it be before you start having to skip meals?',
//   },
//   {
//     src: 'https://images.pexels.com/photos/4049869/pexels-photo-4049869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     text: 'And that’s when you feel that little tug on your arm right between the funny bone and elbow. You turn around to find us standing next to you with a big smile, not with hands out but arms open with one of them holding a plan containing recipes that will let you shop with more confidence because the ingredients meet your budget.',
//   },
//   {
//     src: 'https://images.pexels.com/photos/4259707/pexels-photo-4259707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     text: 'We’re Wise Wallet Kitchen and we’re here to help you save money and make wise choices for your household. We bring you the best of both worlds: a kitchen filled with delicious recipes and a wallet that helps you save and track your expenses.',
//   }
// ];
//  const HomePageStoryImages = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//    useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 10000);
//      return () => {
//       clearInterval(interval);
//     };
//   }, []);
//    return (
//     <div>
//       <div className="image-container">
//         {images.map((image, index) => (
//           <img
//             key={index}
//             src={image.src}
//             alt={image.text}
//             className={index === currentImageIndex ? "active" : ""}
//           />
//         ))}
//       </div>
//       <div className="text-container">
//         <p>{images[currentImageIndex].text}</p>
//       </div>
//     </div>
//   );
// };
//  export default HomePageStoryImages;


import React, { useState, useEffect } from "react";
import HomePageImageCarousel from "./HomePageImageCarousel.js";
import "./HomePageImageCarousel.css";

const images = [
  {
    src:
      "https://images.pexels.com/photos/264529/pexels-photo-264529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text:
      "We’ve been just where you’re standing now. Standing in the aisle or even in the queue. Vouchers in one hand, bank card in the other. Your eyes quickly dart back and forth from floor to ceiling as you process the sums.",
  },
  {
    src: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text: 'Once, twice. You review each and every voucher, adding the up discounts. Three times. And a fourth. Now you’re sure. You don’t have enough to pay for the shopping this time. Shaking your head, you quickly scan your cart to see which items can go.',
    },
    {
    src: 'https://images.pexels.com/photos/4199116/pexels-photo-4199116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        text: 'But what do you sacrifice? There’s hardly anything you selected that identifies as a luxury. Yes, there is the New York style cheesecake topped with passion fruit. But the kids haven’t had a proper dessert in weeks. All that’s present are what you would have labelled essentials only six months ago. How soon will it be before you start having to skip meals?',
    },
    {
    src: 'https://images.pexels.com/photos/4049869/pexels-photo-4049869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text: 'And that’s when you feel that little tug on your arm right between the funny bone and elbow. You turn around to find us standing next to you with a big smile, not with hands out but arms open. One of them is holding a plan containing recipes that will let you shop with more confidence because the ingredients meet your budget.',
    },
    {
    src: 'https://images.pexels.com/photos/4259707/pexels-photo-4259707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text: 'We’re Wise Wallet Kitchen and we’re here to help you save money and make wise choices for your household. We bring you the best of both worlds: a kitchen filled with delicious recipes and a wallet that helps you save and track your expenses.',
       }
];

const HomePageStoryImages = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="carousel-container">
      <HomePageImageCarousel
        image={images[currentImageIndex]}
        key={currentImageIndex}
      />
    </div>
  );
};

export default HomePageStoryImages;

