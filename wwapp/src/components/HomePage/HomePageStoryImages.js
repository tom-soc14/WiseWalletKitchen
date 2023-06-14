import React from 'react';
import HomePageImageCarousel from './HomePageImageCarousel.js';
import './HomePageImageCarousel.css';


 const images = [
  {
    src: 'https://images.pexels.com/photos/264529/pexels-photo-264529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text: 'We’ve been just where you’re standing now. Standing in the aisle or even in the queue. Vouchers in one hand, bank card in the other. Your eyes quickly dart back and forth from floor to ceiling as you process the sums.',
  },
  {
    src: 'photo2.jpg',
    text: 'Once, twice. You review each and every voucher, adding the discounts up. Three times. And a fourth. Now you’re sure. You don’t have enough to pay for the shopping this time. Shaking your head, you quickly scan your cart to see which items can go.',
  },
  {
    src: 'photo3.jpg',
    text: 'But what do you sacrifice? There’s hardly anything you selected that identifies as a luxury. Yes, there is the New York style cheesecake topped with passion fruit. But the kids haven’t had a proper dessert in weeks. All that’s present are what you would have labelled as essentials only six months ago. How soon will it be before you start having to skip meals?',
  },
  {
    src: 'photo4.jpg',
    text: 'And that’s when you feel that little tug on your arm right between the funny bone and elbow. You turn around to find us standing next to you with a big smile, not with hands out but arms open with one of them holding a plan containing recipes that will let you shop with more confidence because the ingredients meet your budget.',
  },
  {
    src: 'photo5.jpg',
    text: 'By making a few small adjustments in what you’re purchasing, you can keep all the items in your cart, including the cheesecake, and still have enough to throw in a cheeky sweet for yourself. Victory! Welcome to Wise Wallet Kitchen.',
  },
];
 const HomePageStoryImages = () => {
  return (
    <div>
      {images.map((image) => (
        <HomePageImageCarousel key={image.src} imageSrc={image.src} text={image.text} />
      ))}
    </div>
  );
};
 export default HomePageStoryImages;