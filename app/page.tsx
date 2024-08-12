/* eslint-disable @next/next/no-img-element */
import SigninForm from '@/components/ui/SigninForm';
import Link from 'next/link';

export default function Home() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
        <div className="w-auto max-w-md">
          <img className="w-auto h-9 sm:h-10" src="./images/Logo.png" alt="" />
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 capitalize sm:text-3xl dark:text-white">
            sign In
          </h1>
          <SigninForm />
          <div className="mt-6 flex justify-center items-center gap-2">
            <span className="text-sm text-gray-500 font-medium">
              Don’t have an account yet?
            </span>
            <Link
              href={'/signup'}
              className="text-sm  font-bold text-blue-500 hover:underline dark:text-blue-400"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
