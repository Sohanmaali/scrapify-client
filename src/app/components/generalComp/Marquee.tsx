import React, { useEffect, useRef } from 'react';

const InfiniteMarquee = () => {
 
  return (
    <div className='py-5 bg-relatedWhite'>
    <div className="overflow-hidden  bg-darkColor text-relatedWhite shadow-sm p-8  marquee-container">
    <div className="marquee-wrapper flex items-center whitespace-nowrap animate-marquee marquee-content">
      <span className="mr-8 text-2xl">
      🛠️ Sell Your Scrap Easily on Scrapify! — ♻️ Get the Best Prices for Your Recyclables! — 🏆 Trusted by Thousands of Users Nationwide! — 
      📦 Sell Handmade Products Alongside Scrap! — 🚚 Fast and Reliable Pickup Services! — 💸 Instant Payments for Every Sale! — 🌍 Join the Scrap Revolution and Help Save the Planet! — 
      🔔 Sign Up Today and Start Selling in Minutes!
      </span>
      <span className="mr-8">
      🛠️ Sell Your Scrap Easily on Scrapify! — ♻️ Get the Best Prices for Your Recyclables! — 🏆 Trusted by Thousands of Users Nationwide! — 
      📦 Sell Handmade Products Alongside Scrap! — 🚚 Fast and Reliable Pickup Services! — 💸 Instant Payments for Every Sale! — 🌍 Join the Scrap Revolution and Help Save the Planet! — 
      🔔 Sign Up Today and Start Selling in Minutes!
      </span>
    </div>
  </div>
  </div>
  

  );
};

export default InfiniteMarquee;
