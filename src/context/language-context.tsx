"use client"

import * as React from "react"

export type Language = "EN" | "ES" | "AR"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  dir: "ltr" | "rtl"
  t: (key: string, fallback?: string) => string
}

const LanguageContext = React.createContext<LanguageContextType | undefined>(undefined)

const LANGUAGE_STORAGE_KEY = "thecenter_user_language"

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = React.useState<Language>("EN")
  const [isMounted, setIsMounted] = React.useState(false)

  // Sync state from localStorage on client mount
  React.useEffect(() => {
    setIsMounted(true)
    try {
      const savedLang = localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language
      if (savedLang && (savedLang === "EN" || savedLang === "ES" || savedLang === "AR")) {
        setLanguageState(savedLang)
      }
    } catch (e) {
      console.warn("Could not read language preference from localStorage", e)
    }
  }, [])

  const dir = language === "AR" ? "rtl" : "ltr"

  // Update HTML document attributes whenever language changes
  React.useEffect(() => {
    if (!isMounted) return
    const root = document.documentElement
    root.setAttribute("dir", dir)
    root.setAttribute("lang", language.toLowerCase())

    if (language === "AR") {
      root.classList.add("lang-ar")
    } else {
      root.classList.remove("lang-ar")
    }

    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
    } catch (e) {
      // Ignore storage errors
    }
  }, [language, dir, isMounted])

  const setLanguage = React.useCallback((lang: Language) => {
    setLanguageState(lang)
  }, [])

  // Simple key resolver for nested translation paths (e.g. "header.services")
  const t = React.useCallback((key: string, fallback?: string): string => {
    // We will hook this to central translations dictionary
    return fallback || key
  }, [])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dir, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = React.useContext(LanguageContext)
  if (!context) {
    // Fallback if rendered outside provider
    return {
      language: "EN" as Language,
      setLanguage: () => {},
      dir: "ltr" as "ltr" | "rtl",
      t: (key: string, fallback?: string) => fallback || key,
    }
  }
  return context
}
