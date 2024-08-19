import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-x-2 text-sm font-medium rounded-lg disabled:opacity-50 disabled:pointer-events-none"',
  {
    variants: {
      variant: {
        default:
          'bg-primary-600 text-white hover:bg-primary-700 focus:bg-primary-700 focus:outline-none',
        destructive:
          'bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:bg-red-600',
        outline:
          'rounded-lg border border-primary-600 text-primary-600 hover:border-primary-500 hover:text-primary-500 focus:outline-none focus:border-primary-500 focus:text-primary-500',
        secondary:
          'border border-transparent bg-gray-500 text-white hover:bg-gray-600 focus:outline-none focus:bg-gray-600',
        ghost:
          'border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 ',
        link: 'text-gray-900 underline-offset-4 hover:underline dark:text-gray-50',
      },
      size: {
        default: 'py-3 px-4',
        sm: 'py-2 px-3',
        lg: 'p-4 sm:p-5',
        block: 'w-full py-3 px-4',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
