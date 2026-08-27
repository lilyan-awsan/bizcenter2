"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Button } from "@/components/ui/button"
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
          <div className="w-8 h-8 rounded bg-[var(--color-primary-900)] flex items-center justify-center shrink-0">
            {/* Simple logo mark approximation */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 12L12 7L17 12L12 17L7 12Z" fill="#C89B3C"/>
            </svg>
          </div>
          <span className="font-bold text-[var(--color-primary-900)] text-xl tracking-tight hidden sm:block">THE CENTER</span>
        </Link>

        {/* CENTER: Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          <Link href="/" className="text-[15px] font-semibold text-[var(--color-charcoal)] hover:text-[var(--color-primary-900)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus rounded-sm py-2">
            Home
          </Link>
          <NavDropdown label="Services" items={SERVICES} />
          <NavDropdown label="Resources" items={RESOURCES} />
          <Link href="/about" className="text-[15px] font-semibold text-[var(--color-charcoal)] hover:text-[var(--color-primary-900)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus rounded-sm py-2">
            About
          </Link>
          <Link href="/contact" className="text-[15px] font-semibold text-[var(--color-charcoal)] hover:text-[var(--color-primary-900)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus rounded-sm py-2">
            Contact
          </Link>
        </nav>

        {/* RIGHT: Desktop Actions */}
        <div className="hidden md:flex items-center gap-6">
          <LanguageSwitcher className="hidden lg:flex" />
          <Button size="sm" className="hidden lg:flex px-6 rounded-md shadow-none hover:shadow-sm" asChild>
            <Link href="/contact">Book a Free Consultation</Link>
          </Button>
          {/* Tablet CTA (when space is slightly constrained) */}
          <Button size="sm" className="lg:hidden px-4" asChild>
            <Link href="/contact">Book Consultation</Link>
          </Button>
        </div>

        {/* RIGHT: Mobile Menu Trigger */}
        <MobileMenu services={SERVICES} resources={RESOURCES} />

      </div>
    </motion.header>
  )
}
