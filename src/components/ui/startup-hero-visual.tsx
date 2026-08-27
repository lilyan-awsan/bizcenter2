"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { FileCheck, Laptop, Building2, BriefcaseBusiness } from "lucide-react"

export function StartupHeroVisual() {
  const prefersReducedMotion = useReducedMotion()

  const floatAnimation = (duration: number, delay: number, yDist: number = -8) => {
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
    <div className="relative w-full aspect-[4/3] max-w-[600px] mx-auto select-none pointer-events-none">
      
      {/* Background Soft Gradients */}
      <div className="absolute top-[20%] right-[15%] w-72 h-72 bg-radial-[at_50%_50%] from-[var(--color-primary-900)]/15 to-transparent to-70% rounded-full blur-3xl opacity-70" />
      <div className="absolute bottom-[10%] left-[10%] w-64 h-64 bg-radial-[at_50%_50%] from-[var(--color-accent-400)]/20 to-transparent to-70% rounded-full blur-3xl opacity-60" />

      {/* Main Base - Workspace / Desk representation */}
      <motion.div 
        className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[80%] h-12 bg-white/40 rounded-full blur-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      />

      {/* Center Laptop */}
      <motion.div 
        className="absolute bottom-[25%] left-1/2 -translate-x-1/2 w-[220px] z-20 flex flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      >
        <motion.div animate={floatAnimation(12, 0, -4)} className="w-full flex flex-col items-center">
          {/* Laptop Screen */}
          <div className="w-[180px] h-[120px] bg-white rounded-t-xl border-x-4 border-t-4 border-[var(--color-border-strong)] p-2 shadow-sm flex flex-col gap-2 overflow-hidden relative">
            <div className="w-full h-3 bg-[var(--color-bg-secondary)] rounded-sm" />
            <div className="w-2/3 h-2 bg-[var(--color-bg-secondary)] rounded-sm" />
            <div className="w-full h-full bg-[var(--color-primary-50)] rounded mt-1 overflow-hidden relative">
              <div className="absolute top-2 left-2 w-8 h-8 rounded bg-[var(--color-accent-200)]" />
              <div className="absolute top-3 left-12 right-2 h-2 rounded-full bg-white" />
              <div className="absolute top-6 left-12 right-6 h-2 rounded-full bg-white" />
            </div>
          </div>
          {/* Laptop Base */}
          <div className="w-full h-3 bg-[var(--color-border-strong)] rounded-b-xl shadow-lg relative flex justify-center">
            <div className="w-16 h-1 bg-[var(--color-border)] rounded-b-sm" />
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Card 1: Registration/Building (Top Left) */}
      <motion.div 
        className="absolute top-[15%] left-[5%] w-[150px] rounded-xl bg-white shadow-[var(--shadow-lg)] border border-[var(--color-border)] p-4 z-10"
        initial={{ opacity: 0, scale: 0.9, x: -20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
      >
        <motion.div animate={floatAnimation(10, 0.5)} className="flex flex-col gap-2">
          <div className="flex items-center gap-2 mb-1">
            <Building2 className="w-5 h-5 text-[var(--color-primary-900)]" />
            <div className="h-1.5 flex-1 bg-[var(--color-text-secondary)] rounded-full" />
          </div>
          <div className="h-1.5 w-full bg-[var(--color-border)] rounded-full" />
          <div className="h-1.5 w-3/4 bg-[var(--color-border)] rounded-full" />
        </motion.div>
      </motion.div>

      {/* Floating Card 2: Checklist (Right) */}
      <motion.div 
        className="absolute top-[25%] right-[5%] w-[160px] rounded-xl bg-[var(--color-primary-900)] text-white shadow-[var(--shadow-xl)] border border-[var(--color-border-dark)] p-4 z-15"
        initial={{ opacity: 0, scale: 0.9, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
      >
        <motion.div animate={floatAnimation(13, 1)} className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-md bg-white/10">
              <FileCheck className="w-4 h-4 text-[var(--color-accent-400)]" />
            </div>
            <div className="h-2 w-16 bg-white/40 rounded-full" />
          </div>
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-sm border border-white/30 flex items-center justify-center">
                {i < 3 && <div className="w-1.5 h-1.5 bg-[var(--color-accent-400)] rounded-sm" />}
              </div>
              <div className="h-1.5 flex-1 bg-white/20 rounded-full" />
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Floating Element: Briefcase (Bottom Left) */}
      <motion.div 
        className="absolute bottom-[10%] left-[20%] p-4 rounded-full bg-white shadow-lg border border-[var(--color-border)] z-30"
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.6 }}
      >
        <motion.div animate={floatAnimation(9, 2, -5)}>
          <BriefcaseBusiness className="w-6 h-6 text-[var(--color-accent-600)]" />
        </motion.div>
      </motion.div>

      {/* Background Document Shadow Stack (Center behind laptop) */}
      <motion.div 
        className="absolute top-[40%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-[160px] h-[200px] bg-white rounded-lg shadow-sm border border-[var(--color-border)] z-0 rotate-[-8deg]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      />
      <motion.div 
        className="absolute top-[42%] left-[55%] -translate-x-1/2 -translate-y-1/2 w-[160px] h-[200px] bg-white rounded-lg shadow-sm border border-[var(--color-border)] z-0 rotate-[4deg]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />

    </div>
  )
}
