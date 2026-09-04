"use client"

import * as React from "react"
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion"

interface TimelineNode {
  step: string
  title: string
  desc: string
  icon: React.ReactNode
}

interface AnimatedTimelineProps {
  nodes: TimelineNode[]
}

export function AnimatedTimeline({ nodes }: AnimatedTimelineProps) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  // Smooth out the scroll progress slightly
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const numNodes = nodes.length
  
  return (
    <div ref={containerRef} className="relative w-full max-w-[1000px] mx-auto py-10">
      
      {/* The Central Path Line (Background - Progress Rail Base #E4E2EC) */}
      <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[3px] bg-[var(--line)] -translate-x-1/2 rounded-full" />
      
      {/* The Central Path Line (Animated Foreground - Red Target Glow) */}
      <motion.div 
        className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[var(--color-accent-500)] via-[var(--color-accent-600)] to-[var(--color-primary-900)] -translate-x-1/2 origin-top rounded-full shadow-[0_0_15px_rgba(226,6,19,0.5)]"
        style={{ scaleY: prefersReducedMotion ? 1 : smoothProgress }}
      />

      <div className="space-y-24 md:space-y-32">
        {nodes.map((node, i) => {
          
          const start = Math.max(0, (i - 0.5) / (numNodes - 1))
          const end = Math.min(1, (i + 0.5) / (numNodes - 1))
          const nodeProgress = useTransform(smoothProgress, [start, end], [0, 1])
          
          const opacity = useTransform(nodeProgress, [0, 0.2], [0, 1])
          const y = useTransform(nodeProgress, [0, 0.3], [30, 0])
          const scale = useTransform(nodeProgress, [0, 0.3], [0.8, 1])

          const isEven = i % 2 === 0

          return (
            <div key={i} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              
              {/* Central Node Icon */}
              <div className="absolute left-[24px] md:left-1/2 -translate-x-1/2 z-10">
                <motion.div 
                  className="w-13 h-13 rounded-full bg-white border-2 border-[var(--future-line)] shadow-md flex items-center justify-center overflow-hidden transition-all"
                  style={{ 
                    borderColor: useTransform(nodeProgress, [0.4, 0.6], ["#E2E0EE", "#E20613"]) 
                  }}
                >
                  <motion.div 
                    className="absolute inset-0 bg-[var(--color-accent-50)]"
                    style={{ scale: useTransform(nodeProgress, [0.4, 0.6], [0, 1]) }}
                  />
                  <div className="relative z-10 text-[var(--color-primary-900)] [&>svg]:w-5 [&>svg]:h-5">
                    {node.icon}
                  </div>
                </motion.div>
              </div>

              {/* Content Card */}
              <div className={`w-full md:w-1/2 pl-[64px] pr-0 ${isEven ? 'md:pr-[64px] md:pl-0 md:text-right' : 'md:pl-[64px] md:pr-0 text-left'}`}>
                <motion.div 
                  style={{ opacity: prefersReducedMotion ? 1 : opacity, y: prefersReducedMotion ? 0 : y, scale: prefersReducedMotion ? 1 : scale }}
                  className="bg-white rounded-[18px] p-7 lg:p-8 border border-[var(--future-line)] shadow-soft-elevation hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-xs font-extrabold tracking-widest text-[var(--color-accent-500)] mb-2 uppercase">
                    STEP {node.step}
                  </div>
                  <h3 className="text-2xl font-extrabold text-[var(--color-primary-900)] mb-3">{node.title}</h3>
                  <p className="text-[15.5px] text-[var(--color-slate)] leading-relaxed font-normal">
                    {node.desc}
                  </p>
                </motion.div>
              </div>

            </div>
          )
        })}
      </div>

    </div>
  )
}

