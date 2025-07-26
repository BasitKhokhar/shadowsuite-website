"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion" // Import motion

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("Sending...")

    // In a real application, you would send this data to a backend API.
    // For this example, we'll simulate a successful submission.
    console.log("Form Data:", formData)

    await new Promise((resolve) => setTimeout(resolve, 2000)) // Simulate network request

    setStatus("Message sent successfully! We will get back to you shortly.")
    setFormData({ name: "", email: "", subject: "", message: "" }) // Clear form
  }

  return (
    <motion.section
      className="py-20 px-4 bg-black text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto max-w-2xl">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center mb-12 text-neon-glow-red"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Send Us a Message
        </motion.h2>
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6 p-8 rounded-lg border-2 border-neon-green bg-card shadow-neon-green/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div>
            <Label htmlFor="name" className="text-neon-green text-lg mb-2 block">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-gray-900 border-neon-green text-white focus:ring-neon-red focus:border-neon-red"
            />
          </div>
          <div>
            <Label htmlFor="email" className="text-neon-green text-lg mb-2 block">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-gray-900 border-neon-green text-white focus:ring-neon-red focus:border-neon-red"
            />
          </div>
          <div>
            <Label htmlFor="subject" className="text-neon-green text-lg mb-2 block">
              Subject
            </Label>
            <Input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              required
              className="bg-gray-900 border-neon-green text-white focus:ring-neon-red focus:border-neon-red"
            />
          </div>
          <div>
            <Label htmlFor="message" className="text-neon-green text-lg mb-2 block">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="bg-gray-900 border-neon-green text-white focus:ring-neon-red focus:border-neon-red"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-neon-red text-white font-bold py-3 px-8 rounded-md text-lg uppercase tracking-wider transition-all duration-300 hover:shadow-neon-red hover:scale-105 border-2 border-neon-red"
            disabled={status === "Sending..."}
          >
            {status === "Sending..." ? "Sending..." : "Send Message"}
          </Button>
          {status && status !== "Sending..." && <p className="mt-4 text-center text-neon-green">{status}</p>}
        </motion.form>
      </div>
    </motion.section>
  )
}
