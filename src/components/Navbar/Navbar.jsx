import React, { useState } from "react";
import { Link } from "react-router";
import logo from "../../assets/images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 text-white shadow-md"
      style={{
        backgroundImage: "url('/navbarBg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0,0,0,0.6)", // dark overlay for readability
      }}
    >
      <nav className="flex w-[90%] mx-auto justify-between items-center  text-white">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Restaurant Logo"
              className="w-[80px] h-[70px] object-contain"
            />
            <h3 className=" text-xl text-amber-500">Chef Cuisine Cater</h3>
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 font-semibold">
          <li>
            <Link
              to="/"
              className="hover:text-amber-100 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-amber-100 transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/menu"
              className="hover:text-amber-100 transition duration-300"
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-amber-100 transition duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Order Now Button */}
        <div className="hidden md:block">
          <a
            href="https://wa.me/923002118767" // your WhatsApp number
            className="bg-white text-amber-600 px-5 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Order via WhatsApp
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div
          className="md:hidden text-3xl cursor-pointer text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-amber-500 to-yellow-600 text-white flex flex-col items-center space-y-4 py-6 shadow-lg animate-fadeIn">
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="/menu" onClick={() => setIsOpen(false)}>
            Menu
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          <a
            href="https://wa.me/923002118767" // your WhatsApp number
            className="bg-white text-amber-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Order via WhatsApp
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
