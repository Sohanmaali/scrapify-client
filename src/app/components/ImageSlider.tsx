"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { GetStartButton } from "./generalComp/Buttons";
import BasicProvider from "../utils/basicprovider";
import { ButtonLoader } from "./generalComp/Loader";
import SliderSkeleton from "./Skeleton/SliderSkeleton";

export default function ImageSlider() {
  const [sliderData, setSliderData] = useState([]);
  const swiperRef = useRef<any>(null); // Typed as 'any' for Swiper instance
  const prevRef = useRef<any>(null);
  const nextRef = useRef<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchSliderData = async () => {
    try {
      const response: any = await new BasicProvider(
        `public/slider/show/home-slider`
      ).getRequest();

      if (response.status === "success") {
        setSliderData(response?.data?.slider);
      }
    } catch (error) {
      console.error("error", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSliderData();
  }, []);

  // Ensure that Swiper is fully initialized and refs are set
  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      const swiperInstance = swiperRef.current.swiper;
      if (swiperInstance) {
        swiperInstance.params.navigation.prevEl = prevRef.current;
        swiperInstance.params.navigation.nextEl = nextRef.current;
        swiperInstance.navigation.init();
        swiperInstance.navigation.update();
      }
    }
  }, [sliderData]); // Trigger only when sliderData has been loaded.

  if (isLoading) {
    return (
      <div>
       <SliderSkeleton/>
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        ref={prevRef}
        className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2 bg-darkColor text-relatedWhite hover:bg-mutedColor p-3 rounded-full shadow-lg"
      >
        <GrFormPrevious className="text-2xl font-semibold" />
      </button>
      <button
        ref={nextRef}
        className="absolute top-1/2 right-4 z-10 bg-darkColor text-relatedWhite hover:bg-mutedColor p-3 rounded-full shadow-lg transform -translate-y-1/2"
      >
        <GrFormNext className="text-2xl font-semibold" />
      </button>

      <Swiper
        ref={swiperRef}
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper: any) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {sliderData.length > 0 &&
          sliderData.map((slider: any, index: number) => (
            <SwiperSlide key={index}>
              <div className="relative">
                <img
                  src={`${slider?.image?.filepath}`}
                  alt={`slider ${index + 1}`}
                  className="w-full h-80 sm:h-80 md:h-96 lg:h-[500px] object-cover"
                />
                <div
                  className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                  style={{ backgroundColor: "rgb(48, 146, 85, 0.6)" }} // White color with 10% opacity
                >
                  <div className="text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">
                      {slider?.heading}
                    </h2>
                    <p className="text-lg mb-6">{slider?.details}</p>
                    <GetStartButton />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
