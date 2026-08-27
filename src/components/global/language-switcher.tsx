"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export function LanguageSwitcher({ className }: { className?: string }) {
  const [lang, setLang] = React.useState<"EN" | "ES">("EN")

  return (
    <div className={cn("flex items-center text-sm font-semibold", className)}>
      <button
        onClick={() => setLang("EN")}
        className={cn(
          "px-2 py-1 transition-colors hover:text-[var(--color-primary-900)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus rounded-sm",
          lang === "EN" ? "text-[var(--color-primary-900)]" : "text-[var(--color-text-secondary)]"
        )}
        aria-label="Switch to English"
        aria-pressed={lang === "EN"}
      >
        EN
      </button>
      <span className="text-[var(--color-border-strong)] pointer-events-none" aria-hidden="true">|</span>
      <button
        onClick={() => setLang("ES")}
        className={cn(
          "px-2 py-1 transition-colors hover:text-[var(--color-primary-900)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus rounded-sm",
          lang === "ES" ? "text-[var(--color-primary-900)]" : "text-[var(--color-text-secondary)]"
        )}
        aria-label="Switch to Spanish"
        aria-pressed={lang === "ES"}
      >
        ES
      </button>
    </div>
  )
}
