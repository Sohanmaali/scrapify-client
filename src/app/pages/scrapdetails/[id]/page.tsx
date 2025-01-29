"use client";

import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import SwiperGalleyComp from "@/app/components/generalComp/SwiperGalleyComp";
import ScrapStatusTimeline from "@/app/components/generalComp/ScrapStatusTimeline";
import { BiCalendar, BiMapPin, BiMobile, BiPackage, BiTag } from "react-icons/bi";
import { useParams } from "next/navigation";
import BasicProvider from "@/app/utils/basicprovider";
import DateTimeHelper from "@/helpers/DateTimeHelper";
import { FaEdit } from "react-icons/fa";

import { IoIosCloseCircle } from "react-icons/io";
import { getStatus } from "@/helpers/genralfunction";
const page = () => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState<any>(null);
  const [scrapDetails, setScrapDetails] = React.useState<any>(null);
  const [activeTab, setActiveTab] = React.useState("about");
  const { id }: any = useParams();

  const images = [
    "https://media.istockphoto.com/id/682646160/photo/huge-single-tree-on-hill-in-backlit-carob-tree.jpg?s=2048x2048&w=is&k=20&c=-mBPZHJPLHWwgxyF2K3Gu-z0z79uVzGd1NNsfi2-z9I=",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
    "https://img.freepik.com/free-photo/smiley-woman-talking-phone-medium-shot_23-2149476757.jpg?t=st=1735142014~exp=1735145614~hmac=b3ea244ef109a2700e4dd9a323e374f0d006c1b4ab0b583900a8b8a057027c89&w=996",
    "https://images.unsplash.com/photo-1517511620798-cec17d428bc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
  ];


  const fetchScrapDetails = async () => {
    try {
      const response: any = await new BasicProvider(
        `public/scrap/show/${id}`
      ).getRequest();

      if (response.status === "success") {
        setScrapDetails(response?.data || {});
      }
    } catch (error) {
      console.error("ERROR", error);
    }
  };
  useEffect(() => {
    fetchScrapDetails();
  }, [id]);

  return (
    <>
      <div className=" sm:px-10 pt-6 p-1 pb-6">
        <div className="flex flex-wrap lg:flex-nowrap lg:gap-6 p-2">
          <div className="w-full lg:w-8/12   mb-4 lg:mb-0">
            {scrapDetails?.gallery?.length > 0 && (
              <SwiperGalleyComp gallery={scrapDetails?.gallery} />
            )}
            <div className="mt-3 text-gray-700 shadow-lg p-4 px-5 rounded-lg border-t border-gray-300">
              <div className="flex items-center justify-between">
                {/* Title */}
                <h2 className="text-lg font-semibold">Product Name</h2>

                {/* Inline Button */}
                <div>
                  <button
                    className="border border-darkColor inline-flex items-center bg-lightColor text-darkColor px-4 py-2 rounded-lg hover:bg-darkColor hover:text-relatedWhite transition-all"
                    onClick={() => alert('Edit button clicked!')} // Add your action here
                  >
                    Edit
                    <span className="ml-2"><FaEdit /></span>
                  </button>
                  <button
                    className="ml-2 border border-red-400 inline-flex items-center bg-red-100 text-red-500 px-4 py-2 rounded-lg hover:bg-red-500 hover:text-relatedWhite transition-all"
                    onClick={() => alert('Edit button clicked!')} // Add your action here
                  >
                    Cancle
                    <span className="ml-2"><IoIosCloseCircle /></span>
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="mt-2">
                <p>{scrapDetails?.description}</p>
              </div>
            </div>


          </div>

          {/* Right Card: Price Section */}
          <div className=" mt-2 w-full lg:w-4/12  flex flex-col self-start lg:mb-0 gap-6">
            <div className="border border-darkColor w-full max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ">
              <div className="p-6 sm:p-8 border bg-gray-50">
                {/* Header Section */}
                <div className="flex justify-between items-start mb-6">
                  <span className="text-base sm:text-lg font-semibold border border-darkColor text-darkColor tracking-tight bg-lightColor px-2 py-1 rounded">
                    {scrapDetails?.name}
                  </span>
                  <div className="flex flex-col items-end">
                    <span className="text-2xl sm:text-2xl font-extrabold text-green-600">
                      {process.env.NEXT_PUBLIC_CURRENCY_SYMBOL}{scrapDetails?.total || "2000"}
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-gray-500">
                      ({`${process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || ''}${scrapDetails?.sell_price || ''}`} / kg)
                    </span>
                  </div>
                </div>

                {/* Details Section */}
                <div className="space-y-6 divide-y divide-gray-200">
                  {/* Weight */}
                  <div className="pt-4 grid grid-cols-2 gap-4">
                    <div className="flex items-center text-gray-700">
                      <BiPackage className="h-5 w-5 mr-3 text-darkColor" />
                      <span className="font-medium">
                        {scrapDetails?.type || "Weight"}
                      </span>
                    </div>
                    <span className="text-right font-semibold text-gray-800">
                      {scrapDetails?.quantity } {scrapDetails?.type || "Kg"}
                    </span>
                  </div>

                  {/* Location */}
                  <div className="pt-4 grid grid-cols-2 gap-4">
                    <div className="flex items-center text-gray-700">
                      <BiMapPin className="h-5 w-5 mr-3 text-darkColor" />
                      <span className="font-medium">Location</span>
                    </div>
                    <span className="text-right font-semibold text-gray-800">
                      {scrapDetails?.address}
                    </span>
                  </div>

                  {/* Posted On */}
                  <div className="pt-4 grid grid-cols-2 gap-4">
                    <div className="flex items-center text-gray-700">
                      <BiCalendar className="h-5 w-5 mr-3 text-darkColor" />
                      <span className="font-medium">Posted On</span>
                    </div>
                    <span className="text-right font-semibold text-gray-800">
                      {DateTimeHelper.DisplayDate(scrapDetails?.createdAt) ||
                        "2023-02-02"}
                    </span>
                  </div>
                   {/* Posted On */}
                   <div className="pt-4 grid grid-cols-2 gap-4">
                    <div className="flex items-center text-gray-700">
                      <BiMobile className="h-5 w-5 mr-3 text-darkColor" />
                      <span className="font-medium">Contact Number</span>
                    </div>
                    <span className="text-right font-semibold text-gray-800">
                     {scrapDetails?.mobile}
                    </span>
                    {/* <small>please Active your number</small> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-darkColor w-full lg:w-12/12 bg-white rounded-lg shadow-lg p-6 flex flex-col self-start mb-4 lg:mb-0">
              <h1>Timeline of your scrap</h1>
              <ScrapStatusTimeline status={getStatus(scrapDetails?.status || "accepted")} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
