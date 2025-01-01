'use client'
import BasicProvider from "@/app/utils/basicprovider";
import ScrapProductCard from "../card/ScrapProductCard"
import { useEffect, useState } from "react";

const ShimmerCard =  () => {
  return (
    <div className="flex w-full flex-col sm:flex-row bg-white border rounded-lg overflow-hidden max-w-md mx-auto shadow-md p-5 mb-5 animate-pulse">
      <div className="flex-shrink-0 w-full sm:w-1/3">
        <div className="w-full h-36 bg-gray-200 rounded-lg"></div>
      </div>
      <div className="flex flex-col justify-between w-full sm:w-2/3 py-2 px-4 space-y-3">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="flex justify-between items-center">
          <div className="h-6 bg-gray-200 rounded w-12"></div>
          <div className="space-y-1">
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="h-3 bg-gray-200 rounded w-1/4"></div>

          </div>
          <div className="h-6 bg-gray-200 rounded w-12"></div>
        </div>
        <div className="flex justify-between space-x-4">
          <div className="h-4 bg-gray-200 rounded w-1/3"></div>
          <div className="h-4 bg-gray-200 rounded w-1/3"></div>
        </div>
        <div className="flex items-center space-x-1">
          <div className="h-4 bg-gray-200 rounded w-6"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
        </div>
      </div>
    </div>


  );
};
const ScrapListing =  () => {
  const [scrapData ,setScrapData] = useState([]);
  const getScrapProduct = async () => {
    try {
      const response:any = await new BasicProvider('public/scrap').getRequest();
      if(response.status === 'success'){
          setScrapData(response?.data?.data || [])
      }
    } catch (error) {
      console.log('Error to fetch Scrap Data  : ', error);
    }
  }
  
useEffect(()=>{
  getScrapProduct();
})

  return (<>
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {
          true ? Array.from({ length: 6 }).map((_, index) => <ShimmerCard key={index} />) : [1, 3, 4, 5, 7, 8, 9, 9, 9].map((_, index) => (
            <ScrapProductCard key={index} />
          ))
        }
        <ScrapProductCard key={''} />
      </div>


    </div>

  </>)
}

export default ScrapListing


