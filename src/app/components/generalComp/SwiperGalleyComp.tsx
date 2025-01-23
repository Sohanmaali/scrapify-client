"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation, Thumbs } from "swiper/modules";

const SwiperGalleyComp = ({ gallery }: any) => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState<any>(null);
  const [activeTab, setActiveTab] = React.useState("about");

  return (
    <>
      <div>
        <div className="shadow-lg p-2   rounded-lg">
          <Swiper
            modules={[Autoplay, Navigation, Thumbs]}
            loop
            navigation
            autoplay={{ delay: 3000 }}
            thumbs={{ swiper: thumbsSwiper }}
            className="rounded-lg shadow-md"
            
          >
            {gallery.length > 0 &&
              gallery.map((image: any, index: number) => (
                <SwiperSlide key={index}>
                  <div className="w-full h-[200px] sm:h-[200px] lg:h-[450px] object-cover rounded-lg">
                    <img
                      src={`${image?.filepath}`}
                      alt={`Product ${index + 1}`}
                      className="object-cover h-[400px] h-full w-full rounded-lg"
                    />
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>

          {/* Thumbnail Swiper */}
          <Swiper
            onSwiper={setThumbsSwiper}
            slidesPerView={5}
            spaceBetween={10}
            className="mt-4"
          >
            {gallery.length > 0 &&
              gallery.map((image: any, index: number) => (
                <SwiperSlide key={index}>
                  <div className="w-full h-[50px] sm:h-[113px] rounded-lg overflow-hidden">
                    <img
                      src={`${image?.filepath}`}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-[50px] sm:h-[113px] object-cover rounded-lg cursor-pointer border border-[#32b56c]"
                    />
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default SwiperGalleyComp;
