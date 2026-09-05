"use client"

import * as React from "react"
import Link from "next/link"
import { HelpCircle, ArrowRight } from "lucide-react"
import { BookConsultationButton } from "@/components/ui/book-consultation-button"
import { SharedFaqAccordion } from "@/components/ui/shared-faq-accordion"
import { FaqCategory } from "@/lib/faq"
import { CATEGORY_TRANSLATIONS, CATEGORY_DESCRIPTIONS } from "@/lib/faqTranslations"
import { useLanguage } from "@/context/language-context"
import { getTranslation } from "@/lib/i18n/translations"

const FAQ_SECTIONS_KEYS: { categoryKey: FaqCategory }[] = [
  { categoryKey: "Consultations" },
  { categoryKey: "Business Startup" },
  { categoryKey: "Bookkeeping" },
  { categoryKey: "Applications & Administrative Support" },
  { categoryKey: "New to the United States" }
]

export default function ResourceFaqPage() {
  const { language } = useLanguage()
  const tDict = getTranslation(language)
  const isAr = language === "AR"
  const isEs = language === "ES"

  return (
    <main className="min-h-screen bg-[#F8F7F4] pt-[110px] pb-20 rtl:text-right">
      
      {/* Header */}
      <section className="bg-white border-b border-[var(--color-border)] py-12 md:py-16">
        <div className="container mx-auto px-6 max-w-[var(--container-xl)]">
          <div className="max-w-3xl rtl:text-right">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[var(--color-accent-600)] mb-3 block rtl:text-right">
              {isAr ? "الموارد والتعليمات" : isEs ? "RECURSOS Y GUÍA" : "RESOURCES & GUIDANCE"}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-primary-900)] mb-4 rtl:text-right">
              {isAr ? "الأسئلة الشائعة" : isEs ? "Preguntas Frecuentes" : "Frequently Asked Questions"}
            </h1>
            <p className="text-lg text-[var(--color-slate)] leading-relaxed rtl:text-right">
              {isAr 
                ? "إجابات إدارية عملية وواضحة على الأسئلة الأكثر تكراراً حول تأسيس الشركات، مسك الدفاتر المحاسبية، والدعم الإداري." 
                : isEs 
                ? "Respuestas claras y prácticas a las preguntas frecuentes sobre creación de empresas, contabilidad y soporte administrativo." 
                : "Clear, practical answers to common questions about business startup, bookkeeping, administrative support, and consultation appointments."}
            </p>
          </div>
        </div>
      </section>

      {/* Accordion List by Topic */}
      <section className="container mx-auto px-6 max-w-[var(--container-lg)] py-12">
        <div className="space-y-12">
          {FAQ_SECTIONS_KEYS.map((sec, idx) => {
            const catTitle = isAr && CATEGORY_TRANSLATIONS[sec.categoryKey]?.ar 
              ? CATEGORY_TRANSLATIONS[sec.categoryKey].ar 
              : isEs && CATEGORY_TRANSLATIONS[sec.categoryKey]?.es 
              ? CATEGORY_TRANSLATIONS[sec.categoryKey].es 
              : sec.categoryKey

            const catDesc = isAr 
              ? CATEGORY_DESCRIPTIONS[sec.categoryKey]?.ar 
              : isEs 
              ? CATEGORY_DESCRIPTIONS[sec.categoryKey]?.es 
              : CATEGORY_DESCRIPTIONS[sec.categoryKey]?.en

            return (
              <div key={idx} className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm rtl:text-right">
                <div className="flex items-center gap-3 mb-2 rtl:flex-row-reverse rtl:justify-end">
                  <h2 className="text-2xl font-bold text-[var(--color-primary-900)] rtl:text-right">{catTitle}</h2>
                  <HelpCircle className="w-6 h-6 text-[var(--color-accent-600)] shrink-0" />
                </div>
                <p className="text-sm text-[var(--color-slate)] mb-6 rtl:text-right">{catDesc}</p>
                
                <SharedFaqAccordion category={sec.categoryKey} />
              </div>
            )
          })}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="container mx-auto px-6 max-w-[var(--container-lg)] pb-12">
        <div className="bg-[var(--color-primary-900)] text-white rounded-2xl p-8 md:p-12 text-center flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {isAr ? "هل لا تزال لديك استفسارات؟" : isEs ? "¿Aún tiene preguntas?" : "Still Have Questions?"}
          </h2>
          <p className="text-base text-slate-200 max-w-xl mb-8 leading-relaxed">
            {isAr 
              ? "لا داعي للقلق. تواصل مع 'ذا سنتر' للحصول على محادثة عملية حول وضعك الخاص والإجراءات المناسبة لك." 
              : isEs 
              ? "No necesita tener todo resuelto. Póngase en contacto con THE CENTER para una conversación práctica sobre su situación." 
              : "You don't need to have everything figured out. Contact THE CENTER for a friendly, practical conversation about your specific situation."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <BookConsultationButton size="lg" className="px-8 bg-[var(--color-accent-500)] text-white hover:bg-[var(--color-accent-600)]" />
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-white/30 font-semibold text-white hover:bg-white/10 transition-colors"
            >
              <span>{tDict.nav.contact}</span>
              <ArrowRight className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
