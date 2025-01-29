"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdOutlineCategory } from "react-icons/md";
import { FaMapMarkerAlt, FaRegCalendarAlt } from "react-icons/fa";
import Image from "next/image";
import DateTimeHelper from "@/helpers/DateTimeHelper";
import { statusBadge } from "../generalComp/Buttons";
import { getStatus } from "@/helpers/genralfunction";
const ScrapProductCard = ({ item, navigate = () => { } }: any) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // UseEffect to run on the client side only
  useEffect(() => {
    if (window) {
    }
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex flex-col sm:flex-row bg-white border hover:bg-lightColor border-darkColor rounded-lg overflow-hidden w-[400px] max-w-full mx-auto shadow-md p-4 mb-5 transition-all duration-300 ease-in-out hover:shadow-lg">

        {/* <div className="flex flex-col sm:flex-row bg-white border hover:bg-lightColor border-darkColor rounded-lg overflow-hidden max-w-md mx-auto shadow-md p-4 mb-5 transition-all duration-300 ease-in-out hover:shadow-lg"> */}
        {/* <Link href="/product-detail" className="flex-shrink-0 w-full sm:w-1/3"> */}
        <div className="cursor-pointerb rounded-lg overflow-hidden h-[150px] w-[300px] sm:h-32 lg:h-32 sm:w-32 ">

          <img
            className="w-full h-full object-cover cursor-pointer"
            src={
              item?.gallery[0]?.filepath
                ? `${item?.gallery[0]?.filepath}`
                : "/assert/images/noimage.png"
            }
            onClick={navigate}
            alt="scrap product"
          />
        </div>
        {/* </Link> */}

        <div className="flex flex-col justify-between w-full sm:w-2/3 py-2 px-4 space-y-3">
          {/*  */}
          <p
            className="text-sm font-semibold text-gray-800 hover:text-darkColor transition duration-300 cursor-pointer"
            onClick={navigate}
          >
            {item?.name || "-"}
          </p>

          <div className="flex justify-between items-center">
            <div>
              <span className="text-lg font-bold text-darkColor">
                {process.env.NEXT_PUBLIC_CURRENCY_SYMBOL}{item?.total || "N/A"}
              </span>
              <span className="ml-2 text-xs text-gray-500">
                {process.env.NEXT_PUBLIC_CURRENCY_SYMBOL}{item?.sell_price}/{item?.unit_type}
              </span>
            </div>
            <span className="text-xs font-medium text-relatedWhite bg-darkColor px-2 py-1 rounded">
              {item?.quantity} {item?.unit_type}
            </span>
          </div>

          <div className="text-xs text-gray-700 flex justify-between space-x-4">
            <p className="flex items-center">
              <MdOutlineCategory className=" text-gray-600 mr-1" />
              {item?.category?.type}
            </p>
            <p className="flex items-center">
              <FaRegCalendarAlt className="text-gray-600 mr-1" />

              {DateTimeHelper.DisplayDate(item?.available_date)}
            </p>
          </div>
          <div className="text-xs text-gray-700 flex items-center justify-between">
            {/* Address Section */}
            <div className="flex items-center space-x-1">
              <FaMapMarkerAlt className="text-darkColor" />
              <p>{item?.address || "-"}</p>
            </div>

            {/* Status Section */}
            <div className="flex items-center ">
              <span
                className={`px-2 py-1 rounded-lg text-xs font-medium ${getStatus(item.status) === "completed"
                  ? "bg-green-100 text-green-600"
                  : getStatus(item.status) === "pending"
                    ? "bg-yellow-100 text-yellow-600"
                    : getStatus(item.status) === "accepted"
                      ? "bg-blue-100 text-blue-600"
                      : getStatus(item.status) === "rejected"
                        ? "bg-red-100 text-red-600"
                        : "bg-gray-100 text-gray-600"
                  }`}
              >
                {getStatus(item.status) || "N/A"}
              </span>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrapProductCard;
