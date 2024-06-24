"use client";

import { useState } from 'react';
import { useSearchParams, usePathname } from 'next/navigation';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import Image from 'next/image';
import Logo from "../../Assets/Logo/finfind-high-resolution-logo-transparent (1).png"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const scrollTo = searchParams?.get('scrollTo');


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
                <Image className="h-8 w-auto" src={Logo} alt="Website Logo" />
                <p className="sr-only">Website Title</p>
              </Link>
            </div>
            <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
              {pathname === '/' && scrollTo === 'hero' ? (
                <ScrollLink
                  to="hero"
                  smooth={true}
                  duration={500}
                  className="inline-block rounded-lg px-3 py-1 text-sm font-medium transition-all duration-200 hover:bg-white hover:bg-opacity-20 bg-pink-400 bg-opacity-80 text-white hover:text-pink-500"
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
                  className="inline-block rounded-lg px-3 py-1 text-sm font-medium transition-all duration-200 hover:bg-white hover:bg-opacity-20 bg-pink-400 bg-opacity-80 text-white hover:text-pink-500"
                >
                  Pricing
                </ScrollLink>
              ) : (
                <Link
                  href="/?scrollTo=subscription"
                  className={`inline-block rounded-lg px-3 py-1 text-sm font-medium transition-all duration-200 hover:bg-white hover:bg-opacity-20 ${pathname === '/?scrollTo=subscription' ? 'bg-pink-400 bg-opacity-80 text-white hover:text-pink-500' : 'text-gray-700'}`}
                >
                  Pricing
                </Link>
              )}

              {pathname === '/' && scrollTo === 'author' ? (
                <ScrollLink
                  to="author"
                  smooth={true}
                  duration={500}
                  className="inline-block rounded-lg px-3 py-1 text-sm font-medium transition-all duration-200 hover:bg-white hover:bg-opacity-20 bg-pink-400 bg-opacity-80 text-white hover:text-pink-500"
                >
                  About
                </ScrollLink>
              ) : (
                <Link
                  href="/?scrollTo=author"
                  className={`inline-block rounded-lg px-3 py-1 text-sm font-medium transition-all duration-200 hover:bg-white hover:bg-opacity-20 ${pathname === '/?scrollTo=author' ? 'bg-pink-400 bg-opacity-80 text-white hover:text-pink-500' : 'text-gray-700'}`}
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
                className="inline-flex items-center justify-center rounded-xl bg-[#9a1750] px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-[#5d001e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
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
            {pathname === '/' && scrollTo === 'hero' ? (
              <ScrollLink
                to="hero"
                smooth={true}
                duration={500}
                className="block rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 hover:bg-white hover:bg-opacity-20 bg-pink-400 bg-opacity-80 text-white hover:text-pink-500"
                onClick={toggleMenu}
              >
                Home
              </ScrollLink>
            ) : (
              <Link
                href="/?scrollTo=hero"
                className={`block rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 hover:bg-white hover:bg-opacity-20 ${pathname === '/' ? 'bg-pink-400 bg-opacity-80 text-white hover:text-pink-500' : 'text-gray-700'}`}
                onClick={toggleMenu}
              >
                Home
              </Link>
            )}

            {pathname === '/' && scrollTo === 'subscription' ? (
              <ScrollLink
                to="subscription"
                smooth={true}
                duration={500}
                className="block rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 hover:bg-white hover:bg-opacity-20 bg-pink-400 bg-opacity-80 text-white hover:text-pink-500"
                onClick={toggleMenu}
              >
                Pricing
              </ScrollLink>
            ) : (
              <Link
                href="/?scrollTo=subscription"
                className={`block rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 hover:bg-white hover:bg-opacity-20 ${pathname === '/pricing' ? 'bg-pink-400 bg-opacity-80 text-white hover:text-pink-500' : 'text-gray-700'}`}
                onClick={toggleMenu}
              >
                Pricing
              </Link>
            )}

            {pathname === '/' && scrollTo === 'author' ? (
              <ScrollLink
                to="author"
                smooth={true}
                duration={500}
                className="block rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 hover:bg-white hover:bg-opacity-20 bg-pink-400 bg-opacity-80 text-white hover:text-pink-500"
                onClick={toggleMenu}
              >
                About
              </ScrollLink>
            ) : (
              <Link
                href="/?scrollTo=author"
                className={`block rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 hover:bg-white hover:bg-opacity-20 ${pathname === '/about' ? 'bg-pink-400 bg-opacity-80 text-white hover:text-pink-500' : 'text-gray-700'}`}
                onClick={toggleMenu}
              >
                About
              </Link>
            )}

            <Link
              aria-current="page"
              className={`block rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 hover:bg-white hover:bg-opacity-20 ${pathname === '/services' ? 'bg-pink-400 bg-opacity-80 text-white hover:text-pink-500' : 'text-gray-700'}`}
              href="/services"
              onClick={toggleMenu}
            >
              Result
            </Link>
          </div>
        )}
      </header>
    </>
  );
};

export default Navigation;
