import CraxRatHero from "@/components/craxrat-hero"
import CraxRatOverview from "@/components/craxrat-overview"
import CraxRatFeatures from "@/components/craxrat-features"
import CraxRatPricing from "@/components/craxrat-pricing"
import CraxRatScreenshots from "@/components/craxrat-screenshots"
import CraxRatCTA from "@/components/craxrat-cta"
import CraxRatDisclaimer from "@/components/craxrat-disclaimer"
import SiteFooter from "@/components/site-footer" // Assuming you want the same footer

export default function CraxRatPage() {
  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <main>
        <CraxRatHero />
        <CraxRatOverview />
        <CraxRatFeatures />
        <CraxRatPricing />
        <CraxRatScreenshots />
        <CraxRatCTA />
        <CraxRatDisclaimer />
      </main>
      <SiteFooter />
    </div>
  )
}
