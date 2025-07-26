"use client"

import { useState } from "react"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export default function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-neon-green hover:bg-neon-green/10"
          aria-label="Toggle navigation menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[250px] sm:w-[300px] bg-black border-l-2 border-neon-red text-white">
        <nav className="flex flex-col gap-4 pt-8">
          <Link
            href="/"
            className="text-xl font-medium text-gray-300 hover:text-neon-green transition-colors py-2"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/tool-catalog"
            className="text-xl font-medium text-gray-300 hover:text-neon-green transition-colors py-2"
            onClick={() => setOpen(false)}
          >
            Tool Catalog
          </Link>
          <Link
            href="/shadowops"
            className="text-xl font-medium text-gray-300 hover:text-neon-green transition-colors py-2"
            onClick={() => setOpen(false)}
          >
            ShadowOps
          </Link>
          <Link
            href="/services"
            className="text-xl font-medium text-gray-300 hover:text-neon-green transition-colors py-2"
            onClick={() => setOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/blog"
            className="text-xl font-medium text-gray-300 hover:text-neon-green transition-colors py-2"
            onClick={() => setOpen(false)}
          >
            Blog
          </Link>
          {/* <Link
            href="/new-payment"
            className="text-xl font-medium text-gray-300 hover:text-neon-green transition-colors py-2"
            onClick={() => setOpen(false)}
          >
            Payment
          </Link> */}
          <Link
            href="/contact"
            className="text-xl font-medium text-gray-300 hover:text-neon-green transition-colors py-2"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
