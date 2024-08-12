import * as React from 'react';
import { IconType } from 'react-icons';
import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icons?: IconType;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icons: Icon, ...props }, ref) => {
    return (
      <div className="relative flex items-center">
        {Icon && (
          <span className="absolute">
            <Icon className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
          </span>
        )}
        <input
          type={type}
          className={cn(
            'block w-full py-3 text-gray-700 bg-gray-100 focus:bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-primary-400 dark:focus:border-primary-300 focus:ring-primary-300 focus:outline-none focus:ring focus:ring-opacity-40',
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
