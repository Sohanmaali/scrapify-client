import Link from 'next/link';
import React from 'react';
import { MdOutlineCategory } from "react-icons/md";
import { FaMapMarkerAlt, FaRegCalendarAlt } from "react-icons/fa";
import Image from 'next/image';
import { formatDateTime } from '@/helpers/formateDateTime';
const ScrapProductCard = ({ item }: any) => {
    console.log("-=-=--=item",item);
    
    return (
        <div className="flex flex-col sm:flex-row bg-white border hover:bg-lightColor  border-darkColor rounded-lg overflow-hidden max-w-md mx-auto shadow-md p-4 mb-5 transition-all duration-300 ease-in-out hover:shadow-lg ">
            {/* Product Image */}
            <Link href="/product-detail" className="flex-shrink-0 w-full sm:w-1/3">
                <div className="cursor-pointerb h-36 rounded-lg overflow-hidden">
                    <Image
                        width={100}
                        height={20}
                        className="w-full h-full object-cover"
                        src={item?.gallery[0]?.filepath?`${process.env.NEXT_PUBLIC_API_URL}/${item?.gallery[0]?.filepath}`:"/assert/images/noimage.png"}
                        alt="scrap product"
                    />
                </div>
            </Link>

            <div className="flex flex-col justify-between w-full sm:w-2/3 py-2 px-4 space-y-3">
                {/* Product Title */}
                <p className="text-sm font-semibold text-gray-800 hover:text-darkColor transition duration-300 cursor-pointer">
                    Data Science and Machine Learning with Python - Hands On!
                </p>

                {/* Price and Product Status */}
                <div className="flex justify-between items-center">
                    <div>
                        <span className="text-lg font-bold text-darkColor">$500.00</span>
                        <span className="ml-2 text-xs text-gray-500">10$/kg</span>
                    </div>
                    <span className="text-xs font-medium text-relatedWhite bg-darkColor px-2 py-1 rounded">
                        Metal
                    </span>
                </div>

                {/* Additional Info */}
                <div className="text-xs text-gray-700 flex justify-between space-x-4">
                    <p className="flex items-center">
                        < MdOutlineCategory className=" text-gray-600 mr-1" />Scrap Material
                    </p>
                    <p className="flex items-center">
                        < FaRegCalendarAlt className="text-gray-600 mr-1" />
                        {formatDateTime(item?.available_date_time, { includeTime: false, locale: 'en-GB' })}
                    </p>
                </div>
                <div className="text-xs text-gray-700 flex space-x-1">
                    <FaMapMarkerAlt className="text-darkColor  " />
                    <p>{item?.address || '-'}</p>
                </div>
            </div>
        </div>



    );
};

export default ScrapProductCard;
