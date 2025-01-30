"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import BasicProvider from "../utils/basicprovider";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

import setNotification from "../utils/notification";
import Modal from "../components/generalComp/CommonModal";
import OTPInput from "../components/auth/OtpInput";
import Link from "next/link";

export default function ForgotePassword() {
  const [formData, setFormData] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isverify, setIsverify] = useState(false);
  const [errors, setErrors] = useState<any>({});
  const [passwords, setPasswords] = useState<{
    password: boolean;
    confirmPassword: boolean;
  }>({
    password: false,
    confirmPassword: false,
  });
  const router = useRouter();

  function handleChange(e: any) {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
    setErrors((prev: any) => ({ ...prev, [name]: "" }));
  }

  const handleSendOtp = async (e: any) => {
    e.preventDefault();
    if (!formData?.email || formData?.email === "") {
      setErrors({ email: "Email is required" });
      return;
    }
    try {
      setIsLoading(true);
      const response: any = await new BasicProvider(
        `auth/customer/forgot-password`
      ).postRequest(formData);

      if (response?.message === "OTP successfully sent to your email") {
        setShowModal(true);
        setNotification({ type: "success", message: response?.message });
        return;
      }
    } catch (error: any) {
      console.log("error", error);
      setNotification({ type: "error", message: error.message });
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdatePassword = async (e: any) => {
    e.preventDefault();
    let error: any = {};
    if (!formData?.password || formData?.password === "") {
      error.password = "Password is required";
    }
    if (!formData?.confirm_password || formData?.confirm_password === "") {
      error.confirm_password = "Confirm password is required";
    }

    if (formData?.password !== formData?.confirm_password) {
      error.confirm_password = "Password does not match";
    }

    if (Object.keys(error).length > 0) {
      setErrors(error);
      return;
    }

    try {
      setIsLoading(true);
      const response: any = await new BasicProvider(
        `auth/customer/update-password`
      ).postRequest(formData);
      setNotification({ type: "success", message: response?.message });
      // setIsverify(true);
      router.push("/");
    } catch (error: any) {
      console.log("error", error);
      setNotification({ type: "error", message: error.message });
    } finally {
      setIsLoading(false);
    }
  };

  const togglePassword = (field: "password" | "confirmPassword") => {
    setPasswords((prev) => ({
      ...prev,
      [field]: !prev[field], // No more TypeScript error
    }));
  };

  useEffect(() => {
    if (isverify) {
      setShowModal(false);
    }
  }, [isverify]);

  return (
    <div className="flex items-center justify-center pt-14 pb-14 bg-relatedWhite  px-2 sm:mt-0 lg:mt-0">
      <div className="flex flex-col md:flex-row  w-full max-w-6xl bg-relatedWhite border border-darkColor rounded-lg shadow-2xl sm:py-8 lg:py-8 ">
        {/* Left Side (Form) */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-center text-gray-700 mb-6 ">
            Forgote Passord Now!
          </h2>
          <hr className="sm:w-48 lg:48 border-1 border-darkColor  justify-self-center" />
          <form>
            {!isverify && (
              <div>
                <div className="relative w-full mt-4">
                  <input
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    type="text"
                    id="email"
                    name="email"
                    className="peer w-full mt-4 px-3 pt-3.5 pb-0.2 border-b border-gray-300 placeholder-transparent focus:outline-none focus:ring-0 focus:border-darkColor text-mutedColor"
                    placeholder="email"
                  />
                  {errors.email && (
                    <span className="text-red-500">{errors.email}</span>
                  )}
                  <label
                    htmlFor="email"
                    className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-darkColor peer-focus:text-sm"
                  >
                    Email
                  </label>
                </div>
                <div className="text-center mt-8">
                  {isLoading ? (
                    <button
                      disabled
                      className="w-full py-3 text-relatedWhite rounded-lg bg-mutedColor transition duration-200 flex items-center justify-center gap-2"
                    >
                      Otp Sending...
                      <span className="w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin"></span>
                    </button>
                  ) : (
                    <button
                      onClick={(e) => {
                        handleSendOtp(e);
                      }}
                      type="submit"
                      className="w-full py-3 bg-darkColor text-relatedWhite rounded-lg hover:bg-mutedColor transition duration-200"
                    >
                      Send Otp
                    </button>
                  )}
                </div>
                <div className="text-center mt-2">
                  <p className="text-gray-700">
                    Want to login?
                    <Link
                      href="/pages/auth/login"
                      className="text-darkColor hover:underline transition duration-200"
                    >
                      Sign in
                    </Link>
                  </p>
                </div>
              </div>
            )}

            {isverify && (
              <div>
                <div className="relative w-full mt-4">
                  <input
                    onChange={(e) => handleChange(e)}
                    type={passwords.password ? "text" : "password"}
                    id="password"
                    name="password"
                    className="peer w-full mt-4 px-3 pt-3.5 pb-0.2 border-b border-gray-300 placeholder-transparent focus:outline-none focus:ring-0 focus:border-darkColor text-mutedColor"
                    placeholder="Password"
                  />
                  {errors.password && (
                    <span className="text-red-500">{errors.password}</span>
                  )}
                  <label
                    htmlFor="password"
                    className="peer absolute left-3 top-0 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-darkColor peer-focus:text-sm"
                  >
                    Password
                  </label>
                  <button
                    type="button"
                    onClick={() => togglePassword("password")}
                    className="absolute right-3 top-6 text-gray-500 hover:text-darkColor focus:outline-none"
                  >
                    {passwords.password ? <FaRegEye /> : <FaRegEyeSlash />}
                  </button>
                </div>

                <div className="relative w-full mt-4">
                  <input
                    onChange={(e) => handleChange(e)}
                    type={passwords.confirmPassword ? "text" : "password"}
                    id="confirm_password"
                    name="confirm_password"
                    className="peer w-full mt-4 px-3 pt-3.5 pb-0.2 border-b border-gray-300 placeholder-transparent focus:outline-none focus:ring-0 focus:border-darkColor text-mutedColor"
                    placeholder="Confirm Password"
                  />
                  {errors.confirm_password && (
                    <span className="text-red-500">
                      {errors.confirm_password}
                    </span>
                  )}
                  <label
                    htmlFor="confirm_password"
                    className="peer absolute left-3 top-0 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-darkColor peer-focus:text-sm"
                  >
                    Confirm Password
                  </label>
                  <button
                    type="button"
                    onClick={() => togglePassword("confirmPassword")}
                    className="absolute right-3 top-6 text-gray-500 hover:text-darkColor focus:outline-none"
                  >
                    {passwords.confirmPassword ? (
                      <FaRegEye />
                    ) : (
                      <FaRegEyeSlash />
                    )}
                  </button>
                </div>

                <div className="text-center mt-8">
                  {isLoading ? (
                    <button
                      disabled
                      className="w-full py-3 text-relatedWhite rounded-lg bg-mutedColor transition duration-200 flex items-center justify-center gap-2"
                    >
                      updating...
                      <span className="w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin"></span>
                    </button>
                  ) : (
                    <button
                      onClick={(e) => {
                        handleUpdatePassword(e);
                      }}
                      type="submit"
                      className="w-full py-3 bg-darkColor text-relatedWhite rounded-lg hover:bg-mutedColor transition duration-200"
                    >
                      Update Password
                    </button>
                  )}
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Right Side (Image) */}
        <div className="hidden md:block w-1/2 bg-cover bg-center">
          <img
            src="/assert/images/forgot-password.png"
            alt="login"
            style={{ height: "400px", objectFit: "cover" }} // Adding height with CSS
          />
        </div>
      </div>
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        title={"Email Varification"}
      >
        <div>
          <OTPInput data={formData} setIsverify={setIsverify} />
        </div>
      </Modal>
    </div>
  );
}
