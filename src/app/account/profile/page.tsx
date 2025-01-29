"use client";

import { FaPenToSquare } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { use, useEffect, useState } from "react";
import BasicProvider from "@/app/utils/basicprovider";
import createFormData from "@/helpers/createFormData";
import setNotification from "@/app/utils/notification";
import {
  useCityRegions,
  useCountryRegions,
  useStateRegions,
} from "@/hooks/regionHepler";
import { SubmitButton } from "@/app/components/generalComp/Buttons";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/app/store/slices/authSlice";

// import noImage from 'assert/images/noimage.png';

interface OptionType {
  value: string;
  label: string;
}

interface InputFieldProps {
  id: string;
  name: string;
  label: string;
  disabled?: boolean;
  value?: string;
  type?: string;
  placeholder?: string;
  handleChange: any;
}

interface SelectFieldProps {
  id: string;
  name: string;
  label: string;
  value?: string;
  options: OptionType[];
  placeholder?: string;
  handleChange: any;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  name,
  label,
  disabled = false,
  value = "",
  type = "text",
  placeholder,
  handleChange,
}) => (
  <div className="relative w-full mt-4">
    <input
      type={type}
      id={id}
      value={value}
      name={name}
      onChange={handleChange}
      readOnly={disabled}
      className={`peer w-full mt-4 px-3 pt-3.5 pb-0.2 border-b border-gray-300 placeholder-transparent focus:outline-none focus:ring-0 focus:border-darkColor text-mutedColor ${
        disabled ? "bg-white text-gray-800 cursor-not-allowed" : ""
      }`}
      placeholder={placeholder}
    />
    <label
      htmlFor={id}
      className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-darkColor peer-focus:text-sm"
    >
      {label}
    </label>
  </div>
);

const SelectField: React.FC<SelectFieldProps> = ({
  id,
  name,
  label,
  value = "",
  options = [],
  placeholder,
  handleChange,
}) => (
  <div className="relative w-full mt-4">
    <select
      id={id}
      name={name}
      value={value}
      className="peer w-full mt-4 px-3 pt-3.5 pb-0.2 border-b border-gray-300 placeholder-transparent focus:outline-none focus:ring-0 focus:border-darkColor text-mutedColor transition-all"
      onChange={handleChange}
    >
      <option value="">{placeholder}</option>
      {options?.length > 0 &&
        options.map((option: any, index) => (
          <option key={index} value={option?._id || option?.value}>
            {option?.name || option?.label}
          </option>
        ))}
    </select>
    <label
      htmlFor={id}
      className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-darkColor peer-focus:text-sm"
    >
      {label}
    </label>
  </div>
);

const ProfilePage = () => {
  const user = useSelector((state: any) => state.auth.user);
  const dispatch = useDispatch();
  const [userProfile, setUserProfile] = useState<any>(null);
  const countryData = useCountryRegions();
  const states: any = useStateRegions(userProfile?.country);
  const city: any = useCityRegions(userProfile?.state);

  const [isLoading, setIsLoading] = useState(false);

  const fetchUserProfile = async () => {
    try {
      const response: any = await new BasicProvider(
        "customer/profile"
      ).getRequest();

      if (response?.status === "success") {
        dispatch(
          setUser({
            ...response.data,
            image: response?.data?.featured_image?.filepath || null,
          })
        );

        setUserProfile({
          name: response?.data?.name,
          mobile: response?.data?.mobile,
          email: response?.data?.email,
          gender: response?.data?.gender,
          about_us: response?.data?.about_us,
          country: response?.data?.country?._id,
          state: response?.data?.state?._id,
          city: response?.data?.city?._id,
          address: response?.data?.address,
          featured_image: response?.data?.featured_image,
        });
      }
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };
  useEffect(() => {
    fetchUserProfile();
  }, []);

  const updateProfile = async () => {
    try {
      const data: any = createFormData(userProfile);
      if (!data) {
        return;
      }

      setIsLoading(true);
      const response: any = await new BasicProvider(
        "customer/update-profile"
      ).postRequest(data);
      if (response.status === "success") {
        fetchUserProfile();
      }
      setNotification({ type: "success", message: response.message });
    } catch (error: any) {
      setNotification({ type: "error", message: error.message });
      console.error("Error fetching user profile:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;

    // Check if the input is a file input (i.e., it contains files)
    if (files) {
      // Handle file input (e.g., for images)
      setUserProfile((prevProfile: any) => ({
        ...prevProfile,
        [name]: files[0],
      }));
    } else {
      // Handle regular input (text, number, etc.)
      setUserProfile((prevProfile: any) => ({
        ...prevProfile,
        [name]: value,
      }));
    }
  };
  

  return (
    <>
      <div className="bg-relatedWhite p-4 text-mutedColor">
        <div className="flex flex-wrap lg:flex-nowrap lg:gap-6">
          {/* Left Card: Input Fields */}
          <div className="w-full lg:w-9/12 bg-white border-2 rounded-lg shadow-lg p-6 mb-4 lg:mb-0">
            <h3 className="font-bold text-xl text-gray-800 mb-4">
              Profile Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                id="name"
                name="name"
                value={userProfile?.name}
                label="Name"
                placeholder="name"
                handleChange={handleChange}
              />
              <InputField
                id="mobile"
                name="mobile"
                value={userProfile?.mobile}
                label="Mobile"
                disabled
                placeholder="mobile"
                handleChange={handleChange}
              />
              <InputField
                id="email"
                name="email"
                label="Email"
                value={userProfile?.email}
                disabled
                placeholder="email"
                handleChange={handleChange}
              />
              <SelectField
                id="gender"
                name="gender"
                label="Gender"
                value={userProfile?.gender}
                options={[
                  { value: "male", label: "Male" },
                  { value: "female", label: "Female" },
                  { value: "other", label: "Other" },
                ]}
                placeholder="Select Gender"
                handleChange={handleChange}
              />
              <InputField
                id="about_us"
                name="about_us"
                label="Bio"
                value={userProfile?.about_us}
                placeholder="about us"
                type="textarea"
                handleChange={handleChange}
              />
            </div>
            <hr className="my-4" />

            <h3 className="font-bold text-xl text-gray-800 mt-4">
              Address Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <SelectField
                id="country"
                name="country"
                label="Country"
                value={userProfile?.country}
                options={countryData}
                placeholder="Select Country"
                handleChange={handleChange}
              />
              <SelectField
                id="state"
                name="state"
                label="State"
                value={userProfile?.state}
                options={states}
                placeholder="Select State"
                handleChange={handleChange}
              />
              <SelectField
                id="city"
                name="city"
                label="City"
                value={userProfile?.city}
                options={city}
                placeholder="Select City"
                handleChange={handleChange}
              />
              <InputField
                id="address"
                name="address"
                value={userProfile?.address}
                label="Address"
                handleChange={handleChange}
                placeholder="address"
              />
            </div>
            <h3 className="font-bold text-xl text-gray-800 mt-4">Update</h3>
            <div className="  gap-4 mt-4">
              <SubmitButton
                callBack={updateProfile}
                heading="Update"
                isLoading={isLoading}
              />
            </div>
          </div>

          {/* Right Card: Profile Image */}
          <div className="w-full lg:w-3/12 bg-white border-2 rounded-lg shadow-lg p-6 flex flex-col items-center mb-4 lg:mb-0 lg:order-last order-first">
            <div className="relative user-profile-image">
              <img
                className="w-[150px] h-[150px] object-cover rounded-full border-2 border-darkColor overflow-hidden"
                src={
                  userProfile?.featured_image instanceof File
                    ? URL.createObjectURL(userProfile?.featured_image)
                    : userProfile?.featured_image?.filepath
                    ? `${userProfile?.featured_image?.filepath}`
                    : "/assert/images/noimage.png"
                }
                alt="Profile"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity rounded-full">
                <div className="flex items-center bg-red-500 px-4 py-2 rounded-full shadow-lg">
                  <FaPenToSquare className="text-white mr-2 text-lg" />
                  <label
                    htmlFor="profile-edit"
                    className="text-white cursor-pointer text-sm rounded-full"
                  >
                    Edit
                  </label>
                  <input
                    id="profile-edit"
                    name="featured_image"
                    type="file"
                    accept="image/*"
                    onChange={handleChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border rounded-full border-gray-300"
                  />
                </div>
              </div>

              {userProfile?.featured_image && (
                <button
                  title="Delete"
                  className="absolute bottom-0 right-10 flex items-center justify-center w-7 h-7 bg-red-500 text-white rounded shadow-lg transition-transform hover:scale-110"
                  onClick={(e) =>
                    setUserProfile((prevProfile: any) => ({
                      ...prevProfile,
                      featured_image: null,
                    }))
                  }
                >
                  <FaTrash className="text-lg" />
                </button>
              )}
            </div>

            <div className="mt-6 w-full text-center">
              <h4 className="text-lg text-gray-800 mb-2">Customer Reviews</h4>
              <div className="flex justify-center items-center">
                <span className="text-yellow-400">
                  &#9733;&#9733;&#9733;&#9733;&#9734;
                </span>
                <span className="text-gray-600 text-sm ml-2">4.0/5</span>
              </div>
              <p className="text-gray-600 text-sm mt-2">Based on 120 reviews</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
