"use client" // Added use client for framer-motion

import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Monitor,
  MapPin,
  MessageSquare,
  Smartphone,
  Mic,
  Play,
  ShieldCheck,
  Key,
  HardDrive,
  Cpu,
  FileText,
  Camera,
  Phone,
  Wifi,
  BatteryCharging,
  Globe,
  Code,
  Lock,
  EyeOff,
  Users,
  Settings,
  ImageIcon,
  Zap,
  Apple,
  Cloud,
  Package,
  Bot,
  Server,
} from "lucide-react"
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

// Create a map of icon names to components
const iconMap = {
  Monitor,
  MapPin,
  MessageSquare,
  Smartphone,
  Mic,
  Play,
  ShieldCheck,
  Key,
  HardDrive,
  Cpu,
  FileText,
  Camera,
  Phone,
  Wifi,
  BatteryCharging,
  Globe,
  Code,
  Lock,
  EyeOff,
  Users,
  Settings,
  ImageIcon,
  Zap,
  Apple,
  Cloud,
  Package,
  Bot,
  Server,
} as const

type IconName = keyof typeof iconMap // Define a type for valid icon names

interface Feature {
  text: string
  icon: IconName // Now expects a string name
}

interface ToolPageFeaturesProps {
  features: Feature[]
}

export default function ToolPageFeatures({ features }: ToolPageFeaturesProps) {
  return (
    <motion.section
      className="py-20 px-4 bg-black text-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
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
          Key Features
        </motion.h2>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon]
            if (!IconComponent) return null

            return (
              <motion.div key={index} variants={itemVariants}>
                <Card
                  key={index}
                  className="bg-card border-2 border-neon-green hover:shadow-neon-green transition-all duration-300 flex flex-col items-center text-center p-6"
                >
                  <CardHeader>
                    <IconComponent className="w-12 h-12 text-neon-green mb-4" />
                    <CardTitle className="text-xl font-bold text-neon-glow-green">{feature.text}</CardTitle>
                  </CardHeader>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </motion.section>
  )
}
