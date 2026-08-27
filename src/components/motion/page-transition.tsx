"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"

export function PageTransition({ children }: { children: React.ReactNode }) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 4 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: prefersReducedMotion ? 0 : 4 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as any }}
      className="flex-1 flex flex-col"
    >
      {children}
    </motion.div>
  )
}
