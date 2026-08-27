"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

interface StaggerContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  delayChildren?: number
  staggerChildren?: number
  once?: boolean
}

export function StaggerContainer({ 
  children, 
  delayChildren = 0, 
  staggerChildren = 0.06, 
  once = true, 
  className, 
  ...props 
}: StaggerContainerProps) {
  const prefersReducedMotion = useReducedMotion()
  
  const variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : staggerChildren,
        delayChildren: prefersReducedMotion ? 0 : delayChildren,
      }
    }
  }

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-15%" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

interface StaggerItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  distance?: number
  delay?: number
}

export function StaggerItem({ children, distance = 16, delay, className, ...props }: StaggerItemProps) {
  const prefersReducedMotion = useReducedMotion()
  
  const variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : distance },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } 
    }
  }

  return (
    <motion.div
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
