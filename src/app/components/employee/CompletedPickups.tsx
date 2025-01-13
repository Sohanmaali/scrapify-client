import { useState } from "react";

const CompletedPickups = () => {
    const pickups = [
        { id: 1, customer: "John Doe", address: "123 Main St, NY", status: "Scheduled", date: "2025-01-10" },
        { id: 2, customer: "Jane Smith", address: "456 Elm St, LA", status: "In Progress", date: "2025-01-12" },
        { id: 3, customer: "Mike Brown", address: "789 Oak St, SF", status: "Completed", date: "2025-01-05" },
    ];


    // Filtered Data

    const completedPickups = pickups.filter((pickup) => pickup.status === "Completed");

    return (<>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Completed Pickups</h2>
        {completedPickups.length > 0 ? (
            <div className="space-y-4">
                {completedPickups.map((pickup) => (
                    <div
                        key={pickup.id}
                        className="flex-start justify-between items-center bg-gray-50 border border-darkColor p-4 rounded-lg shadow-md"
                    >
                        {/* Pickup Details */}
                        <div className="flex items-start space-x-4">
                            {/* Profile Image */}
                            <img
                                src={"/placeholder-time-image.png"}
                                alt={`${pickup.customer}'s profile`}
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            {/* Pickup Details */}
                            <div>
                                <h3 className="text-lg font-bold text-gray-800">{pickup.customer}</h3>
                                <p className="text-gray-600">Address: {pickup.address}</p>
                                <p className="text-gray-600">Date: {pickup.date}</p>
                                <p className="text-gray-600">
                                    Status: <span className="font-semibold">{pickup.status}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        ) : (
            <p className="text-gray-600">No completed pickups yet.</p>
        )}

    </>)
}

export default CompletedPickups