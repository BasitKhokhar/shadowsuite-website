"use client" // Added use client for framer-motion

import { motion } from "framer-motion" // Import motion

interface BlogDetailContentProps {
  content: string
}

export default function BlogDetailContent({ content }: BlogDetailContentProps) {
  return (
    <motion.section
      className="py-20 px-4 bg-black text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto max-w-3xl prose prose-invert prose-lg">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </motion.section>
  )
}
