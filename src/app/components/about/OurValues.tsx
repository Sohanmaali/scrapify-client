import React from 'react';
import { RiLightbulbLine, RiRocketLine, RiLineChartLine, RiEyeLine } from 'react-icons/ri';
import { BiWorld } from "react-icons/bi";
import { MdGroups2 } from "react-icons/md";


const OurValues: React.FC = () => {
    return (
        <div className='p-6 '>
            <div className="py-8">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 items-center gap-8 md:gap-16">
                        {/* Left Section */}
                        <div className="space-y-6 bg-lightColor rounded-3xl p-4 md:p-8">
                            {/* Card 1 */}
                            <div className="flex items-center ml-auto p-6 bg-white shadow-md rounded-3xl max-w-md">
                                <MdGroups2 className="h-[90px] w-[90px] text-primaryColor mr-4" />
                                <div>
                                    <h4 className="text-gray-800 text-base font-bold">
                                        Promoting Sustainability
                                    </h4>
                                    <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                                        At Scrapify, we prioritize reducing waste and promoting eco-friendly practices, creating a cleaner and greener world.
                                    </p>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="flex items-center p-6 bg-white shadow-md rounded-3xl max-w-md">
                                <div className="mr-4">
                                    <h4 className="text-gray-800 text-base font-bold">
                                        Connecting Communities
                                    </h4>
                                    <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                                        We bring together sellers and buyers, ensuring a smooth, secure, and transparent platform for everyone involved.
                                    </p>
                                </div>
                                <BiWorld className="h-[90px] w-[90px] text-primaryColor ml-4" />
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="order-first md:order-none">
                            <h6 className="text-xl font-bold text-gray-600">Our Mission:</h6>
                            <h3 className="text-lg font-semibold text-darkColor mt-2">
                                Empowering Sustainability
                            </h3>
                            <h2 className="text-gray-800 text-2xl font-extrabold mt-4">
                                Committed to Building Trust and Sustainability
                            </h2>
                            <p className="text-gray-500 mt-4 leading-relaxed">
                                We strive to simplify recycling and promote sustainability by connecting sellers and buyers of scrap and handmade products. At Scrapify, we aim to reduce waste and create opportunities, fostering a cleaner, greener future for everyone.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default OurValues;

