"use client" // Added use client for framer-motion

import { motion } from "framer-motion" // Import motion

export default function HomeAbout() {
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
          About ShadowSuite
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          ShadowSuite is a premier provider of advanced Remote Access Tools (RATs), meticulously engineered for
          cybersecurity professionals, red teamers, and ethical hackers. Our arsenal is designed to empower you with
          unparalleled control and stealth in complex cyber simulations and research environments. We focus on
          delivering cutting-edge solutions that are both powerful and undetectable.
        </motion.p>
        <motion.p
          className="text-lg md:text-xl text-gray-300 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Our tools are developed with a deep understanding of modern security protocols and evasion techniques,
          ensuring maximum effectiveness in real-world scenarios. Whether you're conducting penetration tests,
          vulnerability assessments, or advanced cyber defense research, ShadowSuite provides the elite-level
          capabilities you need to stay ahead.
        </motion.p>
      </div>
    </motion.section>
  )
}
