"use client";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { Login } from "./auth/AuthButton";
import { isAuthenticated } from "../utils/auth";
import Link from "next/link";
import ProfileDropdown from "./auth/ProfileDropDown";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/slices/authSlice";
import BasicProvider from "../utils/basicprovider";
const Header = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state: any) => state.auth);
  // const user = useSelector((state: any) => state.auth);
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response: any = await new BasicProvider(
          "customer/profile"
        ).getRequest();
        if (response?.status === "success") {
          const data = {
            ...response.data,
            image: response?.data?.featured_image?.filepath || null,
          };
          dispatch(setUser(data));
        }
      } catch (error) {
        console.error("Error fetching user Data:", error);
      }
    };
    if (isAuthenticated()) {
      fetchUserProfile();
    }
  }, []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="bg-lightColor shadow-md relative">
        <div className="flex items-center justify-between px-4 py-3 md:px-8">
          <div className="flex items-center">
            <Link href="/">
              <img
                src="/logo/good.svg"
                alt="Logo"
                className="w-[150px] h-14 "
              />
            </Link>
          </div>
          <SearchBar />

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleMenu}
              className="block md:hidden focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-8 h-8 text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {isAuthenticated() ? <ProfileDropdown /> : <Login />}
          </div>
        </div>

        <nav className=" overflow-hidden hidden md:flex justify-start bg-mutedColor border-1 border-b-[#e8b237] sticky   top-0 z-10">
          <ul className="flex space-x-8 py-4 px-12">
            <li>
              <Link
                href="/"
                className="hover:bg-lightColor hover:text-darkColor py-2 font-semibold border rounded-md text-relatedWhite border-transparent active:text-darkColor active:border-b-darkColor transition-all duration-300 ease-in-out px-4"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/pages/aboutus"
                className="hover:bg-lightColor hover:text-darkColor p-2 font-semibold border rounded-md text-relatedWhite border-transparent active:text-darkColor active:border-b-darkColor transition-all duration-300 ease-in-out px-4"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                href="/pages/category"
                className="hover:bg-lightColor hover:text-darkColor p-2 font-semibold border rounded-md text-relatedWhite border-transparent active:text-darkColor active:border-b-darkColor transition-all duration-300 ease-in-out px-4"
              >
                Category
              </Link>
            </li>
            <li>
              <Link
                href="/pages/products"
                className="hover:bg-lightColor hover:text-darkColor p-2 font-semibold border rounded-md text-relatedWhite border-transparent active:text-darkColor active:border-b-darkColor transition-all duration-300 ease-in-out px-4"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/pages/contactus"
                className="hover:bg-lightColor hover:text-darkColor p-2 font-semibold border rounded-md text-relatedWhite border-transparent active:text-darkColor active:border-b-darkColor transition-all duration-300 ease-in-out px-4"
              >
                Contact us
              </Link>
            </li>
          </ul>

          <div className="ml-auto flex items-center justify-center">
            <div className=" mr-20 bg-darkColor h-full w-80 text-relatedWhite transform md:-rotate-[47deg] transition-transform duration-500 ease-in-out flex items-center justify-center overflow-hidden">
              <span className="text-xs"></span>
            </div>
          </div>
        </nav>
      </header>

      {/* Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40 transition-opacity ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMenu}
      ></div>

      {/* Off-Canvas Menu (Mobile) */}
      <div
        id="offcanvas-menu"
        className={`rounded-r-lg fixed top-0 left-0 z-50 w-1/2 h-full bg-white transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } menu-transition md:hidden`}
      >
        <nav className="flex flex-col space-y-4 p-4">
          <Link
            href="/"
            className="text-gray-700 hover:text-relatedWhite border-2 border-transparent hover:bg-darkColor   rounded-lg transition-all duration-300 ease-in-out px-4 py-1"
          >
            Home
          </Link>
          <Link
            href="/pages/aboutus"
            className="text-gray-700 hover:text-relatedWhite border-2 border-transparent hover:bg-darkColor rounded-lg transition-all duration-300 ease-in-out px-4 py-1"
          >
            About Us
          </Link>
          <Link
            href="/pages/category"
            className="text-gray-700 hover:text-relatedWhite border-2 border-transparent hover:bg-darkColor rounded-lg transition-all duration-300 ease-in-out px-4 py-1"
          >
            Category
          </Link>
          <Link
            href="/pages/contactus"
            className="text-gray-700 hover:text-relatedWhite border-2 border-transparent hover:bg-darkColor  rounded-lg transition-all duration-300 ease-in-out px-4 py-1"
          >
            Contact Us
          </Link>
          <Link
            href="/pages/products"
            className="text-gray-700 hover:text-relatedWhite border-2 border-transparent hover:bg-darkColor  rounded-lg transition-all duration-300 ease-in-out px-4 py-1"
          >
            Product
          </Link>

          <div className="flex items-center ml-3">
            {!isAuthenticated() && <Login />}
          </div>
        </nav>
      </div>

      <style jsx>{`
        .menu-transition {
          transition: transform 0.3s ease-in-out;
        }
      `}</style>
    </>
  );
};

export default Header;
