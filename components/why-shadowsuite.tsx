"use client" // Added use client for framer-motion

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShieldCheck, EyeOff, Lock } from "lucide-react"
import { motion } from "framer-motion" // Import motion

export default function WhyShadowSuite() {
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
          Why ShadowSuite?
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
                <ShieldCheck className="w-12 h-12 text-neon-green" />
                <CardTitle className="text-2xl font-bold text-neon-glow-green">Military-Grade Tools</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 text-center">
                Engineered with precision for robust performance in critical cyber operations.
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
                <EyeOff className="w-12 h-12 text-neon-green" />
                <CardTitle className="text-2xl font-bold text-neon-glow-green">100% FUD (Fully Undetectable)</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 text-center">
                Our tools are designed to bypass advanced security systems, ensuring complete stealth.
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
                <Lock className="w-12 h-12 text-neon-green" />
                <CardTitle className="text-2xl font-bold text-neon-glow-green">
                  Live Panel Access with Encryption
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 text-center">
                Secure, real-time control panels with end-to-end encryption for your peace of mind.
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
          ShadowSuite is meticulously designed for red teamers, cybersecurity laboratories, and ethical hackers. Our
          toolkit provides unparalleled capabilities for advanced cyber simulations, penetration testing, and in-depth
          security research, empowering professionals to push the boundaries of digital defense.
        </motion.p>
      </div>
    </motion.section>
  )
}
