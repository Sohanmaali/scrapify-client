"use client"
import React, { useState } from 'react';
import { BiUpload } from 'react-icons/bi';
import { SubmitButton } from './generalComp/Buttons';
import ImagePreviewer from './generalComp/helperComp/ImagePreviewer';
// import { Calendar, Upload } from 'lucide-react';

const ScrapMaterialForm = () => {

  const [gallery, setGallery] = useState<any>([])



  const InputField = ({ id, label, type = "text", ...props }: any) => (
    <div className="relative w-full">
      <input
        id={id}
        type={type}
        className="peer w-full px-3 pt-6 pb-2 border-b border-gray-300 bg-transparent 
                   placeholder-transparent focus:outline-none focus:border-darkColor
                   transition-colors duration-200"
        placeholder={label}
        {...props}
      />
      <label
        htmlFor={id}
        className="absolute left-3 -top-1 text-sm text-gray-500 
                   peer-placeholder-shown:text-base peer-placeholder-shown:top-4 
                   peer-focus:-top-1 peer-focus:text-sm peer-focus:text-darkColor
                   transition-all duration-200"
      >
        {label}
      </label>
    </div>
  );

  return (
    <div className="min-h-screen    lg:px-2 sm:px-2 sm:py-2 sm:px-3 lg:px-4">
      <div className="max-w-4xl mx-auto bg-relatedWhite rounded-xl  p-6 sm:p-5 ">


        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 bg-gray-100 p-6 rounded-lg border border-darkColor">
          {/* Left Section: Heading */}
          <div className="text-center md:text-left md:w-2/3">
            <h2 className="text-3xl font-bold text-gray-900">
              Scrap Material <span className="underline decoration-wavy text-darkColor">Submission</span>
            </h2>
            <p className="text-gray-600 mt-2">
              Ready to sell your scrap? <span className="text-green-500">Share the details</span>
            </p>
          </div>

          {/* Right Section: Selected Category */}
          <div className="text-center md:text-right md:w-1/3">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Selected Category</h3>
            <span
              className="px-4 py-2 bg-blue-100 text-darkColor rounded-full  font-bold shadow-sm"
            >
              Electronics:  ₹50/kg
            </span>

          </div>
        </div>


        <form className="space-y-8 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField id="scrapName" label="Scrap Name" />
            <InputField id="scrapType" label="Scrap Type" />
            <InputField id="quantity" label="Quantity (kg)" type="number" />
            <InputField id="price" label="Price per kg" type="number" />
            <InputField id="weight" label="Weight (kg)" type="number" />
            <InputField id="material" label="Material" />
            <InputField id="location" label="Location" />

            <div className="relative w-full">
              <select
                className="w-full px-3 pt-6 pb-2 border-b border-gray-300 bg-transparent
                         focus:outline-none focus:border-green-500 appearance-none"
              >
                <option value="">Select Category</option>
                <option value="metal">Metal</option>
                <option value="plastic">Plastic</option>
                <option value="paper">Paper</option>
                <option value="electronics">Electronics</option>
              </select>
              <label className="absolute left-3 -top-1 text-sm text-darkColor">
                Scrap Category
              </label>
            </div>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8
                            hover:border-darkColor transition-colors duration-200
                            flex flex-col items-center justify-center cursor-pointer">
                <BiUpload className="h-12 w-12 text-gray-400" />
                <input onChange={(e) => {
                  const files = e.target.files ? Array.from(e.target.files) : [];
                  setGallery(files); // Set the files array directly
                }} type="file" multiple className="absolute inset-0 opacity-0 cursor-pointer" />
                <p className="mt-2 text-sm text-gray-500">Drop up to 5 images here or click to upload</p>
              </div>
            </div>
            <ImagePreviewer imageFiles={gallery} onRemove={() => {}} />
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-darkColor
                         resize-none"
                placeholder="Provide details about the scrap..."
              />
            </div>
          </div>

          <div className="flex justify-center">

            <SubmitButton heading='Submit Scrap Details' />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ScrapMaterialForm;