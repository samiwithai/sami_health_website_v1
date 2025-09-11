import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
        id="about"
        className="py-28 px-4 sm:px-8 lg:px-12 bg-white"
      >
        <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-black mb-12 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About
        </motion.h2>

        <motion.div
          className="text-lg leading-relaxed text-gray-800 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p>
            SAMI+ is transforming prenatal care in the Democratic Republic of Congo, where maternal and newborn mortality rates remain among the highest in the world—with <strong>547</strong> maternal deaths per <strong>100,000</strong> live births, <strong>28</strong> newborn deaths per <strong>1,000</strong> live births, and <strong>28</strong> stillbirths per <strong>1,000</strong> births.
          </p>
          <p>
            By training and deploying community health technicians equipped with portable, AI-powered ultrasound devices (POCUS), we are bridging critical diagnostic gaps, empowering providers with cutting-edge tools, strengthening local health systems, and bringing essential care directly to underserved rural communities. Our model enables early detection and timely clinical interventions—ensuring healthier pregnancies, safer births, and stronger beginnings, one scan at a time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
