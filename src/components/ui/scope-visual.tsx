"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { ShieldCheck, Scale, FileText, CheckCircle2 } from "lucide-react"

export function ScopeVisual() {
  const prefersReducedMotion = useReducedMotion()

  const floatAnimation = (duration: number, delay: number) => {
    if (prefersReducedMotion) return {}
    return {
      y: [0, -5, 0],
      transition: {
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }
  }

  return (
    <div className="relative w-full aspect-square max-w-[500px] mx-auto select-none pointer-events-none">
      
      {/* Background Soft Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-radial-[at_50%_50%] from-[var(--color-primary-900)]/10 to-transparent to-70% rounded-full blur-2xl opacity-70" />
      <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-radial-[at_50%_50%] from-[var(--color-accent-500)]/10 to-transparent to-70% rounded-full blur-xl opacity-60" />

      {/* SVG Connecting Elements */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 500" fill="none">
        <motion.circle 
          cx="250" cy="250" r="140" 
          stroke="var(--color-border-strong)" 
          strokeWidth="1"
          strokeDasharray="4 8"
          initial={{ rotate: -90, opacity: 0 }}
          whileInView={{ rotate: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 3, ease: "easeOut" }}
        />
        <motion.path 
          d="M 110 250 L 390 250" 
          stroke="var(--color-border-hover)" 
          strokeWidth="1"
          strokeDasharray="2 4"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.5 }}
        />
      </svg>

      {/* Center Shield Element */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-2xl bg-white shadow-[var(--shadow-xl)] border border-[var(--color-border)] flex items-center justify-center z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
      >
        <ShieldCheck className="w-10 h-10 text-[var(--color-primary-900)]" />
      </motion.div>

      {/* Floating Card 1: Documents (Top Right) */}
      <motion.div 
        className="absolute top-[15%] right-[10%] w-[160px] rounded-xl bg-white/90 glass shadow-[var(--shadow-lg)] border border-[var(--color-border)] p-4"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      >
        <motion.div animate={floatAnimation(9, 0)} className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-md bg-[var(--color-primary-50)]">
              <FileText className="w-4 h-4 text-[var(--color-primary-600)]" />
            </div>
            <div className="h-2 w-12 bg-[var(--color-text-secondary)] rounded-full" />
          </div>
          <div className="h-1.5 w-full bg-[var(--color-border)] rounded-full" />
          <div className="h-1.5 w-2/3 bg-[var(--color-border)] rounded-full" />
        </motion.div>
      </motion.div>

      {/* Floating Card 2: Scale/Balance (Bottom Left) */}
      <motion.div 
        className="absolute bottom-[20%] left-[10%] w-[140px] rounded-xl bg-[var(--color-primary-900)] shadow-[var(--shadow-lg)] border border-[var(--color-border-dark)] p-4 text-white"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
      >
        <motion.div animate={floatAnimation(11, 1)} className="flex flex-col items-center gap-3">
          <Scale className="w-6 h-6 text-[var(--color-accent-400)]" />
          <div className="h-1.5 w-16 bg-white/40 rounded-full" />
        </motion.div>
      </motion.div>

      {/* Floating Card 3: Checklist Standard (Bottom Right) */}
      <motion.div 
        className="absolute bottom-[10%] right-[15%] w-[150px] rounded-xl bg-white shadow-[var(--shadow-md)] border border-[var(--color-border)] p-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
      >
        <motion.div animate={floatAnimation(13, 0.5)} className="flex flex-col gap-2">
          <div className="flex items-center gap-2 mb-1">
            <CheckCircle2 className="w-4 h-4 text-[var(--color-success)]" />
            <div className="h-2 flex-1 bg-[var(--color-text-secondary)] rounded-full" />
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[var(--color-success)]" />
            <div className="h-2 w-12 bg-[var(--color-text-secondary)] rounded-full" />
          </div>
        </motion.div>
      </motion.div>

    </div>
  )
}
