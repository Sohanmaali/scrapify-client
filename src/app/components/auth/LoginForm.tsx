"use client";

import { useState } from "react";

import { useDispatch } from "react-redux";
import { login } from "../../store/slices/authSlice";
import { setToken } from "../../utils/auth";
import setNotification from "../../utils/notification";
import { useRouter } from "next/navigation";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import Link from "next/link";
import BasicProvider from "@/app/utils/basicprovider";
import OTPInput from "./OtpInput";
import Modal from "../generalComp/CommonModal";

export default function LoginForm() {
  // const user = useSelector((state: RootState) => state.auth.user);
  const [showModal, setShowModal] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const [isLoading, setIsLoading] = useState(false);
  const [creadantial, setCreadantial] = useState({ email: "", password: "" });
  const router = useRouter();
  const dispatch = useDispatch();
  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
    setPasswordType(passwordVisible ? "password" : "text");
  };
  function handleChange(e: any) {
    const { name, value } = e.target;
    setCreadantial({
      ...creadantial,
      [name]: value,
    });
  }
  async function handleLoginSubmit(e: any) {
    e.preventDefault();
    if (creadantial.email === "" || creadantial.password === "") {
      return;
    }
    try {
      setIsLoading(true);
      const response: any = await new BasicProvider(
        "auth/customer/login"
      ).postRequest(creadantial);
      if (response?.message === "OTP successfully sent to your email") {
        setShowModal(true);
        return;
      }
      const user = response?.user;
      dispatch(
        login({
          user: {
            _id: user._id,
            mobile: user.mobile,
            name: user.name,
            email: user.email,
            role: user?.role || null,
            image: user?.featured_image?.filepath || "",
          },
        })
      );
      setToken(response.access_token);
      setNotification({ type: "success", message: "Login Successfull" });
      router.push("/");
    } catch (error: any) {
      console.error("error", error);
      setNotification({ type: "error", message: error.message });
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-relatedWhite   px-2 sm:mt-0 lg:mt-0 mt-[-115px]
 "
    >
      <div className="flex flex-col md:flex-row  w-full max-w-6xl bg-relatedWhite border border-darkColor rounded-lg shadow-2xl sm:py-8 lg:py-8 ">
        {/* Left Side (Form) */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-center text-gray-700 mb-6 ">
            Turn{" "}
            <span className="text-darkColor underline decoration-wavy">
              Scrap
            </span>{" "}
            into Savings Log In Now!
          </h2>
          <hr className="sm:w-48 lg:48 border-1 border-darkColor  justify-self-center" />
          <form>
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
              <label
                htmlFor="email"
                className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-darkColor peer-focus:text-sm"
              >
                Email
              </label>
            </div>

            <div className="relative w-full mt-4">
              <input
                onChange={(e) => {
                  handleChange(e);
                }}
                type={passwordType}
                id="password"
                name="password"
                className="peer w-full mt-4 px-3 pt-3.5 pb-0.2 border-b border-gray-300 placeholder-transparent focus:outline-none focus:ring-0 focus:border-darkColor text-mutedColor"
                placeholder="Password"
              />
              <label
                htmlFor="password"
                className="peer absolute left-3 top-0 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-darkColor  peer-focus:text-sm"
              >
                Password
              </label>
              <button
                type="button"
                id="togglePassword"
                onClick={togglePassword}
                className="absolute right-3 top-6 text-gray-500 hover:text-darkColor focus:outline-none"
              >
                {passwordVisible ? <FaRegEye /> : <FaRegEyeSlash />}
              </button>
            </div>

            <div className="text-center mt-8">
              {isLoading ? (
                <button
                  disabled
                  className="w-full py-3 text-relatedWhite rounded-lg bg-mutedColor transition duration-200 flex items-center justify-center gap-2"
                >
                  Loading...
                  <span className="w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin"></span>
                </button>
              ) : (
                <button
                  onClick={(e) => {
                    handleLoginSubmit(e);
                  }}
                  type="submit"
                  className="w-full py-3 bg-darkColor text-relatedWhite rounded-lg hover:bg-mutedColor transition duration-200"
                >
                  Login
                </button>
              )}
            </div>
            <div className="d-flex text-right mr-3 mt-2 text-darkColor hover:underline cursor-pointer">
              <Link
                href="/forgot-password"
                className="text-darkColor hover:underline transition duration-200"
              >
                Forgot your password?
              </Link>
            </div>
            <div className="text-center mt-2">
              <p className="text-gray-700">
                don't have an account?{" "}
                <Link
                  href="/pages/auth/signup"
                  className="text-darkColor hover:underline transition duration-200"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>

        {/* Right Side (Image) */}
        <div
          className="hidden md:block w-1/2 bg-cover bg-center"
          style={{
            // backgroundImage: "url('./assert/images/scrap_holder_img.jpg')",
            backgroundImage: `url(/assets/images/scrap_holder_img.jpg)`,
          }}
        ></div>
      </div>
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        title={"Email Varification"}
      >
        <div>
          <OTPInput data={creadantial} />
        </div>{" "}
      </Modal>
    </div>
  );
}
