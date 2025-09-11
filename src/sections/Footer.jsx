import React from "react";
import { Mail, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-center md:text-left">
        <div>
          <h4 className="text-xl font-bold font-heading mb-4">Contact</h4>
          <p className="flex items-center justify-center md:justify-start gap-3 text-sm mt-4">
            <Mail size={16} />
            <a href="mailto:info@samihealth.org" className="underline">
              info@samihealth.org
            </a>
          </p>
        </div>

        <div>
          <h4 className="text-xl font-bold font-heading mb-4">Quick Links</h4>
          <ul className="text-sm space-y-4 mt-4">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#approach" className="hover:underline">Our Approach</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold font-heading mb-4">Follow Us</h4>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="#" className="hover:text-gray-300"><Facebook size={20} /></a>
            <a href="#" className="hover:text-gray-300"><Instagram size={20} /></a>
            <a href="#" className="hover:text-gray-300"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-300">
        &copy; {new Date().getFullYear()} SAMI+. All rights reserved.
      </div>
    </footer>
  );
}
