import React from "react";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 md:px-20 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-black mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contact Us
        </motion.h2>

        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-800 leading-relaxed">
            Interested in partnering, supporting, or learning more about SAMI+?
          </p>
          
          <div className="flex items-center justify-center gap-3 text-lg">
            <Mail className="text-black" size={24} />
            <span className="text-gray-800">Email:</span>
            <a 
              href="mailto:info@samihealth.org" 
              className="text-black font-medium hover:underline"
            >
              info@samihealth.org
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
