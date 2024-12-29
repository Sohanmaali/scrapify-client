import React from 'react';
import { BiX } from 'react-icons/bi';


const Modal = ({ isOpen, onClose, title, children }:any) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div 
        className="absolute inset-0 text-mutedColor bg-black bg-opacity-50 transition-opacity"
        // onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative z-50 w-full max-w-lg mx-4 md:mx-auto bg-white rounded-lg shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold text-mutedColor">{title}</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-mutedColor hover:bg-gray-100 transition-colors"
          >
            <BiX className="w-5 h-5" />
          </button>
        </div>
        {/* Body */}
        <div className="p-4 max-h-[calc(100vh-200px)] overflow-y-auto">
          {children}
        </div>
        
        {/* Footer */}
        {/* <div className="flex justify-end gap-2 p-4 border-t">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 rounded-md hover:bg-gray-100 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
          >
            Confirm
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Modal;