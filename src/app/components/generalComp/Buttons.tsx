"use client"

import Link from 'next/link';
import { useEffect } from 'react';
import { FaPlus } from 'react-icons/fa6';
import { IoMdArrowRoundUp } from "react-icons/io";
import { PiUploadSimpleFill } from "react-icons/pi";
const GreadiantButton = ({ callBack = () => { } }: any) => {
    return (
        <button onClick={callBack} className="greadiant-button" role={'button'}><span className="text">View All Category</span></button>
    )
}



const PrimaryButton = ({ heading = "View All" }) => {
    return (
        <button className="primary-button" role={'button'}><span className="text">{heading}</span></button>
    )
}


const AddButton = ({ lable = "Add", callBack = () => { } }: any) => {
    return (
        <button
            onClick={callBack}
            className="flex items-center px-6 py-3 bg-lightColor border border-darkColor text-darkColor font-semibold text-sm rounded-lg hover:bg-darkColor hover:text-relatedWhite transition duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none"
            role="button"
        >
            <span className="text">{lable}</span>
            <FaPlus className="text-darkColo hover:text-relatedWhite ml-2 text-lg" /> {/* Icon */}
        </button>
    )
}


const SubmitButton = ({ heading = "Submit", isLoading = false, callBack }: any) => {
    return (
        <button onClick={callBack}
            className="flex items-center px-6 py-3 bg-darkColor text-relatedWhite font-semibold text-sm rounded-lg hover:bg-green-700 transition duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none"
            role="button"
        >

            {isLoading ?
                <><span className="text mr-2">Loading...</span>
                    <span className="flex items-center justify-end pr-2">
                        <span className="w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin"></span>
                    </span>
                </> : <>
                    <span className="text">{heading}</span>
                    <PiUploadSimpleFill className="text-white ml-2 text-lg" />
                </>
            }

        </button>
    )
}



function GetStartButton() {
    return (<>
        <Link href={'/account/addproduct'} className="bg-mutedColor text-relatedWhite hover:bg-lightColor hover:text-darkColor py-4 px-7  rounded-lg transition duration-300">
            Get Started
        </Link>
    </>)
}


function GoOnTopButton() {
    useEffect(() => {
        const button: any = document.getElementById('backToTopButton');

        const handleScroll = () => {
            if (window.scrollY > 300) {
                button.style.display = 'block';
            } else {
                button.style.display = 'none';
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-5 right-5 px-4 h-12 rounded-full cursor-pointer opacity-70 hidden bg-lightColor text-white 
                     border border-darkColor group hover:bg-darkColor hover:bg-opacity-0 transition duration-300 ease-in-out"
                id="backToTopButton"
            >
                <IoMdArrowRoundUp className='text-darkColor group-hover:text-white transition duration-300 ease-in-out' />
            </button>

        </div>
    );
}


const statusBadge = ({ status }: any) => {
    return (<>
        <span
            className={`px-2 py-1 rounded-lg text-xs font-medium ${status === "completed"
                ? "bg-green-100 text-green-600"
                : status === "pending"
                    ? "bg-yellow-100 text-yellow-600"
                    : "bg-gray-100 text-gray-600"
                }`}
        >
            {status || 'N/A'}
        </span> 
    </>)
}
export { GreadiantButton, PrimaryButton, GoOnTopButton, SubmitButton, AddButton, GetStartButton, statusBadge }


