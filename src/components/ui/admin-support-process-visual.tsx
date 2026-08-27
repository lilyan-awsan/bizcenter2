"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { FileStack, ArrowRightCircle, Folders, CheckCircle2 } from "lucide-react"

export function AdminSupportProcessVisual() {
  const prefersReducedMotion = useReducedMotion()

  const floatAnimation = (duration: number, delay: number, yDist: number = -6) => {
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
    <div className="relative w-full aspect-square max-w-[450px] mx-auto select-none pointer-events-none">
      
      {/* Background Soft Gradients */}
      <div className="absolute top-[30%] left-[20%] w-56 h-56 bg-radial-[at_50%_50%] from-[var(--color-primary-900)]/10 to-transparent to-70% rounded-full blur-2xl opacity-70" />
      <div className="absolute bottom-[30%] right-[20%] w-48 h-48 bg-radial-[at_50%_50%] from-[var(--color-accent-500)]/15 to-transparent to-70% rounded-full blur-xl opacity-60" />

      {/* SVG Connecting Path (Workflow Line) */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 500" fill="none">
        <motion.path 
          d="M 120 150 C 120 250, 380 250, 380 350" 
          stroke="var(--color-border-strong)" 
          strokeWidth="2"
          strokeDasharray="4 6"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        />
        <motion.circle 
          cx="120" cy="150" r="4" fill="var(--color-primary-900)"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 2.5 }}
        />
        <motion.circle 
          cx="380" cy="350" r="4" fill="var(--color-accent-500)"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 2.7 }}
        />
      </svg>

      {/* Node 1: Unorganized Input (Top Left) */}
      <motion.div 
        className="absolute top-[15%] left-[5%] w-[160px] rounded-xl bg-white shadow-[var(--shadow-md)] border border-[var(--color-border)] p-4 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      >
        <motion.div animate={floatAnimation(10, 0)} className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-md bg-[var(--color-bg-secondary)]">
              <FileStack className="w-5 h-5 text-[var(--color-slate)]" />
            </div>
            <div className="h-1.5 w-16 bg-[var(--color-text-secondary)] rounded-full" />
          </div>
          <div className="flex flex-col gap-1.5 relative h-10">
            {/* Scattered lines */}
            <div className="absolute top-1 left-2 w-16 h-1.5 bg-[var(--color-border-strong)] rounded-full rotate-[-5deg]" />
            <div className="absolute top-4 left-6 w-12 h-1.5 bg-[var(--color-text-secondary)] rounded-full rotate-[12deg]" />
            <div className="absolute top-7 left-1 w-20 h-1.5 bg-[var(--color-border)] rounded-full rotate-[-2deg]" />
          </div>
        </motion.div>
      </motion.div>

      {/* Node 2: Processing / Review (Center) */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160px] rounded-xl bg-[var(--color-primary-900)] text-white shadow-[var(--shadow-xl)] border border-[var(--color-border-dark)] p-4 z-20"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      >
        <motion.div animate={floatAnimation(13, 1)} className="flex flex-col items-center text-center gap-3">
          <div className="p-2.5 rounded-xl bg-white/10">
            <Folders className="w-6 h-6 text-[var(--color-accent-400)]" />
          </div>
          <div className="flex flex-col gap-2 w-full mt-1">
            <div className="flex justify-between items-center bg-white/10 rounded px-2 py-1">
              <div className="w-2 h-2 rounded-full bg-[var(--color-accent-400)]" />
              <div className="h-1 w-16 bg-white/40 rounded-full" />
            </div>
            <div className="flex justify-between items-center bg-white/10 rounded px-2 py-1">
              <div className="w-2 h-2 rounded-full bg-white/30" />
              <div className="h-1 w-16 bg-white/20 rounded-full" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Abstract Element */}
      <motion.div 
        className="absolute top-[40%] right-[15%] p-3 rounded-full bg-white shadow-lg border border-[var(--color-border)] z-30"
        initial={{ opacity: 0, scale: 0, x: -20 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.5 }}
      >
        <motion.div animate={floatAnimation(8, 2, -4)}>
          <ArrowRightCircle className="w-6 h-6 text-[var(--color-accent-600)]" />
        </motion.div>
      </motion.div>

      {/* Node 3: Organized Output / Complete (Bottom Right) */}
      <motion.div 
        className="absolute bottom-[15%] right-[5%] w-[160px] rounded-xl bg-white/95 glass shadow-[var(--shadow-lg)] border border-[var(--color-border)] p-4 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
      >
        <motion.div animate={floatAnimation(11, 2)} className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[var(--color-primary-900)]" />
            <div className="h-2 flex-1 bg-[var(--color-text-secondary)] rounded-full" />
          </div>
          {/* Perfectly aligned lines */}
          <div className="flex flex-col gap-2 mt-2">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-border-strong)]" />
              <div className="h-1.5 w-full bg-[var(--color-border)] rounded-full" />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-border-strong)]" />
              <div className="h-1.5 w-3/4 bg-[var(--color-border)] rounded-full" />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-border-strong)]" />
              <div className="h-1.5 w-5/6 bg-[var(--color-border)] rounded-full" />
            </div>
          </div>
        </motion.div>
      </motion.div>

    </div>
  )
}
