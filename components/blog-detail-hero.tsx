"use client" // Added use client for framer-motion

import { motion } from "framer-motion" // Import motion

interface BlogDetailHeroProps {
  title: string
  date: string
  author: string
}

export default function BlogDetailHero({ title, date, author }: BlogDetailHeroProps) {
  return (
    <section className="relative h-[40vh] flex items-center justify-center text-center px-4 py-20 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[url('/blogs.jpg?height=720&width=1280')] bg-cover bg-center opacity-10 animate-pulse" />
      <div className="scanline-overlay" /> {/* Added scanline overlay */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto space-y-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white text-neon-glow-red animate-flicker">
          {title}
        </h1>
        <p className="text-md md:text-lg text-gray-300 text-neon-glow-green">
          By {author} on {date}
        </p>
      </motion.div>
    </section>
  )
}
