"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Phone, Mail, MapPin, CalendarCheck, MessageSquare, Briefcase } from "lucide-react"

export function ContactHeroVisual() {
  const prefersReducedMotion = useReducedMotion()

  const floatAnimation = (duration: number, delay: number, yDist: number = -10) => {
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
      <div className="absolute top-[20%] right-[10%] w-[350px] h-[350px] bg-radial-[at_50%_50%] from-[var(--color-primary-900)]/15 to-transparent to-70% rounded-full blur-3xl opacity-70" />
      <div className="absolute bottom-[10%] left-[10%] w-[300px] h-[300px] bg-radial-[at_50%_50%] from-[var(--color-accent-400)]/20 to-transparent to-70% rounded-full blur-3xl opacity-60" />

      {/* Central Calendar / Booking Mock */}
      <motion.div 
        className="absolute top-[10%] left-[10%] w-[260px] z-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      >
        <motion.div animate={floatAnimation(15, 0, -4)} className="w-full">
          <div className="bg-white rounded-2xl border border-[var(--color-border-strong)] shadow-xl overflow-hidden">
            <div className="bg-[#F8F7F4] border-b border-[var(--color-border)] p-4 flex items-center justify-between">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
              <div className="h-2 w-16 bg-[var(--color-border-strong)] rounded-full" />
            </div>
            <div className="p-5 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--color-primary-50)] flex items-center justify-center">
                  <CalendarCheck className="w-5 h-5 text-[var(--color-primary-900)]" />
                </div>
                <div className="flex flex-col gap-1.5 flex-1">
                  <div className="h-2 w-full bg-[var(--color-primary-900)] rounded-full" />
                  <div className="h-1.5 w-2/3 bg-[var(--color-slate)] rounded-full" />
                </div>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className={`h-6 rounded-md ${i === 7 ? 'bg-[var(--color-accent-400)]' : 'bg-[#F8F7F4]'}`} />
                ))}
              </div>
              <div className="h-8 w-full bg-[var(--color-primary-900)] rounded-lg mt-2" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Card: Phone/Contact (Top Right) */}
      <motion.div 
        className="absolute top-[15%] right-[5%] w-[180px] rounded-2xl bg-[var(--color-primary-900)] shadow-[var(--shadow-xl)] border border-[var(--color-border-dark)] p-4 z-30"
        initial={{ opacity: 0, scale: 0.9, x: 20, rotate: 4 }}
        animate={{ opacity: 1, scale: 1, x: 0, rotate: 4 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
      >
        <motion.div animate={floatAnimation(12, 1, -6)} className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <Phone className="w-5 h-5 text-[var(--color-accent-400)]" />
            <MessageSquare className="w-5 h-5 text-white/50" />
          </div>
          <div className="flex flex-col gap-2 w-full mt-2">
            <div className="h-1.5 w-full bg-white/40 rounded-full" />
            <div className="h-1.5 w-4/5 bg-white/40 rounded-full" />
            <div className="h-1.5 w-5/6 bg-white/20 rounded-full mt-2" />
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Card: Location (Bottom Left) */}
      <motion.div 
        className="absolute bottom-[20%] left-[5%] w-[140px] rounded-xl bg-white shadow-[var(--shadow-lg)] border border-[var(--color-border)] p-3 z-15"
        initial={{ opacity: 0, scale: 0.9, x: -20, rotate: -3 }}
        animate={{ opacity: 1, scale: 1, x: 0, rotate: -3 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
      >
        <motion.div animate={floatAnimation(14, 2, -4)} className="flex flex-col gap-3 items-center text-center">
          <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
            <MapPin className="w-5 h-5 text-red-500" />
          </div>
          <div className="w-full flex flex-col gap-1.5 items-center">
            <div className="h-1.5 w-full bg-[var(--color-slate)] rounded-full" />
            <div className="h-1.5 w-2/3 bg-[var(--color-border-strong)] rounded-full" />
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Card: Briefcase/Service (Bottom Right) */}
      <motion.div 
        className="absolute bottom-[10%] right-[15%] w-[150px] rounded-xl bg-white shadow-[var(--shadow-md)] border border-[var(--color-border-strong)] p-4 z-30"
        initial={{ opacity: 0, scale: 0.9, y: 20, rotate: 2 }}
        animate={{ opacity: 1, scale: 1, y: 0, rotate: 2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
      >
        <motion.div animate={floatAnimation(11, 0.5, -5)} className="flex items-center gap-3 w-full">
          <div className="p-2 rounded-lg bg-[var(--color-accent-50)]">
            <Briefcase className="w-5 h-5 text-[var(--color-accent-600)]" />
          </div>
          <div className="flex-1 flex flex-col gap-1.5">
            <div className="h-1.5 w-full bg-[var(--color-slate)] rounded-full" />
            <div className="h-1 w-2/3 bg-[var(--color-border-strong)] rounded-full" />
          </div>
        </motion.div>
      </motion.div>

    </div>
  )
}
