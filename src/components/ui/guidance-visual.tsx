"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Map, Compass, Route, ListTodo } from "lucide-react"

export function GuidanceVisual() {
  const prefersReducedMotion = useReducedMotion()

  const floatAnimation = (duration: number, delay: number): any => {
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
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-radial-[at_50%_50%] from-[var(--color-primary-900)]/10 to-transparent to-70% rounded-full blur-2xl opacity-60" />
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-radial-[at_50%_50%] from-[var(--color-accent-500)]/10 to-transparent to-70% rounded-full blur-xl opacity-60" />

      {/* SVG Path (Roadmap/Decision Tree) */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 500" fill="none">
        <motion.path 
          d="M 100 400 C 150 350, 200 200, 250 250 C 300 300, 350 150, 400 150" 
          stroke="var(--color-border-strong)" 
          strokeWidth="2"
          strokeDasharray="6 6"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
        />
        <motion.circle 
          cx="250" cy="250" r="4" fill="var(--color-accent-500)"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
        />
        <motion.circle 
          cx="400" cy="150" r="4" fill="var(--color-primary-900)"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 2.2 }}
        />
      </svg>

      {/* Card 1: Map / Path (Top Left) */}
      <motion.div 
        className="absolute top-[20%] left-[10%] w-[160px] rounded-xl bg-white shadow-[var(--shadow-lg)] border border-[var(--color-border)] p-4"
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as any, delay: 0.1 }}
      >
        <motion.div animate={floatAnimation(11, 0)} className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-[var(--color-primary-50)]">
              <Map className="w-5 h-5 text-[var(--color-primary-600)]" />
            </div>
            <div className="h-2 w-12 bg-[var(--color-text-secondary)] rounded-full" />
          </div>
          <div className="h-1.5 w-full bg-[var(--color-border)] rounded-full" />
          <div className="h-1.5 w-3/4 bg-[var(--color-border)] rounded-full" />
        </motion.div>
      </motion.div>

      {/* Card 2: Decision Box (Center) */}
      <motion.div 
        className="absolute top-[40%] left-[45%] w-[180px] rounded-xl bg-[var(--color-primary-900)] shadow-[var(--shadow-xl)] border border-[var(--color-border-dark)] p-4"
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as any, delay: 0.3 }}
      >
        <motion.div animate={floatAnimation(14, 1)} className="flex flex-col items-center gap-3">
          <div className="p-2 rounded-lg bg-white/10">
            <Route className="w-6 h-6 text-[var(--color-accent-400)]" />
          </div>
          <div className="h-2 w-16 bg-white/40 rounded-full" />
          <div className="flex gap-2 w-full mt-2">
            <div className="h-6 flex-1 bg-white/10 rounded-md border border-white/20" />
            <div className="h-6 flex-1 bg-[var(--color-accent-500)]/80 rounded-md" />
          </div>
        </motion.div>
      </motion.div>

      {/* Card 3: Checklist (Bottom Right) */}
      <motion.div 
        className="absolute bottom-[20%] right-[10%] w-[160px] rounded-xl bg-white shadow-[var(--shadow-md)] border border-[var(--color-border)] p-4"
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as any, delay: 0.5 }}
      >
        <motion.div animate={floatAnimation(10, 0.5)} className="flex flex-col gap-3">
          <div className="flex items-center gap-2 mb-1">
            <ListTodo className="w-5 h-5 text-[var(--color-charcoal)]" />
            <div className="h-2 w-10 bg-[var(--color-text-secondary)] rounded-full" />
          </div>
          {[1, 2].map((i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full border-2 border-[var(--color-accent-500)] flex items-center justify-center">
                {i === 1 && <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-500)]" />}
              </div>
              <div className="h-1.5 flex-1 bg-[var(--color-border-strong)] rounded-full" />
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Floating Element: Compass (Top Right) */}
      <motion.div 
        className="absolute top-[15%] right-[25%] p-3 rounded-full bg-white shadow-lg border border-[var(--color-border)]"
        initial={{ opacity: 0, scale: 0, rotate: -45 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, type: "spring", delay: 0.7 }}
      >
        <motion.div animate={floatAnimation(8, 2)}>
          <Compass className="w-6 h-6 text-[var(--color-accent-600)]" />
        </motion.div>
      </motion.div>

    </div>
  )
}
