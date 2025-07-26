"use client"

import { useState } from "react"
import Link from "next/link"
import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      href="https://wa.me/917266825793"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 flex items-center gap-2 bg-neon-green text-black p-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-neon-green hover:scale-105"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <MessageCircle className="w-7 h-7" />
      <span
        className={`font-bold text-sm whitespace-nowrap overflow-hidden transition-all duration-300 ${hovered ? "max-w-[150px] opacity-100" : "max-w-0 opacity-0"}`}
      >
        💬 Chat on WhatsApp
      </span>
    </Link>
  )
}
