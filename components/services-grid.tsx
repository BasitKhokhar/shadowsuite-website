"use client" // Added use client for framer-motion

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { services } from "@/data/services"
import { motion } from "framer-motion" // Import motion
import { SmartphoneIcon, Laptop, Apple, Zap, Bot, EyeOff, Server, Users } from "lucide-react" // Import all possible icons

const iconMap = {
  SmartphoneIcon,
  Laptop,
  Apple,
  Zap,
  Bot,
  EyeOff,
  Server,
  Users,
} as const

type ServiceIconName = keyof typeof iconMap

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

export default function ServicesGrid() {
  return (
    <motion.section
      className="py-20 px-4 bg-black text-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto">
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as ServiceIconName]
            if (!IconComponent) return null

            return (
              <motion.div key={index} variants={itemVariants}>
                <Card
                  key={index}
                  className="bg-card border-2 border-neon-green hover:shadow-neon-green transition-all duration-300 flex flex-col items-center text-center p-6"
                >
                  <CardHeader>
                    <IconComponent className="w-12 h-12 text-neon-green mb-4" />
                    <CardTitle className="text-xl font-bold text-neon-glow-green">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300 flex-grow">
                    <p>{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </motion.section>
  )
}
