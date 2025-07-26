"use client" // Added use client for framer-motion

import { motion } from "framer-motion" // Import motion

export default function CraxRatOverview() {
  return (
    <motion.section
      className="py-20 px-4 bg-black text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto text-center max-w-4xl">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-8 text-neon-glow-red"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Overview
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-300 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          CraxRat stands as an elite-level Android Remote Access Trojan, meticulously engineered for advanced ethical
          hacking and red team simulations. It offers unparalleled capabilities for real-time control and data
          exfiltration from Android devices. Designed with 100% FUD (Fully Undetectable) stealth, CraxRat ensures your
          operations remain covert. Experience seamless real-time screen streaming, precise GPS tracking, comprehensive
          file manager access, and much more, all while maintaining complete stealth and control.
        </motion.p>
      </div>
    </motion.section>
  )
}
