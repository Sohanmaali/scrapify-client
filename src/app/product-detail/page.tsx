"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Autoplay, Navigation, Thumbs } from "swiper/modules";

const page = () => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState<any>(null);

  const [activeTab, setActiveTab] = React.useState("about");

  // Replace with actual image URLs
  const images = [
    "https://media.istockphoto.com/id/682646160/photo/huge-single-tree-on-hill-in-backlit-carob-tree.jpg?s=2048x2048&w=is&k=20&c=-mBPZHJPLHWwgxyF2K3Gu-z0z79uVzGd1NNsfi2-z9I=",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
    "https://img.freepik.com/free-photo/smiley-woman-talking-phone-medium-shot_23-2149476757.jpg?t=st=1735142014~exp=1735145614~hmac=b3ea244ef109a2700e4dd9a323e374f0d006c1b4ab0b583900a8b8a057027c89&w=996",
    "https://images.unsplash.com/photo-1517511620798-cec17d428bc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
  ];

  return (

    <>
      <div className="bg-gray-100 sm:px-10 pt-6 p-1 pb-6">
        <div className="flex flex-wrap lg:flex-nowrap lg:gap-6">
          {/* Left Card: Swiper Section */}

          <div className="w-full lg:w-8/12   mb-4 lg:mb-0">
            <div className="shadow-lg p-2   rounded-lg">
              <Swiper
                modules={[Autoplay, Navigation, Thumbs]}
                loop
                navigation
                autoplay={{ delay: 3000 }}
                thumbs={{ swiper: thumbsSwiper }}
                className="rounded-lg shadow-md"
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="w-full h-[200px] sm:h-[200px] lg:h-[450px] object-cover rounded-lg"
                    >
                      <img
                        src={image}
                        alt={`Product ${index + 1}`}
                        className="object-cover"
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
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="w-full h-[50px] sm:h-[113px] rounded-lg overflow-hidden">
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-[50px] sm:h-[113px] object-cover rounded-lg cursor-pointer border border-[#32b56c]"
                      />
                    </div>
                  </SwiperSlide>
                ))}

              </Swiper>
            </div>

            <div className="mt-3 text-gray-700 shadow-lg p-4 px-5 rounded-lg border-t border-gray-300">
              <h2 className="text-lg font-semibold mb-4">Product Name</h2>
              <div className="mb-4">

                {/* Navigation Tabs */}
                <div className="flex border-b border-gray-300">
                  <button
                    className={`px-4 py-2 text-lg font-semibold ${activeTab === "about"
                        ? "border-b-2 border-blue-500 text-blue-500"
                        : "text-gray-600"
                      }`}
                    onClick={() => setActiveTab("about")}
                  >
                    About
                  </button>
                  <button
                    className={`px-4 py-2 text-lg font-semibold ${activeTab === "specifications"
                        ? "border-b-2 border-blue-500 text-blue-500"
                        : "text-gray-600"
                      }`}
                    onClick={() => setActiveTab("specifications")}
                  >
                    Specifications
                  </button>
                  <button
                    className={`px-4 py-2 text-lg font-semibold ${activeTab === "review"
                        ? "border-b-2 border-blue-500 text-blue-500"
                        : "text-gray-600"
                      }`}
                    onClick={() => setActiveTab("review")}
                  >
                    Review
                  </button>
                </div>
              </div>

              {/* Tab Content */}
              {activeTab === "about" && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">Product Description</h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
                    dolorum ipsam, incidunt doloremque dolores iusto ipsa id adipisci
                    commodi hic officia facere animi praesentium tempore alias ducimus
                    repellendus consectetur quisquam quia fugiat quaerat!
                  </p>
                </div>
              )}
              {activeTab === "specifications" && (
                <div>
                  <h2 className="text-lg font-semibold mb-4">Specifications</h2>
                  <ul className="list-disc pl-5">
                    <li>Feature 1: High Quality</li>
                    <li>Feature 2: Durable</li>
                    <li>Feature 3: Affordable Price</li>
                  </ul>
                </div>
              )}
              {activeTab === "review" && (
                <div>
                  <h2 className="text-lg font-semibold mb-4">Customer Reviews</h2>
                  <p>⭐⭐⭐⭐☆</p>
                  <p>
                    "Great product! Highly recommend to anyone looking for quality and
                    reliability."
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right Card: Price Section */}
          <div className="w-full lg:w-4/12 bg-white rounded-lg shadow-lg p-6 flex flex-col self-start mb-4 lg:mb-0">
            <h1 className="text-2xl font-bold mb-4">Product Name</h1>
            <p className="text-gray-700 mb-4">This is a brief description of the product.</p>
            <span className="text-3xl font-bold text-green-500 mb-4">$299.99</span>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>

  );
};

export default page;
