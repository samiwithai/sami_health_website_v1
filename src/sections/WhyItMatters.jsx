import React from "react";
import { motion } from "framer-motion";
import Eyebrow from "./shared/Eyebrow";

export default function WhyItMatters() {
  return (
    <section id="why" className="bg-white py-24 px-4 md:px-8">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Eyebrow center>Why it matters</Eyebrow>
        <p className="font-serif text-xl md:text-2xl leading-relaxed my-6 text-gray-900">
          Every day, at least 800 women die from preventable causes in pregnancy or childbirth. Across
          low- and middle-income countries, roughly half of all women receive no ultrasound at all through
          the full course of their pregnancy — and worldwide, two-thirds of pregnant women still lack
          access to one.
        </p>
        <p className="text-base text-gray-600 leading-relaxed mb-4">
          Ultrasound is a validated, low-cost way to detect complications early, enabling timely clinical
          intervention to prevent adverse outcomes. The barrier was never the technology — it's the
          infrastructure to deliver it all the way to the last mile, affordably and at scale.
        </p>
        <p className="text-base text-gray-600 leading-relaxed">
          SAMI+ — Santé Maternelle et Infantile — is a social venture bringing obstetric ultrasound
          services, not just the technology, to communities across sub-Saharan Africa that have never had
          reliable access to them: innovating prenatal ultrasound delivery to improve maternal and newborn
          survival and health outcomes. Closing the gap between what's preventable and what's actually
          prevented is why SAMI+ exists.
        </p>
      </motion.div>
    </section>
  );
}
