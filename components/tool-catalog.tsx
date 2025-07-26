"use client" // Added use client for framer-motion

import ToolCard from "@/components/tool-card"
import { motion } from "framer-motion" // Import motion
import { tools } from "@/data/tools" // Import tools data

export default function ToolCatalog() {
  return (
    <motion.section
      id="tool-catalog"
      className="py-20 px-4 bg-black text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center mb-12 text-neon-glow-red"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Tool Catalog
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {tools.map((tool) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <ToolCard toolId={tool.id} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
