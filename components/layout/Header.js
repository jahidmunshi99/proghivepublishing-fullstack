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
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] ">
      {/* Glass Container */}
      <div className="bg-theme opacity-90 border-white/10 shadow-lg rounded-2xl px-5">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image className="w-28 md:w-32" src={Icons.Logo} alt="Logo" />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { href: "/", label: "Home" },
              { href: "/service", label: "Services" },
              { href: "/portfolio", label: "Portfolio" },
              { href: "/#testimonial", label: "Blog" },
              { href: "/#contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/80 hover:text-white font-medium transition relative group"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#EA4B71] transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 text-white/90 
          hover:bg-rose-600 hover:border-rose-600 transition shadow-md"
            >
              <Icons.User className="w-4 h-4" />
              <span className="text-sm">Sign in</span>
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition"
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
      <div
        className={`md:hidden mt-3 transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-xl">
          <nav className="flex flex-col gap-4">
            {["Home", "Services", "Portfolio", "Blog", "Contact"].map(
              (label, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-white/80 hover:text-white transition text-sm font-medium"
                >
                  {label}
                </a>
              )
            )}

            <Link
              href="/login"
              className="mt-2 flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-rose-600 text-white text-sm font-medium"
            >
              <Icons.User className="w-4 h-4" />
              Sign in
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
