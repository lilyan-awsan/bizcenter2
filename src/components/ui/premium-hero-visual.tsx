"use client"

import * as React from "react"
import { motion, useReducedMotion, useMotionValue, useSpring } from "framer-motion"
import { Rocket, CheckCircle2, Target, Calendar, Clock, Award } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { getTranslation } from "@/lib/i18n/translations"

export function PremiumHeroVisual({ baseDelay = 0 }: { baseDelay?: number }) {
  const prefersReducedMotion = useReducedMotion()
  const { language } = useLanguage()
  const tDict = getTranslation(language)
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springConfig = { damping: 30, stiffness: 100, mass: 1 }
  const parallaxX = useSpring(mouseX, springConfig)
  const parallaxY = useSpring(mouseY, springConfig)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (prefersReducedMotion) return
    const { clientX, clientY, currentTarget } = e
    const { left, top, width, height } = currentTarget.getBoundingClientRect()
    const x = (clientX - left - width / 2) / (width / 2)
    const y = (clientY - top - height / 2) / (height / 2)
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  const floatFront = (delay: number): any => {
    if (prefersReducedMotion) return {}
    return {
      y: [0, -10, 0],
      rotate: [0, 1, -1, 0],
      transition: { duration: 7, delay, repeat: Infinity, ease: "easeInOut" as const },
    }
  }

  const floatMiddle = (delay: number): any => {
    if (prefersReducedMotion) return {}
    return {
      y: [0, -7, 0],
      transition: { duration: 9, delay, repeat: Infinity, ease: "easeInOut" as const },
    }
  }

  return (
    <div 
      className="relative w-full h-[520px] lg:h-[620px] max-w-[650px] mx-auto select-none perspective-[1000px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      
      {/* Central Ambient Glow */}
      <motion.div 
        style={{ x: parallaxX, y: parallaxY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full border border-[var(--future-line)] bg-gradient-to-tr from-[var(--color-primary-100)] to-white/30 opacity-60 shadow-soft-elevation pointer-events-none" 
      />

      {/* Hero Central Photo Card */}
      <motion.div 
        className="absolute top-[8%] left-[10%] w-[380px] sm:w-[420px] h-[280px] sm:h-[310px] rounded-[24px] overflow-hidden border border-[var(--future-line)] shadow-[0_20px_50px_rgba(22,23,92,0.15)] z-10"
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, delay: baseDelay + 1.2, ease: [0.22, 1, 0.36, 1] as any }}
        style={{ x: useSpring(useMotionValue(mouseX.get() * 8), springConfig), y: useSpring(useMotionValue(mouseY.get() * 8), springConfig) }}
      >
        <img 
          src="/images/multicultural-meeting-hero.png" 
          alt="Multicultural Business Team & Clients Meeting" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-950)]/80 via-transparent to-transparent" />
        <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between">
          <div>
            <div className="text-white font-extrabold text-lg">{tDict.hero.guidanceTitle}</div>
            <div className="text-[var(--color-primary-100)] text-xs font-medium">{tDict.hero.guidanceSubtitle}</div>
          </div>
          <div className="w-10 h-10 rounded-full bg-[var(--color-accent-500)] flex items-center justify-center shadow-red-glow">
            <Target className="w-5 h-5 text-white" />
          </div>
        </div>
      </motion.div>

      {/* Floating Card 1: Startup Progress */}
      <motion.div 
        className="absolute top-[35%] right-[2%] w-[230px] rounded-[18px] bg-white border border-[var(--future-line)] p-5 shadow-soft-elevation z-20"
        initial={{ opacity: 0, scale: 0.85, x: 40 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.9, delay: baseDelay + 1.5, type: "spring", stiffness: 100 }}
        style={{ x: useSpring(useMotionValue(mouseX.get() * -12), springConfig), y: useSpring(useMotionValue(mouseY.get() * -12), springConfig) }}
      >
        <motion.div animate={floatMiddle(0.5)}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-[var(--color-accent-50)] border border-[var(--color-accent-200)] flex items-center justify-center shrink-0">
              <Rocket className="w-5 h-5 text-[var(--color-accent-500)]" />
            </div>
            <div>
              <div className="text-[14px] font-extrabold text-[var(--color-primary-900)]">{tDict.hero.businessSetup}</div>
              <div className="text-[11px] text-[var(--color-slate)]">{tDict.hero.stepByStep}</div>
            </div>
          </div>
          <div className="w-full bg-[var(--color-offwhite)] rounded-xl p-3 border border-[var(--future-line)]">
            <div className="flex items-center justify-between text-[11px] font-bold text-[var(--color-primary-900)] mb-1.5">
              <span>{tDict.hero.setupProgress}</span>
              <span className="text-[var(--color-accent-500)]">{tDict.hero.verified}</span>
            </div>
            <div className="w-full h-2 bg-[var(--line)] rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-[var(--color-accent-500)] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, delay: baseDelay + 2.2, ease: "easeOut" }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Card 2: Consultation Booking Badge */}
      <motion.div 
        className="absolute bottom-[8%] left-[6%] w-[250px] rounded-[18px] bg-[var(--color-primary-900)] text-white border border-white/10 p-5 shadow-[0_20px_40px_rgba(22,23,92,0.25)] z-30"
        initial={{ opacity: 0, scale: 0.85, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, delay: baseDelay + 1.8, type: "spring", stiffness: 100 }}
        style={{ x: useSpring(useMotionValue(mouseX.get() * 15), springConfig), y: useSpring(useMotionValue(mouseY.get() * 15), springConfig) }}
      >
        <motion.div animate={floatFront(1.2)} className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-[var(--color-accent-500)] text-white flex items-center justify-center shrink-0 shadow-red-glow">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[14px] font-bold text-white mb-0.5">{tDict.hero.consultationHub}</div>
            <div className="text-[12px] text-[var(--color-primary-100)] mb-2">{tDict.hero.bookStrategyCall}</div>
            <div className="inline-flex items-center text-[10px] font-bold bg-white/10 border border-white/20 text-white px-2.5 py-1 rounded-md">
              <Clock className="w-3 h-3 mr-1 text-[var(--color-accent-400)]" /> {tDict.hero.directPrivate}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Pill Badge */}
      <motion.div
        className="absolute top-[6%] right-[8%] px-4 py-2 rounded-full bg-white border border-[var(--future-line)] shadow-soft-elevation flex items-center gap-2 z-40 pointer-events-none"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: baseDelay + 2.0, type: "spring" }}
      >
        <motion.div animate={floatFront(0.3)} className="flex items-center gap-2">
          <Award className="w-4 h-4 text-[var(--color-accent-500)]" />
          <span className="text-xs font-extrabold text-[var(--color-primary-900)]">{tDict.hero.trustedBadge}</span>
        </motion.div>
      </motion.div>

    </div>
  )
}

