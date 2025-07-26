import Link from "next/link"

export default function SiteFooter() {
  return (
    <footer className="py-8 px-4 bg-black text-white border-t border-gray-800">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
        <p className="mb-4 sm:mb-0 text-center sm:text-left">
          &copy; {new Date().getFullYear()} ShadowSuite. All rights reserved.
        </p>{" "}
        {/* Centered on mobile */}
        <nav className="flex flex-wrap justify-center sm:justify-end gap-x-6 gap-y-2">
          {" "}
          {/* Added flex-wrap and gap-y */}
          <Link href="/" className="hover:text-neon-green transition-colors">
            Home
          </Link>
          <Link href="/tool-catalog" className="hover:text-neon-green transition-colors">
            Tool Catalog
          </Link>
          <Link href="/services" className="hover:text-neon-green transition-colors">
            Services
          </Link>
          <Link href="/shadowops" className="hover:text-neon-green transition-colors">
            ShadowOps
          </Link>
          <Link href="/blog" className="hover:text-neon-green transition-colors">
            Blog
          </Link>
          <Link href="/new-payment" className="hover:text-neon-green transition-colors">
            Payment
          </Link>
          <Link href="/contact" className="hover:text-neon-green transition-colors">
            Contact
          </Link>
        </nav>
      </div>
      <div className="container mx-auto text-center mt-8 max-w-3xl p-4 rounded-lg border-2 border-neon-red bg-card text-gray-400 text-xs italic leading-relaxed">
        <p>
          {
            "All tools listed are intended strictly for educational, cybersecurity, and ethical red teaming purposes only. Unauthorized use is strictly prohibited under global cyber laws and India's IT Act."
          }
        </p>
      </div>
    </footer>
  )
}
