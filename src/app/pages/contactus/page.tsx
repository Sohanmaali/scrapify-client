"use client";

import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineChat } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import PageBanner from "@/app/components/generalComp/PageBanner";
import { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { validateObject } from "@/helpers/formvalidation";
import setNotification from "@/app/utils/notification";
import BasicProvider from "@/app/utils/basicprovider";

const ContactPage = () => {
  const [loding, setLoading] = useState(false);
  const [contactData, setContactData] = useState<any>({
    email: "",
    name: "",
    mobile: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});
  const handleInputChange = (e: any) => {
    setErrors({});
    const { name, value } = e.target;

    if (name === "mobile" && !/^\d+$/.test(value) && value !== "") {
      return;
    }
    setContactData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validationRules: any = {
    name: { required: true },
    email: { required: true, type: "email" },
    mobile: { required: true, type: "mobile" },
    message: { required: true },
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const errors = validateObject(contactData, validationRules);
      if (Object.keys(errors).length > 0) {
        console.log("Error : ", errors);
        setErrors(errors);
        return;
      }
      setLoading(true);

      const response: any = await new BasicProvider(
        "public/contact/create"
      ).postRequest(contactData);

      setNotification({
        type: "success",
        message: "message sent successfully",
      });
      setContactData({});
    } catch (error: any) {
      setNotification({ type: "error", message: error.message });
      console.error("===Error in Contact ======>>", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
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
                <h4 className="text-gray-800 text-sm font-bold mt-4">
                  Visit office
                </h4>
                <p className="text-xs text-gray-600 mt-1">
                  {" "}
                  123 Main Street, City, Country
                </p>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg w-full h-44 p-4 text-center border border-darkColor bg-relatedWhite shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
                <IoCallOutline className="text-[30px] text-darkColor" />
                <h4 className="text-gray-800 text-sm font-bold mt-4">
                  Call us
                </h4>
                <p className="text-xs text-gray-600 mt-1">+158 996 888</p>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg w-full h-44 p-4 text-center border border-darkColor bg-relatedWhite shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
                <FaWhatsapp className="text-[30px] text-darkColor" />
                <h4 className="text-gray-800 text-sm font-bold mt-4">
                  Chat to us
                </h4>
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
                Get In Touch
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="max-w-md mx-auto space-y-6">
                  <input
                    type="text"
                    placeholder="Name"
                    className=" border w-full bg-white rounded-md py-3 px-4 text-sm outline-none"
                    name="name"
                    value={contactData?.name || ""}
                    onChange={handleInputChange}
                  />
                  <span className=" ml-2 text-red-500 text-sm">
                    {errors["name"]}
                  </span>
                  <input
                    type="text"
                    placeholder="Email"
                    className="w-full bg-white rounded-md py-3 px-4 text-sm outline-none"
                    name="email"
                    value={contactData?.email || ""}
                    onChange={handleInputChange}
                  />
                  <span className=" ml-2 text-red-500 text-sm">
                    {errors["email"]}
                  </span>
                  <input
                    type="text"
                    placeholder="Mobile No."
                    maxLength={10}
                    className="w-full bg-white rounded-md py-3 px-4 text-sm outline-none"
                    name="mobile"
                    value={contactData?.mobile || ""}
                    onChange={handleInputChange}
                  />
                  <span className=" ml-2 text-red-500 text-sm">
                    {errors["mobile"]}
                  </span>
                  <textarea
                    placeholder="Message"
                    rows={6}
                    className="w-full bg-white rounded-md px-4 text-sm pt-3 outline-none"
                    defaultValue={""}
                    name="message"
                    value={contactData?.message || ""}
                    onChange={handleInputChange}
                  />
                  <span className=" ml-2 text-red-500 text-sm">
                    {errors["message"]}
                  </span>
                  <button
                    type="submit"
                    disabled={loding}
                    className="text-white w-full relative bg-darkColor hover:bg-mutedColor rounded-md text-sm px-6 py-3 !mt-4 transition duration-200"
                  >
                    <IoIosSend className="h-6 w-6 mr-2 inline" />
                    {loding ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* MAP */}
        <div className="sm:p-12 lg:p-12 p-2">
          <div className="rounded-lg  border-darkColor ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471100.4353352635!2d75.8351728!3d22.71068575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fce046a6ef85%3A0x16f4503902d82081!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1735702130103!5m2!1sen!2sin"
              width="100%"
              className="h-[500px]"
              style={{ border: 0, borderRadius: "10px" }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
