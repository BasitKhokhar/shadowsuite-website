import { Loader2 } from "lucide-react"

export default function RootLoading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-neon-green">
      <Loader2 className="h-16 w-16 animate-spin text-neon-red mb-4" />
      <p className="text-xl font-bold text-neon-glow-green">Loading...</p>
      <p className="text-sm text-gray-400 mt-2">Please wait</p>
    </div>
  )
}
