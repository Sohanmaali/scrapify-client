"use client";
import BasicProvider from "@/app/utils/basicprovider";
import NotAvalilable from "../generalComp/NotAvailable";
import { useState, useEffect } from "react";
import DateTimeHelper from "@/helpers/DateTimeHelper";
import { getStatus } from "@/helpers/genralfunction";

const AssignedPickups = () => {
  const [pickupsData, setPickupsData] = useState([]);

  const fetchPickupsData = async () => {
    try {
      const response: any = await new BasicProvider(
        "public/task-manager/all"
      ).getRequest();
      if (response?.status === "success") {
        setPickupsData(response?.data || []);
      }

      console.log('===========response======...>>>',response);
      
    } catch (error) {
      console.error("Error while fatching pickups, ", error);
    }
  };

  useEffect(()=>{
      fetchPickupsData();
  },[])
  const pickups = [
    {
      id: 1,
      customer: "John Doe",
      address: "123 Main St, NY",
      status: "Scheduled",
      date: "2025-01-10",
    },
    {
      id: 2,
      customer: "Jane Smith",
      address: "456 Elm St, LA",
      status: "In Progress",
      date: "2025-01-12",
    },
    {
      id: 3,
      customer: "Mike Brown",
      address: "789 Oak St, SF",
      status: "Completed",
      date: "2025-01-05",
    },
  ];

  const assignedPickups = pickups.filter(
    (pickup) => pickup.status !== "Completed"
  );
  return (
    <>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Assigned Pickups
      </h2>
      {pickupsData.length > 0 ? (
       <div className="space-y-4">
       {pickupsData.map((pickup: any) => (
         <div
           key={pickup._id}
           className="flex flex-wrap justify-between items-center bg-gray-50 border border-darkColor p-4 rounded-lg shadow-md"
         >
           {/* Pickup Details Section */}
           <div className="flex items-center gap-4 w-full sm:w-auto">
             {/* Profile Image */}
             <img
               src={pickup?.scrap?.customer?.featured_image?.filepath}
               alt="customer profile"
               className="w-14 h-14 rounded-full object-cover border border-gray-300"
             />
     
             {/* Customer Information - Display in a row format */}
             <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm sm:flex sm:flex-wrap sm:items-center sm:gap-x-6">
               <h3 className="font-bold text-gray-800 col-span-2 sm:col-auto">
                 {pickup?.scrap?.customer?.name || "-"}
                 
               </h3>
               {/* <h3 className="font-bold text-gray-800 col-span-2 sm:col-auto">
               {pickup?.scrap?.customer?.mobile || "-"}
                 
               </h3> */}
               <p className="text-gray-600"><strong>City :</strong> {pickup?.scrap.city.name || "-"}</p>
               <p className="text-gray-600">🏠<strong>location :</strong> {pickup?.scrap.address || "-"}</p>
               <p className="text-gray-600">📌<strong>Pincode :</strong> {pickup?.scrap.pincode || "-"}</p>
               <p className="text-gray-600">🗓️<strong>Date :</strong> {DateTimeHelper.DisplayDate(pickup?.scrap?.available_date) || "-"}</p>
               <p className="text-gray-600 ">
               <strong>Status :</strong><span className="">{getStatus(pickup?.scrap?.status)}</span>
               </p>
             </div>
           </div>
     
           {/* Action Buttons - Stay aligned in one row */}
           <div className="flex flex-wrap justify-end gap-2 w-full sm:w-auto mt-2 sm:mt-2">
             {pickup.status !== "Completed" && (
               <button className="px-4 py-2 bg-lightColor text-darkColor border border-darkColor rounded-lg hover:bg-darkColor hover:text-white transition">
                 Mark as In Progress
               </button>
             )}
             <button className="px-4 py-2 bg-darkColor text-white rounded-lg hover:bg-mutedColor transition">
               Mark as Completed
             </button>
           </div>
         </div>
       ))}
     </div>
     
      ) : (
        <NotAvalilable />
      )}
    </>
  );
};

export default AssignedPickups;
