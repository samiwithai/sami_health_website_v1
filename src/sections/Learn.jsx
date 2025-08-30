import React from "react";
import { Users, Stethoscope, Handshake } from "lucide-react";
import { motion } from "framer-motion";

export default function OurApproach() {
  return (
    <section id="approach" className="py-28 px-4 md:px-20 bg-white">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 50
            }}
            viewport={{ once: true }}
          >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
            Our Approach
          </h2>
          <p className="text-lg text-gray-800 max-w-3xl mx-auto leading-relaxed mb-12">
            We combine training, technology, and partnerships:
          </p>
        </motion.div>

        {/* Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Users className="mx-auto text-black mb-6" size={48} />
            <h3 className="font-bold text-xl text-black mb-4">Train</h3>
            <p className="text-gray-800 leading-relaxed">
              Equip local community health technicians with the skills to provide quality imaging care.
            </p>
          </motion.div>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Stethoscope className="mx-auto text-black mb-6" size={48} />
            <h3 className="font-bold text-xl text-black mb-4">Deploy</h3>
            <p className="text-gray-800 leading-relaxed">
              Deliver handheld, AI-powered ultrasound devices to extend access in rural and remote clinics.
            </p>
          </motion.div>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Handshake className="mx-auto text-black mb-6" size={48} />
            <h3 className="font-bold text-xl text-black mb-4">Partner</h3>
            <p className="text-gray-800 leading-relaxed">
              Collaborate with local health facilities to build capacity and integrate sustainable solutions.
            </p>
          </motion.div>
        </div>

        {/* Closing Statement */}
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-800 leading-relaxed">
            Our scalable, data-driven model enables early risk detection and timely intervention—ensuring healthier pregnancies, safer births, and stronger beginnings, one scan at a time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
