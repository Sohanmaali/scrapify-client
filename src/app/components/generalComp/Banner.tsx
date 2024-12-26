import React from "react";

const Banner = ({
  title = "About Us",
  subtitle = "Lorem text",
  backgroundImage = "https://w.ndtvimg.com/sites/3/2019/04/27124253/waste-management-in-bhopal-sell-scrap-online-to-the-kabadiwala_660x330.jpg",
}: any) => {
  return (
    <div
      className="relative w-full h-64 md:h-80 lg:h-96 flex items-center justify-start pl-6 bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content aligned to the left with green effects */}
      <div className="relative text-left text-white px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-400 drop-shadow-lg">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-2 text-lg md:text-xl text-green-200">{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default Banner;
