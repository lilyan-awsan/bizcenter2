"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { LayoutDashboard, CalendarClock, MessageSquare, ClipboardCheck, FolderKanban } from "lucide-react"

export function BusinessSupportHeroVisual() {
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
    <div className="relative w-full aspect-[4/3] max-w-[650px] mx-auto select-none pointer-events-none">
      
      {/* Background Soft Gradients */}
      <div className="absolute top-[10%] right-[5%] w-[350px] h-[350px] bg-radial-[at_50%_50%] from-[var(--color-primary-900)]/15 to-transparent to-70% rounded-full blur-3xl opacity-70" />
      <div className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] bg-radial-[at_50%_50%] from-[var(--color-accent-400)]/20 to-transparent to-70% rounded-full blur-3xl opacity-60" />

      {/* Main Base - Desktop representation */}
      <motion.div 
        className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[90%] h-16 bg-white/50 rounded-full blur-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      />

      {/* Central Object: Large Task/Kanban Board */}
      <motion.div 
        className="absolute bottom-[12%] left-1/2 -translate-x-1/2 w-[340px] z-20 flex flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      >
        <motion.div animate={floatAnimation(15, 0, -5)} className="w-full flex flex-col items-center">
          <div className="w-[320px] h-[220px] bg-white rounded-2xl border-4 border-[var(--color-border-strong)] p-4 shadow-xl flex flex-col gap-4 relative">
            <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-3">
              <div className="flex items-center gap-2">
                <LayoutDashboard className="w-5 h-5 text-[var(--color-primary-900)]" />
                <div className="h-2.5 w-20 bg-[var(--color-text-secondary)] rounded-full" />
              </div>
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[var(--color-border-strong)]" />
                <div className="w-3 h-3 rounded-full bg-[var(--color-accent-200)]" />
              </div>
            </div>
            
            {/* Kanban Columns */}
            <div className="flex gap-3 h-full">
              {/* Col 1 */}
              <div className="flex-1 flex flex-col gap-2">
                <div className="h-2 w-12 bg-[var(--color-border-strong)] rounded-full mb-1" />
                <div className="w-full h-12 bg-[var(--color-bg-secondary)] rounded-lg p-2 border border-[var(--color-border)]">
                  <div className="h-1.5 w-3/4 bg-[var(--color-text-secondary)] rounded-full mb-2" />
                  <div className="h-1.5 w-1/2 bg-[var(--color-border-strong)] rounded-full" />
                </div>
                <div className="w-full h-10 bg-[var(--color-bg-secondary)] rounded-lg p-2 border border-[var(--color-border)]">
                  <div className="h-1.5 w-full bg-[var(--color-text-secondary)] rounded-full" />
                </div>
              </div>
              {/* Col 2 */}
              <div className="flex-1 flex flex-col gap-2">
                <div className="h-2 w-16 bg-[var(--color-accent-400)] rounded-full mb-1" />
                <div className="w-full h-16 bg-[var(--color-primary-50)] rounded-lg p-2 border border-[var(--color-primary-200)]">
                  <div className="h-1.5 w-full bg-[var(--color-primary-600)] rounded-full mb-2" />
                  <div className="h-1.5 w-2/3 bg-[var(--color-primary-400)] rounded-full mb-3" />
                  <div className="flex gap-1">
                    <div className="w-4 h-4 rounded-full bg-white shadow-sm" />
                    <div className="w-4 h-4 rounded-full bg-white shadow-sm" />
                  </div>
                </div>
              </div>
              {/* Col 3 */}
              <div className="flex-1 flex flex-col gap-2">
                <div className="h-2 w-14 bg-[var(--color-border-strong)] rounded-full mb-1" />
                <div className="w-full h-10 bg-[var(--color-bg-secondary)] rounded-lg p-2 border border-[var(--color-border)]">
                  <div className="h-1.5 w-2/3 bg-[var(--color-text-secondary)] rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Card 1: Communication (Top Left) */}
      <motion.div 
        className="absolute top-[8%] left-[5%] w-[150px] rounded-2xl bg-white shadow-[var(--shadow-xl)] border border-[var(--color-border)] p-4 z-30"
        initial={{ opacity: 0, scale: 0.9, x: -20, rotate: -4 }}
        animate={{ opacity: 1, scale: 1, x: 0, rotate: -4 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
      >
        <motion.div animate={floatAnimation(11, 0.5, -4)} className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-[var(--color-accent-600)]" />
            <div className="flex-1 h-1.5 bg-[var(--color-border-strong)] rounded-full" />
          </div>
          <div className="w-full bg-[var(--color-bg-secondary)] rounded-lg p-2">
            <div className="h-1.5 w-full bg-[var(--color-text-secondary)] rounded-full mb-1.5" />
            <div className="h-1.5 w-2/3 bg-[var(--color-text-secondary)] rounded-full" />
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Card 2: Calendar/Scheduling (Top Right) */}
      <motion.div 
        className="absolute top-[18%] right-[2%] w-[160px] rounded-xl bg-[var(--color-primary-900)] text-white shadow-[var(--shadow-lg)] border border-[var(--color-border-dark)] p-4 z-15"
        initial={{ opacity: 0, scale: 0.9, x: 20, rotate: 6 }}
        animate={{ opacity: 1, scale: 1, x: 0, rotate: 6 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
      >
        <motion.div animate={floatAnimation(13, 1)} className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-md bg-white/10">
              <CalendarClock className="w-4 h-4 text-[var(--color-accent-400)]" />
            </div>
            <div className="h-2 w-16 bg-white/40 rounded-full" />
          </div>
          <div className="grid grid-cols-4 gap-1.5 w-full mt-1">
            {[...Array(8)].map((_, i) => (
              <div key={i} className={`w-full aspect-square rounded-sm ${i === 3 || i === 5 ? 'bg-[var(--color-accent-400)]' : 'bg-white/10'}`} />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Card 3: Folders/Docs (Bottom Left) */}
      <motion.div 
        className="absolute bottom-[8%] left-[18%] w-[140px] rounded-xl bg-white shadow-[var(--shadow-md)] border border-[var(--color-border)] p-4 z-30"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
      >
        <motion.div animate={floatAnimation(12, 2, -6)} className="flex flex-col gap-3">
          <FolderKanban className="w-6 h-6 text-[var(--color-primary-600)]" />
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[var(--color-accent-400)]" />
              <div className="h-1.5 flex-1 bg-[var(--color-text-secondary)] rounded-full" />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[var(--color-border-strong)]" />
              <div className="h-1.5 w-2/3 bg-[var(--color-border)] rounded-full" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Background shadow documents */}
      <motion.div 
        className="absolute top-[25%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-[200px] h-[240px] bg-[var(--color-primary-50)] rounded-xl shadow-sm border border-[var(--color-border)] z-0 rotate-[-10deg]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      />
      <motion.div 
        className="absolute top-[28%] left-[55%] -translate-x-1/2 -translate-y-1/2 w-[200px] h-[240px] bg-white rounded-xl shadow-sm border border-[var(--color-border)] z-0 rotate-[5deg]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />

    </div>
  )
}
