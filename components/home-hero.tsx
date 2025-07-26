"use client" // Added use client for framer-motion

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion" // Import motion

export default function HomeHero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center px-4 py-20 bg-black overflow-hidden">
      {/* Background Glitch/Hacker Terminal Loop - Placeholder */}
      <div className="absolute inset-0 bg-[url('/bg2.jpg?height=1080&width=1920')] bg-cover bg-center opacity-10 animate-pulse" />
      <div className="scanline-overlay" /> {/* Added scanline overlay */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto space-y-6 px-4" /* Added horizontal padding for small screens */
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white text-neon-glow-red animate-flicker">
          ShadowSuite
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 text-neon-glow-green">
          Elite Cyber Tools. Real-Time Control. 100% Stealth.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Link href="/tool-catalog">
            <Button className="w-full sm:w-auto bg-neon-red text-white font-bold py-3 px-8 rounded-md text-lg uppercase tracking-wider transition-all duration-300 hover:shadow-neon-red hover:scale-105 border-2 border-neon-red">
              Explore Tool Catalog
            </Button>
          </Link>
          <Link href="https://wa.me/917266825793" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="w-full sm:w-auto border-2 border-neon-green text-neon-green font-bold py-3 px-8 rounded-md text-lg uppercase tracking-wider transition-all duration-300 hover:bg-neon-green/10 hover:shadow-neon-green hover:scale-105 bg-transparent"
            >
              Chat on WhatsApp
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
