import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import CategoryCardComp from "./CategoryCardComp";
import { Navigation } from "swiper/modules";
import { Heading } from "../generalComp/Heading";
import { GreadiantButton } from "../generalComp/Buttons";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const CategoryComp = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const categories = [
    {
      title: "Electronics",
      image: "https://via.placeholder.com/150?text=Electronics",
    },
    {
      title: "Furniture",
      image: "https://via.placeholder.com/150?text=Furniture",
    },
    {
      title: "Handmade",
      image: "https://via.placeholder.com/150?text=Handmade",
    },
    {
      title: "Scrap Material",
      image: "https://via.placeholder.com/150?text=Scrap",
    },
    {
      title: "Books",
      image: "https://via.placeholder.com/150?text=Books",
    },
  ];

  return (
    <div className="min-h-[60vh] sm:min-h-[20vh] lg:min-h-[60vh] bg-[#eefbf3] py-10">
      <div className="max-w-7xl mx-auto px-4 relative">
        <Heading heading="Browse Category" color="darkColor" />

        {/* Custom Navigation Buttons */}
        <button
          ref={prevRef}
          className=" sm:hidden mt-[-25px] absolute top-36 left-5 z-10 transform -translate-y-1/2 bg-darkColor text-relatedWhite hover:bg-mutedColor p-3 rounded-full shadow-lg"
        >
          <GrFormPrevious className="text-2xl font-semibold" />
        </button>
        <button
          ref={nextRef}
          className=" sm:hidden mt-[-25px] absolute top-36 right-5 z-10 bg-darkColor text-relatedWhite hover:bg-mutedColor p-3 rounded-full shadow-lg transform -translate-y-1/2"
        >
          <GrFormNext className="text-2xl font-semibold" />
        </button>

        {/* Swiper for Mobile Devices */}
        <div className="block sm:hidden">
          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={1}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper:any) => {
              // Attach navigation elements before initialization
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            loop
            grabCursor={true}
          >
            {categories.map((category, index) => (
              <SwiperSlide key={index}>
                <CategoryCardComp
                  title={category.title}
                  image={category.image}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Static Grid for Desktop */}
        <div className="hidden sm:block mt-5">
          <div className="grid grid-cols-5 gap-6 mt-12 px-4 lg:px-12">
            {categories.map((category, index) => (
              <CategoryCardComp
                key={index}
                title={category.title}
                image={category.image}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="text-center mt-10">
        <GreadiantButton />
      </div>
    </div>
  );
};

export default CategoryComp;

