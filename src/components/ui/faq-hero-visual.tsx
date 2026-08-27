"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { MessageCircleQuestion, Search, FileText, CheckSquare, HelpCircle, ChevronRight } from "lucide-react"

export function FaqHeroVisual() {
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
    <div className="relative w-full aspect-[4/3] max-w-[650px] mx-auto select-none pointer-events-none">
      
      {/* Background Soft Gradients */}
      <div className="absolute top-[15%] right-[10%] w-[350px] h-[350px] bg-radial-[at_50%_50%] from-[var(--color-primary-900)]/15 to-transparent to-70% rounded-full blur-3xl opacity-70" />
      <div className="absolute bottom-[10%] left-[10%] w-[300px] h-[300px] bg-radial-[at_50%_50%] from-[var(--color-accent-400)]/20 to-transparent to-70% rounded-full blur-3xl opacity-60" />

      {/* Central Search Interface Mock */}
      <motion.div 
        className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[340px] z-20 flex flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      >
        <motion.div animate={floatAnimation(15, 0, -4)} className="w-full flex flex-col items-center">
          <div className="w-full bg-white rounded-2xl border-4 border-[var(--color-border-strong)] p-4 shadow-xl flex flex-col gap-4 relative overflow-hidden">
            
            {/* Search Bar */}
            <div className="flex items-center gap-3 bg-[var(--color-bg-secondary)] px-4 py-2.5 rounded-full border border-[var(--color-border-strong)]">
              <Search className="w-4 h-4 text-[var(--color-slate)]" />
              <div className="h-1.5 w-24 bg-[var(--color-text-secondary)] rounded-full" />
            </div>
            
            {/* Answer Cards Mock */}
            <div className="flex flex-col gap-2 h-full">
              {/* FAQ Item 1 */}
              <div className="bg-[var(--color-primary-50)] border border-[var(--color-primary-200)] rounded-lg p-3 flex justify-between items-center">
                <div className="h-1.5 w-2/3 bg-[var(--color-primary-600)] rounded-full" />
                <ChevronRight className="w-4 h-4 text-[var(--color-primary-900)]" />
              </div>
              {/* FAQ Item 2 */}
              <div className="bg-white border border-[var(--color-border-strong)] rounded-lg p-3 flex justify-between items-center shadow-sm">
                <div className="h-1.5 w-3/4 bg-[var(--color-text-secondary)] rounded-full" />
                <ChevronRight className="w-4 h-4 text-[var(--color-slate)]" />
              </div>
              {/* FAQ Item 3 */}
              <div className="bg-white border border-[var(--color-border-strong)] rounded-lg p-3 flex justify-between items-center shadow-sm">
                <div className="h-1.5 w-1/2 bg-[var(--color-text-secondary)] rounded-full" />
                <ChevronRight className="w-4 h-4 text-[var(--color-slate)]" />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Card 1: Question Bubble (Top Left) */}
      <motion.div 
        className="absolute top-[8%] left-[5%] w-[160px] rounded-2xl rounded-bl-sm bg-[var(--color-primary-900)] shadow-[var(--shadow-xl)] border border-[var(--color-border-dark)] p-4 z-30"
        initial={{ opacity: 0, scale: 0.9, x: -20, rotate: -6 }}
        animate={{ opacity: 1, scale: 1, x: 0, rotate: -6 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
      >
        <motion.div animate={floatAnimation(11, 0.5, -4)} className="flex flex-col gap-3 items-center">
          <MessageCircleQuestion className="w-8 h-8 text-[var(--color-accent-400)]" />
          <div className="w-full flex flex-col gap-1.5 items-center">
            <div className="h-1.5 w-5/6 bg-white/40 rounded-full" />
            <div className="h-1.5 w-2/3 bg-white/40 rounded-full" />
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Card 2: Answer Document (Top Right) */}
      <motion.div 
        className="absolute top-[18%] right-[2%] w-[150px] rounded-xl bg-white shadow-[var(--shadow-lg)] border border-[var(--color-border)] p-4 z-15"
        initial={{ opacity: 0, scale: 0.9, x: 20, rotate: 5 }}
        animate={{ opacity: 1, scale: 1, x: 0, rotate: 5 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
      >
        <motion.div animate={floatAnimation(13, 1)} className="flex flex-col gap-3">
          <div className="w-8 h-8 rounded-lg bg-[var(--color-bg-secondary)] flex items-center justify-center">
            <FileText className="w-4 h-4 text-[var(--color-slate)]" />
          </div>
          <div className="flex flex-col gap-1.5 w-full">
            <div className="h-1.5 w-full bg-[var(--color-border-strong)] rounded-full" />
            <div className="h-1.5 w-5/6 bg-[var(--color-border-strong)] rounded-full" />
            <div className="h-1.5 w-4/5 bg-[var(--color-border-strong)] rounded-full" />
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Card 3: Checklist Help (Bottom Left) */}
      <motion.div 
        className="absolute bottom-[20%] left-[2%] w-[130px] rounded-xl bg-white shadow-[var(--shadow-md)] border border-[var(--color-border)] p-3 z-30 flex gap-2 items-center"
        initial={{ opacity: 0, scale: 0.9, y: 20, rotate: 2 }}
        animate={{ opacity: 1, scale: 1, y: 0, rotate: 2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
      >
        <motion.div animate={floatAnimation(12, 2, -6)} className="flex items-center gap-3 w-full">
          <div className="p-2 rounded-full bg-[var(--color-accent-50)]">
            <HelpCircle className="w-5 h-5 text-[var(--color-accent-600)]" />
          </div>
          <div className="flex-1 flex flex-col gap-1.5">
            <div className="h-1 w-full bg-[var(--color-slate)] rounded-full" />
            <div className="h-1 w-2/3 bg-[var(--color-border-strong)] rounded-full" />
          </div>
        </motion.div>
      </motion.div>

    </div>
  )
}
