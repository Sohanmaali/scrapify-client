"use client"
import { useState } from 'react';
import { AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineInfoCircle, AiOutlineExclamationCircle } from 'react-icons/ai';

const NotificationCard = () => {
  const [isVisible, setIsVisible] = useState(true);
  const notificationType :any= "warning"; // Change this to 'error', 'info', 'warning' for different types

  if (!isVisible) return null;

  const renderIcon = () => {
    switch (notificationType) {
      case 'success':
        return <AiOutlineCheckCircle className="w-6 h-6 text-green-500" />;
      case 'error':
        return <AiOutlineCloseCircle className="w-6 h-6 text-red-500" />;
      case 'info':
        return <AiOutlineInfoCircle className="w-6 h-6 text-blue-500" />;
      case 'warning':
        return <AiOutlineExclamationCircle className="w-6 h-6 text-yellow-500" />;
      default:
        return null;
    }
  };

  const getBackgroundColor = () => {
    switch (notificationType) {
      case 'success':
        return 'bg-gradient-to-r from-green-400 to-green-500';
      case 'error':
        return 'bg-gradient-to-r from-red-400 to-red-500';
      case 'info':
        return 'bg-gradient-to-r from-blue-400 to-blue-500';
      case 'warning':
        return 'bg-gradient-to-r from-yellow-400 to-yellow-500';
      default:
        return '';
    }
  };

  return (
   <div className='p-2'>
     <div className={` relative w-full max-w-lg mx-auto mt-4 ${getBackgroundColor()} rounded-lg shadow-xl border ${notificationType === 'error' ? 'border-red-600' : 'border-transparent'} p-5 transition-all`}>
      <div className="flex items-center justify-between text-white ">
        <div className="flex items-center space-x-3">
          {renderIcon()}
          <h3 className="text-lg font-semibold capitalize">{notificationType}</h3>
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
      <div className="p-3 text-white text-sm">
        {notificationType === 'success' && 'Your operation was successful!'}
        {notificationType === 'error' && 'Something went wrong. Please try again.'}
        {notificationType === 'info' && 'Here is some important information for you.'}
        {notificationType === 'warning' && 'This is a warning. Please be careful.'}
      </div>
    </div>
   </div>
  );
};

export default NotificationCard;
