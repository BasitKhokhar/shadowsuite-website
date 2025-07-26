"use client" // Added use client for framer-motion

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { blogPosts } from "@/data/blog-posts"
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

export default function BlogList() {
  return (
    <motion.section
      className="py-20 px-4 bg-black text-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto">
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div key={post.slug} variants={itemVariants} className="h-full">
              <Card className="bg-card border-2 border-neon-green hover:shadow-neon-green transition-all duration-300 flex flex-col h-full">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-neon-glow-green">{post.title}</CardTitle>
                  <p className="text-sm text-gray-400">
                    By {post.author} on {post.date}
                  </p>
                </CardHeader>

                <CardContent className="flex-grow text-gray-300">
                  <p>{post.excerpt}</p>
                </CardContent>

                <CardFooter className="pt-4">
                  <Link href={`/blog/${post.slug}`} className="w-full">
                    <Button className="w-full bg-neon-red text-white font-bold py-2 px-4 rounded-md uppercase tracking-wider transition-all duration-300 hover:shadow-neon-red hover:scale-105 border-2 border-neon-red">
                      Read More →
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

    </motion.section>
  )
}
