import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((isMobileMenuOpen) => !isMobileMenuOpen);
  };

  return (
    <nav className="px-2 py-6 bg-gray-300 drop-shadow-lg flex flex-row justify-between sticky top-0 items-center">
      <div className="flex flex-row space-x-8 items-center">
        <a href="/" className="text-black font-bold text-2xl sm:text-3xl">
          Brand.
        </a>
        <ul className="hidden flex-row space-x-4 md:flex">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Support</a>
          </li>
          <li>
            <a href="/">Platform</a>
          </li>
          <li>
            <a href="/">Pricing</a>
          </li>
        </ul>
      </div>
      <div className="hidden flex-row space-x-2 md:flex">
        <button className="px-4 py-2 text-black hover:bg-purple-400 hover:text-white">
          Sign in
        </button>
        <button className="px-4 py-2 text-white bg-purple-400 hover:bg-white hover:text-purple-400 rounded-lg">
          Sign up
        </button>
      </div>

      {/* Hamburger and close icon */}
      {!isMobileMenuOpen && (
        <div className="md:hidden">
          <AiOutlineMenu
            className="text-xl cursor-pointer"
            onClick={toggleMobileMenu}
          />
        </div>
      )}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <AiOutlineClose
            className="text-xl cursor-pointer"
            onClick={toggleMobileMenu}
          />
        </div>
      )}

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed left-0 top-16 my-4 w-[100%] bg-gray-300 md:hidden">
          <div className="mx-4 flex flex-col">
            <a href="/" className="px-2 py-4 border-b border-gray-600">
              Home
            </a>

            <a href="/" className="px-2 py-4 border-b border-gray-600">
              About
            </a>

            <a href="/" className="px-2 py-4 border-b border-gray-600">
              Support
            </a>

            <a href="/" className="px-2 py-4 border-b border-gray-600">
              Platform
            </a>

            <a href="/" className="px-2 py-4 border-b border-gray-600">
              Pricing
            </a>

            <button className="mt-4 text-purple-600 border border-purple-600 text-center px-6 py-3 rounded-md">
              Sign in
            </button>
            <button className="mt-4 text-white bg-purple-600 text-center px-6 py-3 rounded-md">
              Sign up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
