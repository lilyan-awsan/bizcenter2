"use client"

import * as React from "react"
import { useLanguage } from "@/context/language-context"
import { getTranslation } from "@/lib/i18n/translations"
import { legalData, LegalContentMap } from "@/lib/legalData"
import { Breadcrumb } from "@/components/ui/breadcrumb"

interface LegalPageLayoutProps {
  docKey: "privacyPolicy" | "terms" | "accessibility"
  currentRoute: string
}

export function LegalPageLayout({ docKey, currentRoute }: LegalPageLayoutProps) {
  const { language } = useLanguage()
  const tDict = getTranslation(language)
  const isAR = language === "AR"
  const docData = legalData[language]?.[docKey] || legalData["EN"][docKey]
  const lastUpdated = legalData[language]?.lastUpdated || legalData["EN"].lastUpdated

  const sections = docData.sections
  const title = docData.title

  const [activeSection, setActiveSection] = React.useState<string>(sections[0]?.id || "")

  React.useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(s => document.getElementById(s.id))
      let currentActive = sections[0]?.id

      for (const el of sectionElements) {
        if (el) {
          const rect = el.getBoundingClientRect()
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
    { label: tDict.nav.home, href: "/" },
    { label: tDict.legal.title },
    { label: title, href: currentRoute, current: true }
  ]

  return (
    <main className="flex flex-col w-full min-h-screen bg-[#FCFBF8] pt-[120px] pb-[100px] rtl:text-right">
      <div className="container mx-auto px-6 max-w-[var(--container-xl)]">
        
        {/* Breadcrumb & Header */}
        <div className="mb-12 rtl:text-right">
          <Breadcrumb items={breadcrumbItems} className="mb-6" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-[var(--color-charcoal)] mb-4">{title}</h1>
          <p className="text-[15px] text-[var(--color-slate)] font-medium">
            {isAR ? `آخر تحديث: ${lastUpdated}` : (language === "ES" ? `Última actualización: ${lastUpdated}` : `Last Updated: ${lastUpdated}`)}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          
          {/* Mobile TOC */}
          <details className="lg:hidden w-full bg-white border border-[var(--color-border-strong)] rounded-xl p-4 shadow-sm mb-8 no-print">
            <summary className="font-semibold text-[var(--color-charcoal)] cursor-pointer outline-none rtl:text-right">
              {isAR ? "في هذه الصفحة" : (language === "ES" ? "En esta página" : "On This Page")}
            </summary>
            <nav className="flex flex-col gap-3 mt-4">
              {sections.map(s => (
                <a 
                  key={s.id} 
                  href={`#${s.id}`}
                  className="text-[15px] text-[var(--color-slate)] hover:text-[var(--color-primary-900)] transition-colors rtl:text-right"
                >
                  {s.title}
                </a>
              ))}
            </nav>
          </details>

          {/* Desktop Sticky TOC */}
          <aside className="hidden lg:block w-[300px] shrink-0 sticky top-[120px] no-print">
            <h3 className="font-semibold text-[13px] uppercase tracking-wider text-[var(--color-slate)] mb-6 rtl:text-right">
              {isAR ? "في هذه الصفحة" : (language === "ES" ? "En esta página" : "On This Page")}
            </h3>
            <nav className="flex flex-col border-l rtl:border-l-0 rtl:border-r border-[var(--color-border)]">
              {sections.map(s => (
                <a 
                  key={s.id} 
                  href={`#${s.id}`}
                  className={`py-2.5 pl-5 rtl:pl-0 rtl:pr-5 border-l-2 rtl:border-l-0 rtl:border-r-2 -ml-[1px] rtl:-ml-0 rtl:-mr-[1px] transition-colors text-[14px] rtl:text-right ${
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

          {/* Main Legal Content */}
          <div className="flex-1 max-w-[850px] w-full">
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-[var(--color-border)] shadow-sm">
              {sections.map((section, idx) => (
                <div 
                  key={section.id} 
                  id={section.id} 
                  className={`scroll-mt-[120px] ${idx !== 0 ? 'mt-12 pt-12 border-t border-[var(--color-border)]' : ''}`}
                >
                  <h2 className="text-2xl font-semibold text-[var(--color-charcoal)] mb-6 rtl:text-right">{section.title}</h2>
                  <div className="prose prose-slate max-w-none prose-p:leading-[1.7] prose-p:text-[16px] prose-p:text-[var(--color-slate)] prose-a:text-[var(--color-primary-900)] prose-a:font-medium prose-strong:text-[var(--color-charcoal)] rtl:text-right">
                    {section.content.split('\n').map((paragraph, pIdx) => {
                      if (!paragraph.trim()) return null
                      if (paragraph.trim().startsWith('•')) {
                        return <li key={pIdx} className="ml-4 rtl:ml-0 rtl:mr-4 mb-2 text-[16px] text-[var(--color-slate)] leading-[1.7] rtl:text-right">{paragraph.trim().substring(1).trim()}</li>
                      }
                      return <p key={pIdx} className="mb-4 text-[16px] text-[var(--color-slate)] leading-[1.7] rtl:text-right">{paragraph}</p>
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
