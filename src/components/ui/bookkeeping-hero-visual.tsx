"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Calculator, ReceiptText, BarChart3, PieChart } from "lucide-react"

export function BookkeepingHeroVisual() {
  const prefersReducedMotion = useReducedMotion()

  const floatAnimation = (duration: number, delay: number, yDist: number = -8) => {
    if (prefersReducedMotion) return {}
    return {
      y: [0, yDist, 0],
      transition: {
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }
  }

  return (
    <div className="relative w-full aspect-[4/3] max-w-[600px] mx-auto select-none pointer-events-none">
      
      {/* Background Soft Gradients */}
      <div className="absolute top-[10%] right-[10%] w-72 h-72 bg-radial-[at_50%_50%] from-[var(--color-primary-900)]/10 to-transparent to-70% rounded-full blur-3xl opacity-70" />
      <div className="absolute bottom-[20%] left-[10%] w-64 h-64 bg-radial-[at_50%_50%] from-[var(--color-accent-400)]/15 to-transparent to-70% rounded-full blur-3xl opacity-60" />

      {/* Main Base - Workspace / Desk representation */}
      <motion.div 
        className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[80%] h-12 bg-white/40 rounded-full blur-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      />

      {/* Center Dashboard (Tablet/Screen) */}
      <motion.div 
        className="absolute bottom-[15%] left-1/2 -translate-x-1/2 w-[280px] z-20 flex flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      >
        <motion.div animate={floatAnimation(14, 0, -5)} className="w-full flex flex-col items-center">
          <div className="w-[260px] h-[180px] bg-white rounded-xl border-4 border-[var(--color-border-strong)] p-3 shadow-lg flex flex-col gap-3 relative">
            <div className="w-full h-8 flex justify-between items-center border-b border-[var(--color-border)] pb-2">
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-bg-secondary)]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-bg-secondary)]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-bg-secondary)]" />
              </div>
              <div className="h-2 w-16 bg-[var(--color-text-secondary)] rounded-full" />
            </div>
            
            <div className="flex gap-3 h-full">
              {/* Left Column (Chart) */}
              <div className="w-1/3 h-full flex flex-col gap-2 border-r border-[var(--color-border)] pr-2">
                <div className="h-2 w-full bg-[var(--color-border)] rounded-full" />
                <div className="flex-1 flex items-end gap-1 pt-2">
                  {[40, 60, 30, 80, 50].map((h, i) => (
                    <div key={i} className="flex-1 bg-[var(--color-primary-200)] rounded-t-sm" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
              {/* Right Column (Data Rows) */}
              <div className="flex-1 flex flex-col gap-2 pt-1">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-full h-4 bg-[var(--color-bg-secondary)] rounded-md flex items-center px-2 justify-between">
                    <div className="h-1.5 w-10 bg-[var(--color-border-strong)] rounded-full" />
                    <div className="h-1.5 w-6 bg-[var(--color-accent-200)] rounded-full" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Card 1: Calculator (Top Left) */}
      <motion.div 
        className="absolute top-[10%] left-[5%] w-[120px] rounded-2xl bg-white shadow-[var(--shadow-xl)] border border-[var(--color-border)] p-3 z-30"
        initial={{ opacity: 0, scale: 0.9, x: -20, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, x: 0, rotate: -5 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
      >
        <motion.div animate={floatAnimation(10, 0.5, -4)} className="flex flex-col gap-2 items-center">
          <div className="w-full h-8 bg-[var(--color-bg-secondary)] rounded-lg flex items-center justify-end px-2 mb-1 border border-[var(--color-border-hover)]">
            <div className="h-2 w-12 bg-[var(--color-text-secondary)] rounded-full" />
          </div>
          <div className="grid grid-cols-3 gap-1.5 w-full">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-full aspect-square bg-[var(--color-border-hover)] rounded-md" />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Card 2: Receipt (Top Right) */}
      <motion.div 
        className="absolute top-[20%] right-[2%] w-[130px] rounded-xl bg-white/95 glass shadow-[var(--shadow-md)] border border-[var(--color-border)] p-4 z-15"
        initial={{ opacity: 0, scale: 0.9, x: 20, rotate: 6 }}
        animate={{ opacity: 1, scale: 1, x: 0, rotate: 6 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
      >
        <motion.div animate={floatAnimation(11, 1)} className="flex flex-col gap-2">
          <div className="flex justify-center mb-1">
            <ReceiptText className="w-6 h-6 text-[var(--color-slate)]" />
          </div>
          <div className="h-1.5 w-full bg-[var(--color-border)] rounded-full border-b border-dashed border-[var(--color-border-strong)] pb-2 mb-2" />
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex justify-between items-center w-full">
              <div className="h-1.5 w-10 bg-[var(--color-border)] rounded-full" />
              <div className="h-1.5 w-6 bg-[var(--color-text-secondary)] rounded-full" />
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Floating Card 3: Important Metric / Pie Chart (Bottom Left) */}
      <motion.div 
        className="absolute bottom-[5%] left-[25%] w-[140px] rounded-xl bg-[var(--color-primary-900)] text-white shadow-[var(--shadow-lg)] border border-[var(--color-border-dark)] p-4 z-30"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
      >
        <motion.div animate={floatAnimation(13, 2, -6)} className="flex flex-col items-center gap-3">
          <PieChart className="w-8 h-8 text-[var(--color-accent-400)]" />
          <div className="h-2 w-16 bg-white/40 rounded-full" />
        </motion.div>
      </motion.div>

      {/* Background folders / papers */}
      <motion.div 
        className="absolute top-[30%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-[180px] h-[220px] bg-[var(--color-primary-50)] rounded-lg shadow-sm border border-[var(--color-border)] z-0 rotate-[-12deg]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      />
      <motion.div 
        className="absolute top-[32%] left-[55%] -translate-x-1/2 -translate-y-1/2 w-[180px] h-[220px] bg-white rounded-lg shadow-sm border border-[var(--color-border)] z-0 rotate-[6deg]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />

    </div>
  )
}
