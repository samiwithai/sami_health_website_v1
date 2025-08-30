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
            SAMI+ is transforming prenatal care in the Democratic Republic of Congo.
          </p>
          <p>
            Maternal and newborn mortality rates remain among the highest in the world—especially in rural and remote regions. We address this by training and deploying community health technicians equipped with portable, AI-powered ultrasound devices (POCUS).
          </p>
          <p>
            By bridging critical diagnostic gaps, we empower clinics, strengthen local health systems, and bring essential care directly to underserved communities.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
