import React, { useState } from "react";
import { Search, ShoppingCart, UserRound } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <nav className="block w-full px-6 py-8 md:py-5 mx-auto text-black bg-navbar border shadow-md border-navbar/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 font-poppins">
        <div className="grid grid-cols-3 gap-10 mx-4 mt-2">
          <div className="hidden lg:block">
            <ul className="flex flex-row gap-10 text-gray-700 font-semibold">
              <li>
                <a href="#" className="">
                  <p className="text-center">MEN</p>
                </a>
              </li>
              <li>
                <a href="#" className="">
                  <p className="text-center">WOMEN</p>
                </a>
              </li>
              <li>
                <a href="#" className="">
                  <p className="text-center">KIDS</p>
                </a>
              </li>
              <li>
                <a href="#" className="">
                  <p className="text-center">SALE</p>
                </a>
              </li>
            </ul>
          </div>

          <div className="">
            <a href="#" className="">
              <p className="text-center font-Sarina text-xl text-blue-950">Soratha</p>
            </a>
          </div>

          <div className="hidden lg:block">
            <ul className="flex flex-row justify-end gap-10 text-gray-700 font-semibold">
              <li>
                <a href="#" className="">
                  <p className="text-center">RERUN</p>
                </a>
              </li>
              <li>
                <a href="#" className="">
                  <p className="text-center">STORES</p>
                </a>
              </li>
              <li>
                <button
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="flex items-center"
                >
                  <Search />
                </button>
              </li>
              <li>
                <a href="#" className="">
                  <ShoppingCart />
                </a>
              </li>
              <li>
                <a href="#" className="">
                  <UserRound />
                </a>
              </li>
            </ul>
          </div>

          {/* Hamburger Menu Icon */}
          <div className="flex items-end mx-52 justify-end lg:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Search Bar Input Area */}
        <div
          className={`flex justify-center mt-0 transition-all duration-500 ease-in-out ${
             searchOpen ? 'max-h-16 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
>
  {searchOpen && (
    <input
      type="text"
      className="w-full lg:w-1/3 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
      placeholder="Search..."
    />
  )}
</div>

        {/* Hamburger Menu Content */}
        {menuOpen && (
          <div className="lg:hidden">
            <ul className="flex flex-col gap-4 mt-4">
              <li>
                <a href="#" className="">
                  <p className="text-center">MEN</p>
                </a>
              </li>
              <li>
                <a href="#" className="">
                  <p className="text-center">WOMEN</p>
                </a>
              </li>
              <li>
                <a href="#" className="">
                  <p className="text-center">KIDS</p>
                </a>
              </li>
              <li>
                <a href="#" className="">
                  <p className="text-center">SALE</p>
                </a>
              </li>
              <li>
                <a href="#" className="">
                  <p className="text-center">RERUN</p>
                </a>
              </li>
              <li>
                <a href="#" className="">
                  <p className="text-center">STORES</p>
                </a>
              </li>
              <li>
                <button
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="flex items-center"
                >
                  <Search />
                </button>
              </li>
              <li>
                <a href="#" className="">
                  <ShoppingCart />
                </a>
              </li>
              <li>
                <a href="#" className="">
                  <UserRound />
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
