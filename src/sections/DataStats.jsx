import React from "react";
import { motion } from "framer-motion";
import Eyebrow from "./shared/Eyebrow";

const CARDS = [
  {
    eyebrow: "Maternal mortality",
    stat: "182,000+",
    lines: [
      "maternal deaths every year across sub-Saharan Africa — roughly 70% of the world's total maternal deaths",
      "Approximately 450 deaths per 100,000 live births, among the highest maternal mortality ratios of any region",
    ],
    causeLabel: "Main preventable causes, detectable via ultrasound",
    cause:
      "Hypertensive disorders of pregnancy (preeclampsia), placenta previa, ectopic pregnancy, and breech presentation.",
  },
  {
    eyebrow: "Newborn mortality",
    stat: "1M+",
    lines: [
      "newborn deaths (within the first 28 days of life) every year across the region",
      "26–27 deaths per 1,000 live births — the highest newborn mortality rate of any region in the world",
    ],
    causeLabel: "Main preventable causes, detectable via ultrasound",
    cause: "Preterm birth, fetal growth restriction, malpresentation, and congenital anomalies.",
  },
];

export default function DataStats() {
  return (
    <section id="about" className="bg-gray-950 text-white py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {CARDS.map((card, i) => (
          <motion.div
            key={card.eyebrow}
            className="bg-white/5 border border-white/15 p-8 md:p-9"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            <Eyebrow light>{card.eyebrow}</Eyebrow>
            <div className="font-serif text-4xl font-semibold my-3">{card.stat}</div>
            {card.lines.map((line) => (
              <p key={line} className="text-sm text-gray-300 mb-2 leading-relaxed">
                {line}
              </p>
            ))}
            <div className="mt-5 bg-white/5 border-l-2 border-gray-400 px-4 py-3.5">
              <div className="font-mono text-[10.5px] uppercase tracking-wider text-gray-400 mb-1.5">
                {card.causeLabel}
              </div>
              <p className="text-xs text-gray-200 leading-relaxed">{card.cause}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
