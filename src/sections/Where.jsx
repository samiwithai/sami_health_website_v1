import React from "react";
import { motion } from "framer-motion";
import Eyebrow from "./shared/Eyebrow";

const STATS = [
  { stat: "7%+", label: "of global maternal deaths occur in the DRC" },
  { stat: "4.5M", label: "annual births in the DRC" },
  { stat: "547", label: "maternal deaths per 100,000 live births in the DRC" },
  { stat: "<1%", label: "of women in remote provinces access any prenatal diagnostic service" },
];

export default function Where() {
  return (
    <section id="where" className="bg-white py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="max-w-xl mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Eyebrow>Where</Eyebrow>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-gray-900">
            Starting where the need is sharpest
          </h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            An estimated 40 million births occur across sub-Saharan Africa every year with little
            diagnostic infrastructure outside major cities. The pilot is based in the Democratic Republic
            of Congo.
          </p>
        </motion.div>

        <div className="flex items-center flex-wrap font-mono text-xs mb-10">
          <div className="border border-gray-300 px-4 py-2 text-gray-600">Sub-Saharan Africa</div>
          <div className="px-2.5 text-gray-400">→</div>
          <div className="border border-gray-900 bg-gray-900 text-white font-medium px-4 py-2">
            Congo (DRC)
          </div>
        </div>

        <div className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-4">
          DRC — the pilot country
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-300 border border-gray-300 mb-9">
          {STATS.map((item, i) => (
            <motion.div
              key={item.label}
              className="bg-gray-100 p-6 text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="font-serif text-3xl font-semibold text-gray-900 mb-1">{item.stat}</div>
              <span className="text-xs text-gray-600">{item.label}</span>
            </motion.div>
          ))}
        </div>

        <p className="font-serif italic text-lg text-gray-900 border-l-2 border-gray-400 pl-5 max-w-2xl">
          The technology exists. The infrastructure does not. This is not a medical failure — it's a
          diagnostic access failure.
        </p>
      </div>
    </section>
  );
}
