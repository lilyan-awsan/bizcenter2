"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { ClipboardCheck, FileSignature, CheckCircle2, ArrowRightCircle, FolderSearch } from "lucide-react"

export function AdminSupportHeroVisual() {
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
      <div className="absolute top-[10%] left-[10%] w-[300px] h-[300px] bg-radial-[at_50%_50%] from-[var(--color-primary-900)]/15 to-transparent to-70% rounded-full blur-3xl opacity-70" />
      <div className="absolute bottom-[5%] right-[10%] w-[350px] h-[350px] bg-radial-[at_50%_50%] from-[var(--color-accent-400)]/20 to-transparent to-70% rounded-full blur-3xl opacity-60" />

      {/* Main Base - Desktop representation */}
      <motion.div 
        className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[85%] h-16 bg-white/40 rounded-full blur-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      />

      {/* Central Pipeline Graphic */}
      <motion.div 
        className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[320px] z-20 flex flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      >
        <motion.div animate={floatAnimation(14, 0, -4)} className="w-full flex flex-col items-center">
          <div className="w-[300px] bg-white rounded-2xl border-4 border-[var(--color-border-strong)] p-4 shadow-xl flex flex-col gap-4 relative">
            <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-3">
              <div className="flex items-center gap-2">
                <FileSignature className="w-5 h-5 text-[var(--color-primary-900)]" />
                <div className="h-2.5 w-24 bg-[var(--color-text-secondary)] rounded-full" />
              </div>
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[var(--color-border-strong)]" />
              </div>
            </div>
            
            {/* Pipeline Process */}
            <div className="flex flex-col gap-3">
              
              {/* Step 1: Prep */}
              <div className="flex items-center gap-3 bg-[var(--color-bg-secondary)] p-2 rounded-lg border border-[var(--color-border)]">
                <div className="w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center text-[9px] font-bold text-[var(--color-charcoal)]">1</div>
                <div className="flex-1 flex flex-col gap-1.5">
                  <div className="h-1.5 w-3/4 bg-[var(--color-text-secondary)] rounded-full" />
                  <div className="h-1.5 w-1/2 bg-[var(--color-border-strong)] rounded-full" />
                </div>
                <CheckCircle2 className="w-4 h-4 text-[var(--color-accent-600)]" />
              </div>

              {/* Arrow down */}
              <div className="flex justify-center -my-1">
                <ArrowRightCircle className="w-4 h-4 text-[var(--color-border-strong)] rotate-90" />
              </div>

              {/* Step 2: Review (Active) */}
              <div className="flex items-center gap-3 bg-[var(--color-primary-50)] p-2.5 rounded-lg border border-[var(--color-primary-200)] relative overflow-hidden">
                <motion.div 
                  className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--color-primary-900)]"
                  initial={{ height: "0%" }}
                  animate={{ height: "100%" }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div className="w-6 h-6 rounded-full bg-[var(--color-primary-900)] text-white shadow-sm flex items-center justify-center text-[9px] font-bold ml-1">2</div>
                <div className="flex-1 flex flex-col gap-1.5">
                  <div className="h-2 w-full bg-[var(--color-primary-600)] rounded-full" />
                  <div className="h-1.5 w-2/3 bg-[var(--color-primary-400)] rounded-full" />
                </div>
              </div>

              {/* Arrow down */}
              <div className="flex justify-center -my-1">
                <ArrowRightCircle className="w-4 h-4 text-[var(--color-border-strong)] rotate-90 opacity-50" />
              </div>

              {/* Step 3: Submission */}
              <div className="flex items-center gap-3 bg-white p-2 rounded-lg border border-[var(--color-border-strong)] border-dashed opacity-70">
                <div className="w-6 h-6 rounded-full border border-[var(--color-border-strong)] flex items-center justify-center text-[9px] font-bold text-[var(--color-slate)]">3</div>
                <div className="flex-1 flex flex-col gap-1.5">
                  <div className="h-1.5 w-1/2 bg-[var(--color-border-strong)] rounded-full" />
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Card 1: Checklist (Top Right) */}
      <motion.div 
        className="absolute top-[10%] right-[10%] w-[150px] rounded-2xl bg-white shadow-[var(--shadow-xl)] border border-[var(--color-border)] p-4 z-30"
        initial={{ opacity: 0, scale: 0.9, x: 20, rotate: 4 }}
        animate={{ opacity: 1, scale: 1, x: 0, rotate: 4 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
      >
        <motion.div animate={floatAnimation(11, 0.5, -4)} className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <ClipboardCheck className="w-5 h-5 text-[var(--color-accent-600)]" />
            <div className="flex-1 h-1.5 bg-[var(--color-border-strong)] rounded-full" />
          </div>
          <div className="flex flex-col gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-sm border ${i < 3 ? 'bg-[var(--color-accent-400)] border-[var(--color-accent-500)]' : 'bg-transparent border-[var(--color-border-strong)]'}`} />
                <div className="h-1.5 flex-1 bg-[var(--color-text-secondary)] rounded-full" />
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Card 2: Requirements / Folder (Top Left) */}
      <motion.div 
        className="absolute top-[18%] left-[5%] w-[160px] rounded-xl bg-[var(--color-primary-900)] text-white shadow-[var(--shadow-lg)] border border-[var(--color-border-dark)] p-4 z-15"
        initial={{ opacity: 0, scale: 0.9, x: -20, rotate: -6 }}
        animate={{ opacity: 1, scale: 1, x: 0, rotate: -6 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
      >
        <motion.div animate={floatAnimation(13, 1)} className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-md bg-white/10">
              <FolderSearch className="w-4 h-4 text-[var(--color-accent-400)]" />
            </div>
            <div className="h-2 w-16 bg-white/40 rounded-full" />
          </div>
          <div className="w-full h-8 bg-white/10 rounded-md p-1.5 flex flex-col justify-center gap-1.5">
            <div className="h-1.5 w-full bg-white/30 rounded-full" />
            <div className="h-1.5 w-1/2 bg-white/30 rounded-full" />
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Checkmark Icon (Bottom Right) */}
      <motion.div 
        className="absolute bottom-[18%] right-[20%] w-12 h-12 rounded-full bg-white shadow-lg border border-[var(--color-border)] flex items-center justify-center z-30"
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.6 }}
      >
        <motion.div animate={floatAnimation(9, 2, -5)}>
          <CheckCircle2 className="w-6 h-6 text-[var(--color-accent-500)]" />
        </motion.div>
      </motion.div>

      {/* Background shadow documents */}
      <motion.div 
        className="absolute top-[35%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[220px] h-[260px] bg-[var(--color-primary-50)] rounded-xl shadow-sm border border-[var(--color-border)] z-0 rotate-[8deg]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      />
      <motion.div 
        className="absolute top-[38%] left-[48%] -translate-x-1/2 -translate-y-1/2 w-[220px] h-[260px] bg-white rounded-xl shadow-sm border border-[var(--color-border)] z-0 rotate-[-5deg]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />

    </div>
  )
}
