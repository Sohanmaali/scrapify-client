'use client'

import PageBanner from "@/app/components/generalComp/PageBanner"
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineChat } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";



const ContactPage = () => {
  return (<>
    <PageBanner
      pageName="Contact"
      parentPage="Home"
      backgroundImage="/assert/images/recycle_image.jpg"
    />

    <div className="">
      <div className="font-[sans-serif] max-w-6xl mx-auto relative bg-white rounded-lg py-6">
        <div className="grid lg:grid-cols-3 items-center">
          <div className="grid grid-cols-2 gap-4 z-20 relative lg:left-16 max-lg:px-4">
            <div className="flex flex-col items-center justify-center rounded-lg w-full h-44 p-4 text-center border border-darkColor bg-relatedWhite shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
              <IoLocationOutline className="text-[30px] text-darkColor" />
              <h4 className="text-gray-800 text-sm font-bold mt-4">Visit office</h4>
              <p className="text-xs text-gray-600 mt-1">
                {" "}
                123 Main Street, City, Country
              </p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-lg w-full h-44 p-4 text-center border border-darkColor bg-relatedWhite shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
              <IoCallOutline className="text-[30px] text-darkColor" />
              <h4 className="text-gray-800 text-sm font-bold mt-4">Call us</h4>
              <p className="text-xs text-gray-600 mt-1">+158 996 888</p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-lg w-full h-44 p-4 text-center border border-darkColor bg-relatedWhite shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
              <FaWhatsapp className="text-[30px] text-darkColor" />
              <h4 className="text-gray-800 text-sm font-bold mt-4">Chat to us</h4>
              <p className="text-xs text-gray-600 mt-1">info@example.com</p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-lg w-full h-44 p-4 text-center border border-darkColor bg-relatedWhite shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
              <MdOutlineChat className="text-[30px] text-darkColor" />
              <h4 className="text-gray-800 text-sm font-bold mt-4">Fax</h4>
              <p className="text-xs text-gray-600 mt-1">+1-548-2588</p>
            </div>
          </div>
          <div className="lg:col-span-2 bg-lightColor rounded-lg sm:p-10 p-4 z-10 max-lg:-order-1 max-lg:mb-8">
            <h2 className="text-2xl sm:text-3xl text-darkColor text-center font-bold mb-6">
              Contact us
            </h2>
            <form>
              <div className="max-w-md mx-auto space-y-6">
                <input
                  type="text"
                  placeholder="Name"
                  className=" border w-full bg-white rounded-md py-3 px-4 text-sm outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-white rounded-md py-3 px-4 text-sm outline-none"
                />
                <input
                  type="email"
                  placeholder="Phone No."
                  className="w-full bg-white rounded-md py-3 px-4 text-sm outline-none"
                />
                <textarea
                  placeholder="Message"
                  rows={6}
                  className="w-full bg-white rounded-md px-4 text-sm pt-3 outline-none"
                  defaultValue={""}
                />
                <button
                  type="button"
                  className="text-white w-full relative bg-darkColor hover:bg-mutedColor rounded-md text-sm px-6 py-3 !mt-4 transition duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    fill="currentColor"
                    className="mr-2 inline"
                    viewBox="0 0 548.244 548.244"
                  >
                    <path
                      fillRule="evenodd"
                      d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                      clipRule="evenodd"
                      data-original="#000000"
                    />
                  </svg>
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

{/* MAP */}
      <div className="px-6 m-10">
        <div className="rounded-lg border-2 border-darkColor">
          <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471100.4353352635!2d75.8351728!3d22.71068575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fce046a6ef85%3A0x16f4503902d82081!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1735702130103!5m2!1sen!2sin"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </div>

    </div>
  </>)
}

export default ContactPage