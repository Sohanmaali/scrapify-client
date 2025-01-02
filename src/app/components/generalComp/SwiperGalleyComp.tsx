"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Autoplay, Navigation, Thumbs } from "swiper/modules";

const SwiperGalleyComp = () => {
    const [thumbsSwiper, setThumbsSwiper] = React.useState<any>(null);
    const [activeTab, setActiveTab] = React.useState("about");

    const images = [
        "https://media.istockphoto.com/id/682646160/photo/huge-single-tree-on-hill-in-backlit-carob-tree.jpg?s=2048x2048&w=is&k=20&c=-mBPZHJPLHWwgxyF2K3Gu-z0z79uVzGd1NNsfi2-z9I=",
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
        "https://img.freepik.com/free-photo/smiley-woman-talking-phone-medium-shot_23-2149476757.jpg?t=st=1735142014~exp=1735145614~hmac=b3ea244ef109a2700e4dd9a323e374f0d006c1b4ab0b583900a8b8a057027c89&w=996",
        "https://images.unsplash.com/photo-1517511620798-cec17d428bc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
    ];

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
            </div>
        </>

    );
};

export default SwiperGalleyComp;
