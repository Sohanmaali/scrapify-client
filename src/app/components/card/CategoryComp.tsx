// import React, { useRef, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import CategoryCardComp from "./CategoryCardComp";
// import { Navigation, Pagination } from "swiper/modules";
// import { Heading } from "../generalComp/Heading";
// import { GreadiantButton } from "../generalComp/Buttons";
// import { GrFormNext, GrFormPrevious } from "react-icons/gr";
// import CategoryCard from "./CategoryCard";

// const CategoryComp = () => {
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);

//   const categories = [
//     {
//       title: "Electronics",
//       image: "https://via.placeholder.com/150?text=Electronics",
//     },
//     {
//       title: "Furniture",
//       image: "https://via.placeholder.com/150?text=Furniture",
//     },
//     {
//       title: "Handmade",
//       image: "https://via.placeholder.com/150?text=Handmade",
//     },
//     {
//       title: "Scrap Material",
//       image: "https://via.placeholder.com/150?text=Scrap",
//     },
//     {
//       title: "Books",
//       image: "https://via.placeholder.com/150?text=Books",
//     },
//   ];

//   return (
//     <div className="min-h-[60vh] sm:min-h-[20vh] lg:min-h-[60vh] bg-[#eefbf3] py-10">
//       <div className="max-w-7xl mx-auto px-4 relative">
//         <Heading heading="Browse Category" color="darkColor" />

//         {/* Custom Navigation Buttons */}
//         <button
//           ref={prevRef}
//           className=" sm:hidden mt-[10px] absolute top-36 left-5 z-10 transform -translate-y-1/2 bg-darkColor text-relatedWhite hover:bg-mutedColor p-3 rounded-full shadow-lg"
//         >
//           <GrFormPrevious className="text-2xl font-semibold" />
//         </button>
//         <button
//           ref={nextRef}
//           className=" sm:hidden mt-[10px] absolute top-36 right-5 z-10 bg-darkColor text-relatedWhite hover:bg-mutedColor p-3 rounded-full shadow-lg transform -translate-y-1/2"
//         >
//           <GrFormNext className="text-2xl font-semibold" />
//         </button>

//         {/* first slider */}
//         {/* Swiper for Mobile Devices */}
//         <div className="block sm:hidden">
//           <Swiper
//             modules={[Navigation]}
//             spaceBetween={10}
//             slidesPerView={2}
//             navigation={{
//               prevEl: prevRef.current,
//               nextEl: nextRef.current,
//             }}
//             onBeforeInit={(swiper:any) => {
//               // Attach navigation elements before initialization
//               swiper.params.navigation.prevEl = prevRef.current;
//               swiper.params.navigation.nextEl = nextRef.current;
//             }}
//             loop
//             grabCursor={true}
//           >
//             {categories.map((category, index) => (
//               <SwiperSlide key={index}>

//                     <CategoryCard/>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//         {/*second Slider */}
//         <div className="hidden sm:block mt-5">
//           <div className="grid grid-cols-5 gap-6 mt-12 px-4 lg:px-12">
//             {categories.map((category, index) => (
//                <CategoryCard/>
//             ))}
//           </div>
//         </div>

//       </div>
//       <div className="text-center mt-10">
//         <GreadiantButton />
//       </div>
//     </div>
//   );
// };

// export default CategoryComp;

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

interface Category {
  title: string;
  image: string;
}

const CategoryComp: React.FC = () => {
  const router = useRouter();

  const [categories, setCategories] = React.useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response: any = await new BasicProvider(
          `public/setting/browse-category`
        ).getRequest();
        // const data = await response.json();

        setCategories(response?.data?.value);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  // const categories: Category[] = [
  //   {
  //     title: "Electronics",
  //     image: "https://via.placeholder.com/150?text=Electronics",
  //   },
  //   {
  //     title: "Furniture",
  //     image: "https://via.placeholder.com/150?text=Furniture",
  //   },
  //   {
  //     title: "Handmade",
  //     image: "https://via.placeholder.com/150?text=Handmade",
  //   },
  //   {
  //     title: "Scrap Material",
  //     image: "https://via.placeholder.com/150?text=Scrap",
  //   },
  //   {
  //     title: "Books",
  //     image: "https://via.placeholder.com/150?text=Books",
  //   },
  //   {
  //     title: "Clothing",
  //     image: "https://via.placeholder.com/150?text=Clothing",
  //   },
  //   {
  //     title: "Sports",
  //     image: "https://via.placeholder.com/150?text=Sports",
  //   },
  //   {
  //     title: "Kitchen",
  //     image: "https://via.placeholder.com/150?text=Kitchen",
  //   },
  // ];

  console.log("-=-=-=-=-=-==-response", categories);



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
            {categories?.length > 0 && categories?.map((category, index) => (
              <SwiperSlide key={index} className="pb-8">
                <div className="px-2 sm:px-0">
                  <CategoryCard data={category} index={index} price={false} />
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
