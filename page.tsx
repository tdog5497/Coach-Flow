import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 p-4 text-center">
      <div className="w-full max-w-md space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight text-blue-800">CoachFlow</h1>
          <p className="text-lg text-gray-600">
            AI-powered soccer training sessions aligned with your club's methodology
          </p>
        </div>

        <div className="flex flex-col space-y-4 pt-6">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href="/login">Log In</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-white p-4 shadow-md">
            <h3 className="font-medium text-blue-700">AI Assistant</h3>
            <p className="text-sm text-gray-500">Generate custom training plans</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-md">
            <h3 className="font-medium text-blue-700">Team Tracking</h3>
            <p className="text-sm text-gray-500">Monitor progress over time</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-md">
            <h3 className="font-medium text-blue-700">Club Alignment</h3>
            <p className="text-sm text-gray-500">Consistent methodology</p>
          </div>
        </div>
      </div>
    </div>
  )
}
