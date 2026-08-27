"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { FolderOpen, CalendarCheck, TrendingUp, Files } from "lucide-react"

export function ServicesHeroVisual() {
  const prefersReducedMotion = useReducedMotion()

  const floatAnimation = (duration: number, delay: number) => {
    if (prefersReducedMotion) return {}
    return {
      y: [0, -8, 0],
      transition: {
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }
  }

  return (
    <div className="relative w-full aspect-square max-w-[550px] mx-auto select-none pointer-events-none">
      
      {/* Background Soft Gradients */}
      <div className="absolute top-[20%] right-[10%] w-64 h-64 bg-radial-[at_50%_50%] from-[var(--color-primary-900)]/10 to-transparent to-70% rounded-full blur-2xl opacity-70" />
      <div className="absolute bottom-[20%] left-[10%] w-56 h-56 bg-radial-[at_50%_50%] from-[var(--color-accent-500)]/15 to-transparent to-70% rounded-full blur-2xl opacity-60" />

      {/* SVG Connecting Elements (Workflow) */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 550 550" fill="none">
        <motion.path 
          d="M 150 350 C 150 250, 300 250, 400 150" 
          stroke="var(--color-border-strong)" 
          strokeWidth="1.5"
          strokeDasharray="4 6"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeOut", delay: 0.2 }}
        />
        <motion.circle 
          cx="150" cy="350" r="4" fill="var(--color-accent-500)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2.5 }}
        />
        <motion.circle 
          cx="400" cy="150" r="4" fill="var(--color-primary-900)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2.7 }}
        />
      </svg>

      {/* Center Piece: Document Stack */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-56 rounded-xl bg-white shadow-[var(--shadow-xl)] border border-[var(--color-border)] p-5 z-10 flex flex-col gap-4"
        initial={{ opacity: 0, y: 20, x: "-50%" }}
        animate={{ opacity: 1, y: "-50%", x: "-50%" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div animate={floatAnimation(12, 0)} className="w-full h-full flex flex-col gap-3">
          <div className="flex items-center gap-3 border-b border-[var(--color-border)] pb-3">
            <div className="p-2 rounded-lg bg-[var(--color-primary-50)]">
              <Files className="w-5 h-5 text-[var(--color-primary-600)]" />
            </div>
            <div className="h-2 w-16 bg-[var(--color-text-secondary)] rounded-full" />
          </div>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="h-1.5 w-full bg-[var(--color-border-hover)] rounded-full" />
              <div className={`h-1.5 rounded-full ${i % 2 === 0 ? 'w-1/2' : 'w-3/4'} bg-[var(--color-border-hover)]`} />
            </div>
          ))}
        </motion.div>
      </motion.div>
      
      {/* Background shadow doc */}
      <motion.div 
        className="absolute top-[48%] left-[52%] -translate-x-1/2 -translate-y-1/2 w-48 h-56 rounded-xl bg-white/60 shadow-lg border border-[var(--color-border)] z-0 rotate-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />

      {/* Floating Card 1: Calendar (Top Left) */}
      <motion.div 
        className="absolute top-[18%] left-[12%] w-[150px] rounded-xl bg-white/95 glass shadow-[var(--shadow-md)] border border-[var(--color-border)] p-4"
        initial={{ opacity: 0, scale: 0.9, x: -10 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      >
        <motion.div animate={floatAnimation(10, 0.5)} className="flex flex-col items-center gap-2">
          <CalendarCheck className="w-6 h-6 text-[var(--color-accent-600)] mb-1" />
          <div className="h-1.5 w-16 bg-[var(--color-border-strong)] rounded-full" />
          <div className="h-1.5 w-10 bg-[var(--color-border-strong)] rounded-full" />
        </motion.div>
      </motion.div>

      {/* Floating Card 2: Growth (Top Right) */}
      <motion.div 
        className="absolute top-[22%] right-[8%] w-[160px] rounded-xl bg-[var(--color-primary-900)] text-white shadow-[var(--shadow-lg)] border border-[var(--color-border-dark)] p-4"
        initial={{ opacity: 0, scale: 0.9, x: 10 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
      >
        <motion.div animate={floatAnimation(14, 1)} className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="h-2 w-12 bg-white/30 rounded-full" />
            <TrendingUp className="w-5 h-5 text-[var(--color-accent-400)]" />
          </div>
          <div className="flex items-end gap-1.5 h-8 mt-2">
            {[30, 50, 70, 100].map((h, i) => (
              <div key={i} className="flex-1 bg-white/20 rounded-t-sm" style={{ height: `${h}%` }} />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Card 3: Folder/Organization (Bottom Left) */}
      <motion.div 
        className="absolute bottom-[20%] left-[8%] w-[140px] rounded-xl bg-white shadow-[var(--shadow-md)] border border-[var(--color-border)] p-4"
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
      >
        <motion.div animate={floatAnimation(11, 2)} className="flex flex-col items-center gap-2">
          <div className="p-2 rounded-full bg-[var(--color-bg-secondary)] mb-1">
            <FolderOpen className="w-5 h-5 text-[var(--color-charcoal)]" />
          </div>
          <div className="h-1.5 w-12 bg-[var(--color-text-secondary)] rounded-full" />
        </motion.div>
      </motion.div>

    </div>
  )
}
