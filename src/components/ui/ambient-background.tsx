"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"

interface AmbientBackgroundProps {
  className?: string
  intensity?: "light" | "medium" | "strong"
  colorTheme?: "primary" | "accent" | "mixed"
}

export function AmbientBackground({ 
  className = "", 
  intensity = "medium",
  colorTheme = "mixed"
}: AmbientBackgroundProps) {
  const prefersReducedMotion = useReducedMotion()

  const opacityMap = {
    light: 0.3,
    medium: 0.5,
    strong: 0.8
  }
  
  const baseOpacity = opacityMap[intensity]

  // If reduced motion is preferred, render static fallback
  if (prefersReducedMotion) {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-radial-[at_50%_50%] from-[var(--color-primary-200)]/20 to-transparent to-70% rounded-full blur-3xl opacity-60 transform translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-radial-[at_50%_50%] from-[var(--color-accent-300)]/15 to-transparent to-70% rounded-full blur-3xl opacity-50 transform -translate-x-1/4 translate-y-1/4" />
      </div>
    )
  }

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${className}`}>
      
      {/* Mesh Gradient Base */}
      <div className="absolute inset-0 opacity-[0.4] mix-blend-multiply bg-[radial-gradient(ellipse_at_top_right,var(--color-primary-100),transparent_50%),radial-gradient(ellipse_at_bottom_left,var(--color-accent-100),transparent_50%)]" />

      {/* Floating Blobs */}
      <motion.div
        className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full blur-[100px] opacity-[0.15] mix-blend-multiply"
        style={{
          background: colorTheme === "accent" ? "var(--color-accent-400)" : "var(--color-primary-400)"
        }}
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full blur-[90px] opacity-[0.15] mix-blend-multiply"
        style={{
          background: colorTheme === "primary" ? "var(--color-primary-300)" : "var(--color-accent-400)"
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Subtle Noise Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  )
}
