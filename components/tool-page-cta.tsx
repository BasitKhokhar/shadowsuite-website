"use client" // Added use client for framer-motion

import { Button } from "@/components/ui/button"
import { MessageCircle, CreditCard } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion" // Import motion

export default function ToolPageCTA() {
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
          Get Access Now
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Choose your preferred method to proceed with your purchase or get in touch.
        </motion.p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10">
          <Link href="/new-payment">
            {" "}
            {/* Link to the new payment page */}
            <Button className="bg-neon-red text-white font-bold py-3 px-8 rounded-md text-lg uppercase tracking-wider transition-all duration-300 hover:shadow-neon-red hover:scale-105 border-2 border-neon-red flex items-center gap-2">
              <CreditCard className="w-6 h-6" />
              Make Payment
            </Button>
          </Link>
           <Link href="https://wa.me/919219967205" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="border-2 border-neon-green text-neon-green font-bold py-3 px-8 rounded-md text-lg uppercase tracking-wider transition-all duration-300 hover:bg-neon-green/10 hover:shadow-neon-green hover:scale-105 bg-transparent flex items-center gap-2"
            >
              <MessageCircle className="w-6 h-6" />
              Chat on WhatsApp
            </Button>
          </Link>
          {/* <Link href="https://wa.me/917266825793" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="border-2 border-neon-green text-neon-green font-bold py-3 px-8 rounded-md text-lg uppercase tracking-wider transition-all duration-300 hover:bg-neon-green/10 hover:shadow-neon-green hover:scale-105 bg-transparent flex items-center gap-2"
            >
              <MessageCircle className="w-6 h-6" />
              Chat on WhatsApp
            </Button>
          </Link> */}
        </div>
        <motion.div
          className="text-gray-400 text-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="mb-2">Accepted Payment Methods:</p>
          <p className="text-neon-green font-semibold">BTC / USDT / ETH / UPI / Bank Transfer / PayPal</p>
        </motion.div>
      </div>
    </motion.section>
  )
}
