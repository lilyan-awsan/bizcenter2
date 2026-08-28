"use client"

import * as React from "react"
import { useReducedMotion } from "framer-motion"

interface SplashContextType {
  splashFinished: boolean
  setSplashFinished: (value: boolean) => void
  isFirstVisit: boolean
}

const SplashContext = React.createContext<SplashContextType | undefined>(undefined)

export function SplashProvider({ children }: { children: React.ReactNode }) {
  const [splashFinished, setSplashFinished] = React.useState(true)
  const [isFirstVisit, setIsFirstVisit] = React.useState(false)
  const prefersReducedMotion = useReducedMotion()

  React.useEffect(() => {
    // Check if the user has already seen the splash in this session
    const hasSeenSplash = sessionStorage.getItem("hasSeenSplashV3")
    
    if (!hasSeenSplash && !prefersReducedMotion) {
      setIsFirstVisit(true)
      setSplashFinished(false)
      sessionStorage.setItem("hasSeenSplashV3", "true")
    } else {
      setSplashFinished(true)
    }
  }, [prefersReducedMotion])

  return (
    <SplashContext.Provider value={{ splashFinished, setSplashFinished, isFirstVisit }}>
      {children}
    </SplashContext.Provider>
  )
}

export function useSplash() {
  const context = React.useContext(SplashContext)
  if (context === undefined) {
    throw new Error("useSplash must be used within a SplashProvider")
  }
  return context
}
