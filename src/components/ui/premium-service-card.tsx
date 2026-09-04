"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight, Target } from "lucide-react"

interface PremiumServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  href: string
  delay?: number
  imageSrc?: string
}

export function PremiumServiceCard({ title, description, icon, href, imageSrc }: PremiumServiceCardProps) {
  return (
    <Link href={href} className="group relative block h-full outline-none">
      
      {/* Glow / Gradient Border Background on hover */}
      <div className="absolute -inset-[1px] bg-gradient-to-r from-[var(--color-accent-500)] to-[var(--color-primary-900)] rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-red-glow" />

      {/* Main Card Content */}
      <div className="relative h-full bg-white rounded-[18px] border border-[var(--future-line)] p-7 flex flex-col transition-all duration-300 group-hover:-translate-y-1.5 shadow-soft-elevation group-hover:shadow-[0_20px_40px_-10px_rgba(34,22,87,0.14)] overflow-hidden">
        
        {/* Optional Photography Header */}
        {imageSrc && (
          <div className="relative h-44 -mx-7 -mt-7 mb-6 overflow-hidden bg-[var(--color-primary-950)]">
            <img 
              src={imageSrc} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
            <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-md">
              <Target className="w-5 h-5 text-[var(--color-accent-500)]" />
            </div>
          </div>
        )}

        {/* Animated Icon Container (if no image, or alongside header) */}
        {!imageSrc && (
          <div className="relative w-14 h-14 rounded-2xl bg-[var(--color-primary-50)] border border-[var(--future-line)] flex items-center justify-center mb-6 overflow-hidden transition-all duration-300 group-hover:bg-[var(--color-accent-500)] group-hover:border-[var(--color-accent-500)]">
            <div className="relative z-10 text-[var(--color-primary-900)] group-hover:text-white transition-colors duration-300 [&>svg]:w-7 [&>svg]:h-7">
              {icon}
            </div>
          </div>
        )}
        
        <h3 className="text-2xl mb-3 text-[var(--color-primary-900)] font-extrabold transition-colors duration-300 group-hover:text-[var(--color-accent-500)]">{title}</h3>
        
        <p className="text-[15px] text-[var(--color-slate)] leading-relaxed mb-8 flex-1 font-normal">
          {description}
        </p>
        
        <div className="flex items-center text-[var(--color-primary-900)] font-bold text-[15px] mt-auto pt-4 border-t border-[var(--future-line)]">
          <span className="relative overflow-hidden">
            <span className="inline-block transition-transform duration-300 group-hover:-translate-y-[120%]">Explore Service</span>
            <span className="absolute left-0 top-0 inline-block translate-y-[120%] transition-transform duration-300 group-hover:translate-y-0 text-[var(--color-accent-500)]">Explore Service</span>
          </span>
          <div className="relative w-5 h-5 ml-2 flex items-center justify-center">
            <ArrowRight className="w-4 h-4 text-[var(--color-accent-500)] transition-transform duration-300 group-hover:translate-x-1.5" />
          </div>
        </div>
      </div>
    </Link>
  )
}

