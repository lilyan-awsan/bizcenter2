"use client"

import Link from "next/link"
import { Compass } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center min-h-[70vh] bg-[#F8F7F4] px-6 py-20 text-center">
      <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-sm mb-8">
        <Compass className="w-12 h-12 text-[var(--color-accent-500)]" />
      </div>
      
      <h1 className="text-4xl md:text-5xl lg:text-6xl text-[var(--color-charcoal)] mb-6">
        We Couldn't Find That Page
      </h1>
      
      <p className="text-[18px] text-[var(--color-slate)] max-w-[500px] mb-10 leading-relaxed text-balance">
        The page you're looking for may have moved, been renamed, or might no longer be available.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <Button size="lg" className="px-8 w-full sm:w-auto" asChild>
          <Link href="/">Go Home</Link>
        </Button>
        <Button variant="outline" size="lg" className="px-8 w-full sm:w-auto bg-white border-[var(--color-border-strong)]" asChild>
          <Link href="/services">Explore Services</Link>
        </Button>
      </div>
    </main>
  )
}
