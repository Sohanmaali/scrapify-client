'use client'
import { useState } from 'react';

const NotificationCard = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative w-full max-w-lg mx-auto mt-4 bg-gradient-to-r from-green-400 to-green-500 rounded-lg shadow-xl border border-green-600">
      <div className="flex items-center justify-between p-5 text-white">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 rounded-full bg-white"></div>
          <h3 className="text-lg font-semibold">Success</h3>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-white hover:text-gray-200 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="p-5 text-white text-sm">
        Your operation was successful! This is a notification message with a gradient background, smooth animations, and an elevated design.
      </div>
    </div>
  );
};

export default NotificationCard;
