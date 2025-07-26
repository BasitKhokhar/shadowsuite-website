import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { tools } from "@/data/tools" // Import tools data

interface ToolCardProps {
  toolId: string // Now takes tool ID
}

export default function ToolCard({ toolId }: ToolCardProps) {
  console.log("data in tools card compoennt", tools) // Log the tools data for debugging
  const tool = tools.find((t) => t.id === toolId)

  if (!tool) {
    return null // Or handle error/not found state
  }

  const isLifetime = "Lifetime" in tool.pricing
  const isBundle = "Bundle" in tool.pricing
  const isPerBuild = "PerBuild" in tool.pricing

  let displayPrice: string
  if (isLifetime) {
    displayPrice = `${tool.pricing.Lifetime} (Lifetime)`
  } 
  // else if (isBundle) {
  //   displayPrice = tool.pricing.Bundle
  // } 
  else if (isPerBuild) {
    displayPrice = `${tool.pricing.PerBuild} (Per Build)`
  } else {
    displayPrice = `Starts ${tool.pricing["3 Month"]}`
  }

  const buttonText = tool.id === "full-suite-bundle" ? "Buy Full Suite" : "View Details →"
  const linkHref = tool.id === "full-suite-bundle" ? "https://wa.me/917266825793" : `/tools/${tool.id}`
  const linkTarget = tool.id === "full-suite-bundle" ? "_blank" : undefined
  const linkRel = tool.id === "full-suite-bundle" ? "noopener noreferrer" : undefined

  return (
    <Card className="bg-card border-2 border-neon-red hover:shadow-neon-red transition-all duration-300 flex flex-col h-full">
      {" "}
      {/* Added h-full for consistent height */}
      <CardHeader className="relative pb-2">
        <CardTitle className="text-2xl font-bold text-neon-glow-red">{tool.name}</CardTitle>
        <p className="text-sm text-gray-400">{tool.tagline}</p>
        {tool.badge && (
          <span className="absolute top-4 right-4 bg-neon-green text-black text-xs font-bold px-2 py-1 rounded-full shadow-md">
            {tool.badge}
          </span>
        )}
      </CardHeader>
      {/* <CardContent className="flex-grow pt-2 flex flex-col justify-between">
        <h3 className="text-lg font-semibold mb-2 text-neon-green">Price:</h3>
        <div className="text-2xl font-bold text-neon-red">{displayPrice}</div>
      </CardContent> */}
      <CardFooter className="pt-4">
        <Link href={linkHref} target={linkTarget} rel={linkRel} className="w-full">
          <Button className="w-full bg-neon-red text-white font-bold py-2 px-4 rounded-md uppercase tracking-wider transition-all duration-300 hover:shadow-neon-red hover:scale-105 border-2 border-neon-red">
            {buttonText}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
