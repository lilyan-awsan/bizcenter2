"use client"

import * as React from "react"
import { usePathname } from "next/navigation"

interface IntroContextType {
  introFinished: boolean
  isHomePage: boolean
}

const IntroContext = React.createContext<IntroContextType>({
  introFinished: true, // Default to true for SSR to avoid layout shifts
  isHomePage: false,
})

export function IntroProvider({ children }: { children: React.ReactNode }) {
  const [introFinished, setIntroFinished] = React.useState(true)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  React.useEffect(() => {
    // Only play intro on the homepage
    if (!isHomePage) {
      setIntroFinished(true)
      return
    }

    // Check if intro has already played in this session
    const hasPlayed = sessionStorage.getItem("introPlayed")
    
    if (!hasPlayed) {
      // First visit: intro has not finished yet
      setIntroFinished(false)
      
      // The PremiumIntro component will handle setting sessionStorage
      // and we use a setTimeout here as a fallback just in case
      const timer = setTimeout(() => {
        setIntroFinished(true)
        sessionStorage.setItem("introPlayed", "true")
      }, 2500) // Max duration of intro sequence
      
      return () => clearTimeout(timer)
    } else {
      setIntroFinished(true)
    }
  }, [isHomePage])

  return (
    <IntroContext.Provider value={{ introFinished, isHomePage }}>
      {children}
    </IntroContext.Provider>
  )
}

export const useIntro = () => React.useContext(IntroContext)
