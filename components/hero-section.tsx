"use client" // Added use client for framer-motion

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion" // Import motion

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center px-4 py-12 bg-black overflow-hidden">
      {/* Background Glitch Effect (Optional, can be a subtle overlay image or animation) */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-10"
        autoPlay
        loop
        muted
        playsInline
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cinematic%20slow-motion%20footage%20of%20a%20high-tech%20cyber%20control%20room%20glowing%20with%20neon%20red%20and%20green%20lights%2C%20multiple%20holographic%20screens%20floating%2C%20code%20running%20on%20black%20monitors%2C%20deep%20shadows%2C%20glowing%20wires%2C%20flickerin-zY9sTiiH1XmubkovOlgPF2YlPN1TP8.mp4"
      />

      <motion.div
        className="relative z-10 max-w-4xl mx-auto space-y-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white text-neon-glow-red animate-flicker">
          ShadowSuite – Elite Remote Access Toolkit
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 text-neon-glow-green">
          13 Advanced Android & PC RATs. Real-Time Control. Undetectable Stealth. Built for Cyber Simulation & Research.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Link href="https://t.me/your_username_here" target="_blank" rel="noopener noreferrer">
            <Button className="bg-neon-red text-white font-bold py-3 px-8 rounded-md text-lg uppercase tracking-wider transition-all duration-300 hover:shadow-neon-red hover:scale-105 border-2 border-neon-red">
              Request Access via Telegram
            </Button>
          </Link>
          <Link href="#tool-catalog">
            <Button
              variant="outline"
              className="border-2 border-neon-green text-neon-green font-bold py-3 px-8 rounded-md text-lg uppercase tracking-wider transition-all duration-300 hover:bg-neon-green/10 hover:shadow-neon-green hover:scale-105 bg-transparent"
            >
              Explore Tool Catalog
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
