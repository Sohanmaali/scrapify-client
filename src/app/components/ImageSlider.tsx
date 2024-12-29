// components/ImageSlider.js

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { useRef } from 'react';
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { GetStartButton } from './generalComp/Buttons';
export default function ImageSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative">

      <button
        ref={prevRef}
        className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2 bg-darkColor text-relatedWhite hover:bg-mutedColor p-3 rounded-full shadow-lg"
      >
        <GrFormPrevious className='text-2xl font-semibold' />
      </button>
      <button
        ref={nextRef}
        className="absolute top-1/2 right-4 z-10  bg-darkColor text-relatedWhite hover:bg-mutedColor p-3 rounded-full shadow-lg transform -translate-y-1/2"
      >
        <GrFormNext className='text-2xl font-semibold' />
      </button>

      <Swiper
        modules={[Navigation,Autoplay]}
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

        <SwiperSlide>
          <div className="relative">
            <img
              src="./assert/images/sliderImage_1.jpeg"
              alt="Slide 1"
              className="w-full h-80 sm:h-80 md:h-96 lg:h-[500px] object-cover"
            />
            <div
              className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
              style={{ backgroundColor: "rgb(48, 146, 85, 0.6)" }} // White color with 10% opacity
            >
              <div className="text-center text-white">
                <h2 className="text-3xl font-bold mb-4">Welcome to Our Service</h2>
                <p className="text-lg mb-6">We provide the best solutions for your needs.</p>
               <GetStartButton/>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative">
            <img
              src="./assert/images/sliderimage2.jpg"
              alt="Slide 2"
              className="w-full h-80 sm:h-80 md:h-96 lg:h-[500px] object-cover"
            />
            <div
              className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
              style={{ backgroundColor: "rgb(48, 146, 85, 0.6)" }} // White color with 10% opacity
            >
              <div className="text-center text-white">
                <h2 className="text-3xl font-bold mb-4">Innovative Solutions</h2>
                <p className="text-lg mb-6">Helping you achieve your business goals.</p>
                <GetStartButton/>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative">
            <img
              src="./assert/images/scrap_holder_img.jpg"
              alt="Slide 3"
              className="w-full h-80 sm:h-80 md:h-96 lg:h-[500px] object-cover"
            />
            <div
              className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
              style={{ backgroundColor: "rgb(48, 146, 85, 0.6)" }} // White color with 10% opacity
            >

              <div className="text-center text-white">
                <h2 className="text-3xl font-bold mb-4">Get Started Today</h2>
                <p className="text-lg mb-6">Join us and take your business to the next level.</p>
                <GetStartButton/>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
