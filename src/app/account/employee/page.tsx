'use client'


import { useState } from "react";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";

const AssignedPickups = dynamic(() => import("@/app/components/employee/AssignedPickups"), {
    loading: () => <p>Loading...</p>,
    ssr: false,
});


const CompletedPickups = dynamic(() => import("@/app/components/employee/CompletedPickups"), {
    loading: () => <p>Loading...</p>,
    ssr: false,
});



const EmployeePage = () => {

    const user = useSelector((state: any) => state.auth.user);
    const [activeTab, setActiveTab] = useState("assigned"); // Default to 'assigned'




    return (
        <div className="min-h-screen p-4">
            {/* Page Header */}
            <div className="bg-lightColor shadow-md rounded-lg p-6 mb-6 border border-darkColor flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-mutedColor">Driver Dashboard</h1>
                    <p className="text-gray-600 mt-2">Manage your pickups and view details.</p>
                </div>
                <div>
                    <p className="text-gray-700 font-medium">Welcome, <span className="text-darkColor font-bold">John Doe</span></p>
                </div>
            </div>

            {/* Tabs */}
            <div className="mb-6 ">
                <div className="flex">
                    <button
                        onClick={() => setActiveTab("assigned")}
                        className={`px-4 py-2 text-sm font-semibold ${activeTab === "assigned" ? "border-b-2 border-darkColor text-darkColor" : "text-gray-600"
                            }`}
                    >
                        Assigned Pickups
                    </button>
                    <button
                        onClick={() => setActiveTab("completed")}
                        className={`px-4 py-2 text-sm font-semibold ${activeTab === "completed" ? "border-b-2 border-darkColor text-darkColor" : "text-gray-600"
                            }`}
                    >
                        Completed Pickups
                    </button>
                    <button
                        onClick={() => setActiveTab("details")}
                        className={`px-4 py-2 text-sm font-semibold ${activeTab === "details" ? "border-b-2 border-darkColor text-darkColor" : "text-gray-600"
                            }`}
                    >
                        Driver Details
                    </button>
                </div>
            </div>

            {/* Tab Content */}
            <div className="bg-relatedWhite shadow-lg border rounded-lg p-4 sm:p-6 lg:p-6">
                {activeTab === "assigned" && (
                    <div className="">
                        <AssignedPickups />
                    </div>
                )}

                {activeTab === "completed" && (
                    <div>
                        <CompletedPickups />
                    </div>
                )}

                {activeTab === "details" && (
                    <div>
                        <h2>We Are Working For it...!</h2>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EmployeePage;
