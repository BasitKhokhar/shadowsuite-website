"use client" // Added use client for framer-motion

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bitcoin, DollarSign, EclipseIcon as Ethereum } from "lucide-react" // Added Ethereum icon
import { motion } from "framer-motion" // Import motion

// Add these variants at the top of the component or in a shared utility file if many components use them
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
}

export default function CryptoPaymentMethods() {
  return (
    <motion.section
      className="py-20 px-4 bg-black text-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
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
          Cryptocurrency Payments
        </motion.h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div variants={itemVariants}>
            <Card className="bg-card border-2 border-neon-green hover:shadow-neon-green transition-all duration-300">
              <CardHeader className="flex flex-col items-center space-y-4">
                <Bitcoin className="w-12 h-12 text-neon-green" />
                <CardTitle className="text-2xl font-bold text-neon-glow-green">Bitcoin (BTC)</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 text-center">
                The most secure and widely accepted cryptocurrency for anonymous transactions.
                <p className="mt-4 text-neon-red font-semibold">Contact us for wallet address.</p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card className="bg-card border-2 border-neon-green hover:shadow-neon-green transition-all duration-300">
              <CardHeader className="flex flex-col items-center space-y-4">
                <DollarSign className="w-12 h-12 text-neon-green" />
                <CardTitle className="text-2xl font-bold text-neon-glow-green">USDT (Tether)</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 text-center">
                Stablecoin for fast and reliable transactions, pegged to the US Dollar.
                <p className="mt-4 text-neon-red font-semibold">Contact us for wallet address.</p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card className="bg-card border-2 border-neon-green hover:shadow-neon-green transition-all duration-300">
              <CardHeader className="flex flex-col items-center space-y-4">
                <Ethereum className="w-12 h-12 text-neon-green" />
                <CardTitle className="text-2xl font-bold text-neon-glow-green">Ethereum (ETH)</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 text-center">
                A leading cryptocurrency for decentralized applications and secure transfers.
                <p className="mt-4 text-neon-red font-semibold">Contact us for wallet address.</p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
        <motion.p
          className="max-w-3xl mx-auto text-lg text-gray-400 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          For all cryptocurrency transactions, we prioritize your security and anonymity. Please contact us directly to
          receive the current wallet address for your chosen crypto.
        </motion.p>
      </div>
    </motion.section>
  )
}
