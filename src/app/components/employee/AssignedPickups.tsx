"use client";
import BasicProvider from "@/app/utils/basicprovider";
import NotAvalilable from "../generalComp/NotAvailable";
import { useState, useEffect } from "react";

const AssignedPickups = () => {
  const [pickupsData, setPickupsData] = useState([]);

  const fetchPickupsData = async () => {
    try {
      const response: any = await new BasicProvider(
        "public/scrap/assign-pickup"
      ).getRequest();
      if (response?.status === "success") {
        setPickupsData(response?.data?.data || []);
      }
    } catch (error) {
      console.error("Error while fatching pickups, ", error);
    }
  };

  // useEffect(()=>{
  //     fetchPickupsData();
  // },[])
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
              className="flex flex-wrap justify-between items-center bg-gray-50 border border-darkColor p-4 rounded-lg shadow-md space-y-4 sm:space-y-0 sm:space-x-4"
            >
              {/* Pickup Details */}
              <div className="flex items-start space-x-4 w-full sm:w-auto">
                {/* Profile Image */}
                <img
                  src={"/placeholder-time-image.png"}
                  alt={`customer profile`}
                  className="w-12 h-12 rounded-full object-cover"
                />
                {/* Pickup Details */}
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {pickup.customer?.name || "-"}
                  </h3>
                  <p className="text-gray-600">
                    Address: {pickup?.address || "-"}
                  </p>
                  <p className="text-gray-600">
                    Date: {pickup?.available_date}
                  </p>
                  <p className="text-gray-600">
                    Status:{" "}
                    <span className="font-semibold">{pickup?.status}</span>
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap justify-start sm:justify-end space-y-2 sm:space-y-0 space-x-0 sm:space-x-2 w-full sm:w-auto">
                {pickup.status !== "Completed" && (
                  <button className="px-4 py-2 bg-lightColor text-darkColor border border-darkColor rounded-lg hover:bg-darkColor hover:text-relatedWhite transition w-full sm:w-auto">
                    Mark as In Progress
                  </button>
                )}
                <button className="px-4 py-2 bg-darkColor text-relatedWhite rounded-lg hover:bg-mutedColor transition w-full sm:w-auto">
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
