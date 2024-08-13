import React from 'react';

import { Toaster } from '../ui/sonner';
import {
  RiCheckDoubleFill,
  RiInformationFill,
  RiAlarmWarningFill,
  RiErrorWarningFill,
  RiRefreshLine,
} from 'react-icons/ri';
const toastOptions = {
  classNames: {
    title: 'text-base font-bold text-white',
    description: 'text-sm text-white',
    icon: 'text-white',
    toast: 'text-sm text-white rounded-lg p-4 gap-5 border-none',
    success: 'bg-teal-500 ',
    error: 'bg-red-500',
    warning: 'bg-yellow-500',
    info: 'bg-blue-600',
  },
};
const icon = {
  success: <RiCheckDoubleFill className="size-10 mr-2" />,
  info: <RiInformationFill className="size-10 mr-2" />,
  warning: <RiAlarmWarningFill className="size-10 mr-2" />,
  error: <RiErrorWarningFill className="size-10 mr-2" />,
  loading: <RiRefreshLine className="size-10 mr-2" />,
};
const ToastProviders = () => {
  return (
    <Toaster position="top-right" toastOptions={toastOptions} icons={icon} />
  );
};

export default ToastProviders;
