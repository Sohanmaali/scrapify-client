import React from "react";

const CategoryCardComp = ({ title, image , key }:any) => {
  return (
<div
  key={key}
  className=" flex justify-center cursor-pointer flex items-center bg-[#fff] border border-[#32b56c] rounded-lg p-4 hover:text-[#049141] hover:shadow-2xl hover:scale-105 transform transition-all duration-300 w-full max-w-2xl"
>
  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
    <img
      src={image}
      alt={title}
      className="w-full h-full object-cover"
    />
  </div>
  <h3 className="text-lg font-semibold hover:text-[#309255]">{title}</h3>
</div>

  );
};

export default CategoryCardComp;
