'use client';
import routes from '@/routes/sidebar';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import React from 'react';
import { RiAppsFill, RiCloseFill } from 'react-icons/ri';

const Sidebar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };
  const close = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const sidebarDrawer = document.getElementById('left-sidebar-drawer');
    if (sidebarDrawer) {
      (sidebarDrawer as HTMLElement).click();
    }
  };

  return (
    <div
      id="hs-application-sidebar"
      className="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform w-[260px] h-full hidden fixed inset-y-0 start-0 z-[60] bg-white border-e border-gray-200 lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 dark:bg-neutral-800 dark:border-neutral-700"
      role="dialog"
      aria-label="Sidebar"
    >
      <div className="relative flex flex-col h-full max-h-full">
        <div className="px-4 pt-4">
          <Link
            className="flex rounded-xl text-xl gap-2 items-center font-semibold focus:outline-none focus:opacity-80"
            href="#"
            aria-label="Preline"
          >
            <img
              src="/icons/icon-512x512.png"
              alt="Logo"
              className="inline-block size-[38px] rounded-lg shadow-xl"
            />
            <span className="text-gray-500">Top App</span>
          </Link>
        </div>

        <div className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
          <nav
            className="hs-accordion-group p-3 w-full flex flex-col flex-wrap"
            data-hs-accordion-always-open
          >
            <ul className="flex flex-col space-y-1">
              {routes.map((route, index) => (
                <div key={index}>
                  {route.submenu ? (
                    <li className="hs-accordion" id={`${route.name}-accordion`}>
                      <button
                        type="button"
                        className={`hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200 ${
                          isActive(route.path)
                            ? 'bg-primary-600 text-white'
                            : ''
                        }`}
                        aria-expanded="true"
                        aria-controls="projects-accordion-child"
                      >
                        <route.icon className="shrink-0 size-5" />
                        {route.name}
                        <svg
                          className="hs-accordion-active:block ms-auto hidden size-5"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m18 15-6-6-6 6" />
                        </svg>
                        <svg
                          className="hs-accordion-active:hidden ms-auto block size-5"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </button>

                      <div
                        id="projects-accordion-child"
                        className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                        role="region"
                        aria-labelledby="projects-accordion"
                      >
                        <ul className="ps-8 pt-1 space-y-1">
                          {route.submenu.map((sub, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200 ${
                                  isActive(sub.path)
                                    ? 'bg-primary-600 text-white'
                                    : ''
                                }`}
                                href={sub.path}
                              >
                                <sub.icon className="shrink-0 size-5" />
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  ) : (
                    <li>
                      <Link
                        className={`w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-300 ${
                          isActive(route.path)
                            ? 'bg-primary-600 text-white'
                            : ''
                        }`}
                        href={route.path}
                      >
                        <route.icon className="shrink-0 size-4" />
                        {route.name}
                      </Link>
                    </li>
                  )}
                </div>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
