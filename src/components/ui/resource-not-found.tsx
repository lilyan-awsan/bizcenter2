"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { FileQuestion, ArrowRight, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger"

export function ResourceNotFound() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-[#F8F7F4] items-center justify-center py-20 px-6 relative overflow-hidden">
      {/* Background Soft Gradients */}
      <div className="absolute top-[10%] left-[10%] w-[400px] h-[400px] bg-radial-[at_50%_50%] from-[var(--color-accent-200)]/30 to-transparent to-70% rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[350px] h-[350px] bg-radial-[at_50%_50%] from-[var(--color-primary-200)]/20 to-transparent to-70% rounded-full blur-3xl opacity-50 pointer-events-none" />

      <StaggerContainer className="relative z-10 flex flex-col items-center text-center max-w-[600px] bg-white p-12 md:p-16 rounded-[24px] border border-[var(--color-border)] shadow-xl">
        <StaggerItem distance={12}>
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
            className="w-24 h-24 rounded-full bg-[var(--color-bg-secondary)] flex items-center justify-center mb-8 mx-auto"
          >
            <FileQuestion className="w-12 h-12 text-[var(--color-slate)]" />
          </motion.div>
        </StaggerItem>
        <StaggerItem distance={12}>
          <h1 className="text-3xl md:text-4xl mb-4 text-[var(--color-charcoal)]">Resource Not Found</h1>
        </StaggerItem>
        <StaggerItem distance={12}>
          <p className="text-[16px] text-[var(--color-slate)] leading-relaxed mb-10 text-balance">
            The resource you're looking for may have moved, been renamed, or is no longer available.
          </p>
        </StaggerItem>
        <StaggerItem distance={12} className="w-full sm:w-auto">
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
            <Button size="lg" className="w-full sm:w-auto group" asChild>
              <Link href="/resources">
                Browse Resources
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-[220ms] group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white border-[var(--color-border-strong)] text-[var(--color-charcoal)] hover:bg-[var(--color-offwhite)] shadow-none" asChild>
              <Link href="/">
                <Home className="w-4 h-4 mr-2" />
                Return Home
              </Link>
            </Button>
          </div>
        </StaggerItem>
      </StaggerContainer>
    </main>
  )
}
