"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Footprints, CheckCircle2, ArrowRightCircle } from "lucide-react"

export function NewcomerWelcomeVisual() {
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

      {/* Pathway SVG */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 500" fill="none">
        <motion.path 
          d="M 100 350 C 150 350, 200 150, 400 150" 
          stroke="var(--color-border-strong)" 
          strokeWidth="3"
          strokeDasharray="6 8"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        />
        
        {/* Pathway Nodes */}
        <motion.circle cx="100" cy="350" r="6" fill="var(--color-primary-900)" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 2.2 }} />
        <motion.circle cx="250" cy="225" r="4" fill="var(--color-slate)" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 2.4 }} />
        <motion.circle cx="400" cy="150" r="6" fill="var(--color-accent-500)" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 2.7 }} />
      </svg>

      {/* Start Node: Confusion / Unknown (Bottom Left) */}
      <motion.div 
        className="absolute bottom-[20%] left-[5%] w-[150px] rounded-xl bg-white shadow-[var(--shadow-md)] border border-[var(--color-border)] p-4 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      >
        <motion.div animate={floatAnimation(10, 0)} className="flex flex-col gap-3 items-center">
          <div className="p-2 rounded-full bg-[var(--color-bg-secondary)] text-[var(--color-slate)]">
            <Footprints className="w-6 h-6" />
          </div>
          <div className="w-full h-1.5 bg-[var(--color-border-strong)] rounded-full" />
        </motion.div>
      </motion.div>

      {/* Center Node: Guidance */}
      <motion.div 
        className="absolute top-[40%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-[160px] rounded-xl bg-[var(--color-primary-900)] text-white shadow-[var(--shadow-xl)] border border-[var(--color-border-dark)] p-4 z-20"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      >
        <motion.div animate={floatAnimation(13, 1)} className="flex flex-col items-center text-center gap-3">
          <div className="p-2 rounded-xl bg-white/10">
            <ArrowRightCircle className="w-6 h-6 text-[var(--color-accent-400)]" />
          </div>
          <div className="flex flex-col gap-1.5 w-full mt-1">
            <div className="h-1.5 w-full bg-white/30 rounded-full" />
            <div className="h-1.5 w-2/3 bg-white/30 rounded-full mx-auto" />
          </div>
        </motion.div>
      </motion.div>

      {/* End Node: Clarity / Success (Top Right) */}
      <motion.div 
        className="absolute top-[15%] right-[5%] w-[160px] rounded-xl bg-white/95 glass shadow-[var(--shadow-lg)] border border-[var(--color-border)] p-4 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
      >
        <motion.div animate={floatAnimation(11, 2)} className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[var(--color-accent-600)]" />
            <div className="h-2 flex-1 bg-[var(--color-text-secondary)] rounded-full" />
          </div>
          <div className="flex flex-col gap-2 mt-1">
            <div className="h-1.5 w-full bg-[var(--color-border-strong)] rounded-full" />
            <div className="h-1.5 w-4/5 bg-[var(--color-border-strong)] rounded-full" />
          </div>
        </motion.div>
      </motion.div>

    </div>
  )
}
