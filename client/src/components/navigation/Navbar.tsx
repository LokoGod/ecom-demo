import React, { useState } from "react";
import { Search, ShoppingCart, UserRound } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="block w-full px-6 py-8 md:py-4 mx-auto text-black bg-white border shadow-md border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200">
        <div className="grid grid-cols-3 gap-10">
          <div className="border hidden md:block">
            <ul className="flex flex-row gap-10">
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

          <div className="border">
            <a href="#" className="">
              <p className="text-center">Soratha</p>
            </a>
          </div>

          <div className="border hidden md:block">
            <ul className="flex flex-row justify-end gap-10">
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
                <a href="#" className="">
                  <Search />
                </a>
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
          <div className="flex items-center justify-end md:hidden">
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

        {/* Hamburger Menu Content */}
        {menuOpen && (
          <div className="md:hidden">
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
                <a href="#" className="">
                  <Search />
                </a>
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
