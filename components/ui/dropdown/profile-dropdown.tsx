/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '../dropdown-menu';
import { RiLogoutBoxLine } from 'react-icons/ri';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

const ProfileDropdown = () => {
  const { data: session } = useSession();
  const signoutHandler = () => {
    signOut({ callbackUrl: '/signin' });
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* <Image
          src={session?.user.profileImage as string}
          className="shrink-0 size-[38px] rounded-full"
          height={38}
          width={38}
          alt={session?.user.name as string}
        /> */}
        <img
          className="shrink-0 size-[38px] rounded-full"
          src={session?.user.profileImage as string}
          alt={session?.user.name as string}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-96">
        <DropdownMenuLabel className="bg-gray-100">
          {/* My Account */}
          <p className="text-sm text-gray-500 dark:text-neutral-500">
            Signed in as
          </p>
          <p className="text-sm font-medium text-gray-800 dark:text-neutral-200">
            {session?.user.name}
          </p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <RiLogoutBoxLine className="mr-2 h-4 w-4" />
          <span>Log out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileDropdown;
