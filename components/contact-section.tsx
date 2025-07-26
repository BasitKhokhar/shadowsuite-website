"use client" // Added use client for framer-motion

import { TextIcon as Telegram, Mail, HardDrive } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion" // Import motion

export default function ContactSection() {
  return (
    <motion.section
      className="py-20 px-4 bg-black text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-12 text-neon-glow-red"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Request Access Privately
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
          <motion.div
            className="flex flex-col items-center space-y-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Telegram className="w-12 h-12 text-neon-green" />
            <p className="text-xl font-semibold text-neon-glow-green">Telegram</p>
            <Link
              href="https://t.me/your_username_here"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-neon-red transition-colors"
            >
              @your_username_here
            </Link>
          </motion.div>
          <motion.div
            className="flex flex-col items-center space-y-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Mail className="w-12 h-12 text-neon-green" />
            <p className="text-xl font-semibold text-neon-glow-green">ProtonMail</p>
            <Link href="mailto:yourmail@proton.me" className="text-gray-300 hover:text-neon-red transition-colors">
              yourmail@proton.me
            </Link>
          </motion.div>
          <motion.div
            className="flex flex-col items-center space-y-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <HardDrive className="w-12 h-12 text-neon-green" />
            <p className="text-xl font-semibold text-neon-glow-green">Secure ZIP Delivery</p>
            <span className="text-gray-300">Available upon request</span>
          </motion.div>
        </div>
        <motion.div
          className="max-w-3xl mx-auto p-6 rounded-lg border-2 border-neon-red bg-card text-gray-400 text-sm italic leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p>
            {
              "ShadowSuite is intended strictly for cybersecurity labs, simulations, red team research, and legal penetration testing. Unauthorized use is illegal and punishable."
            }
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}
