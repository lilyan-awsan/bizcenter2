"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Users, UserPlus, Briefcase, Rocket } from "lucide-react"

export function WhoWeHelpVisual() {
  const prefersReducedMotion = useReducedMotion()

  const floatAnimation = (duration: number, delay: number) => {
    if (prefersReducedMotion) return {}
    return {
      y: [0, -6, 0],
      transition: {
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    }
  }

  return (
    <div className="relative w-full aspect-square max-w-[500px] mx-auto select-none pointer-events-none">
      
      {/* Background Soft Gradients */}
      <div className="absolute top-[30%] left-[20%] w-56 h-56 bg-radial-[at_50%_50%] from-[var(--color-primary-900)]/10 to-transparent to-70% rounded-full blur-2xl opacity-70" />
      <div className="absolute bottom-[30%] right-[20%] w-48 h-48 bg-radial-[at_50%_50%] from-[var(--color-accent-500)]/15 to-transparent to-70% rounded-full blur-xl opacity-60" />

      {/* SVG Central Nodes (Network / People representation) */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 500" fill="none">
        {/* Core Node */}
        <motion.circle 
          cx="250" cy="250" r="80" 
          stroke="var(--color-primary-200)" 
          strokeWidth="1"
          strokeDasharray="4 6"
          initial={{ rotate: 90, opacity: 0 }}
          whileInView={{ rotate: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 3, ease: "easeOut" }}
        />
        
        {/* Connection Lines */}
        <motion.path 
          d="M 250 170 L 150 120" 
          stroke="var(--color-border-strong)" 
          strokeWidth="1.5"
          strokeDasharray="3 3"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.2 }}
        />
        <motion.path 
          d="M 250 330 L 350 400" 
          stroke="var(--color-border-strong)" 
          strokeWidth="1.5"
          strokeDasharray="3 3"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.4 }}
        />
        <motion.path 
          d="M 330 250 L 420 200" 
          stroke="var(--color-border-strong)" 
          strokeWidth="1.5"
          strokeDasharray="3 3"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.6 }}
        />
      </svg>

      {/* Node 1: Entrepreneurs (Top Left) */}
      <motion.div 
        className="absolute top-[15%] left-[10%] w-[150px] rounded-xl bg-white shadow-[var(--shadow-md)] border border-[var(--color-border)] p-4"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      >
        <motion.div animate={floatAnimation(10, 0)} className="flex flex-col items-center text-center gap-2">
          <div className="p-2 rounded-full bg-[var(--color-primary-50)]">
            <Rocket className="w-5 h-5 text-[var(--color-primary-600)]" />
          </div>
          <div className="h-1.5 w-16 bg-[var(--color-text-secondary)] rounded-full" />
          <div className="h-1.5 w-10 bg-[var(--color-border)] rounded-full" />
        </motion.div>
      </motion.div>

      {/* Node 2: Small Businesses (Center) */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] rounded-xl bg-[var(--color-primary-900)] text-white shadow-[var(--shadow-xl)] border border-[var(--color-border-dark)] p-5 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      >
        <motion.div animate={floatAnimation(13, 1)} className="flex flex-col items-center text-center gap-3">
          <div className="p-2.5 rounded-xl bg-white/10">
            <Briefcase className="w-6 h-6 text-[var(--color-accent-400)]" />
          </div>
          <div className="h-2 w-20 bg-white/50 rounded-full" />
          <div className="flex gap-1.5 w-full justify-center">
            <div className="w-2 h-2 rounded-full bg-white/20" />
            <div className="w-2 h-2 rounded-full bg-white/40" />
            <div className="w-2 h-2 rounded-full bg-white/60" />
          </div>
        </motion.div>
      </motion.div>

      {/* Node 3: Individuals (Right) */}
      <motion.div 
        className="absolute top-[30%] right-[5%] w-[140px] rounded-xl bg-white shadow-[var(--shadow-lg)] border border-[var(--color-border)] p-4"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
      >
        <motion.div animate={floatAnimation(9, 0.5)} className="flex flex-col items-center text-center gap-2">
          <div className="p-2 rounded-full bg-[var(--color-accent-50)]">
            <UserPlus className="w-5 h-5 text-[var(--color-accent-600)]" />
          </div>
          <div className="h-1.5 w-14 bg-[var(--color-text-secondary)] rounded-full" />
        </motion.div>
      </motion.div>

      {/* Node 4: Diverse Support (Bottom Right) */}
      <motion.div 
        className="absolute bottom-[15%] left-[60%] w-[160px] rounded-xl bg-white/90 glass shadow-[var(--shadow-md)] border border-[var(--color-border)] p-4"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
      >
        <motion.div animate={floatAnimation(11, 2)} className="flex flex-col items-center text-center gap-2">
          <Users className="w-5 h-5 text-[var(--color-charcoal)] mb-1" />
          <div className="flex gap-2">
            <div className="h-1.5 w-8 bg-[var(--color-border-strong)] rounded-full" />
            <div className="h-1.5 w-12 bg-[var(--color-border-strong)] rounded-full" />
          </div>
          <div className="h-1.5 w-16 bg-[var(--color-border-strong)] rounded-full" />
        </motion.div>
      </motion.div>

    </div>
  )
}
