"use client";
import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/20 backdrop-blur-lg shadow-md z-40">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-white hover: transition-all duration-300 transform hover:-translate-y-2   cursor-pointer"
        >
          Khalid Shaikh
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          <Link
            href="/"
            className="text-black hover:text-indigo-600 transition"
          >
            Home
          </Link>
          <Link
            href="/aboutme"
            className="text-black hover:text-indigo-600 transition"
          >
            About
          </Link>
          <Link
            href="/contactme"
            className="text-black hover:text-indigo-600 transition"
          >
            Contact
          </Link>
        </div>

        {/* Mobile hamburger menu */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/20 backdrop-blur-lg shadow-inner">
          <div className="flex flex-col items-center py-4 space-y-4">
            <Link
              href="/aboutme"
              className="text-gray-700 hover:text-indigo-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contactme"
              className="text-gray-700 hover:text-indigo-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
