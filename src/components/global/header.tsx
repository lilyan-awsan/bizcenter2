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
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out border-b",
        isScrolled 
          ? "h-[76px] bg-white/95 backdrop-blur-md border-[var(--header-line)] shadow-[0_4px_20px_rgba(34,22,87,0.06)]" 
          : "h-[84px] bg-transparent border-transparent"
      )}
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between max-w-[var(--container-2xl)]">
        
        {/* LEFT: Logo Image */}
        <Link 
          href="/" 
          className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-500)] rounded-md group py-1"
          aria-label="THE CENTER Home"
        >
          <motion.div 
            layoutId="global-logo"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 200, damping: 20 }}
            className="flex items-center"
          >
            <img 
              src="/logo.png" 
              alt="THE CENTER Business Services" 
              className="h-10 sm:h-12 max-h-[48px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                const target = e.target as HTMLElement;
                target.style.display = 'none';
                if (target.nextElementSibling) target.nextElementSibling.classList.remove('hidden');
              }}
            />
            {/* Fallback layout if logo.png is not found */}
            <div className="hidden flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-primary-900)] flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="9" stroke="#E20613" strokeWidth="2" />
                  <circle cx="12" cy="12" r="4" fill="#E20613" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-[var(--color-primary-900)] text-xl tracking-tight leading-none">THE CENTER</span>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-slate)] leading-tight mt-0.5">Business Services</span>
              </div>
            </div>
          </motion.div>
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
            <Link href="/" className={`text-[15px] font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-500)] rounded-sm py-2 relative ${isActive('/') ? 'text-[var(--color-accent-500)] font-extrabold' : 'text-[var(--color-primary-900)] hover:text-[var(--color-accent-500)]'}`}>
              Home
              {isActive('/') && (
                <motion.div layoutId="active-indicator" className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--color-accent-500)] rounded-full" />
              )}
            </Link>
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }} className={isActive('/services') ? 'text-[var(--color-accent-500)]' : ''}>
            <NavDropdown label="Services" items={SERVICES} />
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }} className={isActive('/resources') || isActive('/faq') ? 'text-[var(--color-accent-500)]' : ''}>
            <NavDropdown label="Resources" items={RESOURCES} />
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}>
            <Link href="/about" className={`text-[15px] font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-500)] rounded-sm py-2 relative ${isActive('/about') ? 'text-[var(--color-accent-500)] font-extrabold' : 'text-[var(--color-primary-900)] hover:text-[var(--color-accent-500)]'}`}>
              About
              {isActive('/about') && (
                <motion.div layoutId="active-indicator" className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--color-accent-500)] rounded-full" />
              )}
            </Link>
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}>
            <Link href="/contact" className={`text-[15px] font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-500)] rounded-sm py-2 relative ${isActive('/contact') ? 'text-[var(--color-accent-500)] font-extrabold' : 'text-[var(--color-primary-900)] hover:text-[var(--color-accent-500)]'}`}>
              Contact
              {isActive('/contact') && (
                <motion.div layoutId="active-indicator" className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--color-accent-500)] rounded-full" />
              )}
            </Link>
          </motion.div>
        </motion.nav>

        {/* RIGHT: Desktop Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
          className="hidden md:flex items-center gap-5"
        >
          <LanguageSwitcher className="hidden lg:flex" />
          <div className="hidden lg:block">
            <BookConsultationButton size="sm" className="px-6 rounded-lg bg-[var(--color-accent-500)] hover:bg-[var(--color-accent-600)] text-white shadow-[0_4px_15px_rgba(226,6,19,0.25)] hover:shadow-[0_0_25px_rgba(226,6,19,0.4)]" />
          </div>
          <div className="lg:hidden">
            <BookConsultationButton size="sm" className="px-4 text-[13px] rounded-lg bg-[var(--color-accent-500)] hover:bg-[var(--color-accent-600)] text-white shadow-[0_4px_15px_rgba(226,6,19,0.25)]" label="Book Consultation" />
          </div>
        </motion.div>

        {/* RIGHT: Mobile Menu Trigger */}
        <MobileMenu services={SERVICES} resources={RESOURCES} />

      </div>
    </motion.header>
  )
}
