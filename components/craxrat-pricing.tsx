"use client" // Added use client for framer-motion

import { motion } from "framer-motion" // Import motion

export default function CraxRatPricing() {
  return (
    <motion.section
      className="py-20 px-4 bg-black text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto text-center max-w-2xl">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-12 text-neon-glow-red"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Pricing Table
        </motion.h2>
        <motion.div
          className="overflow-x-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <table className="w-full border-collapse border border-neon-green text-left">
            <thead>
              <tr className="bg-card border-b border-neon-green">
                <th className="p-4 text-neon-green text-lg">Plan</th>
                <th className="p-4 text-neon-green text-lg">Duration</th>
                <th className="p-4 text-neon-green text-lg">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-800">
                <td className="p-4 font-semibold">Basic</td>
                <td className="p-4">3 Months</td>
                <td className="p-4 text-neon-red">₹29,999 / $359</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-4 font-semibold">Pro</td>
                <td className="p-4">6 Months</td>
                <td className="p-4 text-neon-red">₹39,999 / $479</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Ultra</td>
                <td className="p-4">1 Year</td>
                <td className="p-4 text-neon-red">₹54,999 / $649</td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </div>
    </motion.section>
  )
}
