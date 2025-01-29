"use client";
import {
  SlSocialInstagram,
  SlSocialLinkedin,
  SlSocialFacebook,
} from "react-icons/sl";
import { BsTwitterX } from "react-icons/bs";
import {
  MdOutlineEmail,
  MdOutlinePhone,
  MdOutlineLocationCity,
} from "react-icons/md";
import Link from "next/link";
import { useEffect, useState } from "react";
import BasicProvider from "../utils/basicprovider";

const Footer = () => {
  const [socialMedia, setSocialMedia] = useState<any>();
  const [contactInfo, setContactInfo] = useState<any>();

  const fetchSocialMedia = async () => {
    try {
      const response: any = await new BasicProvider(
        "public/setting/social-media"
      ).getRequest();

      if (response?.status === "success") {
        setSocialMedia(response?.data?.value || {});
      }
    } catch (error) {
      console.error("Error fetching social media:", error);
    }
  };
  const fetchContactIinfo = async () => {
    try {
      const response: any = await new BasicProvider(
        "public/setting/contact-info"
      ).getRequest();

      if (response?.status === "success") {
        setContactInfo(response?.data?.value || {});
      }
    } catch (error) {
      console.error("Error fetching social media:", error);
    }
  };

  useEffect(() => {
    fetchSocialMedia();
    fetchContactIinfo();
  }, []);

  return (
    <footer className="w-full p-0">
      <div className="bg-mutedColor text-relatedWhite sm:p-10 p-5">
        {/* Top Section */}
        <div className="container mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Platform Logo and Description */}
          <div className="text-left flex flex-col items-start">
            <img
              src="/logo/good.svg"
              alt="Platform Logo"
              className="h-12 mb-4 ml-[-40px]"
            />
            <p className="text-sm text-gray-400">
              Your trusted platform for buying and selling scrap materials and
              second-hand products. Helping reduce waste and promote
              sustainability.
            </p>
          </div>



          {/* Quick Links */}
          <div className="sm:ml-16">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/pages/aboutus" className="hover:text-darkColor">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/pages/contactus" className="hover:text-darkColor">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/pages/products" className="hover:text-darkColor">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-darkColor">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-darkColor">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm text-gray-400 flex items-center">
              <MdOutlineEmail className="inline mr-2" />
              Email:
              <Link
                href={`${contactInfo?.email ? contactInfo?.email : "#"}`}
                className="hover:text-darkColor ml-1"
              >
                {`${contactInfo?.email ? contactInfo?.email : "#"}`}
              </Link>
            </p>
            <p className="text-sm text-gray-400 flex items-center">
              <MdOutlinePhone className="inline mr-2" />
              Phone:
              <Link
                href={`${contactInfo?.phone ? contactInfo?.phone : "#"}`}
                className="hover:text-darkColor"
              >
                {`${contactInfo?.phone ? contactInfo?.phone : "#"}`}
              </Link>
            </p>
            <p className="text-sm text-gray-400 flex items-center">
              <MdOutlineLocationCity className="inline mr-2" />
              {`${contactInfo?.address ? contactInfo?.address : "#"}`}

            </p>
          </div>

          {/* Social Media & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 mb-6">
              <Link
                href={`${socialMedia?.facebook ? socialMedia?.facebook : "#"}`}
                // href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-darkColor text-relatedWhite p-3 rounded-full hover:bg-lightColor hover:text-darkColor transition duration-300 ease-in-out"
              >
                <SlSocialFacebook className="h-6 w-6" />
              </Link>
              <Link
                href={`${socialMedia?.twitter ? socialMedia?.twitter : "#"}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-darkColor text-relatedWhite p-3 rounded-full hover:bg-lightColor hover:text-darkColor transition duration-300 ease-in-out"
              >
                <BsTwitterX className="h-6 w-6" />
              </Link>
              <Link
                href={`${socialMedia?.instagram ? socialMedia?.instagram : "#"
                  }`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-darkColor text-relatedWhite p-3 rounded-full hover:bg-lightColor hover:text-darkColor transition duration-300 ease-in-out"
              >
                <SlSocialInstagram className="h-6 w-6" />
              </Link>
              <Link
                href={`${socialMedia?.linkedin ? socialMedia?.linkedin : "#"}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-darkColor text-relatedWhite p-3 rounded-full hover:bg-lightColor hover:text-darkColor transition duration-300 ease-in-out"
              >
                <SlSocialLinkedin className="h-6 w-6" />
              </Link>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Eco-Tip of the Day 🌱
              </h3>
              <p className="text-sm text-gray-400">
                <strong>Reuse Before You Recycle:</strong> Always consider
                reusing items like jars, bottles, or boxes before disposing of
                them. Every small effort helps the planet!
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-gray-900 py-4 rounded-lg">
          <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 text-center sm:text-left">
              &copy; 2025 Scrapify. All Rights Reserved.
            </p>
            <ul className="flex space-x-4 text-sm mt-4 sm:mt-0">
              <li>
                <Link href="#" className="hover:text-darkColor">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-darkColor">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-darkColor">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
