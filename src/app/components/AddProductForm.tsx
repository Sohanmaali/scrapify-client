"use client"
import React, { useState } from 'react';
import { BiUpload } from 'react-icons/bi';
import { SubmitButton } from './generalComp/Buttons';
import ImagePreviewer from './generalComp/helperComp/ImagePreviewer';
import { useGetByIdSlugCategories } from '@/hooks/categoryHelper';


const ScrapMaterialForm = ({ category }: any) => {

const categoryData:any = useGetByIdSlugCategories(category)
 
const [isLoading,setIsLoading] = useState(false);


  const [scrapData, setScrapData] = useState<any>({
    gallery: []
  })
  const [gallery, setGallery] = useState<any>([])

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    if(name==="quantity" || name === "weight" || name==="mobile" || name==='pincode' ){
    if(!/^\d+$/.test(value) && value!==''){
      return
    }
    }
    setScrapData(() => ({
      ...scrapData,
      [name]: value
    }))
  }


  const handleSubmit = (e:any)=>{
    e.preventDefault();
    try {
      console.log('===============:::::');
      
    } catch (error) {
      
    }
  }

  return (
    <div className="min-h-screen    lg:px-2 sm:px-2 sm:py-2 sm:px-3 lg:px-4 text-mutedColor">
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
            {categoryData.name || '--'}:  {categoryData.price}₹ / kg
            </span>

          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div className="relative w-full">
            <input
              value={scrapData?.quantity || ''}
              onChange={handleChange}
              name='quantity'
              id='quantity'
              type='text'
              maxLength={8}
              className="peer w-full px-3 pt-6 pb-2 border-b border-gray-300 bg-transparent 
                   placeholder-transparent focus:outline-none focus:border-darkColor
                   transition-colors duration-200"
              placeholder={'quantity'}


            />
            <label
              htmlFor="quantity"
              className="absolute left-3 -top-1 text-sm text-gray-500 
                   peer-placeholder-shown:text-base peer-placeholder-shown:top-4 
                   peer-focus:-top-1 peer-focus:text-sm peer-focus:text-darkColor
                   transition-all duration-200"
            >
              quantity
            </label>
          </div>

          <div className="relative w-full">
            <input
            value={scrapData?.weight || ''}
              onChange={handleChange}
              name='weight'
              id='weight'
              type='text'
              maxLength={8}
              className="peer w-full px-3 pt-6 pb-2 border-b border-gray-300 bg-transparent 
                   placeholder-transparent focus:outline-none focus:border-darkColor
                   transition-colors duration-200"
              placeholder={'weight'}


            />
            <label
              htmlFor="weight"
              className="absolute left-3 -top-1 text-sm text-gray-500 
                   peer-placeholder-shown:text-base peer-placeholder-shown:top-4 
                   peer-focus:-top-1 peer-focus:text-sm peer-focus:text-darkColor
                   transition-all duration-200"
            >
              weight
            </label>
          </div>

          <div className="relative w-full">
            <input
              value={scrapData?.mobile || ''}
              onChange={handleChange}
              name='mobile'
              id='mobile'
              type='text'
            
              maxLength={10}
              className="peer w-full px-3 pt-6 pb-2 border-b border-gray-300 bg-transparent 
                   placeholder-transparent focus:outline-none focus:border-darkColor
                   transition-colors duration-200"
              placeholder={'contact'}
            />
            <label
              htmlFor="mobile"
              className="absolute left-3 -top-1 text-sm text-gray-500 
                   peer-placeholder-shown:text-base peer-placeholder-shown:top-4 
                   peer-focus:-top-1 peer-focus:text-sm peer-focus:text-darkColor
                   transition-all duration-200"
            >
              Seller Contact Number
            </label>
          </div>

          <div className="relative w-full">
            <select   value={scrapData?.state || ''}
              className="w-full px-3 pt-6 pb-2 border-b border-gray-300 bg-transparent
                         focus:outline-none focus:border-green-500 appearance-none"
            >
              <option value="">Select state</option>
              <option value="metal">Madhya Pradesh</option>
              <option value="plastic">Uttar Pradesh</option>
              <option value="paper">Delhi</option>
              <option value="electronics">Maharashtra</option>
              <option value="electronics">Kashmir</option>
            </select>
            <label className="absolute left-3 -top-1 text-sm text-darkColor">
              State
            </label>
          </div>
          <div className="relative w-full">
            <select   value={scrapData?.city || ''} onChange={handleChange}
              className="w-full px-3 pt-6 pb-2 border-b border-gray-300 bg-transparent
                         focus:outline-none focus:border-green-500 appearance-none"
            >
              <option value="">Select City</option>
              <option value="metal">Ujjain</option>
              <option value="plastic">Indore</option>
              <option value="paper">Kannod</option>
              <option value="electronics">Khategaon</option>
              <option value="electronics">Dewash</option>
            </select>
            <label className="absolute left-3 -top-1 text-sm text-darkColor">
              City
            </label>
          </div>
          <div className="relative w-full">
            <input
              value={scrapData?.pincode || ''}
              onChange={handleChange}
              name='pincode'
              id='pincode'
              type='text'
              maxLength={6}
              className="peer w-full px-3 pt-6 pb-2 border-b border-gray-300 bg-transparent 
                   placeholder-transparent focus:outline-none focus:border-darkColor
                   transition-colors duration-200"
              placeholder={''}


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
          </div>
          <div className="relative w-full">
            <input
              value={scrapData?.location || ''}
              onChange={handleChange}
              name='location'
              id='location'
              type='text'
              className="peer w-full px-3 pt-6 pb-2 border-b border-gray-300 bg-transparent 
                   placeholder-transparent focus:outline-none focus:border-darkColor
                   transition-colors duration-200"
              placeholder={'location'}
            />
            <label
              htmlFor="location"
              className="absolute left-3 -top-1 text-sm text-gray-500 
                   peer-placeholder-shown:text-base peer-placeholder-shown:top-4 
                   peer-focus:-top-1 peer-focus:text-sm peer-focus:text-darkColor
                   transition-all duration-200"
            >
              location
            </label>
          </div>

        </div>

        <div className="space-y-4 mt-5">
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Scrap Images
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8
                            hover:border-darkColor transition-colors duration-200
                            flex flex-col items-center justify-center cursor-pointer">
              <BiUpload className="h-12 w-12 text-gray-400" />
              <input onChange={(e) => {
                const files = e.target.files ? Array.from(e.target.files) : [];
                setGallery(files); // Set the files array directly
              }} type="file" multiple className="absolute inset-0 opacity-0 cursor-pointer" />
              <p className="mt-2 text-sm text-gray-500">Drop up to images here or click to upload</p>
            </div>

          </div>
          <ImagePreviewer
            imageFiles={gallery}
            onRemove={(index) => {
              setGallery(gallery.filter((_:any, imageId: number) => index !== imageId));
            }}

          />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
            onChange={handleChange}
              value={scrapData?.description || ''}
              name='description'
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-darkColor
                         resize-none"
              placeholder="Provide details about the scrap..."
            />
          </div>
        </div>

        <div className="flex justify-center">

          <SubmitButton callBack={handleSubmit} heading='Submit'  isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default ScrapMaterialForm;