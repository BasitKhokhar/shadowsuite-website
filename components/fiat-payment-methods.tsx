"use client" // Added use client for framer-motion

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { IndianRupee, Banknote } from "lucide-react"
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

export default function FiatPaymentMethods() {
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
          Traditional Payments (India Only)
        </motion.h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div variants={itemVariants}>
            <Card className="bg-card border-2 border-neon-green hover:shadow-neon-green transition-all duration-300">
              <CardHeader className="flex flex-col items-center space-y-4">
                <IndianRupee className="w-12 h-12 text-neon-green" />
                <CardTitle className="text-2xl font-bold text-neon-glow-green">
                  UPI (Unified Payments Interface)
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 text-center">
                <p className="mb-2">Fast and secure payments directly from your bank account via UPI apps.</p>
                <div className="mt-4 p-4 bg-gray-900 rounded-md border border-gray-700 text-left">
                  <p className="text-neon-red font-semibold">
                    UPI ID: <span className="text-white">your_upi_id@bank</span>
                  </p>
                  <p className="text-sm text-gray-400 mt-2">
                    Please ensure you send the exact amount and include your order reference in the notes.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card className="bg-card border-2 border-neon-green hover:shadow-neon-green transition-all duration-300">
              <CardHeader className="flex flex-col items-center space-y-4">
                <Banknote className="w-12 h-12 text-neon-green" />
                <CardTitle className="text-2xl font-bold text-neon-glow-green">Bank Transfer</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 text-center">
                <p className="mb-2">Direct bank transfer for larger transactions or specific requirements.</p>
                <div className="mt-4 p-4 bg-gray-900 rounded-md border border-gray-700 text-left text-sm">
                  <p className="text-neon-red font-semibold">
                    Bank Name: <span className="text-white">Your Bank Name</span>
                  </p>
                  <p className="text-neon-red font-semibold">
                    Account Holder: <span className="text-white">Your Name/Company</span>
                  </p>
                  <p className="text-neon-red font-semibold">
                    Account Number: <span className="text-white">XXXXXXXXXXXXXX</span>
                  </p>
                  <p className="text-neon-red font-semibold">
                    IFSC Code: <span className="text-white">BANK000XXXX</span>
                  </p>
                  <p className="text-gray-400 mt-2">
                    Please contact us before initiating a bank transfer to confirm details and receive a unique
                    reference.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
        <motion.p
          className="max-w-3xl mx-auto text-lg text-gray-400 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          For UPI and Bank Transfers, these options are primarily available for customers within India. Please contact
          us to confirm details before making any payment.
        </motion.p>
      </div>
    </motion.section>
  )
}
