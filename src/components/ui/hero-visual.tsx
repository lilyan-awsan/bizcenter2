"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { CheckSquare, FolderClosed, TrendingUp, Calendar as CalendarIcon, LayoutDashboard } from "lucide-react"

export function HeroVisual() {
  const prefersReducedMotion = useReducedMotion()

  const floatAnimation = (duration: number, delay: number) => {
    if (prefersReducedMotion) return {}
    return {
      y: [0, -6, 0],
      transition: {
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }
  }

  return (
    <div className="relative w-full aspect-square max-w-[600px] mx-auto select-none pointer-events-none">
      
      {/* Background radial gradient representing a soft light source */}
      <div className="absolute inset-0 bg-radial-[at_50%_50%] from-[var(--color-primary-900)]/5 to-transparent to-70% rounded-full blur-3xl opacity-50" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-radial-[at_50%_50%] from-[var(--color-accent-500)]/10 to-transparent to-70% rounded-full blur-2xl opacity-60" />

      {/* Connection Lines (SVG) */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 600" fill="none">
        <motion.path 
          d="M 150 400 Q 300 350 450 200" 
          stroke="var(--color-border-hover)" 
          strokeWidth="1.5"
          strokeDasharray="4 4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
        />
        <motion.path 
          d="M 250 150 Q 350 250 400 450" 
          stroke="var(--color-border-hover)" 
          strokeWidth="1.5"
          strokeDasharray="4 4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.7 }}
        />
      </svg>

      {/* Floating Card 1: Dashboard / Growth (Top Right) */}
      <motion.div 
        className="absolute top-[10%] right-[5%] w-[240px] rounded-xl bg-white/90 glass shadow-[var(--shadow-lg)] border border-[var(--color-border)] p-4 flex flex-col gap-3"
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      >
        <motion.div animate={floatAnimation(10, 0)} className="w-full h-full flex flex-col gap-3">
          <div className="flex items-center gap-2 mb-1">
            <div className="p-1.5 rounded-md bg-[var(--color-bg-secondary)]">
              <LayoutDashboard className="w-4 h-4 text-[var(--color-primary-900)]" />
            </div>
            <div className="h-3 w-16 bg-[var(--color-border-hover)] rounded-full" />
          </div>
          <div className="flex items-end gap-2 h-16 border-b border-[var(--color-border-hover)] pb-1 px-1">
            <div className="w-6 bg-[var(--color-bg-secondary)] rounded-t-sm h-[30%]" />
            <div className="w-6 bg-[var(--color-bg-secondary)] rounded-t-sm h-[50%]" />
            <div className="w-6 bg-[var(--color-primary-200)] rounded-t-sm h-[70%]" />
            <div className="w-6 bg-[var(--color-primary-900)] rounded-t-sm h-[100%]" />
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Card 2: Checklist (Bottom Left) */}
      <motion.div 
        className="absolute bottom-[15%] left-[5%] w-[200px] rounded-xl bg-white/90 glass shadow-[var(--shadow-md)] border border-[var(--color-border)] p-4 flex flex-col gap-3"
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
      >
        <motion.div animate={floatAnimation(12, 1)} className="w-full h-full flex flex-col gap-3">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 rounded-md bg-[var(--color-accent-50)]">
              <CheckSquare className="w-4 h-4 text-[var(--color-accent-600)]" />
            </div>
            <div className="h-3 w-20 bg-[var(--color-border-hover)] rounded-full" />
          </div>
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-sm border ${i === 1 ? 'bg-[var(--color-primary-900)] border-[var(--color-primary-900)]' : 'border-[var(--color-border-strong)]'}`} />
              <div className={`h-2 rounded-full ${i === 1 ? 'w-24 bg-[var(--color-text-primary)]' : 'w-16 bg-[var(--color-border-strong)]'}`} />
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Floating Card 3: Documents / Folder (Center Left) */}
      <motion.div 
        className="absolute top-[30%] left-[2%] w-[160px] rounded-xl bg-white/95 shadow-[var(--shadow-lg)] border border-[var(--color-border)] p-4 flex flex-col items-center justify-center gap-3"
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      >
        <motion.div animate={floatAnimation(9, 2)} className="w-full h-full flex flex-col items-center gap-2">
          <div className="p-3 rounded-full bg-[var(--color-bg-secondary)] mb-1">
            <FolderClosed className="w-6 h-6 text-[var(--color-charcoal)]" />
          </div>
          <div className="h-2 w-16 bg-[var(--color-text-secondary)] rounded-full" />
          <div className="h-1.5 w-10 bg-[var(--color-border-strong)] rounded-full" />
        </motion.div>
      </motion.div>

      {/* Floating Card 4: Action/Growth Metric (Bottom Right) */}
      <motion.div 
        className="absolute bottom-[25%] right-[10%] w-[180px] rounded-xl bg-[var(--color-primary-900)] text-white shadow-[var(--shadow-xl)] border border-[var(--color-border-dark)] p-4 flex flex-col gap-2"
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
      >
        <motion.div animate={floatAnimation(14, 0.5)} className="w-full h-full flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="h-2 w-12 bg-white/30 rounded-full" />
            <TrendingUp className="w-4 h-4 text-[var(--color-accent-400)]" />
          </div>
          <div className="text-2xl font-bold mt-1 tracking-tight">85%</div>
          <div className="h-1.5 w-24 bg-[var(--color-accent-500)] rounded-full" />
        </motion.div>
      </motion.div>

    </div>
  )
}
