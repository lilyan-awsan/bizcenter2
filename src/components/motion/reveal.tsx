"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  delay?: number
  once?: boolean
  className?: string
  distance?: number
}

// Fade In
export function FadeIn({ children, delay = 0, once = true, className, ...props }: RevealProps) {
  const prefersReducedMotion = useReducedMotion()
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once, margin: "-15%" }}
      transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1], delay: prefersReducedMotion ? 0 : delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Reveal Up (Translates Y-axis)
export function RevealUp({ children, delay = 0, distance = 16, once = true, className, ...props }: RevealProps) {
  const prefersReducedMotion = useReducedMotion()
  
  return (
    <motion.div
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-15%" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: prefersReducedMotion ? 0 : delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Scale In (Used for images or important graphics)
export function ScaleIn({ children, delay = 0, once = true, className, ...props }: RevealProps) {
  const prefersReducedMotion = useReducedMotion()
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once, margin: "-15%" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: prefersReducedMotion ? 0 : delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
