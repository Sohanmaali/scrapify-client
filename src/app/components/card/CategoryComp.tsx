
"use client";

import React, { use, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { Heading } from "../generalComp/Heading";
import { GreadiantButton } from "../generalComp/Buttons";
import CategoryCard from "./CategoryCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRouter } from "next/navigation";
import BasicProvider from "@/app/utils/basicprovider";
import CategoryCardSkeleton from "../Skeleton/CategoryCardSkeleton";

interface Category {
  title: string;
  image: string;
}

const CategoryComp: React.FC = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);

  const [categories, setCategories] = React.useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsLoading(true);
        const response: any = await new BasicProvider(
          `public/setting/browse-category`
        ).getRequest();
        // const data = await response.json();

        console.log("-=-=-=-=-response=-===", response);
        

        setCategories(response?.data?.value);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
      finally{
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="min-h-[60vh] bg-[#eefbf3] py-10">
      <div className="max-w-7xl mx-auto  md:px-6">
        <Heading heading="Browse Category" color="darkColor" />

        <div className="relative mt-8 px-2 sm:px-8">
          {/* Custom Navigation Buttons */}
          <button className="custom-swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-darkColor text-relatedWhite hover:bg-mutedColor p-3 rounded-full shadow-lg">
            <GrFormPrevious className="text-2xl font-semibold" />
          </button>
          <button className="custom-swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-darkColor text-relatedWhite hover:bg-mutedColor p-3 rounded-full shadow-lg">
            <GrFormNext className="text-2xl font-semibold" />
          </button>

          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: ".custom-swiper-button-prev",
              nextEl: ".custom-swiper-button-next",
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
            }}
            breakpoints={{
              // Mobile
              320: {
                slidesPerView: 2,

                spaceBetween: 10,
                centeredSlides: false,
                initialSlide: 0,
              },
              // Mobile Large
              480: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              // Tablet
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              // Desktop
              1024: {
                slidesPerView: 4,
                spaceBetween: 25,
              },
              // Large Desktop
              1280: {
                slidesPerView: 5.2,
                spaceBetween: 25,
              },
            }}
            loop={true}
            grabCursor={true}
            className="category-swiper !px-1 sm:!px-4"
          >
            {isLoading
              ? Array.from({ length: 5 }).map((_, index) => (
                  <SwiperSlide key={index} className="pb-8">
                    <div className="px-2 sm:px-0">
                      <CategoryCardSkeleton />
                    </div>
                  </SwiperSlide>
                ))
              : categories.map((category, index) => (
                  <SwiperSlide key={index} className="pb-8">
                    <div className="px-2 sm:px-0">
                      <CategoryCard
                        data={category}
                        index={index}
                        price={false}
                      />
                    </div>
                  </SwiperSlide>
                ))}
            <div className="swiper-pagination mt-6" />
          </Swiper>
        </div>

        <div className="text-center mt-10">
          <GreadiantButton callBack={() => router.replace("/pages/category")} />
        </div>
      </div>
    </div>
  );
};

export default CategoryComp;
