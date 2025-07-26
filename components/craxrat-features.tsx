"use client" // Added use client for framer-motion

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Monitor, MapPin, MessageSquare, Smartphone, Mic, Play, ShieldCheck } from "lucide-react"
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

const features = [
  {
    title: "Live Screen Streaming",
    icon: Monitor,
    description: "View the target device's screen in real-time with minimal latency.",
  },
  {
    title: "GPS & File Manager",
    icon: MapPin,
    description: "Track precise GPS location and manage files on the device remotely.",
  },
  {
    title: "SMS/Call Logs",
    icon: MessageSquare,
    description: "Access and monitor all incoming and outgoing SMS messages and call history.",
  },
  {
    title: "App Control",
    icon: Smartphone,
    description: "Remotely freeze, install, or uninstall applications on the target device.",
  },
  {
    title: "Remote Mic/Cam",
    icon: Mic,
    description: "Activate microphone and camera for live audio and video surveillance.",
  },
  {
    title: "Auto-Start",
    icon: Play,
    description: "Ensures the RAT automatically restarts with the device, maintaining persistence.",
  },
  {
    title: "PlayProtect Bypass",
    icon: ShieldCheck,
    description: "Advanced techniques to bypass Google Play Protect detection.",
  },
]

export default function CraxRatFeatures() {
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
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-card border-2 border-neon-green hover:shadow-neon-green transition-all duration-300 flex flex-col items-center text-center p-6">
                <CardHeader>
                  <feature.icon className="w-12 h-12 text-neon-green mb-4" />
                  <CardTitle className="text-xl font-bold text-neon-glow-green">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 flex-grow">
                  <p>{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
