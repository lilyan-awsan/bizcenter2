"use client"

import * as React from "react"
import Link from "next/link"
import { Phone, Mail, MapPin, ChevronDown, ArrowRight } from "lucide-react"
import { LanguageSwitcher } from "./language-switcher"
import { contactConfig } from "@/lib/config"
import { BookConsultationButton } from "@/components/ui/book-consultation-button"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/language-context"
import { getTranslation } from "@/lib/i18n/translations"

export function Footer() {
  const [openSection, setOpenSection] = React.useState<string | null>(null)
  const { language } = useLanguage()
  const tDict = getTranslation(language)

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
        <h4 className="text-[14px] font-bold tracking-wider text-[var(--color-accent-500)] uppercase">{title}</h4>
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
      <div className="bg-gradient-to-r from-[var(--color-primary-900)] via-[var(--color-primary-800)] to-[var(--color-primary-900)] text-center py-16 px-6 border-t border-[var(--future-line)]">
        <div className="container mx-auto max-w-[750px]">
          <h2 className="text-3xl md:text-4xl text-white mb-4 font-bold">{tDict.hero.titlePart3}</h2>
          <p className="text-[var(--color-primary-100)] text-lg mb-8 font-light max-w-[600px] mx-auto">
            {tDict.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <BookConsultationButton className="w-full sm:w-auto bg-[var(--color-accent-500)] text-white hover:bg-[var(--color-accent-600)] shadow-[0_0_25px_rgba(226,6,19,0.3)] px-8 h-13" />
            <Button variant="outline" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 glass-dark h-13" asChild>
              <Link href="/contact" className="flex items-center gap-2">
                <span>{tDict.nav.contact}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-[var(--color-primary-950)] text-white w-full">
        <div className="container mx-auto px-6 max-w-[var(--container-xl)]">
          
          <div className="py-14 md:py-18 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 md:gap-10">
            
            {/* Column 1: Brand */}
            <div className="flex flex-col gap-4 lg:col-span-2 mb-6 md:mb-0">
              <Link href="/" className="inline-block py-1">
                <img 
                  src="/logo.png" 
                  alt="THE CENTER Business Services" 
                  className="h-12 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
                  onError={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.display = 'none';
                    if (target.nextElementSibling) target.nextElementSibling.classList.remove('hidden');
                  }}
                />
                <div className="hidden flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[var(--color-accent-500)] flex items-center justify-center shrink-0">
                    <span className="font-extrabold text-white text-lg">C</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-extrabold text-white text-xl tracking-tight leading-none">THE CENTER</span>
                    <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-[var(--color-primary-200)] mt-0.5">Business Services</span>
                  </div>
                </div>
              </Link>
              <p className="text-[14px] text-[var(--color-primary-200)] leading-relaxed max-w-[320px] font-light mt-2">
                {tDict.footer.tagline}
              </p>
            </div>

            {/* Column 2: Services */}
            <FooterAccordion title={tDict.nav.services} id="services">
              <ul className="flex flex-col gap-3">
                {[
                  { label: tDict.services.businessStartup.title, href: "/services/business-startup" },
                  { label: tDict.services.bookkeeping.title, href: "/services/bookkeeping" },
                  { label: tDict.services.businessSupport.title, href: "/services/business-support" },
                  { label: tDict.services.applicationsAdmin.title, href: "/services/applications-administrative-support" },
                  { label: tDict.services.newToUS.title, href: "/services/new-to-the-united-states" }
                ].map(link => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-[14px] text-[var(--color-primary-100)] hover:text-[var(--color-accent-400)] transition-colors inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterAccordion>

            {/* Column 3: Resources & Company */}
            <FooterAccordion title={tDict.nav.resources} id="explore">
              <ul className="flex flex-col gap-3">
                <li><Link href="/about" className="text-[14px] text-[var(--color-primary-100)] hover:text-[var(--color-accent-400)] transition-colors inline-block">{tDict.nav.about}</Link></li>
                <li><Link href="/resources/document-checklist" className="text-[14px] text-[var(--color-primary-100)] hover:text-[var(--color-accent-400)] transition-colors inline-block">{tDict.resources.documentChecklist.title}</Link></li>
                <li><Link href="/resources/forms-official-resources" className="text-[14px] text-[var(--color-primary-100)] hover:text-[var(--color-accent-400)] transition-colors inline-block">{tDict.resources.formsOfficial.title}</Link></li>
                <li><Link href="/resources/faq" className="text-[14px] text-[var(--color-primary-100)] hover:text-[var(--color-accent-400)] transition-colors inline-block">{tDict.resources.faq.title}</Link></li>
                <li><Link href="/contact" className="text-[14px] text-[var(--color-primary-100)] hover:text-[var(--color-accent-400)] transition-colors inline-block">{tDict.nav.contact}</Link></li>
              </ul>
            </FooterAccordion>

            {/* Column 4: Legal */}
            <FooterAccordion title={tDict.legal.title} id="legal">
              <ul className="flex flex-col gap-3">
                <li><Link href="/privacy" className="text-[14px] text-[var(--color-primary-100)] hover:text-[var(--color-accent-400)] transition-colors inline-block">{tDict.legal.privacy}</Link></li>
                <li><Link href="/terms" className="text-[14px] text-[var(--color-primary-100)] hover:text-[var(--color-accent-400)] transition-colors inline-block">{tDict.legal.terms}</Link></li>
                <li><Link href="/accessibility" className="text-[14px] text-[var(--color-primary-100)] hover:text-[var(--color-accent-400)] transition-colors inline-block">{tDict.legal.accessibility}</Link></li>
              </ul>
            </FooterAccordion>

            {/* Column 5: Contact */}
            <div className="flex flex-col gap-4 py-4 md:py-0 border-b border-white/10 md:border-none">
              <h4 className="text-[14px] font-bold tracking-wider text-[var(--color-accent-500)] uppercase">{tDict.nav.contact}</h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href={`tel:${contactConfig.phoneRaw}`} className="flex items-start gap-3 text-[14px] text-[var(--color-primary-100)] hover:text-white group transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm">
                    <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-[var(--color-accent-500)] group-hover:scale-110 transition-transform" />
                    <span>{contactConfig.phone}</span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${contactConfig.email}`} className="flex items-start gap-3 text-[14px] text-[var(--color-primary-100)] hover:text-white group transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm">
                    <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-[var(--color-accent-500)] group-hover:scale-110 transition-transform" />
                    <span>{contactConfig.email}</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3 text-[14px] text-[var(--color-primary-100)]">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[var(--color-accent-500)]" />
                    <span>{contactConfig.address.split(',')[0]}<br />{contactConfig.address.split(',').slice(1).join(',')}</span>
                  </div>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Footer */}
          <div className="py-6 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-4">
            <p className="text-[13px] text-[var(--color-primary-300)] text-center lg:text-left leading-relaxed">
              © {new Date().getFullYear()} {tDict.footer.rights} <br className="lg:hidden" />
              <span className="hidden lg:inline"> | </span> 
              {tDict.footer.disclaimer}
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

