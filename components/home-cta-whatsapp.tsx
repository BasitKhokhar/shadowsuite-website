"use client" // Added use client for framer-motion

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MessageCircle } from "lucide-react"
import { motion } from "framer-motion" // Import motion

export default function HomeCTAWhatsApp() {
  return (
    <motion.section
      className="py-20 px-4 bg-black text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto text-center bg-card p-8 md:p-12 rounded-lg border-2 border-neon-green shadow-neon-green/50">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-6 text-neon-glow-red"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Get Started → Chat Now
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Connect with our team directly for inquiries, custom solutions, or support.
        </motion.p>
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Link href="https://wa.me/917266825793" target="_blank" rel="noopener noreferrer">
            <Button className="bg-neon-red text-white font-bold py-3 px-10 rounded-md text-xl uppercase tracking-wider transition-all duration-300 hover:shadow-neon-red hover:scale-105 border-2 border-neon-red flex items-center gap-2">
              <MessageCircle className="w-6 h-6" />
              Chat on WhatsApp
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  )
}
