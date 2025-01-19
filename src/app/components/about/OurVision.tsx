import React from 'react';
import { RiLightbulbLine, RiRocketLine, RiLineChartLine, RiEyeLine } from 'react-icons/ri';



const VisionItem: React.FC<{
  icon: React.ElementType;
  title: string;
  description: string;
}> = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <div className="w-16 h-16 bg-[#309255] rounded-full flex items-center justify-center mb-4">
      <Icon className="w-8 h-8 text-[#e7f8ee]" aria-hidden="true" />
    </div>
    <h3 className="text-xl font-bold text-[#309255] mb-2 text-center">{title}</h3>
    <p className="text-[#212832] text-center">{description}</p>
  </div>
);

const OurVisionSection: React.FC = () => {
  return (
    <div className='p-6'>
    <div className="bg-gray-50 font-[sans-serif] relative  shadow-lg shadow-[#e9d9f3] mx-auto rounded overflow-hidden ">
    <div className="grid sm:grid-cols-2 max-sm:gap-6">
      <div className="text-center p-6 flex flex-col justify-center items-center">
        <h3 className="font-extrabold text-5xl text-darkColor leading-tight">
          <span className="text-gray-800">Special</span> Offer
        </h3>
        <h6 className="text-lg text-gray-800 mt-4">
          Discover amazing discounts, for limited time
        </h6>
        <button
          type="button"
          className="bg-darkColor hover:bg-mutedColor text-white tracking-wide font-semibold text-sm py-3 px-6 rounded-xl mt-8"
        >
          Get Started
        </button>
       
      </div>
      <div className="flex justify-end items-center p-2 bg-darkColor  rounded-bl-[230px] w-full h-full">
        <div className="h-72 w-72 rounded-full bg-lightColor p-5">
          <img
            src="https://readymadeui.com/team-image.webp"
            className="w-full h-full rounded-full object-cover border-8 border-white"
            alt="img"
          />
        </div>
      </div>
    </div>
    <div className="absolute -top-[50px] -left-[50px] w-28 h-28 rounded-full bg-lightColor shadow-lg" />
    <div className="absolute -top-10 -left-10 w-28 h-28 rounded-full bg-darkColor  shadow-lg" />
  </div>
  </div>
  );
};

export default OurVisionSection;

