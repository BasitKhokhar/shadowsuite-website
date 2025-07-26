"use client" // Added use client for framer-motion

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SmartphoneIcon, Laptop, Code, Server, Bot, Users, EyeOff, Apple, Zap } from "lucide-react" // Import all possible icons
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

const iconMap = {
  SmartphoneIcon,
  Laptop,
  Code,
  Server,
  Bot,
  Users,
  EyeOff,
  Apple,
  Zap,
} as const

type ServiceIconName = keyof typeof iconMap

const services = [
  {
    title: "Android RATs",
    icon: "SmartphoneIcon" as ServiceIconName, // Changed to string name
    description: "Fully Undetectable (FUD) and real-time control for Android devices.",
  },
  {
    title: "PC RATs",
    icon: "Laptop" as ServiceIconName, // Changed to string name
    description: "Advanced keyloggers, screen monitoring, and remote shell access for PCs.",
  },
  {
    title: "Private Builds",
    icon: "Code" as ServiceIconName, // Changed to string name
    description: "Custom-tailored RAT builds to meet your specific operational requirements.",
  },
  {
    title: "Hosting Setup",
    icon: "Server" as ServiceIconName, // Changed to string name
    description: "Secure and optimized hosting solutions for your RAT panels.",
  },
  {
    title: "Telegram Bot Deployment",
    icon: "Bot" as ServiceIconName, // Changed to string name
    description: "Automated control and notifications via Telegram bot integration.",
  },
]

export default function HomeServices() {
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
          Our Core Services
        </motion.h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon]
            if (!IconComponent) return null

            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-card border-2 border-neon-green hover:shadow-neon-green transition-all duration-300 flex flex-col items-center text-center p-6">
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
