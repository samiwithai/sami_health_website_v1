import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/hero.png";

export default function Banner() {
  return (
    <section className="relative min-h-screen pt-16 flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          type: "spring",
          stiffness: 50
        }}
      >
        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight mb-8 text-white">
          Innovating prenatal imaging with AI—for early detection, healthier pregnancies, and safer deliveries, one scan at a time.
        </h1>
        <a
          href="#about"
          className="inline-block px-8 py-4 text-base font-medium bg-white text-black hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg rounded-full"
        >
          Learn more about us
        </a>
      </motion.div>
    </section>
  );
}

