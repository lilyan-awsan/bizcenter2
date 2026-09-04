"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useSplash } from "@/components/providers/splash-provider"
import { Rocket, Calculator, ClipboardList, FileText, Globe, MessageSquare, Target } from "lucide-react"

export function CinematicSplash() {
  const { splashFinished, setSplashFinished, isFirstVisit } = useSplash()

  React.useEffect(() => {
    if (isFirstVisit && !splashFinished) {
      const timer = setTimeout(() => {
        setSplashFinished(true)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [isFirstVisit, splashFinished, setSplashFinished])

  if (!isFirstVisit || splashFinished) return null

  const networkNodes = [
    { Icon: Rocket, angle: 0 },
    { Icon: Calculator, angle: 60 },
    { Icon: ClipboardList, angle: 120 },
    { Icon: FileText, angle: 180 },
    { Icon: Globe, angle: 240 },
    { Icon: MessageSquare, angle: 300 },
  ]

  return (
    <AnimatePresence>
      {!splashFinished && (
        <motion.div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--color-primary-950)] overflow-hidden"
          exit={{ opacity: 0, filter: "blur(12px)", scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* BACKGROUND: Deep Navy & Target Red Glow */}
          <motion.div 
            className="absolute inset-0 opacity-60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 2 }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--color-primary-900),#0D0E3B_70%)]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[var(--color-accent-500)] opacity-[0.08] blur-[120px]" />
            <motion.div 
              className="absolute inset-0 opacity-20"
              animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
              transition={{ duration: 25, ease: "linear", repeat: Infinity }}
              style={{ backgroundImage: 'radial-gradient(rgba(226,6,19,0.15) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
            />
          </motion.div>

          {/* CENTER: Target Network Orbit */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] pointer-events-none">
            {networkNodes.map((node, i) => {
              const radius = 200;
              const angleRad = (node.angle * Math.PI) / 180;
              const x = Math.cos(angleRad) * radius;
              const y = Math.sin(angleRad) * radius;
              
              return (
                <React.Fragment key={i}>
                  <motion.svg className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 overflow-visible">
                    <motion.line 
                      x1="230" y1="230" 
                      x2={230 + x} y2={230 + y} 
                      stroke="url(#gradient-line-red)" 
                      strokeWidth="1.5"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: [0, 0.6, 0.3] }}
                      transition={{ duration: 1.5, delay: 1 + i * 0.1, ease: "easeOut" }}
                    />
                    <defs>
                      <linearGradient id="gradient-line-red" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#E20613" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#16175C" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </motion.svg>

                  <motion.div 
                    className="absolute top-1/2 left-1/2 flex items-center justify-center w-12 h-12 -ml-6 -mt-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md shadow-[0_0_25px_rgba(226,6,19,0.25)]"
                    style={{ x, y }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 + i * 0.1, type: "spring" }}
                  >
                    <node.Icon className="w-5 h-5 text-[var(--color-accent-400)]" />
                  </motion.div>
                </React.Fragment>
              )
            })}
          </div>

          {/* CENTER: Logo Materialization */}
          <div className="relative z-50 flex flex-col items-center justify-center">
            {/* Glowing Red Pulsing Light */}
            <motion.div 
              className="absolute w-64 h-64 rounded-full bg-[var(--color-accent-500)] mix-blend-screen blur-[50px]"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.8, 1.2], opacity: [0, 0.85, 0] }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />
            
            {/* Larger Logo Emblem Container */}
            <motion.div
              layoutId="global-logo"
              className="w-[260px] sm:w-[310px] h-[140px] sm:h-[160px] rounded-[28px] bg-white/95 backdrop-blur-md border border-white/30 flex items-center justify-center shrink-0 relative overflow-hidden shadow-[0_0_60px_rgba(226,6,19,0.4)] p-6"
              initial={{ opacity: 0, scale: 0.7, filter: "blur(10px)" }}
              animate={{ 
                opacity: 1, 
                scale: [0.7, 1.08, 1.0], 
                filter: "blur(0px)",
                y: [0, -6, 0]
              }}
              transition={{ 
                duration: 1.5, 
                delay: 0.4, 
                scale: { duration: 1.2, ease: [0.34, 1.56, 0.64, 1] },
                opacity: { duration: 0.8 },
                filter: { duration: 0.8 },
                y: { duration: 2, delay: 1.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }
              }}
            >
              <img 
                src="/logo.png" 
                alt="THE CENTER Business Services" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.display = 'none';
                  target.parentElement?.classList.add('splash-fallback-active');
                }}
              />
              <svg className="absolute hidden splash-fallback-svg w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <style>{`.splash-fallback-active .splash-fallback-svg { display: block; }`}</style>
                <circle cx="12" cy="12" r="10" stroke="#E20613" strokeWidth="2" />
                <circle cx="12" cy="12" r="5" fill="#E20613" />
              </svg>

              <motion.div 
                className="absolute inset-0 w-[200%] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg]"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1, delay: 1.5, ease: "easeInOut" }}
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="mt-6 text-center"
            >
              <span className="font-extrabold text-white text-2xl tracking-tight block">THE CENTER</span>
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-[var(--color-accent-400)] block mt-1">Business Services</span>
            </motion.div>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  )
}

