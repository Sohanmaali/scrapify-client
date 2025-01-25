import React from "react";

export default function SliderSkeleton() {
  return (
    <div className="relative">
      <div className="flex flex-col items-center bg-white rounded-lg shadow-sm  w-100 animate-pulse">
        <div className="w-full h-80 sm:h-80 md:h-96 lg:h-[400px] bg-gray-200 rounded-lg animate-pulse"></div>
      </div>
      {/* Left Button Skeleton */}
      <div className="absolute left-4 top-1/2  bg-gray-300 p-3 rounded-full ">
        <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
      </div>
      {/* Right Button Skeleton */}
      <div className="absolute right-4 top-1/2  bg-gray-300 p-3 rounded-full ">
        <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
      </div>
    </div>
  );
}
