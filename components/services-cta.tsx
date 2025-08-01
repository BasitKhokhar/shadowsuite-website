"use client" // Added use client for framer-motion

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion" // Import motion

export default function ServicesCTA() {
  return (
    <motion.section
      className="py-20 px-4 bg-black text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto text-center bg-card p-8 md:p-12 rounded-lg border-2 border-neon-red shadow-neon-red/50">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-6 text-neon-glow-red"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Ready to Elevate Your Operations?
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Discuss your specific requirements with our experts.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Link href="https://wa.me/919219967205" target="_blank" rel="noopener noreferrer">
            <Button className="bg-neon-red text-white font-bold py-3 px-10 rounded-md text-xl uppercase tracking-wider transition-all duration-300 hover:shadow-neon-red hover:scale-105 border-2 border-neon-red">
              Discuss Requirements on WhatsApp
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  )
}
