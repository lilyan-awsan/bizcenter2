"use client"

import * as React from "react"
import { Header } from "@/components/global/header"
import { Footer } from "@/components/global/footer"
import { PremiumIntro } from "@/components/global/premium-intro"
import { useIntro } from "@/components/providers/intro-provider"
import { motion } from "framer-motion"

export function PageShell({ children }: { children: React.ReactNode }) {
  const { introFinished } = useIntro()

  return (
    <>
      <PremiumIntro />
      <Header />
      <main id="main-content" className="flex-1 flex flex-col min-h-[100dvh] relative overflow-hidden bg-[var(--color-bg-primary)]">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: introFinished ? 1 : 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 flex flex-col"
        >
          {children}
        </motion.div>
      </main>
      <Footer />
    </>
  )
}
