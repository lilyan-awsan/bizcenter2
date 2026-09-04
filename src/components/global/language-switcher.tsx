"use client"

import * as React from "react"
import { useLanguage, Language } from "@/context/language-context"
import { cn } from "@/lib/utils"

export function LanguageSwitcher({ className }: { className?: string }) {
  const { language, setLanguage } = useLanguage()

  const languages: { code: Language; label: string; title: string }[] = [
    { code: "EN", label: "EN", title: "Switch to English" },
    { code: "ES", label: "ES", title: "Switch to Spanish" },
    { code: "AR", label: "AR", title: "التحويل إلى العربية" },
  ]

  return (
    <div className={cn("flex items-center text-xs sm:text-sm font-bold gap-1 bg-slate-100/80 p-1 rounded-lg border border-slate-200/60", className)}>
      {languages.map((item, idx) => {
        const isActive = language === item.code
        return (
          <React.Fragment key={item.code}>
            <button
              onClick={() => setLanguage(item.code)}
              className={cn(
                "px-2 py-0.5 rounded transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-500)]",
                isActive 
                  ? "bg-[var(--color-primary-900)] text-white shadow-sm font-extrabold" 
                  : "text-slate-600 hover:text-[var(--color-primary-900)] hover:bg-slate-200/60"
              )}
              aria-label={item.title}
              aria-pressed={isActive}
            >
              {item.label}
            </button>
            {idx < languages.length - 1 && (
              <span className="text-slate-300 pointer-events-none select-none text-[10px]" aria-hidden="true">•</span>
            )}
          </React.Fragment>
        )
      })}
    </div>
  )
}

