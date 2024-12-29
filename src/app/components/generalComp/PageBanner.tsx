import React from 'react';
import Image from 'next/image';
import { IoHomeOutline } from "react-icons/io5";

import { FaChevronRight } from "react-icons/fa6";
interface PageBannerProps {
  pageName: string;
  parentPage?: string;
  backgroundImage: string;
}

const PageBanner: React.FC<PageBannerProps> = ({ pageName, parentPage = 'Home', backgroundImage }) => {
  return (
    <div className="relative w-full h-48 md:h-64 lg:h-80 overflow-hidden bg-green-800">
      <Image
        src={backgroundImage}
        alt="Page Banner Background"
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 ease-in-out transform hover:scale-105"
      />
      <div className="absolute inset-0 bg-green-900 bg-opacity-60"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
        <IoHomeOutline  className="w-12 h-12 mb-4 animate-fadeInUp" />
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 animate-fadeInUp animate-fadeInUp-delay-1">
          {pageName}
        </h1>
        <div className="flex items-center space-x-2 text-sm md:text-base animate-fadeInUp animate-fadeInUp-delay-2">
          <span>{parentPage}</span>
          <FaChevronRight className="w-4 h-4" />
          <span>{pageName}</span>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;

