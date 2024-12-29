
'use client'
import { RxDashboard } from "react-icons/rx";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaListUl } from "react-icons/fa";
import { BiLogOut, BiPurchaseTag } from "react-icons/bi";
import { MdMessage } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { MdContactSupport } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import sideBarData from "@/data/SideBar";
import { LogOut } from "../components/auth/AuthButton";
import { useSelector } from "react-redux";


export default function AccountLayout({ children }: { children: React.ReactNode }) {
  const user = useSelector((state: any) => state.auth.user);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className="flex  sm:p-10 bg-relatedWhite ">

      <div className="flex flex-col lg:flex-row w-full h-auto    rounded-2xl p-2 desktpsidebar">

        {/* Desktop screen */}
        <div className="lg:w-1/5 w-full py-4 px-4  fixed lg:relative h-[700px] lg:block hidden  rounded-2xl bg-darkColor">
          {/* <h2 className="text-lg text-center font-bold text-mutedColor">Sidebar Menu</h2> */}

          <div className="flex flex-col justify-center items-center bg-none mb-10">
            {/* Image Container */}
            <div className="w-20 h-20 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-46 lg:h-46 border-4   rounded-full">
              <img
                  src={`${process.env.NEXT_PUBLIC_API_URL}/${user?.image}` || '/images/noimage.png'}
                alt="Circle Image"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            {/* User Name */}
            <p className="mt-2 text-lg  text-relatedWhite  font-bold">{user?.name}</p>
            {/* <p className=" text-sm  text-relatedWhite">{user.email}</p> */}

          </div>
          {/* <hr /> */}

          <ul><hr />
            {sideBarData.map((navigation, index) => (<li key={index}>
              {/* <hr /> */}
              <Link
                href={navigation.url}
                style={{ fontSize: "17px" }}
                className={`${pathname === navigation.url ||
                  pathname === navigation.url.replace(/\/$/, "") ? "active" : ''} active:bg-relatedWhite active:text-mutedColor text-start flex items-center text-relatedWhite my-2 py-2 p-4 border-2 border-transparent hover:text-mutedColor hover:bg-relatedWhite hover:border-lightColor rounded-lg transition-all duration-300 ease-in-out`}

              >
                {navigation.icon}
                <span className="ml-2">{navigation.lable}</span>
              </Link>
            </li>))}
            <li>
              <div className="border-t  py-1">
              <Link href="" className="flex items-center px-4 py-2  text-white hover:text-red-500  rounded-lg hover:bg-red-50">
                <BiLogOut className="w-4 h-4 mr-3" />
                <LogOut/>
              </Link>
            </div></li>

          </ul>
        </div>



        {/*For Mobile screen */}
        <div className="lg:w-1/5 w-full p-4 bg-gray-200 lg:relative  sm:hidden">
          <h2 className="text-lg font-bold">Sidebar Menu</h2>

          <button
            className="block py-2 px-4 bg-gray-300 rounded mb-4"
            onClick={toggleMenu}
          >
            {isOpen ? 'Close Menu' : 'Open Menu'}
          </button>
          <ul className={`${isOpen ? 'block' : 'hidden'} lg:block`}>
            <li>
              <Link href="/account/dashboard" className="block py-2 px-4 hover:bg-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/account/profile" className="block py-2 px-4 hover:bg-gray-300">
                Profile
              </Link>
            </li>
            <li>
              <Link href="/account/purchases" className="block py-2 px-4 hover:bg-gray-300">
                Purchases
              </Link>
            </li>
            <li>
              <Link href="/account/listing" className="block py-2 px-4 hover:bg-gray-300">
                Listing
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:w-4/5 w-full mt-2 py-4 sm:p-4 bg-relatedWhite lg:ml-1/5 border sm:ml-2 lg:ml-2 border-darkColor rounded-2xl sidebarmainaria shadow-inner">
          {children}
        </div>

      </div>


    </div>
  );
}
