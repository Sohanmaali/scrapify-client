import Link from 'next/link';
import React from 'react';

const ProductCardComp = ({ image = "https://via.placeholder.com/300", index }:any) => {
    return (
        // <div className='mt-10 mb-10 ml-10'>
        <div className="product-card-comp " key={index}>
            <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg overflow-hidden">
               <Link href="/product-detail"> <img className=" cursor-pointer w-full h-48 object-cover" src={image} alt='asdas' /></Link>
            </div>
            <div className="py-6">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                        <Link href='/user-detail'>
                        <img
                            src="https://via.placeholder.com/50"
                            alt="User"
                            className="w-15 h-15 rounded-full mr-5 cursor-pointer"
                        />
                        </Link>
                        <p className=" cursor-pointer text-sm font-medium text-gray-500">Mohan Maali</p>
                    </div>
                    <button
                        className=" cursor-pointer bg-lightColor text-darkColor text-xs font-medium py-2 px-6 rounded hover:bg-darkColor hover:text-relatedWhite focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                    >
                        Science
                    </button>

                </div>
                <p className="text-gray-800 text-md font-medium hover:text-darkColor transition duration-300 cursor-pointer">
                    Data Science and Machine Learning with Python - Hands On!
                </p>
                <div className="flex justify-between items-center py-4 px-6 bg-white rounded-lg">
                    <div className="flex items-center space-x-2">
                        <i className="fas fa-calendar-alt text-gray-600"></i> {/* Calendar Icon */}
                        <p className="text-sm text-gray-700">December 21, 2024</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <i className="fas fa-cogs text-gray-600"></i> {/* Material Icon */}
                        <p className="text-sm text-gray-700">Scrap Material</p>
                    </div>
                </div>

                <div className="flex flex-col py-3 px-6 bg-lightColor rounded-lg">
                    <div className="flex justify-between items-center">
                        <div>
                            <span className="text-lg font-semibold text-darkColor">$500.00</span>
                            <span className=" ml-3 text-sm text-gray-500 line-through">$700.00</span> {/* Cut mark (strikethrough) */}
                        </div>
                        <div className="flex items-center space-x-1">
                            {/* Rating with stars */}
                            <span className="">4.9</span>
                            <span className="text-yellow-500">&#9733;</span>
                            <span className="text-yellow-500">&#9733;</span>
                            <span className="text-yellow-500">&#9733;</span>
                            <span className="text-yellow-500">&#9733;</span>
                            <span className="text-gray-300">&#9733;</span> {/* Half star */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // </div>
    );
};

export default ProductCardComp;
