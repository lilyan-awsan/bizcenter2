"use client"

import * as React from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { useIntro } from "@/components/providers/intro-provider"

export function PremiumIntro() {
  const { introFinished, isHomePage } = useIntro()
  const prefersReducedMotion = useReducedMotion()

  // Only render on homepage when intro is not finished
  const shouldRender = isHomePage && !introFinished

  return (
    <AnimatePresence mode="wait">
      {shouldRender && (
        <motion.div
          key="premium-intro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[rgba(8,10,20,0.65)] backdrop-blur-[20px]"
        >
          {/* Ambient Background Effects */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 pointer-events-none"
          >
            {/* Soft gold radial gradients */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-radial-[at_50%_50%] from-[var(--color-accent-500)]/10 to-transparent to-70% rounded-full blur-[60px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] bg-radial-[at_50%_50%] from-[var(--color-primary-400)]/20 to-transparent to-70% rounded-full blur-[40px]" />
            
            {/* Very subtle light rays (static for perf, just a gradient) */}
            <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(219,161,62,0)_0deg,rgba(219,161,62,0.03)_45deg,rgba(219,161,62,0)_90deg,rgba(219,161,62,0.03)_225deg,rgba(219,161,62,0)_270deg)] mix-blend-screen opacity-50" />
          </motion.div>

          {/* Centered Logo Container */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            
            {/* Logo Image with Shared Layout ID */}
            <motion.div
              layoutId="global-logo"
              initial={{ scale: prefersReducedMotion ? 1 : 0.7, opacity: 0, y: 0, rotate: 0 }}
              animate={
                prefersReducedMotion 
                ? { scale: 1, opacity: 1 }
                : { 
                    scale: 1, 
                    opacity: 1,
                    y: [0, -8, 0],
                    rotate: [0, -2, 2, 0]
                  }
              }
              transition={
                prefersReducedMotion
                ? { duration: 0.8, ease: "easeOut" }
                : { 
                    scale: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                    opacity: { duration: 0.6, ease: "linear" },
                    y: { duration: 0.8, delay: 0.6, ease: "easeInOut" },
                    rotate: { duration: 0.8, delay: 0.6, ease: "easeInOut" }
                  }
              }
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-xl bg-[var(--color-primary-900)] flex items-center justify-center shadow-[0_0_50px_rgba(200,155,60,0.15)]"
            >
              {/* Optional: Glow pulse behind logo */}
              {!prefersReducedMotion && (
                <motion.div 
                  className="absolute inset-0 rounded-xl bg-[var(--color-accent-400)] mix-blend-overlay"
                  animate={{ opacity: [0, 0.4, 0] }}
                  transition={{ duration: 1, delay: 0.6, ease: "easeInOut" }}
                />
              )}
              
              {/* Fallback to SVG if /logo.png is not found or user wants standard logo */}
              <img 
                src="/logo.png" 
                alt="THE CENTER Logo" 
                className="w-full h-full object-contain p-4"
                onError={(e) => {
                  // If image fails to load, fallback to the current SVG approximation
                  const target = e.target as HTMLElement;
                  target.style.display = 'none';
                  target.parentElement?.classList.add('fallback-active');
                }}
              />
              
              {/* Fallback SVG (only visible if img fails) */}
              <svg className="absolute hidden fallback-svg w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <style>{`.fallback-active .fallback-svg { display: block; }`}</style>
                <path d="M7 12L12 7L17 12L12 17L7 12Z" fill="#C89B3C"/>
              </svg>
            </motion.div>
            
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
