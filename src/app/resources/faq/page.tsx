import type { Metadata } from "next"
import Link from "next/link"
import { HelpCircle, Phone, ArrowRight } from "lucide-react"
import { BookConsultationButton } from "@/components/ui/book-consultation-button"
import { SharedFaqAccordion } from "@/components/ui/shared-faq-accordion"
import { FaqCategory } from "@/lib/faq"

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) | THE CENTER",
  description: "Get clear answers to common questions about Business Startup, Bookkeeping, Administrative Support, and New to the U.S. services at THE CENTER.",
}

const FAQ_SECTIONS: { categoryTitle: string; categoryKey: FaqCategory; description: string }[] = [
  {
    categoryTitle: "General Consultation Questions",
    categoryKey: "Consultations",
    description: "Learn what to expect during your appointment and how we work."
  },
  {
    categoryTitle: "Business Startup Questions",
    categoryKey: "Business Startup",
    description: "Common questions on starting an entity, EINs, and business setup."
  },
  {
    categoryTitle: "Bookkeeping & Financial Record Questions",
    categoryKey: "Bookkeeping",
    description: "How we help keep your monthly business records organized."
  },
  {
    categoryTitle: "Applications & Administrative Support",
    categoryKey: "Applications & Administrative Support",
    description: "Guidance on form preparation and administrative boundaries."
  },
  {
    categoryTitle: "New to the United States",
    categoryKey: "New to the United States",
    description: "Answers for individuals navigating local administrative setup."
  }
]

export default function ResourceFaqPage() {
  return (
    <main className="min-h-screen bg-[#F8F7F4] pt-[110px] pb-20">
      
      {/* Header */}
      <section className="bg-white border-b border-[var(--color-border)] py-12 md:py-16">
        <div className="container mx-auto px-6 max-w-[var(--container-xl)]">
          <div className="max-w-3xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[var(--color-accent-600)] mb-3 block">
              RESOURCES & GUIDANCE
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-primary-900)] mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-[var(--color-slate)] leading-relaxed">
              Clear, practical answers to common questions about business startup, bookkeeping, administrative support, and consultation appointments.
            </p>
          </div>
        </div>
      </section>

      {/* Accordion List by Topic */}
      <section className="container mx-auto px-6 max-w-[var(--container-lg)] py-12">
        <div className="space-y-12">
          {FAQ_SECTIONS.map((sec, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <HelpCircle className="w-6 h-6 text-[var(--color-accent-600)]" />
                <h2 className="text-2xl font-bold text-[var(--color-primary-900)]">{sec.categoryTitle}</h2>
              </div>
              <p className="text-sm text-[var(--color-slate)] mb-6">{sec.description}</p>
              
              <SharedFaqAccordion category={sec.categoryKey} />
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="container mx-auto px-6 max-w-[var(--container-lg)] pb-12">
        <div className="bg-[var(--color-primary-900)] text-white rounded-2xl p-8 md:p-12 text-center flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-base text-slate-200 max-w-xl mb-8 leading-relaxed">
            You don't need to have everything figured out. Contact THE CENTER for a friendly, practical conversation about your specific situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <BookConsultationButton size="lg" className="px-8 bg-[var(--color-accent-500)] text-white hover:bg-[var(--color-accent-600)]" />
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-white/30 font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Contact Us Directly <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
