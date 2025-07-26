"use client" // Added use client for framer-motion

import { CheckCircle } from "lucide-react"
import { motion } from "framer-motion" // Import motion

export default function PaymentInstructions() {
  return (
    <motion.section
      className="py-20 px-4 bg-black text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-12 text-neon-glow-red"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          How to Proceed
        </motion.h2>
        <div className="space-y-8">
          <motion.div
            className="flex items-start gap-4 bg-card p-6 rounded-lg border-2 border-neon-green shadow-neon-green/50"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <CheckCircle className="w-8 h-8 text-neon-green flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold text-neon-glow-green mb-2">Step 1: Contact Us</h3>
              <p className="text-lg text-gray-300">
                Reach out to us via WhatsApp or Telegram to confirm your order and receive the exact wallet address for
                your chosen cryptocurrency.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="flex items-start gap-4 bg-card p-6 rounded-lg border-2 border-neon-green shadow-neon-green/50"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <CheckCircle className="w-8 h-8 text-neon-green flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold text-neon-glow-green mb-2">Step 2: Make Payment</h3>
              <p className="text-lg text-gray-300">
                Transfer the agreed-upon amount to the provided wallet address. Double-check the address before
                confirming the transaction.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="flex items-start gap-4 bg-card p-6 rounded-lg border-2 border-neon-green shadow-neon-green/50"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <CheckCircle className="w-8 h-8 text-neon-green flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold text-neon-glow-green mb-2">Step 3: Confirmation & Delivery</h3>
              <p className="text-lg text-gray-300">
                Once your payment is confirmed (typically within minutes for crypto), we will process your order and
                arrange for secure delivery of your tools.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
