import ServicesHero from "@/components/services-hero"
import ServicesGrid from "@/components/services-grid"
import ServicesCTA from "@/components/services-cta" // Re-using the CTA from tool pages

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ServicesCTA /> {/* Using the general CTA for services page */}
    </>
  )
}
