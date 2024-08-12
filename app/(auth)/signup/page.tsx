/* eslint-disable @next/next/no-img-element */
import { url } from 'inspector';
import Link from 'next/link';
import React from 'react';
import SignupForm from './SignupForm';

const SignIn = () => {
  return (
    <div className="w-auto max-w-md">
      <img className="w-auto h-9 sm:h-10" src="./images/Logo.png" alt="" />
      <h1 className="mt-3 text-2xl font-semibold text-gray-800 capitalize sm:text-3xl dark:text-white">
        sign Up
      </h1>
      <SignupForm />
      <div className="mt-6 flex justify-center items-center gap-2">
        <span className="text-sm text-gray-500 font-medium">
          Sudah Punya Akun?
        </span>
        <Link
          href={'/'}
          className="text-sm  font-bold text-blue-500 hover:underline dark:text-blue-400"
        >
          Masuk Disini
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
