import { notFound } from "next/navigation"
import { tools } from "@/data/tools"
import ToolPageHero from "@/components/tool-page-hero"
import ToolPageDescription from "@/components/tool-page-description"
import ToolPageFeatures from "@/components/tool-page-features"
import ToolPagePricing from "@/components/tool-page-pricing"
import ToolPageScreenshots from "@/components/tool-page-screenshots"
import ToolPageCTA from "@/components/tool-page-cta"
import ToolPageDisclaimer from "@/components/tool-page-disclaimer"

// Generate static paths for all tools
export async function generateStaticParams() {
  return tools.map((tool) => ({
    toolName: tool.id,
  }))
}

interface ToolPageProps {
  params: {
    toolName: string
  }
}

export default function ToolPage({ params }: ToolPageProps) {
  const tool = tools.find((t) => t.id === params.toolName)

  if (!tool) {
    notFound() // Render 404 page if tool not found
  }

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <ToolPageHero name={tool.name} tagline={tool.tagline} />
      <ToolPageDescription description={tool.description} />
      <ToolPageFeatures features={tool.features} />
      <ToolPagePricing pricing={tool.pricing} />
      <ToolPageScreenshots screenshots={tool.screenshots} />
      <ToolPageCTA />
      <ToolPageDisclaimer />
    </div>
  )
}
