import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Or Heroicons if preferred

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "About", "Projects", "Contact"];

  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-14 flex items-center justify-between">
        {/* Logo */}
        <div className="text-lg font-medium text-black">
          <img src="/portfolio_favicon.png" alt="" width="25px"/>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 text-xs font-extralight text-black">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-gray-700 transition"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-black">
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 bg-white border-t border-gray-200">
          <div className="flex flex-col space-y-3 text-xs font-extralight text-black">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="hover:text-gray-700"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
