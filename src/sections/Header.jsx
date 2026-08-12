import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const MOBILE_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Our Work", href: "#work" },
  { label: "Our Team", href: "#team" },
  { label: "Newsroom", href: "#newsroom" },
  { label: "Contact Us", href: "#partner" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white text-black fixed top-0 left-0 w-full z-50 shadow-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4 md:px-6">
        <div className="flex items-center">
          <h1 className="text-2xl md:text-3xl font-serif font-semibold tracking-tight">
            SAMI<span className="text-gray-500">+</span>
          </h1>
        </div>

        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <a href="#about" className="hover:text-gray-600 transition-colors">
            About Us
          </a>
          <a href="#work" className="hover:text-gray-600 transition-colors">
            Our Work
          </a>
          <div className="relative group">
            <span className="flex items-center gap-1 cursor-pointer hover:text-gray-600 transition-colors">
              Resources
              <ChevronDown size={14} />
            </span>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 min-w-[160px] hidden group-hover:block z-10">
              <div className="bg-white border border-gray-200 py-1.5 flex flex-col shadow-sm">
                <a href="#team" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black whitespace-nowrap">
                  Our Team
                </a>
                <a href="#newsroom" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black whitespace-nowrap">
                  Newsroom
                </a>
                <a href="#partner" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black whitespace-nowrap">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
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
          {MOBILE_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg hover:text-gray-300 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
