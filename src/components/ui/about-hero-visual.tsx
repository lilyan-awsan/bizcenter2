"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { ShieldCheck, Compass, Briefcase, FileText } from "lucide-react"

export function AboutHeroVisual() {
  const prefersReducedMotion = useReducedMotion()

  const floatAnimation = (duration: number, delay: number, yDist: number = -10) => {
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
    <div className="relative w-full aspect-[4/3] max-w-[650px] mx-auto select-none pointer-events-none">
      
      {/* Background Soft Gradients */}
      <div className="absolute top-[20%] right-[15%] w-[350px] h-[350px] bg-radial-[at_50%_50%] from-[var(--color-primary-900)]/20 to-transparent to-70% rounded-full blur-3xl opacity-70" />
      <div className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] bg-radial-[at_50%_50%] from-[var(--color-accent-400)]/25 to-transparent to-70% rounded-full blur-3xl opacity-60" />

      {/* Central Abstract Building/Structure */}
      <motion.div 
        className="absolute top-[15%] left-[20%] w-[220px] z-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      >
        <motion.div animate={floatAnimation(15, 0, -5)} className="w-full">
          <div className="bg-white rounded-[24px] border border-[var(--color-border-strong)] shadow-[var(--shadow-2xl)] p-6 flex flex-col gap-5">
            <div className="w-12 h-12 rounded-full bg-[var(--color-primary-50)] flex items-center justify-center">
              <Compass className="w-6 h-6 text-[var(--color-primary-900)]" />
            </div>
            <div>
              <div className="h-2.5 w-3/4 bg-[var(--color-primary-900)] rounded-full mb-2.5" />
              <div className="h-2 w-full bg-[var(--color-slate)]/30 rounded-full mb-2.5" />
              <div className="h-2 w-5/6 bg-[var(--color-slate)]/30 rounded-full" />
            </div>
            <div className="grid grid-cols-2 gap-3 mt-2">
              <div className="h-10 rounded-xl bg-[#F8F7F4] border border-[var(--color-border)]" />
              <div className="h-10 rounded-xl bg-[var(--color-accent-50)] border border-[var(--color-accent-100)]" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Trust Shield Card (Top Right) */}
      <motion.div 
        className="absolute top-[10%] right-[10%] w-[160px] rounded-[20px] bg-[var(--color-primary-900)] shadow-[var(--shadow-xl)] border border-[var(--color-border-dark)] p-4 z-30"
        initial={{ opacity: 0, scale: 0.9, x: 20, rotate: 4 }}
        animate={{ opacity: 1, scale: 1, x: 0, rotate: 4 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
      >
        <motion.div animate={floatAnimation(12, 1, -6)} className="flex flex-col items-center gap-3 text-center">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5 text-[var(--color-accent-400)]" />
          </div>
          <div className="flex flex-col gap-2 w-full mt-1">
            <div className="h-1.5 w-full bg-white/40 rounded-full mx-auto" />
            <div className="h-1.5 w-3/4 bg-white/20 rounded-full mx-auto" />
          </div>
        </motion.div>
      </motion.div>

      {/* Document/Organization Card (Bottom Left) */}
      <motion.div 
        className="absolute bottom-[25%] left-[5%] w-[150px] rounded-[20px] bg-white shadow-[var(--shadow-lg)] border border-[var(--color-border)] p-4 z-15"
        initial={{ opacity: 0, scale: 0.9, x: -20, rotate: -3 }}
        animate={{ opacity: 1, scale: 1, x: 0, rotate: -3 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
      >
        <motion.div animate={floatAnimation(14, 2, -4)} className="flex flex-col gap-3">
          <div className="w-10 h-10 rounded-[12px] bg-[var(--color-accent-50)] flex items-center justify-center">
            <FileText className="w-5 h-5 text-[var(--color-accent-600)]" />
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="h-1.5 w-full bg-[var(--color-slate)] rounded-full" />
            <div className="h-1.5 w-4/5 bg-[var(--color-slate)] rounded-full" />
            <div className="h-1.5 w-full bg-[var(--color-border-strong)] rounded-full mt-1" />
          </div>
        </motion.div>
      </motion.div>

      {/* People/Community Card (Bottom Right) */}
      <motion.div 
        className="absolute bottom-[10%] right-[20%] w-[180px] rounded-[20px] bg-white shadow-[var(--shadow-lg)] border border-[var(--color-border-strong)] p-4 z-30"
        initial={{ opacity: 0, scale: 0.9, y: 20, rotate: -2 }}
        animate={{ opacity: 1, scale: 1, y: 0, rotate: -2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
      >
        <motion.div animate={floatAnimation(11, 0.5, -5)} className="flex items-center gap-3">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-[var(--color-primary-100)] border-2 border-white flex items-center justify-center">
              <Briefcase className="w-3.5 h-3.5 text-[var(--color-primary-900)]" />
            </div>
            <div className="w-8 h-8 rounded-full bg-[var(--color-accent-100)] border-2 border-white flex items-center justify-center">
              <ShieldCheck className="w-3.5 h-3.5 text-[var(--color-accent-600)]" />
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-1.5">
            <div className="h-1.5 w-full bg-[var(--color-primary-900)] rounded-full" />
            <div className="h-1 w-2/3 bg-[var(--color-slate)] rounded-full" />
          </div>
        </motion.div>
      </motion.div>

    </div>
  )
}
