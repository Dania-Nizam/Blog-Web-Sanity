"use client"
import Link from "next/link";
import { useState } from "react";

import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between py-4 px-6 border-b-2 border-dark sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10">
      {/* Logo */}
<Link href="/" className="flex items-center gap-2">
  {/* Icon or Logo Image */}
  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 flex items-center justify-center">
    <span className="text-white text-xl font-extrabold">D</span>
  </div>
  {/* Text Logo */}
  <span className="text-2xl sm:text-3xl font-bold text-dark dark:text-light">
    DN<span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">Web</span>
  </span>
</Link>


      {/* Hamburger Icon */}
      <button
        className="md:hidden text-dark dark:text-light  hover:text-yellow-500 focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Navigation"
      >
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Navigation Links */}
      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:flex md:items-center md:gap-x-10 absolute md:static top-16 left-0 w-full md:w-auto bg-background md:bg-transparent z-20 md:pt-0 pt-4 pb-4 md:pb-0`}
      >
        <div className="flex flex-col md:flex-row items-center  md:gap-x-7">
          <Link href="/" className="block py-2 md:py-0 hover:text-yellow-500">
            Home
          </Link>
          <Link href="/about" className="block py-2 md:py-0 hover:text-yellow-500">
            About
          </Link>
          <Link href="/blog1" className="block py-2 md:py-0 hover:text-yellow-500">
            Blog
          </Link>
          <Link href="/contact" className="block py-2 md:py-0 hover:text-yellow-500">
            Contact
          </Link>
        </div>
      </nav>

      {/* Theme Toggle */}
      <ThemeToggle />
    </header>
  );
}
