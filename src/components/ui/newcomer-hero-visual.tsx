"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Map, Compass, Home, FolderOpen, Users, Navigation } from "lucide-react"

export function NewcomerHeroVisual() {
  const prefersReducedMotion = useReducedMotion()

  const floatAnimation = (duration: number, delay: number, yDist: number = -8): any => {
    if (prefersReducedMotion) return {}
    return {
      y: [0, yDist, 0],
      transition: {
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    }
  }

  return (
    <div className="relative w-full aspect-[4/3] max-w-[650px] mx-auto select-none pointer-events-none">
      
      {/* Background Soft Gradients */}
      <div className="absolute top-[10%] left-[10%] w-[300px] h-[300px] bg-radial-[at_50%_50%] from-[var(--color-accent-400)]/20 to-transparent to-70% rounded-full blur-3xl opacity-70" />
      <div className="absolute bottom-[5%] right-[10%] w-[350px] h-[350px] bg-radial-[at_50%_50%] from-[var(--color-primary-600)]/15 to-transparent to-70% rounded-full blur-3xl opacity-60" />

      {/* Main Base - Desktop representation */}
      <motion.div 
        className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[85%] h-16 bg-white/40 rounded-full blur-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      />

      {/* Central Object: Friendly Map/Roadmap */}
      <motion.div 
        className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[320px] z-20 flex flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as any, delay: 0.3 }}
      >
        <motion.div animate={floatAnimation(14, 0, -5)} className="w-full flex flex-col items-center">
          <div className="w-[300px] h-[200px] bg-white rounded-2xl border-4 border-[var(--color-border-strong)] p-4 shadow-xl flex flex-col gap-4 relative overflow-hidden">
            
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-2 relative z-10 bg-white">
              <div className="flex items-center gap-2">
                <Map className="w-5 h-5 text-[var(--color-primary-900)]" />
                <div className="h-2.5 w-20 bg-[var(--color-text-secondary)] rounded-full" />
              </div>
            </div>
            
            {/* Map Area */}
            <div className="absolute top-12 left-0 right-0 bottom-0 bg-[var(--color-bg-secondary)] opacity-50" />
            
            {/* Winding Path */}
            <svg className="absolute top-12 left-0 right-0 bottom-0 w-full h-full" viewBox="0 0 300 150" fill="none">
              <path 
                d="M 20 120 C 80 120, 50 30, 150 40 C 250 50, 220 130, 280 110" 
                stroke="var(--color-border-strong)" 
                strokeWidth="3"
                strokeDasharray="6 6"
                strokeLinecap="round"
              />
              {/* Path Nodes */}
              <circle cx="20" cy="120" r="5" fill="white" stroke="var(--color-accent-400)" strokeWidth="2" />
              <circle cx="150" cy="40" r="5" fill="white" stroke="var(--color-accent-400)" strokeWidth="2" />
              <circle cx="280" cy="110" r="6" fill="var(--color-accent-500)" />
            </svg>

            {/* Floating location marker */}
            <div className="absolute top-[20px] left-[138px] text-[var(--color-primary-900)]">
              <Navigation className="w-6 h-6 fill-[var(--color-primary-100)]" />
            </div>

          </div>
        </motion.div>
      </motion.div>

      {/* Floating Card 1: Community / Home (Top Right) */}
      <motion.div 
        className="absolute top-[8%] right-[8%] w-[150px] rounded-2xl bg-white shadow-[var(--shadow-xl)] border border-[var(--color-border)] p-4 z-30"
        initial={{ opacity: 0, scale: 0.9, x: 20, rotate: 5 }}
        animate={{ opacity: 1, scale: 1, x: 0, rotate: 5 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as any, delay: 0.4 }}
      >
        <motion.div animate={floatAnimation(11, 0.5, -4)} className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full bg-[var(--color-primary-100)] border-2 border-white flex items-center justify-center"><Users className="w-3 h-3 text-[var(--color-primary-900)]" /></div>
              <div className="w-6 h-6 rounded-full bg-[var(--color-accent-100)] border-2 border-white flex items-center justify-center"><Home className="w-3 h-3 text-[var(--color-accent-600)]" /></div>
            </div>
            <div className="w-2 h-2 rounded-full bg-[var(--color-accent-400)]" />
          </div>
          <div className="w-full bg-[var(--color-bg-secondary)] rounded-lg p-2">
            <div className="h-1.5 w-full bg-[var(--color-text-secondary)] rounded-full mb-1.5" />
            <div className="h-1.5 w-2/3 bg-[var(--color-text-secondary)] rounded-full" />
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Card 2: Compass / Guidance (Top Left) */}
      <motion.div 
        className="absolute top-[18%] left-[5%] w-[160px] rounded-xl bg-[var(--color-primary-900)] text-white shadow-[var(--shadow-lg)] border border-[var(--color-border-dark)] p-4 z-15"
        initial={{ opacity: 0, scale: 0.9, x: -20, rotate: -4 }}
        animate={{ opacity: 1, scale: 1, x: 0, rotate: -4 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as any, delay: 0.5 }}
      >
        <motion.div animate={floatAnimation(13, 1)} className="flex flex-col gap-3 items-center text-center">
          <div className="p-2 rounded-full bg-white/10">
            <Compass className="w-8 h-8 text-[var(--color-accent-400)]" />
          </div>
          <div className="flex flex-col items-center gap-1.5 w-full">
            <div className="h-1.5 w-2/3 bg-white/40 rounded-full" />
            <div className="h-1.5 w-1/2 bg-white/20 rounded-full" />
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Card 3: Folders (Bottom Left) */}
      <motion.div 
        className="absolute bottom-[10%] left-[12%] w-[120px] rounded-xl bg-white shadow-[var(--shadow-md)] border border-[var(--color-border)] p-3 z-30"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as any, delay: 0.6 }}
      >
        <motion.div animate={floatAnimation(12, 2, -6)} className="flex flex-col gap-3 items-center">
          <FolderOpen className="w-6 h-6 text-[var(--color-primary-600)]" />
          <div className="w-full flex gap-1 justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-400)]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-border-strong)]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-border-strong)]" />
          </div>
        </motion.div>
      </motion.div>

    </div>
  )
}
