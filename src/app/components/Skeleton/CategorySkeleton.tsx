const CategorySkeleton = () => {
  return (
    <div className="sm:p-0 lg:pt-10 p-2">
      <div className="grid grid-cols-1 gap-4 p-4 bg-lightColor sm:grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-4 text-lg font-medium bg-relatedWhite rounded-lg shadow-md border border-darkColor animate-pulse"
          >
            <span className="text-2xl py-2">
              <div className="w-[80px] h-[80px] bg-gray-300 rounded-lg"></div>
            </span>
            <span className="h-4 bg-gray-300 rounded w-24"></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySkeleton;
