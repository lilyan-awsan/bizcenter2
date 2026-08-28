"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Button } from "@/components/ui/button"
import { BookConsultationButton } from "@/components/ui/book-consultation-button"
import { NavDropdown } from "./nav-dropdown"
import { LanguageSwitcher } from "./language-switcher"
import { MobileMenu } from "./mobile-menu"
import { cn } from "@/lib/utils"

const SERVICES = [
  { label: "Business Startup", href: "/services/business-startup", description: "From Idea to Organized Next Steps" },
  { label: "Bookkeeping", href: "/services/bookkeeping", description: "Keep Your Business Organized" },
  { label: "Business Support", href: "/services/business-support", description: "Help for Everyday Business Needs" },
  { label: "Applications & Administrative Support", href: "/services/applications-administrative-support", description: "Organize the Information & Process" },
  { label: "New to the United States", href: "/services/new-to-the-united-states", description: "A Clear Starting Point for Processes" },
]

const RESOURCES = [
  { label: "Document Checklist", href: "/resources/document-checklist", description: "Prepare the information for your visit." },
  { label: "Forms & Official Resources", href: "/resources/forms-official-resources", description: "Information with links to official sources." },
  { label: "FAQ", href: "/resources/faq", description: "Answers to common questions." },
]

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const { scrollY } = useScroll()
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true
    if (path !== '/' && pathname?.startsWith(path)) return true
    return false
  }

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20)
  })

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out border-b border-transparent",
        isScrolled ? "h-[72px] glass shadow-sm" : "h-[88px] bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between max-w-[var(--container-2xl)]">
        
        {/* LEFT: Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus rounded-sm"
          aria-label="THE CENTER Home"
        >
          <motion.div 
            layoutId="global-logo"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 200, damping: 20 }}
            className="w-8 h-8 rounded bg-[var(--color-primary-900)] flex items-center justify-center shrink-0 relative overflow-hidden shadow-sm z-50"
          >
            {/* Fallback to SVG if /logo.png is not found */}
            <img 
              src="/logo.png" 
              alt="" 
              className="w-full h-full object-contain p-1.5"
              onError={(e) => {
                const target = e.target as HTMLElement;
                target.style.display = 'none';
                target.parentElement?.classList.add('fallback-active');
              }}
            />
            {/* Fallback SVG */}
            <svg className="absolute hidden fallback-svg w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <style>{`.fallback-active .fallback-svg { display: block; }`}</style>
              <path d="M7 12L12 7L17 12L12 17L7 12Z" fill="#C89B3C"/>
            </svg>
          </motion.div>
          <span className="font-bold text-[var(--color-primary-900)] text-xl tracking-tight hidden sm:block">THE CENTER</span>
        </Link>

        {/* CENTER: Desktop Navigation */}
        <motion.nav 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.8 } }
          }}
          className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2"
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}>
            <Link href="/" className={`text-[15px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus rounded-sm py-2 ${isActive('/') ? 'text-[var(--color-primary-900)]' : 'text-[var(--color-charcoal)] hover:text-[var(--color-primary-900)]'}`}>
              Home
            </Link>
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }} className={isActive('/services') ? 'text-[var(--color-primary-900)]' : ''}>
            <NavDropdown label="Services" items={SERVICES} />
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }} className={isActive('/resources') || isActive('/faq') ? 'text-[var(--color-primary-900)]' : ''}>
            <NavDropdown label="Resources" items={RESOURCES} />
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}>
            <Link href="/about" className={`text-[15px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus rounded-sm py-2 ${isActive('/about') ? 'text-[var(--color-primary-900)]' : 'text-[var(--color-charcoal)] hover:text-[var(--color-primary-900)]'}`}>
              About
            </Link>
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}>
            <Link href="/contact" className={`text-[15px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus rounded-sm py-2 ${isActive('/contact') ? 'text-[var(--color-primary-900)]' : 'text-[var(--color-charcoal)] hover:text-[var(--color-primary-900)]'}`}>
              Contact
            </Link>
          </motion.div>
        </motion.nav>

        {/* RIGHT: Desktop Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
          className="hidden md:flex items-center gap-6"
        >
          <LanguageSwitcher className="hidden lg:flex" />
          <div className="hidden lg:block">
            <BookConsultationButton size="sm" className="px-6 rounded-md shadow-none hover:shadow-sm" />
          </div>
          <div className="lg:hidden">
            <BookConsultationButton size="sm" className="px-4 text-[13px]" label="Book Consultation" />
          </div>
        </motion.div>

        {/* RIGHT: Mobile Menu Trigger */}
        <MobileMenu services={SERVICES} resources={RESOURCES} />

      </div>
    </motion.header>
  )
}
