"use client" // Added use client for framer-motion

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion" // Import motion

export default function CraxRatHero() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center text-center px-4 py-12 bg-black overflow-hidden">
      {/* Background Glitch/Hacker Lab Theme - can be a subtle overlay image or animation */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=720&width=1280')] bg-cover bg-center opacity-10 animate-pulse" />

      <motion.div
        className="relative z-10 max-w-3xl mx-auto space-y-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white text-neon-glow-red animate-flicker">
          CraxRat
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 text-neon-glow-green">
          {"The Most Advanced Android RAT in the Market"}
        </p>
        <div className="pt-6">
          <Link href="https://t.me/your_username_here" target="_blank" rel="noopener noreferrer">
            <Button className="bg-neon-red text-white font-bold py-3 px-8 rounded-md text-lg uppercase tracking-wider transition-all duration-300 hover:shadow-neon-red hover:scale-105 border-2 border-neon-red">
              Get Access via Telegram
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
