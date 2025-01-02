const CategoryCardSkeleton = () => {
    return (
      <div className="flex flex-col items-center bg-white border border-gray-300 rounded-lg shadow-sm p-3 w-40 animate-pulse">
        {/* Image Placeholder */}
        <div className="w-[80px] h-[80px] bg-gray-200 rounded-lg"></div>
  
        {/* Name Placeholder */}
        <div className="mt-2 h-4 w-20 bg-gray-200 rounded"></div>
  
        {/* Price Placeholder */}
        {/* <div className="mt-2 h-4 w-20 bg-gray-200 rounded"></div> */}
  
        {/* Button Placeholder */}
        <div className="mt-3 h-6 w-24 bg-gray-200 rounded-full"></div>
      </div>
    );
  };
  
  export default CategoryCardSkeleton;
  