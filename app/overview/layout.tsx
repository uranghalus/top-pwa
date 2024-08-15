import Breadcrumbs from '@/components/ui/breadcrumbs';
import Navbar from '@/components/ui/Navbar';
import Sidebar from '@/components/ui/sidebar';
import { ChildrenProps } from '@/types/childrenprops';
import React from 'react';

const OverviewLayout: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <section className="bg-gray-50 dark:bg-neutral-900">
      <Navbar />
      {/* <Breadcrumbs /> */}
      <Sidebar />
      <div className="w-full lg:ps-64 min-h-screen">
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">{children}</div>
      </div>
    </section>
  );
};

export default OverviewLayout;
