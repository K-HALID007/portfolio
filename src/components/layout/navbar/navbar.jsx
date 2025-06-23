"use client";
import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full glass-dark shadow-lg z-[100] border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg sm:text-xl lg:text-2xl font-bold text-gradient hover-lift transition-all duration-300 cursor-pointer"
        >
          <span className="hidden sm:inline">Khalid Shaikh</span>
          <span className="sm:hidden">KS</span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6 lg:space-x-8">
          <Link
            href="/"
            className="relative text-white hover:text-purple-400 transition-all duration-300 group text-sm lg:text-base"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/aboutme"
            className="relative text-white hover:text-purple-400 transition-all duration-300 group text-sm lg:text-base"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/contactme"
            className="relative text-white hover:text-purple-400 transition-all duration-300 group text-sm lg:text-base"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Mobile hamburger menu */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white focus:outline-none hover:text-purple-400 transition-colors duration-300 p-2"
          aria-label="Toggle Menu"
        >
          <svg
            className={`w-5 h-5 sm:w-6 sm:h-6 transform transition-transform duration-300 ${
              isMenuOpen ? 'rotate-90' : ''
            }`}
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
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[90] md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu */}
          <div className="md:hidden glass-dark border-t border-purple-500/20 animate-slideInLeft relative z-[95]">
            <div className="flex flex-col items-center py-4 sm:py-6 space-y-4 sm:space-y-6 px-4">
              <Link
                href="/"
                className="text-white hover:text-purple-400 transition-all duration-300 text-base sm:text-lg py-2 px-4 rounded-lg hover:bg-purple-500/10 w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/aboutme"
                className="text-white hover:text-purple-400 transition-all duration-300 text-base sm:text-lg py-2 px-4 rounded-lg hover:bg-purple-500/10 w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contactme"
                className="text-white hover:text-purple-400 transition-all duration-300 text-base sm:text-lg py-2 px-4 rounded-lg hover:bg-purple-500/10 w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Header;