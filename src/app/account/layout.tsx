"use client";

import { BiLogOut, BiPurchaseTag } from "react-icons/bi";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import sideBarData from "@/data/SideBar";
import { LogOut } from "../components/auth/AuthButton";
import { useSelector } from "react-redux";
import { VscThreeBars } from "react-icons/vsc";
import { VscClose } from "react-icons/vsc";
import { FaUserShield } from "react-icons/fa6";
// import { IoClose } from "react-icons/io5";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = useSelector((state: any) => state.auth.user);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const pathname = usePathname();
  
  return (
    <div className="flex  sm:p-10 bg-relatedWhite ">
      <div className="flex flex-col lg:flex-row w-full   h-auto  rounded-2xl p-2 desktpsidebar">
        <div className="lg:w-1/5 w-full py-4 px-4   h-auto  max-h-[760px]   fixed lg:relative  lg:block hidden  rounded-2xl bg-darkColor">
          <div className="flex flex-col justify-center items-center bg-none mb-10">
            {/* Image Container */}
            <div className="w-20 h-20 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-46 lg:h-46 border-4   rounded-full">
              <img
                src={
                  user?.image
                    ? `${user?.image}`
                    : "/assert/images/noimage.png"
                }
                alt="Circle Image"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            {/* User Name */}
            <p className="mt-2 text-lg  text-relatedWhite  font-bold">
              {user?.name}
            </p>
            {/* <p className=" text-sm  text-relatedWhite">{user.email}</p> */}
          </div>
          {/* <hr /> */}

          <ul>
            <hr />
            {sideBarData.map((navigation, index) => (
              <li key={index}>
               
                <Link
                  href={navigation.url}
                  style={{ fontSize: "17px" }}
                  className={`${
                    pathname === navigation.url ||
                    pathname === navigation.url.replace(/\/$/, "")
                      ? "active"
                      : ""
                  } active:bg-relatedWhite active:text-mutedColor text-start flex items-center text-relatedWhite my-2 py-2 p-4 border-2 border-transparent hover:text-mutedColor hover:bg-relatedWhite hover:border-lightColor rounded-lg transition-all duration-300 ease-in-out`}
                >
                  {navigation.icon}
                  <span className="ml-2">{navigation.lable}</span>
                </Link>
              </li>
            ))}

            { user && user?.role ==='employee' && 
              <li >
               <Link
                 href={'/account/employee'}
                 style={{ fontSize: "17px" }}
                 className={`${
                   pathname === '/account/employee' ||
                   pathname === '/account/employee'.replace(/\/$/, "")
                     ? "active"
                     : ""
                 } active:bg-relatedWhite active:text-mutedColor text-start flex items-center text-relatedWhite my-2 py-2 p-4 border-2 border-transparent hover:text-mutedColor hover:bg-relatedWhite hover:border-lightColor rounded-lg transition-all duration-300 ease-in-out`}
               >
                <FaUserShield/> <span className="ml-2">Employee</span>
               </Link>
             </li>
             }
            <li>
              <div className="border-t  py-1">
                <button className="flex items-center px-4 py-2  text-white hover:text-red-500  rounded-lg hover:bg-red-50">
                  <BiLogOut className="w-4 h-4 mr-3" />
                  <LogOut />
                </button>
              </div>
            </li>
          </ul>
        </div>

        {/*For Mobile screen */}
        <div className="lg:w-1/5 w-full px-2 bg-darkColor lg:relative rounded-lg  sm:hidden">
          <div className="flex justify-between">
            <h2 className="text-lg font-boldn p-2 pl-5">Menu</h2>
            <button
              className="block flex text-left p-2   text-lightColor rounded ml-auto"
              onClick={toggleMenu}
            >
              {/* {isOpen ? 'Close Menu' : 'Open Menu'} */}
              {isOpen ? (
                <VscClose className="text-lightColor text-[30px]" />
              ) : (
                <VscThreeBars className="text-lightColor text-[30px]" />
              )}
            </button>
          </div>
          <ul className={`${isOpen ? "block" : "hidden"} lg:block`}>
            {Array.isArray(sideBarData) &&
              sideBarData.map((navigation, index) => (
                <li key={index}>
                  <Link
                    onClick={toggleMenu}
                    href={navigation.url}
                    className="block text-relatedWhite py-2 px-4 hover:bg-lightColor hover:text-darkColor rounded-lg"
                  >
                    <span className="flex items-center space-x-2">
                      {navigation.icon} <span>{navigation.lable}</span>
                    </span>
                  </Link>
                </li>
              ))}

              <li >
                  <Link
                    onClick={toggleMenu}
                    href={'/account/employee'}
                    className="block text-relatedWhite py-2 px-4 hover:bg-lightColor hover:text-darkColor rounded-lg"
                  >
                    <span className="flex items-center space-x-2">
                    <FaUserShield/>  <span>Employee</span>
                    </span>
                  </Link>
                </li>
          </ul>
        </div>

        <div className="lg:w-4/5 h-auto w-full mt-2 py-4 sm:p-4 bg-relatedWhite lg:ml-1/5 border sm:ml-2 lg:ml-2 border-darkColor rounded-2xl sidebarmainaria shadow-inner">
          {children}
        </div>
      </div>
    </div>
  );
}
