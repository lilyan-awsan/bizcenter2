"use client"

import * as React from "react"
import { motion, useReducedMotion, useMotionValue, useSpring } from "framer-motion"
import { ClipboardList, Rocket, FileText, CheckCircle2, FileCheck, ArrowRight, BookOpen, Clock, Calendar } from "lucide-react"

export function PremiumHeroVisual({ baseDelay = 0 }: { baseDelay?: number }) {
  const prefersReducedMotion = useReducedMotion()
  
  // Mouse tracking for parallax
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springConfig = { damping: 30, stiffness: 100, mass: 1 }
  const parallaxX = useSpring(mouseX, springConfig)
  const parallaxY = useSpring(mouseY, springConfig)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (prefersReducedMotion) return
    const { clientX, clientY, currentTarget } = e
    const { left, top, width, height } = currentTarget.getBoundingClientRect()
    // Calculate mouse position relative to center of container, normalized from -1 to 1
    const x = (clientX - left - width / 2) / (width / 2)
    const y = (clientY - top - height / 2) / (height / 2)
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  // Physics-based floating animations for different depth layers
  const floatFront = (delay: number): any => {
    if (prefersReducedMotion) return {}
    return {
      y: [0, -12, 0],
      rotate: [0, 1.5, -1, 0],
      transition: { duration: 8, delay, repeat: Infinity, ease: "easeInOut" as const },
    }
  }

  const floatMiddle = (delay: number): any => {
    if (prefersReducedMotion) return {}
    return {
      y: [0, -8, 0],
      rotate: [0, -1, 1, 0],
      transition: { duration: 10, delay, repeat: Infinity, ease: "easeInOut" as const },
    }
  }

  const floatBack = (delay: number): any => {
    if (prefersReducedMotion) return {}
    return {
      y: [0, -5, 0],
      transition: { duration: 12, delay, repeat: Infinity, ease: "easeInOut" as const },
    }
  }

  return (
    <div 
      className="relative w-full h-[500px] lg:h-[600px] max-w-[650px] mx-auto select-none perspective-[1000px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      
      {/* Central Background Anchor / Glow with subtle parallax */}
      <motion.div 
        style={{ x: parallaxX, y: parallaxY }} // Max movement ~10px since multiplier is low or implicit
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border-[1px] border-[var(--color-primary-200)] bg-[var(--color-primary-50)] opacity-40 shadow-[0_0_100px_rgba(25,74,94,0.1)] pointer-events-none" 
      />
      
      <motion.div 
        style={{ x: useSpring(useMotionValue(mouseX.get() * 15), springConfig), y: useSpring(useMotionValue(mouseY.get() * 15), springConfig) }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] rounded-full border-[1px] border-[var(--color-primary-200)] border-dashed opacity-50 pointer-events-none" 
      />

      {/* Layer 1: Background Elements (File folders, docs) - 1.7s assembling */}
      <motion.div 
        className="absolute top-[15%] left-[25%] w-[120px] rounded-xl bg-white/70 glass border border-white/50 p-4 shadow-sm pointer-events-none"
        initial={{ opacity: 0, scale: 0.8, x: -50, y: 50, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0, rotate: 0 }}
        transition={{ duration: 1.2, delay: baseDelay + 1.7, ease: [0.22, 1, 0.36, 1] as any }}
        style={{ x: parallaxX }} // Depth multiplier 1
      >
        <motion.div animate={floatBack(0)}>
          <div className="w-8 h-8 rounded-lg bg-[var(--color-slate)]/10 flex items-center justify-center mb-3">
            <ClipboardList className="w-4 h-4 text-[var(--color-slate)]" />
          </div>
          <div className="space-y-2">
            <div className="h-1.5 w-full bg-[var(--color-slate)]/20 rounded-full" />
            <div className="h-1.5 w-2/3 bg-[var(--color-slate)]/20 rounded-full" />
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="absolute top-[30%] right-[10%] w-[140px] rounded-xl bg-white/70 glass border border-white/50 p-4 shadow-sm pointer-events-none"
        initial={{ opacity: 0, scale: 0.8, x: 50, y: -50, rotate: 10 }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0, rotate: 0 }}
        transition={{ duration: 1.2, delay: baseDelay + 1.8, ease: [0.22, 1, 0.36, 1] as any }}
        style={{ x: parallaxX }}
      >
        <motion.div animate={floatBack(2)}>
          <div className="w-8 h-8 rounded-lg bg-[var(--color-accent-100)] flex items-center justify-center mb-3">
            <FileText className="w-4 h-4 text-[var(--color-accent-600)]" />
          </div>
          <div className="space-y-2">
            <div className="h-1.5 w-full bg-[var(--color-slate)]/20 rounded-full" />
            <div className="h-1.5 w-4/5 bg-[var(--color-slate)]/20 rounded-full" />
            <div className="h-1.5 w-1/2 bg-[var(--color-slate)]/20 rounded-full" />
          </div>
        </motion.div>
      </motion.div>

      {/* Layer 2: Main Service Cards (Middle) */}
      <motion.div 
        className="absolute top-[20%] right-[25%] w-[220px] rounded-[16px] bg-white shadow-[var(--shadow-lg)] border border-[var(--color-border)] p-5 cursor-default hover:shadow-[var(--shadow-xl)] transition-shadow"
        initial={{ opacity: 0, scale: 0.9, x: 40, y: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: baseDelay + 2.0, type: "spring", stiffness: 100, damping: 20 }}
        style={{ x: useSpring(useMotionValue(mouseX.get() * -8), springConfig), y: useSpring(useMotionValue(mouseY.get() * -8), springConfig) }}
      >
        <motion.div animate={floatMiddle(1)}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-[var(--color-primary-50)] flex items-center justify-center">
              <Rocket className="w-5 h-5 text-[var(--color-primary-600)]" />
            </div>
            <div>
              <div className="text-[13px] font-bold text-[var(--color-charcoal)]">Business Startup</div>
              <div className="text-[11px] text-[var(--color-slate)]">LLC Formation</div>
            </div>
          </div>
          <div className="w-full h-[60px] rounded-lg bg-[#F8F7F4] border border-[var(--color-border)] p-3 flex flex-col justify-center">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-medium text-[var(--color-slate)]">Progress</span>
              <span className="text-[10px] font-bold text-[var(--color-primary-600)]">75%</span>
            </div>
            <div className="w-full h-1.5 bg-[var(--color-border-strong)] rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-[var(--color-primary-500)] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "75%" }}
                transition={{ duration: 1.5, delay: baseDelay + 2.8, ease: "easeOut" }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="absolute top-[45%] left-[5%] w-[240px] rounded-[16px] bg-white shadow-[var(--shadow-xl)] border border-[var(--color-border)] p-5 z-20 cursor-default hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] transition-shadow"
        initial={{ opacity: 0, scale: 0.9, x: -40, y: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: baseDelay + 2.2, type: "spring", stiffness: 100, damping: 20 }}
        style={{ x: useSpring(useMotionValue(mouseX.get() * 12), springConfig), y: useSpring(useMotionValue(mouseY.get() * 12), springConfig) }}
      >
        <motion.div animate={floatMiddle(2.5)}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-accent-50)] flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-[var(--color-accent-600)]" />
              </div>
              <div>
                <div className="text-[13px] font-bold text-[var(--color-charcoal)]">Bookkeeping</div>
                <div className="text-[11px] text-[var(--color-success)] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-success)]" /> Updated Today
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-[#F8F7F4]">
                <div className="w-6 h-6 rounded-md bg-white border border-[var(--color-border)] flex items-center justify-center">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-success)]" />
                </div>
                <div className="flex-1 h-1.5 bg-[var(--color-border-strong)] rounded-full" />
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Layer 3: Foreground Elements (Success tags, calendars) */}
      <motion.div 
        className="absolute bottom-[20%] right-[15%] w-[180px] rounded-[16px] bg-[var(--color-primary-900)] text-white shadow-[var(--shadow-xl)] p-4 z-30 cursor-default"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: baseDelay + 2.4, type: "spring", stiffness: 120, damping: 20 }}
        style={{ x: useSpring(useMotionValue(mouseX.get() * -15), springConfig), y: useSpring(useMotionValue(mouseY.get() * -15), springConfig) }}
      >
        <motion.div animate={floatFront(1.5)} className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
            <Calendar className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="text-[13px] font-bold text-white mb-1">Consultation</div>
            <div className="text-[11px] text-[var(--color-primary-200)] mb-3">Scheduled for Tuesday</div>
            <div className="inline-flex items-center text-[10px] font-medium bg-[var(--color-accent-500)] text-white px-2 py-1 rounded-md">
              <Clock className="w-3 h-3 mr-1" /> 10:00 AM
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Micro-floating badges */}
      <motion.div
        className="absolute top-[10%] left-[50%] px-3 py-1.5 rounded-full bg-white shadow-md border border-[var(--color-border)] flex items-center gap-2 z-40 pointer-events-none"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: baseDelay + 2.6, type: "spring" }}
      >
        <motion.div animate={floatFront(0.5)}>
          <FileCheck className="w-3.5 h-3.5 text-[var(--color-success)]" />
          <span className="text-[11px] font-bold text-[var(--color-charcoal)]">Forms Ready</span>
        </motion.div>
      </motion.div>
      
      <motion.div
        className="absolute bottom-[10%] left-[30%] px-3 py-1.5 rounded-full bg-white shadow-md border border-[var(--color-border)] flex items-center gap-2 z-40 pointer-events-none"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: baseDelay + 2.7, type: "spring" }}
      >
        <motion.div animate={floatFront(2.5)}>
          <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-accent-600)]" />
          <span className="text-[11px] font-bold text-[var(--color-charcoal)]">Organized</span>
        </motion.div>
      </motion.div>

    </div>
  )
}
