import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaLongArrowAltLeft } from "react-icons/fa";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((menuOpen) => !menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-gray-800 text-white fixed w-full z-50 shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-orange-500">Figorate</h1>

        <ul className="hidden md:flex space-x-10">
          <li className="hover:text-orange-500 cursor-pointer">Home</li>
          <li className="hover:text-orange-500 cursor-pointer">Marketplace</li>
          <li className="hover:text-orange-500 cursor-pointer">About</li>
          <li className="hover:text-orange-500 cursor-pointer">Contact</li>
        </ul>

        <button className="hidden md:block bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300  font-bold">
          BOOK A DEMO
        </button>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`fixed  md:hidden top-0 left-0 h-full w-[300px] bg-gray-900 text-white transform transition-transform duration-300 z-50 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end items-center px-5 py-4 border-b border-gray-700">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white text-2xl text-end"
          >
            <FaLongArrowAltLeft size={18} />
          </button>
        </div>

        <ul className="flex flex-col px-5 py-4 space-y-4 ">
          <li
            onClick={handleLinkClick}
            className="hover:text-orange-500 cursor-pointer py-3 border-b border-gray-700"
          >
            Home
          </li>
          <li
            onClick={handleLinkClick}
            className="hover:text-orange-500 cursor-pointer py-3 border-b border-gray-700"
          >
            Marketplace
          </li>
          <li
            onClick={handleLinkClick}
            className="hover:text-orange-500 cursor-pointer py-3 border-b border-gray-700"
          >
            About
          </li>
          <li
            onClick={handleLinkClick}
            className="hover:text-orange-500 cursor-pointer py-3 border-b border-gray-700"
          >
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
