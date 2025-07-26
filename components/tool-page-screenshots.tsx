"use client" // Added use client for framer-motion

import Image from "next/image"
import { motion } from "framer-motion" // Import motion

interface ToolPageScreenshotsProps {
  screenshots: string[]
}

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

export default function ToolPageScreenshots({ screenshots }: ToolPageScreenshotsProps) {
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
          Preview the Interface
        </motion.h2>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {screenshots.map((src, index) => (
            <motion.div
              key={index}
              className="relative aspect-video rounded-lg overflow-hidden border-2 border-neon-green shadow-neon-green/50"
              variants={itemVariants}
            >
              <Image
                src={src || "/placeholder.svg"}
                alt={`Tool Screenshot ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-xl font-bold">
                Screenshot {index + 1}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
