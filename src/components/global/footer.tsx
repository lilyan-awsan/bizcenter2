"use client"

import * as React from "react"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Printer, ChevronDown } from "lucide-react"
import { LanguageSwitcher } from "./language-switcher"
import { contactConfig } from "@/lib/config"
import { BookConsultationButton } from "@/components/ui/book-consultation-button"
import { Button } from "@/components/ui/button"

export function Footer() {
  const [openSection, setOpenSection] = React.useState<string | null>(null)

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section)
  }

  const FooterAccordion = ({ title, children, id }: { title: string, children: React.ReactNode, id: string }) => (
    <div className="border-b border-white/10 md:border-none py-4 md:py-0">
      <button 
        onClick={() => toggleSection(id)}
        className="flex items-center justify-between w-full md:cursor-default md:pointer-events-none"
        aria-expanded={openSection === id}
      >
        <h4 className="text-[14px] font-semibold tracking-wider text-[var(--color-accent-400)] uppercase">{title}</h4>
        <ChevronDown className={`w-4 h-4 text-white/50 transition-transform md:hidden ${openSection === id ? 'rotate-180' : ''}`} />
      </button>
      <div className={`mt-4 flex-col gap-3 md:flex ${openSection === id ? 'flex' : 'hidden'}`}>
        {children}
      </div>
    </div>
  )

  return (
    <footer className="w-full mt-auto flex flex-col">
      {/* Pre-Footer CTA */}
      <div className="bg-[var(--color-primary-800)] text-center py-16 px-6 border-b border-white/10">
        <div className="container mx-auto max-w-[700px]">
          <h2 className="text-2xl md:text-3xl text-white mb-6">Ready to Take the Next Step?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <BookConsultationButton className="w-full sm:w-auto bg-white text-[var(--color-primary-900)] hover:bg-[#F8F7F4]" />
            <Button variant="outline" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10" asChild>
              <Link href="/contact">Contact THE CENTER</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-[var(--color-primary-900)] text-white w-full">
        <div className="container mx-auto px-6 max-w-[var(--container-xl)]">
          
          <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-10">
            
            {/* Column 1: Brand */}
            <div className="flex flex-col gap-4 lg:col-span-2 mb-6 md:mb-0">
              <Link href="/" className="font-bold text-2xl tracking-tight inline-block">
                THE CENTER
              </Link>
              <p className="text-[14px] md:text-[15px] text-[var(--color-primary-200)] leading-relaxed max-w-[300px]">
                Providing practical business and administrative support for individuals, entrepreneurs, and small businesses.
              </p>
            </div>

            {/* Column 2: Services */}
            <FooterAccordion title="Services" id="services">
              <ul className="flex flex-col gap-3">
                {[
                  { label: "Business Startup", href: "/services/business-startup" },
                  { label: "Bookkeeping", href: "/services/bookkeeping" },
                  { label: "Business Support", href: "/services/business-support" },
                  { label: "Applications & Admin", href: "/services/applications-administrative-support" },
                  { label: "New to the U.S.", href: "/services/new-to-the-united-states" }
                ].map(link => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-[14px] md:text-[15px] text-[var(--color-primary-100)] hover:text-[var(--color-accent-300)] transition-colors inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterAccordion>

            {/* Column 3: Resources & Company */}
            <FooterAccordion title="Explore" id="explore">
              <ul className="flex flex-col gap-3">
                <li><Link href="/about" className="text-[14px] md:text-[15px] text-[var(--color-primary-100)] hover:text-[var(--color-accent-300)] transition-colors inline-block">About Us</Link></li>
                <li><Link href="/resources" className="text-[14px] md:text-[15px] text-[var(--color-primary-100)] hover:text-[var(--color-accent-300)] transition-colors inline-block">Resources Hub</Link></li>
                <li><Link href="/faq" className="text-[14px] md:text-[15px] text-[var(--color-primary-100)] hover:text-[var(--color-accent-300)] transition-colors inline-block">FAQ</Link></li>
                <li><Link href="/contact" className="text-[14px] md:text-[15px] text-[var(--color-primary-100)] hover:text-[var(--color-accent-300)] transition-colors inline-block">Contact</Link></li>
              </ul>
            </FooterAccordion>

            {/* Column 4: Legal */}
            <FooterAccordion title="Legal" id="legal">
              <ul className="flex flex-col gap-3">
                <li><Link href="/privacy" className="text-[14px] md:text-[15px] text-[var(--color-primary-100)] hover:text-[var(--color-accent-300)] transition-colors inline-block">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-[14px] md:text-[15px] text-[var(--color-primary-100)] hover:text-[var(--color-accent-300)] transition-colors inline-block">Terms & Conditions</Link></li>
                <li><Link href="/accessibility" className="text-[14px] md:text-[15px] text-[var(--color-primary-100)] hover:text-[var(--color-accent-300)] transition-colors inline-block">Accessibility</Link></li>
              </ul>
            </FooterAccordion>

            {/* Column 5: Contact */}
            <div className="flex flex-col gap-4 py-4 md:py-0 border-b border-white/10 md:border-none">
              <h4 className="text-[14px] font-semibold tracking-wider text-[var(--color-accent-400)] uppercase">Contact</h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href={`tel:${contactConfig.phoneRaw}`} className="flex items-start gap-3 text-[14px] md:text-[15px] text-[var(--color-primary-100)] hover:text-white group transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm">
                    <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:text-[var(--color-accent-400)] transition-colors" />
                    <span>{contactConfig.phone}</span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${contactConfig.email}`} className="flex items-start gap-3 text-[14px] md:text-[15px] text-[var(--color-primary-100)] hover:text-white group transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm">
                    <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:text-[var(--color-accent-400)] transition-colors" />
                    <span>{contactConfig.email}</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3 text-[14px] md:text-[15px] text-[var(--color-primary-100)]">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-white/50" />
                    <span>{contactConfig.address.split(',')[0]}<br />{contactConfig.address.split(',').slice(1).join(',')}</span>
                  </div>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Footer */}
          <div className="py-6 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-4">
            <p className="text-[13px] text-[var(--color-primary-300)] text-center lg:text-left leading-relaxed">
              © {new Date().getFullYear()} THE CENTER. All rights reserved. <br className="lg:hidden" />
              <span className="hidden lg:inline"> | </span> 
              THE CENTER provides administrative support and is not a law firm or CPA firm.
            </p>
            <div className="flex items-center gap-4">
              <LanguageSwitcher />
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}
