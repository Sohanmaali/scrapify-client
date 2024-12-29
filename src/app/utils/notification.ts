

import { toast, ToastOptions } from 'react-hot-toast';

interface NotificationOptions {
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
  customOptions?: Partial<ToastOptions>; // Allow optional customization
}

export default function setNotification({ type, message, customOptions }: NotificationOptions): void {
  const defaultOptions: ToastOptions = {
    position: 'top-center',
    duration: 2000, // Auto-close after 2 seconds
    style: {
      fontSize: '14px',
    },
    ...customOptions, // Merge custom options with default options
  };

  switch (type) {
    case 'success':
      toast.success(message, defaultOptions);
      break;
    case 'error':
      toast.error(message, defaultOptions);
      break;
    case 'info':
      toast(message, { ...defaultOptions, icon: 'ℹ️' }); // Custom icon for info
      break;
    case 'warning':
      toast(message, { ...defaultOptions, icon: '⚠️' }); // Custom icon for warning
      break;
    default:
      toast(message, defaultOptions); // Fallback for unspecified types
  }
}
