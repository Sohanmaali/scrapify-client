"use client";
import React, { use, useState } from "react";
import { BiUpload } from "react-icons/bi";
import { SubmitButton } from "@/app/components/generalComp/Buttons";
import ImagePreviewer from "@/app/components/helperComp/ImagePreviewer";
import { useGetByIdSlugCategories } from "@/hooks/categoryHelper";
import DatePicker from "react-datepicker";
import {
  useCityRegions,
  useCountryRegions,
  useStateRegions,
} from "@/hooks/regionHepler";
import createFormData from "@/helpers/createFormData";
import BasicProvider from "../../utils/basicprovider";
import setNotification from "../../utils/notification";
import { validateObject } from "@/helpers/formvalidation";
import { useRouter } from "next/navigation";

const ScrapMaterialForm = ({ category }: any) => {
  const validationRules: any = {
    mobile: { required: true, type: "number", minLength: 10, maxLength: 10 },
    quantity: { required: true, type: "number" },
    country: { required: true, type: "string" },
    state: { required: true, type: "string" },
    city: { required: true, type: "string" },
    pincode: { required: true, type: "number" },
    address: { required: true, type: "string" },
    available_date: { required: true },
    name : {required : true}
  };

  const categoryData: any = useGetByIdSlugCategories(category);
  const countryData = useCountryRegions();


  const router = useRouter();

  const [scrapData, setScrapData] = useState<any>({
    
    quantity : '',
    name: "",
    category: category,
    unit_type : categoryData?.unit_type,
    gallery: [],
    mobile :'',
    alternate_mobile :'',
    pincode :'',
    address : '',
    city : '',
    state : '',
    country : '',
    available_date : new Date(),
 
  });
  const statesData = useStateRegions(scrapData?.country);
  const cityData = useCityRegions(scrapData?.state);
  const [errors, setErrors] = useState<any>({});

  const [isLoading, setIsLoading] = useState(false);

  const [gallery, setGallery] = useState<any>([]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    if (
      name === "quantity" ||
      name === "weight" ||
      name === "mobile" ||
      name === "pincode"
    ) {
      if (!/^\d+$/.test(value) && value !== "") {
        return;
      }
    }

    if (name == "quantity") {
      setScrapData(() => ({
        ...scrapData,
        total: value * categoryData?.price,
      }));
    }

    setScrapData(() => ({
      ...scrapData,
      [name]: value,
    }));

    if (name === "country") {
      setScrapData((prev: any) => ({
        ...prev,
        state: "",
        city: "",
      }));
    }

    if (name === "state") {
      setScrapData((prev: any) => ({
        ...prev,
        city: "",
      }));
    }

    setErrors((prev: any) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {

      setIsLoading(true);

      const errors = validateObject(scrapData, validationRules);

      if (Object.keys(errors).length > 0) {
        console.error("Error : ", errors);
        setErrors(errors);
        return;
      }

      const data = createFormData({
        ...scrapData,
        name: categoryData?.name,
        sell_price: categoryData?.price,
        catagory: categoryData?._id,
        unit_type : categoryData.unit_type,
      });
      if (!data) {
        return;
      }

      const response: any = await new BasicProvider("public/scrap").postRequest(
        data
      );

      if (response.status === "success") {
        setNotification({ type: "success", message: response.message });
        router.replace("/account/listing");
      } else {
        setNotification({ type: "error", message: response.message });
      }
    } catch (error: any) {
      setNotification({ type: "error", message: error.message });
      console.error("ERROR TO SUBMIT SCRAP -=-=-=-==", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen    lg:px-2 sm:px-2 sm:py-2 sm:px-3 lg:px-4 text-mutedColor">
      <div className="max-w-4xl mx-auto bg-relatedWhite rounded-xl  p-6 sm:p-5 ">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 bg-gray-100 p-6 rounded-lg border border-darkColor">
          {/* Left Section: Heading */}
          <div className="text-center md:text-left md:w-2/3">
            <h2 className="text-3xl font-bold text-gray-900">
              Scrap Material{" "}
              <span className="underline decoration-wavy text-darkColor">
                Submission
              </span>
            </h2>
            <p className="text-gray-600 mt-2">
              Ready to sell your scrap?{" "}
              <span className="text-green-500">Share the details</span>
            </p>
          </div>

          {/* Right Section: Selected Category */}
          <div className="text-center md:text-right md:w-1/3">
            <h3 className="text-lg font-semibold text-gray-800 mb-2 mr-2">
              Selected Category
            </h3>
            <span className=" px-4 py-2 bg-blue-100 text-darkColor rounded-full  font-bold shadow-sm">
              {categoryData.name || "--"}:{' '}{process.env.NEXT_PUBLIC_CURRENCY_SYMBOL}{categoryData.price} / kg
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div className="relative w-full">
            <input
              value={scrapData?.name || ""}
              onChange={handleChange}
              name="name"
              id="name"
              type="text"
              maxLength={40}
              className="peer w-full px-3 pt-6 pb-2 border-b border-gray-300 bg-transparent 
                   placeholder-transparent focus:outline-none focus:border-darkColor
                   transition-colors duration-200"
              placeholder={`Enter Title`}
            />
            <label
              htmlFor="name"
              className="absolute left-3 -top-1 text-sm text-gray-500 
                   peer-placeholder-shown:text-base peer-placeholder-shown:top-4 
                   peer-focus:-top-1 peer-focus:text-sm peer-focus:text-darkColor
                   transition-all duration-200"
            >
              {`Enter Scrap Title`}
            </label>
            {errors?.name && (
              <span className="text-red-500">{errors?.name}</span>
            )}
          </div>
          <div className="relative w-full">
          <input
              value={scrapData?.quantity || ""}
              onChange={handleChange}
              name="quantity"
              id="quantity"
              type="text"
              maxLength={8}
              className="peer w-full px-3 pt-6 pb-2 border-b border-gray-300 bg-transparent 
                   placeholder-transparent focus:outline-none focus:border-darkColor
                   transition-colors duration-200"
              placeholder={`Enter Quentity in ${categoryData?.unit_type}`}
            />
            <label
              htmlFor="quantity"
              className="absolute left-3 -top-1 text-sm text-gray-500 
                   peer-placeholder-shown:text-base peer-placeholder-shown:top-4 
                   peer-focus:-top-1 peer-focus:text-sm peer-focus:text-darkColor
                   transition-all duration-200"
            >
              {`Enter Quentity in ${categoryData?.unit_type}`}
            </label>
            {errors?.quantity && (
              <span className="text-red-500">{errors?.quantity}</span>
            )}
          </div>

          <div className="relative w-full">
            <DatePicker
              // value={scrapData?.available_date||new Date()}
              minDate={new Date()}
              selected={scrapData?.available_date || new Date()}
              onChange={(date) => {
                setScrapData((prevData: any) => ({
                  ...prevData,
                  available_date: date, // Update the date property
                }));
                setErrors((prevErrors: any) => ({
                  ...prevErrors,
                  available_date: "",
                }));
              }}
              dateFormat="dd/MM/yyyy"
              placeholderText="Select a date"
              className="peer w-full px-3 pt-6 pb-2 border-b border-darkColor bg-transparent 
                     placeholder-transparent focus:outline-none focus:border-darkColor
                     transition-colors duration-200"
              wrapperClassName="w-full"
            />
            <label
              htmlFor="date"
              className="absolute left-3 -top-1 text-sm text-gray-500 
                   peer-placeholder-shown:text-base peer-placeholder-shown:top-4 
                   peer-focus:-top-1 peer-focus:text-sm peer-focus:text-darkColor
                   transition-all duration-200"
            >
           Select the availability date for pickup.
            </label>
            {errors?.available_date && (
              <span className="text-red-500">{errors?.available_date}</span>
            )}
          </div>

          <div className="relative w-full">
            <input
              value={scrapData?.mobile || ""}
              onChange={handleChange}
              name="mobile"
              id="mobile"
              type="text"
              maxLength={10}
              className="peer w-full px-3 pt-6 pb-2 border-b border-gray-300 bg-transparent 
                   placeholder-transparent focus:outline-none focus:border-darkColor
                   transition-colors duration-200"
              placeholder={"contact"}
            />
            <label
              htmlFor="mobile"
              className="absolute left-3 -top-1 text-sm text-gray-500 
                   peer-placeholder-shown:text-base peer-placeholder-shown:top-4 
                   peer-focus:-top-1 peer-focus:text-sm peer-focus:text-darkColor
                   transition-all duration-200"
            >
              Mobile Number
            </label>
            {errors?.mobile && (
              <span className="text-red-500">{errors?.mobile}</span>
            )}
          </div>

          <div className="relative w-full">
            <input
              value={scrapData?.alternate_mobile || ""}
              onChange={handleChange}
              name="alternate_mobile"
              id="alternate_mobile"
              type="text"
              maxLength={10}
              className="peer w-full px-3 pt-6 pb-2 border-b border-gray-300 bg-transparent 
                   placeholder-transparent focus:outline-none focus:border-darkColor
                   transition-colors duration-200"
              placeholder={"contact"}
            />
            <label
              htmlFor="alternate_mobile"
              className="absolute left-3 -top-1 text-sm text-gray-500 
                   peer-placeholder-shown:text-base peer-placeholder-shown:top-4 
                   peer-focus:-top-1 peer-focus:text-sm peer-focus:text-darkColor
                   transition-all duration-200"
            >
              Alternate Mobile Number
            </label>
          </div>

          <div className="relative w-full">
            <select
              value={scrapData?.country?._id || scrapData?.country || ""}
              className="w-full px-3 pt-6 pb-2 border-b border-gray-300 bg-transparent
                         focus:outline-none focus:border-green-500 appearance-none"
              onChange={handleChange}
              name="country"
            >
              <option value="">Select Country</option>
              {countryData.length > 0 &&
                countryData.map((country: any, index: any) => (
                  <option key={index} value={country?._id}>
                    {country?.name}
                  </option>
                ))}
            </select>
            <label className="absolute left-3 -top-1 text-sm text-darkColor">
              Country
            </label>
            {errors?.country && (
              <span className="text-red-500">{errors?.country}</span>
            )}
          </div>
          <div className="relative w-full">
            <select
              name="state"
              value={scrapData?.state || ""}
              onChange={handleChange}
              className="w-full px-3 pt-6 pb-2 border-b border-gray-300 bg-transparent
                         focus:outline-none focus:border-green-500 appearance-none"
            >
              <option value="">Select State</option>
              {statesData.length > 0 &&
                statesData.map((state: any, index: any) => (
                  <option key={index} value={state?._id}>
                    {state?.name}
                  </option>
                ))}
            </select>
            <label className="absolute left-3 -top-1 text-sm text-darkColor">
              State
            </label>
            {errors?.state && (
              <span className="text-red-500">{errors?.state}</span>
            )}
          </div>
          <div className="relative w-full">
            <select
              name="city"
              value={scrapData?.city || ""}
              onChange={handleChange}
              className="w-full px-3 pt-6 pb-2 border-b border-gray-300 bg-transparent
                         focus:outline-none focus:border-green-500 appearance-none"
            >
              <option value="">Select City</option>
              {cityData.length > 0 &&
                cityData.map((city: any, index: any) => (
                  <option key={index} value={city?._id}>
                    {city?.name}
                  </option>
                ))}
            </select>
            <label className="absolute left-3 -top-1 text-sm text-darkColor">
              City
            </label>
            {errors?.city && (
              <span className="text-red-500">{errors?.city}</span>
            )}
          </div>

          <div className="relative w-full">
            <input
              value={scrapData?.address || ""}
              onChange={handleChange}
              name="address"
              id="address"
              type="text"
              className="peer w-full px-3 pt-6 pb-2 border-b border-gray-300 bg-transparent 
                   placeholder-transparent focus:outline-none focus:border-darkColor
                   transition-colors duration-200"
              placeholder={"address"}
            />
            <label
              htmlFor="address"
              className="absolute left-3 -top-1 text-sm text-gray-500 
                   peer-placeholder-shown:text-base peer-placeholder-shown:top-4 
                   peer-focus:-top-1 peer-focus:text-sm peer-focus:text-darkColor
                   transition-all duration-200"
            >
              Address
            </label>
            {errors?.address && (
              <span className="text-red-500">{errors?.address}</span>
            )}
          </div>
          <div className="relative w-full">
            <input
              value={scrapData?.pincode || ""}
              onChange={handleChange}
              name="pincode"
              id="pincode"
              type="text"
              maxLength={6}
              className="peer w-full px-3 pt-6 pb-2 border-b border-gray-300 bg-transparent 
                   placeholder-transparent focus:outline-none focus:border-darkColor
                   transition-colors duration-200"
              placeholder={""}
            />
            <label
              htmlFor="pincode"
              className="absolute left-3 -top-1 text-sm text-gray-500 
                   peer-placeholder-shown:text-base peer-placeholder-shown:top-4 
                   peer-focus:-top-1 peer-focus:text-sm peer-focus:text-darkColor
                   transition-all duration-200"
            >
              Pincode
            </label>
            {errors?.pincode && (
              <span className="text-red-500">{errors?.pincode}</span>
            )}
          </div>
        </div>

        <div className="space-y-4 mt-5">
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Scrap Images
            </label>
            <div
              className="border-2 border-dashed border-gray-300 rounded-lg p-8
                            hover:border-darkColor transition-colors duration-200
                            flex flex-col items-center justify-center cursor-pointer"
            >
              <BiUpload className="h-12 w-12 text-gray-400" />
              <input
                onChange={(e) => {
                  const files = e.target.files
                    ? Array.from(e.target.files)
                    : [];
                  setScrapData({ ...scrapData, gallery: files }); // Set the files array directly
                }}
                type="file"
                accept="image/*"
                multiple
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              <p className="mt-2 text-sm text-gray-500">
                Drop up to images here or click to upload
              </p>
            </div>
          </div>
          <ImagePreviewer
            imageFiles={scrapData?.gallery}
            onRemove={(index) => {
              setGallery(
                scrapData?.gallery.filter(
                  (_: any, imageId: number) => index !== imageId
                )
              );
            }}
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              onChange={handleChange}
              value={scrapData?.description || ""}
              name="description"
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-darkColor
                         resize-none"
              placeholder="Provide details about the scrap..."
            />
          </div>
        </div>

        <div className="flex justify-center">
          <SubmitButton
            callBack={handleSubmit}
            heading="Submit"
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default ScrapMaterialForm;
