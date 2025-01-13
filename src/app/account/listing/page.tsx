// "use client";
// import ProductCardComp from "@/app/components/card/ProdcutCardCopm";
// import {
//   AddButton,
//   GreadiantButton,
//   PrimaryButton,
//   SubmitButton,
// } from "@/app/components/generalComp/Buttons";
// import NotAvalilable from "@/app/components/generalComp/NotAvailable";
// import ScrapListing from "@/app/pages/scrapProducts/ScrapListing";
// import { useEffect, useState } from "react";
// const ListingnPage = () => {
//   const [activeTab, setActiveTab] = useState("scrapMaterial");
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     setIsLoaded(true);
//   }, []);

//   if (!isLoaded) {
//     return null;
//   }

//   return (
//     <>
//       <div className="px-2">
//         <div className="w-full flex justify-between aligh-center">
//           <h1 className="text-2xl text-mutedColor font-bold mb-4 border-b-2 border-b border-darkColor ">
//             Listing
//           </h1>
//         </div>
//         <div>
//           {/* Tab Navigation */}
//           <div className="flex space-x-4 mb-6">
//             <button
//               className={`py-2 px-2 rounded-lg ${
//                 activeTab === "scrapMaterial"
//                   ? "bg-darkColor text-relatedWhite "
//                   : "bg-gray-200 text-darkColor"
//               }`}
//               onClick={() => setActiveTab("scrapMaterial")}
//             >
//               Scrap Materials
//             </button>
//             <button
//               className={`py-2 px-4 rounded-lg ${
//                 activeTab === "handmadeProducts"
//                   ? "bg-darkColor  text-relatedWhite "
//                   : "bg-gray-200 text-darkColor"
//               }`}
//               onClick={() => setActiveTab("handmadeProducts")}
//             >
//               Handmade Products
//             </button>
//           </div>

//           {/* Tab Content */}
//           <div>
//             {activeTab === "scrapMaterial" && (
//               <div>
//                 <div className="flex items-center justify-between mb-4 px-4">
//                   <h2 className="text-lg font-bold text-darkColor">
//                     Scrap Products
//                   </h2>
//                   <AddButton lable="Add Product" />
//                 </div>
//                 {/* <hr /> */}
//                 <div className="mt-10">
//                   {/* <ScrapListing /> */}
//                 </div>
//               </div>
//             )}
//             {activeTab === "handmadeProducts" && (
//               <div>
//                 <div className="flex items-center justify-between mb-4 px-4">
//                   <h2 className="text-lg font-bold text-darkColor">Handmade</h2>
//                   <AddButton lable="Add Product" />
//                 </div>

//                 {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-auto-fit gap-6">
//                   {[
//                     1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 2, 1, 3, 4,
//                     5, 6, 6, 7, 7, 8, 7, 6, 4, 3, 33, 4,
//                   ].map((item, index) => (
//                     <div className="flex justify-center" key={index}>
//                       <ProductCardComp />
//                     </div>
//                   ))}
//                 </div> */}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default ListingnPage;

"use client";
import { useState, useEffect } from "react";
import ProductCardComp from "@/app/components/card/ProdcutCardCopm";
import { AddButton } from "@/app/components/generalComp/Buttons";
import ScrapListing from "@/app/pages/scrapProducts/ScrapListing";

const ListingnPage = () => {
  const [activeTab, setActiveTab] = useState("scrapMaterial");
 

  return (
    <div className="px-2">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-2xl text-mutedColor font-bold mb-4 border-b-2 border-b border-darkColor">
          Listing
        </h1>
      </div>
      <div>
        {/* Tab Navigation */}
        <div className="flex space-x-4 mb-6">
          <button
            className={`py-2 px-2 rounded-lg ${
              activeTab === "scrapMaterial"
                ? "bg-darkColor text-relatedWhite"
                : "bg-gray-200 text-darkColor"
            }`}
            onClick={() => setActiveTab("scrapMaterial")}
          >
            Scrap Materials
          </button>
          <button
            className={`py-2 px-4 rounded-lg ${
              activeTab === "handmadeProducts"
                ? "bg-darkColor  text-relatedWhite"
                : "bg-gray-200 text-darkColor"
            }`}
            onClick={() => setActiveTab("handmadeProducts")}
          >
            Handmade Products
          </button>
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === "scrapMaterial" && (
            <div>
              <div className="flex items-center justify-between mb-4 px-4">
                <h2 className="text-lg font-bold text-darkColor">
                  Scrap Products
                </h2>
                <AddButton lable="Add Product" />
              </div>
              <div className="mt-10">
                <ScrapListing />
              </div>
            </div>
          )}
          {activeTab === "handmadeProducts" && (
            <div>
              <div className="flex items-center justify-between mb-4 px-4">
                <h2 className="text-lg font-bold text-darkColor">Handmade</h2>
                {/* <AddButton lable="Add Product" /> */}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-auto-fit gap-6">
                {[
                  1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 2, 1, 3, 4, 5,
                  6, 6, 7, 7, 8, 7, 6, 4, 3, 33, 4,
                ].map((item, index) => (
                  <div className="flex justify-center" key={index}>
                    <ProductCardComp />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListingnPage;
