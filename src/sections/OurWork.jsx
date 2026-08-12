import React from "react";
import { motion } from "framer-motion";
import Eyebrow from "./shared/Eyebrow";

const TECH = [
  {
    title: "Electronic Health Record (EHR) system",
    desc: "With biometric fingerprint scanning, supporting patient follow-up, outcomes tracking, and the evidence base for scale.",
  },
  {
    title: "Solar power",
    desc: "Clinical operations that run independent of grid electricity, powering care in rural and remote areas without reliable infrastructure.",
  },
  {
    title: "Satellite connectivity",
    desc: "Dependable connectivity in rural and remote areas without reliable infrastructure, where local networks don't reach.",
  },
  {
    title: "Mobile money",
    desc: "A fee-for-service model priced with patients and providers, built for long-term sustainability.",
  },
];

export default function OurWork() {
  return (
    <section id="work" className="bg-gray-100 py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="max-w-xl mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Eyebrow>Our work</Eyebrow>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-gray-900">
            Clinic, technology, and community — together
          </h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Three parts of one service: a clinic that brings the scan to the patient, the technology that
            supports it, and the outreach that gets people through the door in the first place.
          </p>
        </motion.div>

        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-gray-500 mb-4">
          <span className="text-gray-900 font-medium">01</span>Clinic
        </div>
        <motion.div
          className="bg-gray-950 text-white p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="font-serif text-xl font-semibold">Mobile AI-Powered Ultrasound Services</h3>
          <p className="text-sm text-gray-300 mt-2 max-w-2xl leading-relaxed">
            A hybrid model — hub and spoke delivery — pairs a fixed clinical hub with mobile outreach
            teams, delivering diagnostic-quality ultrasound care at a price every woman can afford,
            widening reach so no woman is invisible, all the way to the last mile.
          </p>
        </motion.div>

        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-gray-500 mt-11 mb-4">
          <span className="text-gray-900 font-medium">02</span>Technology
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-300 border border-gray-300">
          {TECH.map((item, i) => (
            <motion.div
              key={item.title}
              className="bg-gray-100 p-6 min-h-[150px] flex flex-col gap-2.5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-semibold text-gray-900">{item.title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-gray-500 mt-11 mb-4">
          <span className="text-gray-900 font-medium">03</span>Community education
        </div>
        <motion.div
          className="bg-gray-100 border border-gray-300 p-7"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-gray-900">Community outreach and education</h3>
          <p className="text-sm text-gray-600 mt-2 max-w-2xl leading-relaxed">
            Trust-building in local language that shifts care-seeking behavior toward timely prenatal
            visits and routine ultrasound for every pregnancy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
