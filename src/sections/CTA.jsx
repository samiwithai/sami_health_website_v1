import React from "react";
import { motion } from "framer-motion";
import Eyebrow from "./shared/Eyebrow";

export default function CTA() {
  return (
    <section id="partner" className="bg-gray-200 text-gray-900 text-center py-24 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Eyebrow center>Partner with us</Eyebrow>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold max-w-xl mx-auto my-5">
          Help us bring ultrasound care to the last mile
        </h2>
        <a
          href="mailto:info@samihealth.org"
          className="inline-block border border-gray-900 text-gray-900 px-8 py-3.5 text-sm font-medium hover:bg-gray-900 hover:text-white transition-colors"
        >
          Get in touch
        </a>
      </motion.div>
    </section>
  );
}
