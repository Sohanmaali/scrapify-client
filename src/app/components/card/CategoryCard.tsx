import Link from "next/link";

const CategoryCard = ({ data, index, price = true }: any) => {
  return (
    <>
      <div
        key={index}
        className="flex flex-col items-center bg-white border border-gray-300 hover:border-darkColor break-words rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow duration-200 w-40"
      >
        <div className=" flex justify-center">
          <span className="text-2xl">
            {" "}
            <img
              className="w-[80px] h-[80px] object-cover rounded-3 rounded-lg  "
              src={
                data?.featured_image
                  ? `${data.featured_image.filepath}`
                  : "/assert/images/noimage.png"
              }
              alt="Image Description"
            />
          </span>
        </div>
        <h3 className="text-sm font-bold  text-gray-800 mt-2 text-center break-words">
          {data?.name || ""}
        </h3>
        {price && (
          <p className="text-xs text-gray-600 mt-1 text-[15px]">
            {" "}
            ₹{data?.price} / kg
          </p>
        )}



        <Link
          href={`/pages/addscrap/${data?._id}`}
          className="mt-2 bg-lightColor text-darkColor px-3 py-1 bg-gray-100 border border-gray-400  text-xs rounded-full hover:bg-darkColor hover:text-relatedWhite focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50"
        >
          Shell Now
        </Link>
      </div>
    </>
  );
};

export default CategoryCard;
