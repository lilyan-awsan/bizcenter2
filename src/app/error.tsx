"use client"

import { useEffect } from "react"
import Link from "next/link"
import { AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service if hooked up
    console.error(error)
  }, [error])

  return (
    <main className="flex-1 flex flex-col items-center justify-center min-h-[70vh] bg-[#F8F7F4] px-6 py-20 text-center">
      <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-sm mb-8">
        <AlertCircle className="w-12 h-12 text-red-500" />
      </div>
      
      <h1 className="text-4xl md:text-5xl text-[var(--color-charcoal)] mb-6">
        Something Went Wrong
      </h1>
      
      <p className="text-[18px] text-[var(--color-slate)] max-w-[500px] mb-10 leading-relaxed text-balance">
        We're having trouble loading this page right now. Please try again or return to the homepage.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <Button size="lg" onClick={() => reset()} className="px-8 w-full sm:w-auto">
          Try Again
        </Button>
        <Button variant="outline" size="lg" className="px-8 w-full sm:w-auto bg-white border-[var(--color-border-strong)]" asChild>
          <Link href="/">Go Home</Link>
        </Button>
      </div>
    </main>
  )
}
