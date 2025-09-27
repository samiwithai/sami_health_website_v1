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
            In the Democratic Republic of Congo (DRC), at least <strong>four</strong> women die every hour from
            complications related to pregnancy or childbirth, and <strong>23</strong> newborns die each day due to birth-
            related complications. Despite <strong>80%</strong> of births occurring in health facilities with trained
            attendants, the DRC has the <strong>seventh-highest</strong> neonatal mortality rate globally and the <strong>third-highest</strong> in Africa.
          </p>
          <p>
            By training and deploying community health technicians equipped with portable, AI-powered point-of-care ultrasound (POCUS), <strong>SAMI+</strong> is bridging critical diagnostic gaps, empowering providers with cutting-edge tools, strengthening local health systems, and bringing essential care directly to underserved rural communities. Our model enables early detection and timely clinical interventions—ensuring healthier pregnancies, safer births, and stronger beginnings, one scan at a time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
