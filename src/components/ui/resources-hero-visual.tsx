"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Search, FolderOpen, FileText, CheckSquare, MessageCircleQuestion, Calendar, Download } from "lucide-react"

export function ResourcesHeroVisual() {
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

      {/* Main Base */}
      <motion.div 
        className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[85%] h-16 bg-white/50 rounded-full blur-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      />

      {/* Central Search / Dashboard Interface */}
      <motion.div 
        className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[340px] z-20 flex flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      >
        <motion.div animate={floatAnimation(15, 0, -4)} className="w-full flex flex-col items-center">
          <div className="w-full h-[220px] bg-white rounded-2xl border-4 border-[var(--color-border-strong)] p-4 shadow-xl flex flex-col gap-4 relative overflow-hidden">
            
            {/* Header / Search Bar Mock */}
            <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-3">
              <div className="flex-1 flex items-center gap-2 bg-[var(--color-bg-secondary)] px-3 py-1.5 rounded-full border border-[var(--color-border)] mr-4">
                <Search className="w-4 h-4 text-[var(--color-slate)]" />
                <div className="h-1.5 w-24 bg-[var(--color-text-secondary)] rounded-full" />
              </div>
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[var(--color-border-strong)]" />
              </div>
            </div>
            
            {/* Grid of resources mock */}
            <div className="grid grid-cols-2 gap-3 h-full">
              {/* Card 1 */}
              <div className="bg-[var(--color-primary-50)] border border-[var(--color-primary-200)] rounded-lg p-3 flex flex-col gap-2">
                <FolderOpen className="w-5 h-5 text-[var(--color-primary-900)]" />
                <div className="h-1.5 w-full bg-[var(--color-primary-600)] rounded-full" />
                <div className="h-1.5 w-2/3 bg-[var(--color-primary-400)] rounded-full" />
              </div>
              {/* Card 2 */}
              <div className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-lg p-3 flex flex-col gap-2">
                <FileText className="w-5 h-5 text-[var(--color-slate)]" />
                <div className="h-1.5 w-full bg-[var(--color-text-secondary)] rounded-full" />
                <div className="h-1.5 w-1/2 bg-[var(--color-border-strong)] rounded-full" />
              </div>
              {/* Card 3 */}
              <div className="bg-white border border-[var(--color-border-strong)] rounded-lg p-3 flex flex-col gap-2">
                <CheckSquare className="w-5 h-5 text-[var(--color-accent-600)]" />
                <div className="flex flex-col gap-1 mt-1">
                  <div className="h-1 w-full bg-[var(--color-text-secondary)] rounded-full" />
                  <div className="h-1 w-5/6 bg-[var(--color-text-secondary)] rounded-full" />
                </div>
              </div>
              {/* Card 4 */}
              <div className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-lg p-3 flex flex-col gap-2">
                <Download className="w-5 h-5 text-[var(--color-slate)]" />
                <div className="h-1.5 w-full bg-[var(--color-text-secondary)] rounded-full" />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Card 1: Books/Guides (Top Right) */}
      <motion.div 
        className="absolute top-[8%] right-[5%] w-[160px] rounded-2xl bg-white shadow-[var(--shadow-xl)] border border-[var(--color-border)] p-4 z-30"
        initial={{ opacity: 0, scale: 0.9, x: 20, rotate: 6 }}
        animate={{ opacity: 1, scale: 1, x: 0, rotate: 6 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
      >
        <motion.div animate={floatAnimation(11, 0.5, -4)} className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[var(--color-primary-100)] flex items-center justify-center">
              <FileText className="w-4 h-4 text-[var(--color-primary-900)]" />
            </div>
            <div className="flex-1 flex flex-col gap-1.5">
              <div className="h-1.5 w-full bg-[var(--color-border-strong)] rounded-full" />
              <div className="h-1.5 w-2/3 bg-[var(--color-border)] rounded-full" />
            </div>
          </div>
          <div className="w-full bg-[var(--color-bg-secondary)] rounded-lg p-2 flex items-center justify-between">
            <div className="h-1.5 w-1/2 bg-[var(--color-text-secondary)] rounded-full" />
            <Download className="w-3 h-3 text-[var(--color-accent-600)]" />
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Card 2: Calendar/Prep (Top Left) */}
      <motion.div 
        className="absolute top-[18%] left-[2%] w-[150px] rounded-xl bg-[var(--color-primary-900)] text-white shadow-[var(--shadow-lg)] border border-[var(--color-border-dark)] p-4 z-15"
        initial={{ opacity: 0, scale: 0.9, x: -20, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, x: 0, rotate: -5 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
      >
        <motion.div animate={floatAnimation(13, 1)} className="flex flex-col gap-3 items-center text-center">
          <div className="p-2 rounded-full bg-white/10">
            <Calendar className="w-6 h-6 text-[var(--color-accent-400)]" />
          </div>
          <div className="flex flex-col items-center gap-1.5 w-full mt-1">
            <div className="h-2 w-16 bg-white/40 rounded-full" />
            <div className="h-1.5 w-24 bg-white/20 rounded-full" />
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Card 3: FAQ (Bottom Left) */}
      <motion.div 
        className="absolute bottom-[15%] left-[8%] w-[130px] rounded-xl bg-white shadow-[var(--shadow-md)] border border-[var(--color-border)] p-3 z-30"
        initial={{ opacity: 0, scale: 0.9, y: 20, rotate: 2 }}
        animate={{ opacity: 1, scale: 1, y: 0, rotate: 2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
      >
        <motion.div animate={floatAnimation(12, 2, -6)} className="flex flex-col gap-2 items-center text-center">
          <MessageCircleQuestion className="w-6 h-6 text-[var(--color-primary-600)]" />
          <div className="w-full flex flex-col gap-1">
            <div className="h-1.5 w-full bg-[var(--color-border-strong)] rounded-full" />
            <div className="h-1.5 w-4/5 mx-auto bg-[var(--color-border)] rounded-full" />
          </div>
        </motion.div>
      </motion.div>

    </div>
  )
}
