"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface PremiumServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  href: string
  delay?: number
}

export function PremiumServiceCard({ title, description, icon, href, delay = 0 }: PremiumServiceCardProps) {
  return (
    <Link href={href} className="group relative block h-full outline-none">
      
      {/* Glow / Gradient Border Background (revealed on hover) */}
      <div className="absolute -inset-[1px] bg-gradient-to-b from-[var(--color-accent-400)] to-[var(--color-primary-600)] rounded-[17px] opacity-0 group-hover:opacity-100 blur-[2px] transition-opacity duration-500" />
      <div className="absolute -inset-[1px] bg-gradient-to-b from-[var(--color-accent-400)] to-[var(--color-primary-600)] rounded-[17px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Main Card Content */}
      <div className="relative h-full bg-white/90 glass rounded-[16px] p-8 flex flex-col transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 shadow-[0_8px_30px_rgb(0,0,0,0.04)] group-hover:shadow-[0_20px_40px_rgba(25,74,94,0.12)]">
        
        {/* Animated Icon Container */}
        <div className="relative w-14 h-14 rounded-2xl bg-[var(--color-bg-secondary)] flex items-center justify-center mb-6 overflow-hidden transition-colors duration-300 group-hover:bg-[var(--color-primary-50)]">
          {/* Subtle background rotation effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-100)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:rotate-180 ease-linear" style={{ transitionDuration: '3s' }} />
          {/* Subtly wrap the passed icon node with a standard size/color or just clone it if needed. For simplicity we render it directly */}
          <div className="relative z-10 text-[var(--color-primary-900)] transition-transform duration-[400ms] ease-out group-hover:scale-110 [&>svg]:w-7 [&>svg]:h-7">
            {icon}
          </div>
        </div>
        
        <h3 className="text-2xl mb-3 text-[var(--color-charcoal)] font-semibold transition-colors duration-300 group-hover:text-[var(--color-primary-900)]">{title}</h3>
        
        <p className="text-[15.5px] text-[var(--color-slate)] leading-relaxed mb-8 flex-1">
          {description}
        </p>
        
        <div className="flex items-center text-[var(--color-primary-900)] font-semibold text-[15px] mt-auto">
          <span className="relative overflow-hidden">
            <span className="inline-block transition-transform duration-300 group-hover:-translate-y-[120%]">Learn More</span>
            <span className="absolute left-0 top-0 inline-block translate-y-[120%] transition-transform duration-300 group-hover:translate-y-0 text-[var(--color-accent-600)]">Learn More</span>
          </span>
          <div className="relative w-5 h-5 ml-2 overflow-hidden flex items-center justify-center">
            <ArrowRight className="absolute w-4 h-4 transition-all duration-300 group-hover:translate-x-[150%] opacity-100 group-hover:opacity-0" />
            <ArrowRight className="absolute w-4 h-4 transition-all duration-300 -translate-x-[150%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 text-[var(--color-accent-600)]" />
          </div>
        </div>
      </div>
    </Link>
  )
}
