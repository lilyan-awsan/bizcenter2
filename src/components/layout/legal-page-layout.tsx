"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { legalData } from "@/lib/legalData"
import { Breadcrumb } from "@/components/ui/breadcrumb"

interface LegalSection {
  id: string
  title: string
  content: string
}

interface LegalPageLayoutProps {
  title: string
  sections: LegalSection[]
  currentRoute: string
}

export function LegalPageLayout({ title, sections, currentRoute }: LegalPageLayoutProps) {
  const [activeSection, setActiveSection] = React.useState<string>(sections[0]?.id || "")

  // Simple scroll spy to highlight active TOC item
  React.useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(s => document.getElementById(s.id))
      let currentActive = sections[0]?.id

      for (const el of sectionElements) {
        if (el) {
          const rect = el.getBoundingClientRect()
          // If the top of the section is near the top of the viewport
          if (rect.top <= 150) {
            currentActive = el.id
          }
        }
      }
      setActiveSection(currentActive || "")
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections])

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Legal" },
    { label: title, href: currentRoute, current: true }
  ]

  return (
    <main className="flex flex-col w-full min-h-screen bg-[#FCFBF8] pt-[100px] pb-[100px]">
      <div className="container mx-auto px-6 max-w-[var(--container-xl)]">
        
        {/* Breadcrumb & Header */}
        <div className="mb-12">
          <Breadcrumb items={breadcrumbItems} className="mb-6" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-[var(--color-charcoal)] mb-4">{title}</h1>
          <p className="text-[15px] text-[var(--color-slate)] font-medium">Last Updated: {legalData.lastUpdated}</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          
          {/* Mobile TOC (Collapsible placeholder - fully visible for simplicity here, but can be styled via CSS/details) */}
          <details className="lg:hidden w-full bg-white border border-[var(--color-border-strong)] rounded-xl p-4 shadow-sm mb-8">
            <summary className="font-semibold text-[var(--color-charcoal)] cursor-pointer outline-none">On This Page</summary>
            <nav className="flex flex-col gap-3 mt-4">
              {sections.map(s => (
                <a 
                  key={s.id} 
                  href={`#${s.id}`}
                  className="text-[15px] text-[var(--color-slate)] hover:text-[var(--color-primary-900)] transition-colors"
                >
                  {s.title}
                </a>
              ))}
            </nav>
          </details>

          {/* Desktop Sticky TOC */}
          <aside className="hidden lg:block w-[300px] shrink-0 sticky top-[120px]">
            <h3 className="font-semibold text-[13px] uppercase tracking-wider text-[var(--color-slate)] mb-6">On This Page</h3>
            <nav className="flex flex-col border-l border-[var(--color-border)]">
              {sections.map(s => (
                <a 
                  key={s.id} 
                  href={`#${s.id}`}
                  className={`py-2.5 pl-5 border-l-2 -ml-[1px] transition-colors text-[14px] ${
                    activeSection === s.id 
                      ? "border-[var(--color-primary-900)] text-[var(--color-primary-900)] font-semibold" 
                      : "border-transparent text-[var(--color-slate)] hover:text-[var(--color-charcoal)]"
                  }`}
                >
                  {s.title}
                </a>
              ))}
            </nav>
          </aside>

          {/* Main Legal Content - Reading Width */}
          <div className="flex-1 max-w-[850px] w-full">
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-[var(--color-border)] shadow-sm">
              {sections.map((section, idx) => (
                <div 
                  key={section.id} 
                  id={section.id} 
                  className={`scroll-mt-[120px] ${idx !== 0 ? 'mt-12 pt-12 border-t border-[var(--color-border)]' : ''}`}
                >
                  <h2 className="text-2xl font-semibold text-[var(--color-charcoal)] mb-6">{section.title}</h2>
                  <div className="prose prose-slate max-w-none prose-p:leading-[1.7] prose-p:text-[16px] prose-p:text-[var(--color-slate)] prose-a:text-[var(--color-primary-900)] prose-a:font-medium prose-strong:text-[var(--color-charcoal)]">
                    {/* Render paragraphs dynamically based on line breaks */}
                    {section.content.split('\n').map((paragraph, pIdx) => {
                      if (!paragraph.trim()) return null
                      if (paragraph.trim().startsWith('•')) {
                        return <li key={pIdx} className="ml-4 mb-2 text-[16px] text-[var(--color-slate)] leading-[1.7]">{paragraph.trim().substring(1).trim()}</li>
                      }
                      return <p key={pIdx} className="mb-4 text-[16px] text-[var(--color-slate)] leading-[1.7]">{paragraph}</p>
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}
