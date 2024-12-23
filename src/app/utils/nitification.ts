import { useState } from "react";
import { toast } from "react-toastify";

export default function setNotification(type : string,message:string) {


    const position  =  {
        position: 'top-center',
        autoClose: 2000,  // Auto-close after 3 seconds
        hideProgressBar: false,  // Show progress bar
        closeOnClick: true,  // Close on click
        pauseOnHover: true,  // Pause on hover
      }


      if(type === 'error'){
        toast.error(message,position as any);
      }
      else if(type === 'success'){
        toast.success(message,position as any);
      }else if(type === 'warning'){
        toast.warning(message,position as any);
      }else if(type === 'info'){
        toast.info(message, position as any);
      }
  };



