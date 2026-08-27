"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"

interface RevealOnScrollProps {
  children: React.ReactNode
  className?: string
  animation?: "fade" | "fade-up" | "fade-left" | "fade-right" | "scale"
  delay?: number
  duration?: number
  amount?: "some" | "all" | number
  once?: boolean
}

export function RevealOnScroll({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  duration = 0.6,
  amount = 0.2,
  once = true
}: RevealOnScrollProps) {
  const prefersReducedMotion = useReducedMotion()

  const getVariants = () => {
    // If reduced motion is enabled, degrade all animations to a simple fade
    if (prefersReducedMotion) {
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration, delay, ease: [0.22, 1, 0.36, 1] as any } }
      }
    }

    switch (animation) {
      case "fade-up":
        return {
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration, delay, ease: [0.22, 1, 0.36, 1] as any } }
        }
      case "fade-left":
        return {
          hidden: { opacity: 0, x: 30 },
          visible: { opacity: 1, x: 0, transition: { duration, delay, ease: [0.22, 1, 0.36, 1] as any } }
        }
      case "fade-right":
        return {
          hidden: { opacity: 0, x: -30 },
          visible: { opacity: 1, x: 0, transition: { duration, delay, ease: [0.22, 1, 0.36, 1] as any } }
        }
      case "scale":
        return {
          hidden: { opacity: 0, scale: 0.95 },
          visible: { opacity: 1, scale: 1, transition: { duration, delay, ease: [0.22, 1, 0.36, 1] as any } }
        }
      case "fade":
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration, delay, ease: [0.22, 1, 0.36, 1] as any } }
        }
    }
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  )
}
