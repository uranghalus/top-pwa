import { ChildrenProps } from '@/types/childrenprops';
import React from 'react';

const AuthLayout: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <div className="container flex items-center justify-center min-h-screen px-6 mx-auto bg-white dark:bg-gray-900">
      {children}
    </div>
  );
};

export default AuthLayout;
