"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// import { useAuth } from "../../hooks/useAuth";
import { Icons } from "../shared/Icons";
// import { Icons } from "../common/Icons";
const Header = () => {
  // const { authState } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  // console.log(authState);

  return (
    <header className="fixed top-0 left-0 w-full z-50  bg-sky-950 shadow-md">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-[shrink-0]">
            <Link href="/" className="text-2xl  text-white">
              <Image
                className="w-35"
                src={Icons.Logo}
                alt="Picture of the author"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-white hover:text-rose-600 transition font-semibold"
            >
              Home
            </Link>
            <Link
              href="/service"
              className="text-white cursor-pointer hover:text-rose-600 font-semibold"
            >
              Services
            </Link>

            <Link
              href="/portfolio"
              className="text-white hover:text-rose-600 transition font-semibold"
            >
              Portfolio
            </Link>
            <Link
              href="/#testimonial"
              className="text-white hover:text-rose-600 transition font-semibold"
            >
              Blog
            </Link>
            <Link
              href="/#contact"
              className="text-white hover:text-rose-600 transition font-semibold"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button (Desktop) */}
          {/* {!authState?.isAuthenticated ? ( */}
          <div className="hidden md:block">
            <Link
              href="/login"
              className="ml-2 flex text-white items-center gap-2 rounded border px-3 py-1.5 cursor-pointer hover:border-rose-600 hover:bg-rose-600 shadow-md shadow-cyan-500/20"
            >
              <Icons.User className="text-white" />
              <span>Sign in/Sign up</span>
            </Link>
          </div>
          {/* // )  */}
          {/* : ( */}
          {/* //   <ProfileMenu /> */}
          {/* // )} */}
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col space-y-4 px-6 py-6">
            <a
              href="#"
              className="text-gray-700 hover:text-rose-600 transition"
            >
              Home
            </a>

            <a
              href="#"
              className="text-gray-700 hover:text-rose-600 transition"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-rose-600 transition"
            >
              Portfolio
            </a>
            <a
              href="#"
              className="text-gray-700  hover:text-rose-600 transition"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
