"use client" // Added use client for framer-motion

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SmartphoneIcon, Laptop, Bot, Server, Code, Users, Apple, Zap, EyeOff } from "lucide-react" // Corrected import
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
  Bot,
  Server,
  Code,
  Users,
  Apple,
  Zap,
  EyeOff,
} as const

type ServiceDetailIconName = keyof typeof iconMap

const serviceDetails = [
  {
    title: "Android RATs (FUD, Real-Time)",
    icon: "SmartphoneIcon" as ServiceDetailIconName, // Changed to string name
    description: "Cutting-edge Android Remote Access Trojans with full undetectability and live control capabilities.",
  },
  {
    title: "PC RATs (Keylogger + Screen + Shell)",
    icon: "Laptop" as ServiceDetailIconName, // Changed to string name
    description: "Powerful PC RATs featuring comprehensive keylogging, screen monitoring, and remote shell access.",
  },
  {
    title: "Telegram Panel Delivery",
    icon: "Bot" as ServiceDetailIconName, // Changed to string name
    description: "Seamless integration and delivery of control panels directly via Telegram bots for convenience.",
  },
  {
    title: "Hosting Panel Setup",
    icon: "Server" as ServiceDetailIconName, // Changed to string name
    description: "Expert setup and configuration of secure hosting environments for your RAT panels.",
  },
  {
    title: "Obfuscation Tools",
    icon: "Code" as ServiceDetailIconName, // Changed to string name
    description: "Advanced obfuscation techniques to ensure your payloads remain fully undetectable.",
  },
  {
    title: "Support & Consultation",
    icon: "Users" as ServiceDetailIconName, // Changed to string name
    description: "Dedicated support and expert consultation for all your cybersecurity research needs.",
  },
]

export default function ServicesCards() {
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
          {serviceDetails.map((service, index) => {
            const IconComponent = iconMap[service.icon]
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
