"use client" // Added use client for framer-motion

import { motion } from "framer-motion" // Import motion

export default function PaymentHero() {
  return (
    <section className="relative h-[50vh] flex items-center justify-center text-center px-4 py-20 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=720&width=1280')] bg-cover bg-center opacity-10 animate-pulse" />
      <div className="scanline-overlay" />
      <motion.div
        className="relative z-10 max-w-3xl mx-auto space-y-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white text-neon-glow-red animate-flicker">
          Secure Payments – Crypto Accepted
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 text-neon-glow-green">
          Your privacy and security are our priority.
        </p>
      </motion.div>
    </section>
  )
}
