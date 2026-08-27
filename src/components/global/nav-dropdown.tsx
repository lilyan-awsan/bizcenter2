"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface DropdownItem {
  label: string
  href: string
  description?: string
}

interface NavDropdownProps {
  label: string
  items: DropdownItem[]
  active?: boolean
}

export function NavDropdown({ label, items, active }: NavDropdownProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false)
    }, 150)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      setIsOpen(!isOpen)
    } else if (e.key === "Escape") {
      setIsOpen(false)
    }
  }

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={cn(
          "flex items-center gap-1 py-2 text-[15px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus rounded-sm",
          active ? "text-[var(--color-primary-900)]" : "text-[var(--color-charcoal)] hover:text-[var(--color-primary-900)]"
        )}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
      >
        {label}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-4 w-4 text-[var(--color-border-strong)]" />
        </motion.div>
        
        {/* Animated Underline */}
        <span className={cn(
          "absolute -bottom-1 left-0 h-[2px] bg-[var(--color-accent-500)] transition-all duration-300",
          active ? "w-full opacity-100" : "w-0 opacity-0"
        )} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full left-0 mt-2 w-72 rounded-[var(--radius-lg)] border bg-white shadow-[var(--shadow-lg)] overflow-hidden z-50"
          >
            <div className="p-2 flex flex-col gap-1">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex flex-col p-3 rounded-md transition-colors hover:bg-[var(--color-surface-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-[15px] font-semibold text-[var(--color-charcoal)] group-hover:text-[var(--color-primary-900)] transition-colors">
                    {item.label}
                  </span>
                  {item.description && (
                    <span className="text-sm text-[var(--color-text-secondary)] mt-0.5">
                      {item.description}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
