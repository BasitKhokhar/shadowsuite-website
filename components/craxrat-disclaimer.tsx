"use client" // Added use client for framer-motion

import { motion } from "framer-motion" // Import motion

export default function CraxRatDisclaimer() {
  return (
    <motion.section
      className="py-10 px-4 bg-black text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto text-center max-w-3xl">
        <div className="p-6 rounded-lg border-2 border-neon-red bg-card text-gray-400 text-sm italic leading-relaxed">
          <p>
            {
              "For cybersecurity labs, red teamers, and research only. Unauthorized use is prohibited under IT Act & Global Cybercrime Laws."
            }
          </p>
        </div>
      </div>
    </motion.section>
  )
}
