"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Users, Target, Rocket, Lightbulb } from "lucide-react"

export function StartupAudienceVisual() {
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
      <div className="absolute top-[20%] left-[20%] w-56 h-56 bg-radial-[at_50%_50%] from-[var(--color-primary-900)]/15 to-transparent to-70% rounded-full blur-2xl opacity-60" />
      <div className="absolute bottom-[20%] right-[20%] w-48 h-48 bg-radial-[at_50%_50%] from-[var(--color-accent-400)]/20 to-transparent to-70% rounded-full blur-xl opacity-60" />

      {/* Central Path / Target Network */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 500" fill="none">
        <motion.circle 
          cx="250" cy="250" r="100" 
          stroke="var(--color-border-strong)" 
          strokeWidth="1.5"
          strokeDasharray="4 6"
          initial={{ rotate: -90, opacity: 0 }}
          whileInView={{ rotate: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        />
        <motion.circle 
          cx="250" cy="250" r="160" 
          stroke="var(--color-border-hover)" 
          strokeWidth="1"
          strokeDasharray="2 8"
          initial={{ rotate: 90, opacity: 0 }}
          whileInView={{ rotate: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 3, ease: "easeOut" }}
        />
      </svg>

      {/* Center Target Element */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-white shadow-[var(--shadow-lg)] border border-[var(--color-border)] flex items-center justify-center z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
      >
        <Target className="w-10 h-10 text-[var(--color-primary-900)]" />
      </motion.div>

      {/* Floating Node 1: Lightbulb / Idea (Top Right) */}
      <motion.div 
        className="absolute top-[12%] right-[12%] w-[140px] rounded-xl bg-[var(--color-primary-900)] shadow-[var(--shadow-xl)] border border-[var(--color-border-dark)] p-4 text-white z-20"
        initial={{ opacity: 0, scale: 0.9, x: 20 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      >
        <motion.div animate={floatAnimation(10, 0)} className="flex flex-col items-center gap-2">
          <div className="p-2 rounded-full bg-white/10">
            <Lightbulb className="w-5 h-5 text-[var(--color-accent-400)]" />
          </div>
          <div className="h-1.5 w-16 bg-white/40 rounded-full" />
        </motion.div>
      </motion.div>

      {/* Floating Node 2: Rocket / Launch (Bottom Right) */}
      <motion.div 
        className="absolute bottom-[15%] right-[5%] w-[150px] rounded-xl bg-white shadow-[var(--shadow-md)] border border-[var(--color-border)] p-4 z-20"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
      >
        <motion.div animate={floatAnimation(12, 1)} className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <Rocket className="w-5 h-5 text-[var(--color-accent-600)]" />
            <div className="h-2 flex-1 bg-[var(--color-text-secondary)] rounded-full" />
          </div>
          <div className="flex gap-1.5 h-6 items-end mt-1">
            {[20, 40, 70, 100].map((h, i) => (
              <div key={i} className="flex-1 bg-[var(--color-bg-secondary)] rounded-t-sm" style={{ height: `${h}%` }} />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Node 3: People / Team (Left) */}
      <motion.div 
        className="absolute top-[40%] left-[5%] w-[140px] rounded-xl bg-white/95 glass shadow-[var(--shadow-lg)] border border-[var(--color-border)] p-4 z-20"
        initial={{ opacity: 0, scale: 0.9, x: -20 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
      >
        <motion.div animate={floatAnimation(11, 0.5)} className="flex flex-col items-center gap-3">
          <Users className="w-6 h-6 text-[var(--color-charcoal)]" />
          <div className="flex flex-col w-full gap-2 items-center">
            <div className="h-1.5 w-full bg-[var(--color-border-strong)] rounded-full" />
            <div className="h-1.5 w-2/3 bg-[var(--color-border-strong)] rounded-full" />
          </div>
        </motion.div>
      </motion.div>

    </div>
  )
}
