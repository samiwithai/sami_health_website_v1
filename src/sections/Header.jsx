import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white text-black fixed top-0 left-0 w-full z-50 shadow-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4 md:px-6">
        <div className="flex items-center">
          <h1 className="text-2xl md:text-3xl font-bold font-sans tracking-tight">
            SAMI+
          </h1>
        </div>

        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#about" className="hover:text-gray-600 transition-colors">
            About
          </a>
          <a href="#approach" className="hover:text-gray-600 transition-colors">
            Our Approach
          </a>
          <a href="#contact" className="hover:text-gray-600 transition-colors">
            Contact Us
          </a>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-72 bg-black shadow-xl z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white border border-gray-400 p-1 rounded-full hover:bg-gray-800 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col gap-6 px-8 py-6 text-white">
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="text-lg hover:text-gray-300 transition-colors"
          >
            About
          </a>
          <a
            href="#approach"
            onClick={() => setIsOpen(false)}
            className="text-lg hover:text-gray-300 transition-colors"
          >
            Our Approach
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="text-lg hover:text-gray-300 transition-colors"
          >
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
}
