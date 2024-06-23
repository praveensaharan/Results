"use client";

import { useState } from 'react';
import { useSearchParams, usePathname } from 'next/navigation';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const scrollTo = searchParams.get('scrollTo');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full border border-yellow-700 bg-gradient-to-b from-purple-100 to-transparent py-3 shadow-lg backdrop-blur-lg transition-all duration-500 md:top-1 md:rounded-3xl lg:max-w-screen-xl hover:shadow-2xl hover:bg-gray-200">
        <div className="px-8">
          <div className="flex items-center justify-between">
            <div className="flex shrink-0">
              <Link aria-current="page" className="flex items-center" href="/">
                <img className="h-7 w-auto" src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Website Logo" />
                <p className="sr-only">Website Title</p>
              </Link>
            </div>
            <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
              {pathname === '/' && scrollTo === 'hero' ? (
                <ScrollLink
                  to="hero"
                  smooth={true}
                  duration={500}
                  className={`inline-block rounded-lg px-3 py-1 text-sm font-medium transition-all duration-200 hover:bg-white hover:bg-opacity-20 bg-pink-400 bg-opacity-80 text-white hover:text-pink-500`}
                >
                  Home
                </ScrollLink>
              ) : (
                <Link
                  href="/?scrollTo=hero"
                  className={`inline-block rounded-lg px-3 py-1 text-sm font-medium transition-all duration-200 hover:bg-white hover:bg-opacity-20 ${pathname === '/' ? 'bg-pink-400 bg-opacity-80 text-white hover:text-pink-500' : 'text-gray-700'}`}
                >
                  Home
                </Link>
              )}

              {pathname === '/' && scrollTo === 'subscription' ? (
                <ScrollLink
                  to="subscription"
                  smooth={true}
                  duration={500}
                  className={`inline-block rounded-lg px-3 py-1 text-sm font-medium transition-all duration-200 hover:bg-white hover:bg-opacity-20 bg-pink-400 bg-opacity-80 text-white hover:text-pink-500`}
                >
                  Pricing
                </ScrollLink>
              ) : (
                <Link
                  href="/?scrollTo=subscription"
                  className={`inline-block rounded-lg px-3 py-1 text-sm font-medium transition-all duration-200 hover:bg-white hover:bg-opacity-20 ${pathname === '/' ? 'bg-pink-400 bg-opacity-80 text-white hover:text-pink-500' : 'text-gray-700'}`}
                >
                  Pricing
                </Link>
              )}

              {pathname === '/' && scrollTo === 'author' ? (
                <ScrollLink
                  to="author"
                  smooth={true}
                  duration={500}
                  className={`inline-block rounded-lg px-3 py-1 text-sm font-medium transition-all duration-200 hover:bg-white hover:bg-opacity-20 bg-pink-400 bg-opacity-80 text-white hover:text-pink-500`}
                >
                  About
                </ScrollLink>
              ) : (
                <Link
                  href="/?scrollTo=author"
                  className={`inline-block rounded-lg px-3 py-1 text-sm font-medium transition-all duration-200 hover:bg-white hover:bg-opacity-20 ${pathname === '/' ? 'bg-pink-400 bg-opacity-80 text-white hover:text-pink-500' : 'text-gray-700'}`}
                >
                  About
                </Link>
              )}

              <Link
                aria-current="page"
                className={`inline-block rounded-lg px-3 py-1 text-sm font-medium transition-all duration-200 hover:bg-white hover:bg-opacity-20 ${pathname === '/services' ? 'bg-pink-400 bg-opacity-80 text-white hover:text-pink-500' : 'text-gray-700'}`}
                href="/services"
              >
                Result
              </Link>
            </div>
            <div className="flex items-center justify-end gap-3">
              <Link
                className="hidden items-center justify-center rounded-xl bg-white bg-opacity-30 px-3 py-2 text-sm font-semibold text-black shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-opacity-50 sm:inline-flex"
                href="/login"
              >
                Sign in
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                href="/login"
              >
                Login
              </Link>
              <button className="md:hidden p-2" onClick={toggleMenu}>
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden px-8 pt-2 pb-4 space-y-2 bg-purple-100 rounded-b-lg">
            <Link
              aria-current="page"
              className={`block rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 hover:bg-white hover:bg-opacity-20 ${pathname === '/' ? 'bg-pink-400 bg-opacity-80 text-white hover:text-pink-500' : 'text-gray-700'}`}
              href="/"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              className={`block rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 hover:bg-white hover:bg-opacity-20 ${pathname === '/pricing' ? 'bg-pink-400 bg-opacity-80 text-white hover:text-pink-500' : 'text-gray-700'}`}
              href="/pricing"
              onClick={toggleMenu}
            >
              Pricing
            </Link>
            <Link
              aria-current="page"
              className={`block rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 hover:bg-white hover:bg-opacity-20 ${pathname === '/about' ? 'bg-pink-400 bg-opacity-80 text-white hover:text-pink-500' : 'text-gray-700'}`}
              href="/about"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              aria-current="page"
              className={`block rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 hover:bg-white hover:bg-opacity-20 ${pathname === '/services' ? 'bg-pink-400 bg-opacity-80 text-white hover:text-pink-500' : 'text-gray-700'}`}
              href="/services"
              onClick={toggleMenu}
            >
              Service
            </Link>
          </div>
        )}
      </header>
    </>
  );
};

export default Navigation;
