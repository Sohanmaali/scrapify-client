import React from 'react';

const QuickShell = () => {
    return (
        <section className=' bg-relatedWhite py-5 w-full flex   justify-center items-center'>
            <div className=" rounded-lg relative w-11/12 h-[200px] md:h-[300px] bg-darkColor">
                {/* Image Background */}
                <img
                    src='https://w.ndtvimg.com/sites/3/2019/04/27124253/waste-management-in-bhopal-sell-scrap-online-to-the-kabadiwala_660x330.jpg'
                    alt="Landing"
                    className="w-full h-full object-cover opacity-15 rounded-lg"
                />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-center items-start text-left text-white px-6">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
                        Sell Your Second-Hand Items Easily!
                    </h2>
                    <p className="text-sm sm:text-lg md:text-xl mb-6">
                        Ready to declutter your space? Upload your items and start selling now.
                    </p>
                    <button className="bg-mutedColor text-relatedWhite hover:bg-lightColor hover:text-darkColor py-4 px-7  rounded-lg transition duration-300">
                 Shell Now
                </button>
                </div>


            </div>
        </section>
    );
};

export default QuickShell;
