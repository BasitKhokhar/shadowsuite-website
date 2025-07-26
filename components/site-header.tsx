import Link from "next/link"
import MobileNav from "./mobile-nav" // Import the new component

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center gap-2 font-bold text-2xl text-neon-glow-red">
          ShadowSuite
        </Link>
        <nav className="hidden md:flex gap-6 lg:gap-8">
          {" "}
          {/* Adjusted gap for larger screens */}
          <Link href="/" className="text-xl font-medium text-gray-300 hover:text-neon-green transition-colors">
            Home
          </Link>
          <Link
            href="/tool-catalog"
            className="text-xl font-medium text-gray-300 hover:text-neon-green transition-colors"
          >
            Tool Catalog
          </Link>
          <Link href="/shadowops" className="text-xl font-medium text-gray-300 hover:text-neon-green transition-colors">
            ShadowOps
          </Link>
          <Link href="/services" className="text-xl font-medium text-gray-300 hover:text-neon-green transition-colors">
            Services
          </Link>
          <Link href="/blog" className="text-xl font-medium text-gray-300 hover:text-neon-green transition-colors">
            Blog
          </Link>
          {/* <Link
            href="/new-payment"
            className="text-xl font-medium text-gray-300 hover:text-neon-green transition-colors"
          >
            Payment
          </Link> */}
          <Link href="/contact" className="text-xl font-medium text-gray-300 hover:text-neon-green transition-colors">
            Contact
          </Link>
        </nav>
        <div className="md:hidden">
          {" "}
          {/* Visible on mobile */}
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
