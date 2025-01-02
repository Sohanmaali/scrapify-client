"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Autoplay, Navigation, Thumbs } from "swiper/modules";
import SwiperGalleyComp from "@/app/components/generalComp/SwiperGalleyComp";
import ScrapStatusTimeline from "@/app/components/generalComp/ScrapStatusTimeline";

const page = () => {
    const [thumbsSwiper, setThumbsSwiper] = React.useState<any>(null);
    const [activeTab, setActiveTab] = React.useState("about");

    const images = [
        "https://media.istockphoto.com/id/682646160/photo/huge-single-tree-on-hill-in-backlit-carob-tree.jpg?s=2048x2048&w=is&k=20&c=-mBPZHJPLHWwgxyF2K3Gu-z0z79uVzGd1NNsfi2-z9I=",
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
        "https://img.freepik.com/free-photo/smiley-woman-talking-phone-medium-shot_23-2149476757.jpg?t=st=1735142014~exp=1735145614~hmac=b3ea244ef109a2700e4dd9a323e374f0d006c1b4ab0b583900a8b8a057027c89&w=996",
        "https://images.unsplash.com/photo-1517511620798-cec17d428bc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
    ];


    const items = [
        {
            status: "pending",
            title: "Pending Admin Review",
            description: "Your scrap upload is awaiting review by the admin team.",
            timestamp: "2024-01-01 09:00 AM", // Show timestamp for the current step
          },
       
          {
            status: "accepted",
            title: "Scrap Approval Pending",
            description: "Once reviewed, your scrap will be approved and purchased by the admin.",
            timestamp: null, // No timestamp for future steps
          },
          {
            status: "processing",
            title: "Pickup Will Be Scheduled",
            description: "After purchase, our team will schedule a pickup for your scrap materials.",
            timestamp: null,
          },
          {
            status: "completed",
            title: "Process Will Be Completed",
            description: "Once picked up, the process will be marked as completed.",
            timestamp: null,
          },
      ] 
    return (

        <>
            <div className="bg-gray-100 sm:px-10 pt-6 p-1 pb-6">
                <div className="flex flex-wrap lg:flex-nowrap lg:gap-6">
                    <div className="w-full lg:w-8/12   mb-4 lg:mb-0">

                        <SwiperGalleyComp />
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
                    <div className=" mt-2 w-full lg:w-4/12  flex flex-col self-start lg:mb-0 gap-6">
                    <div className="w-full lg:w-12/12 bg-white rounded-lg shadow-lg p-6 flex flex-col self-start mb-4 lg:mb-0">
    <h1 className="text-2xl font-bold mb-4">Scrap Name</h1>
    <ul className="text-gray-700 mb-4">
        <li className="mb-2">
            <span className="font-bold">Category:</span> Metal
        </li>
        <li className="mb-2">
            <span className="font-bold">Weight:</span> 15 kg
        </li>
        <li className="mb-2">
            <span className="font-bold">Condition:</span> Good
        </li>
        <li className="mb-2">
            <span className="font-bold">Location:</span> New Delhi, India
        </li>
        <li className="mb-2">
            <span className="font-bold">Posted On:</span> January 1, 2024
        </li>
    </ul>
    <span className="text-3xl font-bold text-green-500">$299.99</span>
</div>


                        <div className=" w-full lg:w-12/12 bg-white rounded-lg shadow-lg p-6 flex flex-col self-start mb-4 lg:mb-0">
                           <ScrapStatusTimeline  items={items} highlightedIndex={0}/>
                        </div>
                    </div>
                </div>

            </div>
        </>

    );
};

export default page;
