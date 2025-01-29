"use client";
import BasicProvider from "@/app/utils/basicprovider";
import ScrapProductCard from "@/app/components/card/ScrapProductCard";
import { useEffect, useState } from "react";
// import Pagination from "@/app/components/generalComp/PaginationButton";
import { useLocation } from "react-router-dom";

import { useRouter, useSearchParams } from "next/navigation";
import { Pagination } from "@/app/components/generalComp/PaginationButton";
import NotAvalilable from "@/app/components/generalComp/NotAvailable";

const ShimmerCard = () => { 
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
const ScrapListing = () => {
  const [scrapData, setScrapData] = useState([]);
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const searchParams = useSearchParams();

  useEffect(() => {
    const pageValue = parseInt(searchParams?.get("page") || "1", 10); // Parse as number
    setCurrentPage(pageValue);
  }, [searchParams]);

  const getScrapProduct = async () => {
    try {

      
      setLoading(true);
      const response: any = await new BasicProvider(
        `public/scrap?page=${currentPage}&count=10`
      ).getRequest();
    
      console.log('==================......',response);
      
      if (response.status === "success") {
        setTotalPage(response?.data?.last_page);
        setScrapData(response?.data?.data || []);
      }
    } catch (error) {
      console.error("Error to fetch Scrap Data  : ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getScrapProduct();
  }, [currentPage]);
    console.log('=====scrapData=====>>>>',scrapData);
    
  return (
    <>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <ShimmerCard key={index} />
              ))
            : Array.isArray(scrapData) &&
              scrapData.map((item: any, index: number) => (
                <ScrapProductCard
                  item={item}
                  key={index}
                  navigate={() => {
                    router.replace(`/pages/scrapdetails/${item?._id}`);
                  }}
                />
              )) 
              
              }
        </div>
        { scrapData.length===0 && !loading && <div className="flex justify-center">  <NotAvalilable/></div>}
        {totalPage > 1 && scrapData.length>0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPage || 1}
            onPageChange={(num: number) => {
              setCurrentPage(num);
              router.push(`?page=${num}`);
            }}
          />
        )}
      </div>
    </>
  );
};

export default ScrapListing;
