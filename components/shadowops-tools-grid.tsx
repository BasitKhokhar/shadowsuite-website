"use client" // Added use client for framer-motion

import ToolCard from "@/components/tool-card"
import { tools } from "@/data/tools"
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

export default function ShadowOpsToolsGrid() {
  const eliteTools = tools.filter((tool) => tool.elite) // Filter for elite tools

  return (
    <motion.section
      className="py-20 px-4 bg-black text-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto">
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {eliteTools.map((tool, index) => (
            <motion.div key={tool.id} variants={itemVariants}>
              <ToolCard toolId={tool.id} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
