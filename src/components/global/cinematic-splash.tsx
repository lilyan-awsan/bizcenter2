"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useSplash } from "@/components/providers/splash-provider"
import { Rocket, Calculator, ClipboardList, FileText, Globe, MessageSquare, HelpCircle } from "lucide-react"

export function CinematicSplash() {
  const { splashFinished, setSplashFinished, isFirstVisit } = useSplash()

  React.useEffect(() => {
    if (isFirstVisit && !splashFinished) {
      // The total sequence is ~3.5s, we trigger the dissolve at 3.0s to allow the 0.5s fade out
      const timer = setTimeout(() => {
        setSplashFinished(true)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [isFirstVisit, splashFinished, setSplashFinished])

  if (!isFirstVisit || splashFinished) return null

  // The network icons representing the services
  const networkNodes = [
    { Icon: Rocket, angle: 0 },
    { Icon: Calculator, angle: 51 },
    { Icon: ClipboardList, angle: 102 },
    { Icon: FileText, angle: 153 },
    { Icon: Globe, angle: 204 },
    { Icon: MessageSquare, angle: 255 },
    { Icon: HelpCircle, angle: 306 },
  ]

  return (
    <AnimatePresence>
      {!splashFinished && (
        <motion.div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--color-primary-950)] overflow-hidden"
          exit={{ opacity: 0, filter: "blur(10px)", scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* =======================================
              BACKGROUND: Mesh Gradients & Light Orbs
          ======================================= */}
          <motion.div 
            className="absolute inset-0 opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 2 }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,var(--color-primary-900),transparent_40%),radial-gradient(circle_at_70%_70%,var(--color-accent-900),transparent_40%)] mix-blend-screen" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[var(--color-accent-500)] opacity-[0.03] blur-[100px]" />
            <motion.div 
              className="absolute inset-0"
              animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
              transition={{ duration: 20, ease: "linear", repeat: Infinity }}
              style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
            />
          </motion.div>

          {/* =======================================
              BACKGROUND: Floating Documents & Paths
          ======================================= */}
          <div className="absolute inset-0 pointer-events-none perspective-[1000px]">
            {/* Abstract Workflow Line 1 */}
            <motion.svg className="absolute w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
              <motion.path 
                d="M-10,50 Q25,20 50,50 T110,50" 
                fill="none" 
                stroke="var(--color-accent-400)" 
                strokeWidth="0.2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />
            </motion.svg>
            {/* Floating Folder Outline */}
            <motion.div 
              className="absolute top-[20%] left-[20%] w-24 h-16 border border-white/10 rounded-md backdrop-blur-sm"
              initial={{ opacity: 0, y: 50, rotateX: 45, rotateY: -20 }}
              animate={{ opacity: 1, y: 0, rotateX: 20, rotateY: -10 }}
              transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
            >
              <div className="w-1/3 h-3 border-b border-r border-white/10 rounded-br-sm absolute -top-3 left-0" />
            </motion.div>
            {/* Floating Checklist Outline */}
            <motion.div 
              className="absolute bottom-[20%] right-[20%] w-20 h-28 border border-[var(--color-accent-400)]/20 rounded-md flex flex-col gap-2 p-3"
              initial={{ opacity: 0, y: -50, rotateX: -20, rotateY: 30 }}
              animate={{ opacity: 1, y: 0, rotateX: -10, rotateY: 15 }}
              transition={{ duration: 2, delay: 0.7, ease: "easeOut" }}
            >
              <div className="w-full h-[1px] bg-[var(--color-accent-400)]/20" />
              <div className="w-4/5 h-[1px] bg-[var(--color-accent-400)]/20" />
              <div className="w-full h-[1px] bg-[var(--color-accent-400)]/20" />
            </motion.div>
          </div>

          {/* =======================================
              CENTER: Business Network Orbit
          ======================================= */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none">
            {networkNodes.map((node, i) => {
              const radius = 160;
              const angleRad = (node.angle * Math.PI) / 180;
              const x = Math.cos(angleRad) * radius;
              const y = Math.sin(angleRad) * radius;
              
              return (
                <React.Fragment key={i}>
                  {/* Glowing connection line to center */}
                  <motion.svg className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 overflow-visible">
                    <motion.line 
                      x1="200" y1="200" 
                      x2={200 + x} y2={200 + y} 
                      stroke="url(#gradient-line)" 
                      strokeWidth="1"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: [0, 0.5, 0.2] }}
                      transition={{ duration: 1.5, delay: 1 + i * 0.1, ease: "easeOut" }}
                    />
                    <defs>
                      <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="var(--color-accent-400)" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </motion.svg>

                  {/* Network Node Icon */}
                  <motion.div 
                    className="absolute top-1/2 left-1/2 flex items-center justify-center w-10 h-10 -ml-5 -mt-5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(219,161,62,0.1)]"
                    style={{ x, y }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 + i * 0.1, type: "spring" }}
                  >
                    <node.Icon className="w-4 h-4 text-[var(--color-accent-200)]" />
                  </motion.div>
                </React.Fragment>
              )
            })}
          </div>

          {/* =======================================
              CENTER: Logo Materialization
          ======================================= */}
          <div className="relative z-50 flex items-center justify-center perspective-[1000px]">
            {/* Gathering light particles (simplified with a scaling glow) */}
            <motion.div 
              className="absolute w-32 h-32 rounded-full bg-[var(--color-accent-400)] mix-blend-screen blur-[30px]"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.5, 1], opacity: [0, 0.8, 0] }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            
            {/* The Logo */}
            <motion.div
              layoutId="global-logo"
              className="w-20 h-20 rounded-xl bg-[var(--color-primary-900)] flex items-center justify-center shrink-0 relative overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.1)]"
              initial={{ opacity: 0, scale: 0.7, filter: "blur(10px)", rotateX: 20 }}
              animate={{ 
                opacity: 1, 
                scale: [0.7, 1.05, 1.0], 
                filter: "blur(0px)",
                rotateX: [20, -5, 0],
                y: [0, -5, 0] // Gentle floating
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
                alt="THE CENTER Logo" 
                className="w-full h-full object-contain p-3"
              />
              {/* Shimmer sweep over logo */}
              <motion.div 
                className="absolute inset-0 w-[200%] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1, delay: 1.5, ease: "easeInOut" }}
              />
            </motion.div>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  )
}
