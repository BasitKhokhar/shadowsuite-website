import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import WhatsAppButton from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "ShadowSuite – Elite Remote Access Toolkit",
  description:
    "Elite Cyber Tools. Real-Time Control. 100% Stealth. Advanced Android & PC RATs for cybersecurity professionals.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white font-mono">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <WhatsAppButton />
      </body>
    </html>
  )
}
