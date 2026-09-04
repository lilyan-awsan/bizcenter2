"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { Menu, X, ChevronRight } from "lucide-react"
import { BookConsultationButton } from "@/components/ui/book-consultation-button"
import { LanguageSwitcher } from "./language-switcher"
import { useLanguage } from "@/context/language-context"
import { getTranslation } from "@/lib/i18n/translations"

interface MobileMenuProps {
  services: { label: string; href: string }[]
  resources: { label: string; href: string }[]
}

export function MobileMenu({ services, resources }: MobileMenuProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [servicesOpen, setServicesOpen] = React.useState(false)
  const [resourcesOpen, setResourcesOpen] = React.useState(false)
  const { language } = useLanguage()
  const tDict = getTranslation(language)

  // Prevent scroll and listen to escape when open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', handleEsc)
    
    return () => {
      document.body.style.overflow = "unset"
      window.removeEventListener('keydown', handleEsc)
    }
  }, [isOpen])

  const prefersReducedMotion = useReducedMotion()

  const menuVariants = {
    closed: { opacity: 0, x: prefersReducedMotion ? 0 : "100%" },
    open: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.4, 
        ease: [0.22, 1, 0.36, 1] as any,
        staggerChildren: prefersReducedMotion ? 0 : 0.04,
        delayChildren: prefersReducedMotion ? 0 : 0.1
      } 
    },
  }

  const staggerVariants = {
    closed: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    open: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as any } },
  }

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 -mr-2 text-[var(--color-charcoal)] hover:text-[var(--color-primary-900)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus rounded-md"
        aria-label="Open menu"
        aria-expanded={isOpen}
      >
        <Menu className="h-6 w-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-50 bg-[var(--color-surface)] flex flex-col h-[100dvh] overflow-y-auto"
          >
            {/* Header Area */}
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <span className="font-bold text-lg text-[var(--color-primary-900)]">THE CENTER</span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 -mr-2 text-[var(--color-charcoal)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus rounded-md"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 px-6 py-8 flex flex-col gap-6">
              <motion.div variants={staggerVariants}>
                <Link href="/" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-[var(--color-charcoal)]">
                  {tDict.nav.home}
                </Link>
              </motion.div>

              {/* Services Accordion */}
              <motion.div variants={staggerVariants} className="flex flex-col gap-4">
                <button 
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus rounded-sm"
                  aria-expanded={servicesOpen}
                >
                  <span className="text-2xl font-bold text-[var(--color-charcoal)]">{tDict.nav.services}</span>
                  <motion.div animate={{ rotate: servicesOpen ? 90 : 0 }}>
                    <ChevronRight className="h-6 w-6 text-[var(--color-border-strong)]" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden flex flex-col gap-3 pl-4 border-l-2 border-[var(--color-border)]"
                    >
                      <Link href="/services" onClick={() => setIsOpen(false)} className="text-lg font-semibold text-[var(--color-text-secondary)] py-1 mt-2">
                        {tDict.nav.services}
                      </Link>
                      {services.map((s) => (
                        <Link key={s.href} href={s.href} onClick={() => setIsOpen(false)} className="text-[17px] text-[var(--color-text-secondary)] py-1">
                          {s.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Resources Accordion */}
              <motion.div variants={staggerVariants} className="flex flex-col gap-4">
                <button 
                  onClick={() => setResourcesOpen(!resourcesOpen)}
                  className="flex items-center justify-between w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus rounded-sm"
                  aria-expanded={resourcesOpen}
                >
                  <span className="text-2xl font-bold text-[var(--color-charcoal)]">{tDict.nav.resources}</span>
                  <motion.div animate={{ rotate: resourcesOpen ? 90 : 0 }}>
                    <ChevronRight className="h-6 w-6 text-[var(--color-border-strong)]" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {resourcesOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden flex flex-col gap-3 pl-4 border-l-2 border-[var(--color-border)]"
                    >
                      {resources.map((r) => (
                        <Link key={r.href} href={r.href} onClick={() => setIsOpen(false)} className="text-[17px] text-[var(--color-text-secondary)] py-1 mt-2">
                          {r.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div variants={staggerVariants}>
                <Link href="/about" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-[var(--color-charcoal)]">
                  {tDict.nav.about}
                </Link>
              </motion.div>

              <motion.div variants={staggerVariants}>
                <Link href="/contact" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-[var(--color-charcoal)]">
                  {tDict.nav.contact}
                </Link>
              </motion.div>
            </div>

            {/* Bottom Actions Area */}
            <motion.div variants={staggerVariants} className="p-6 bg-[var(--color-bg-secondary)] flex flex-col gap-4">
              <div className="flex items-center justify-between mb-2">
                <LanguageSwitcher />
              </div>
              <div onClick={() => setIsOpen(false)} className="w-full">
                <BookConsultationButton className="w-full h-14 text-lg" />
              </div>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
