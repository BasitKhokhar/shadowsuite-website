"use client" // Added use client for framer-motion

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bitcoin, DollarSign, Shield } from "lucide-react"
import { motion } from "framer-motion" // Import motion

export default function PaymentMethods() {
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
          Accepted Payment Methods
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Card className="bg-card border-2 border-neon-green hover:shadow-neon-green transition-all duration-300">
              <CardHeader className="flex flex-col items-center space-y-4">
                <Bitcoin className="w-12 h-12 text-neon-green" />
                <CardTitle className="text-2xl font-bold text-neon-glow-green">Bitcoin (BTC)</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 text-center">
                The most secure and widely accepted cryptocurrency for anonymous transactions.
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Card className="bg-card border-2 border-neon-green hover:shadow-neon-green transition-all duration-300">
              <CardHeader className="flex flex-col items-center space-y-4">
                <DollarSign className="w-12 h-12 text-neon-green" />
                <CardTitle className="text-2xl font-bold text-neon-glow-green">USDT (Tether)</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 text-center">
                Stablecoin for fast and reliable transactions, pegged to the US Dollar.
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Card className="bg-card border-2 border-neon-green hover:shadow-neon-green transition-all duration-300">
              <CardHeader className="flex flex-col items-center space-y-4">
                <Shield className="w-12 h-12 text-neon-green" />
                <CardTitle className="text-2xl font-bold text-neon-glow-green">Monero (XMR)</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 text-center">
                Enhanced privacy and untraceability for maximum discretion.
              </CardContent>
            </Card>
          </motion.div>
        </div>
        <motion.p
          className="max-w-3xl mx-auto text-lg text-gray-400 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          For all transactions, we prioritize your security and anonymity. We only accept cryptocurrency payments to
          ensure a discreet and untraceable process.
        </motion.p>
      </div>
    </motion.section>
  )
}
