import type { Metadata } from "next"
import Link from "next/link"
import { CheckSquare, Printer, Download, Phone, ArrowRight, Info, ShieldAlert } from "lucide-react"
import { BookConsultationButton } from "@/components/ui/book-consultation-button"

export const metadata: Metadata = {
  title: "Document Checklist | Prepare for Your Visit | THE CENTER",
  description: "One checklist for a more organized appointment. Review required identification, business, bookkeeping, and application documents before your visit to THE CENTER.",
}

const CHECKLIST_GROUPS = [
  {
    category: "Personal Identification",
    description: "Standard identification required for most appointments and filings.",
    items: [
      "Valid government-issued photo identification (Driver's License, Passport, State ID)",
      "Secondary proof of address (utility bill, bank statement, or lease agreement)",
      "SSN or ITIN confirmation (if applicable to the requested service)",
      "Written list of questions or specific topics you want to discuss"
    ]
  },
  {
    category: "Starting a Business",
    description: "Gather these items when preparing to form or register a new business entity.",
    items: [
      "Proposed business name ideas and 2-3 backup names",
      "Intended physical address and mailing address for the business",
      "Full legal names, contact details, and ownership percentages for all partners/owners",
      "EIN (Employer Identification Number), if already issued",
      "Existing business formation documents or licenses (if already registered)",
      "Outline of primary business activities and services"
    ]
  },
  {
    category: "Bookkeeping & Business Records",
    description: "Bring these documents for monthly bookkeeping setup or cleanup services.",
    items: [
      "Business bank account statements (last 3-12 months)",
      "Business credit card statements",
      "Sales reports, deposit records, or merchant processing statements",
      "Receipts for business expenses and vendor invoices",
      "Payroll summaries or 1099 payment records (if applicable)",
      "Prior bookkeeping reports or prior-year tax returns",
      "Records of owner capital contributions or withdrawals"
    ]
  },
  {
    category: "Applications, Forms & Administrative Filings",
    description: "Required when requesting help with specific paperwork or agency notices.",
    items: [
      "The exact application form, notice, or letter you need help organizing",
      "Official instructions provided by the issuing agency",
      "Reference number, account number, or case confirmation details",
      "Relevant emails, correspondence, or agency follow-up letters",
      "Payment method for required government filing fees",
      "Copies of previously submitted paperwork related to this request"
    ]
  },
  {
    category: "New to the United States",
    description: "Essential orientation and administrative items for newcomers.",
    items: [
      "Government-issued passport or identification documents",
      "Letters, forms, or notices that need clear explanation",
      "Documents showing current local residence or mailing address",
      "Employment or business-related documents (if applicable)",
      "Contact information for involved agencies, employers, or organizations"
    ]
  }
]

export default function DocumentChecklistPage() {
  return (
    <main className="min-h-screen bg-[#F8F7F4] pt-[110px] pb-20">
      
      {/* Header Banner */}
      <section className="bg-white border-b border-[var(--color-border)] py-12 md:py-16">
        <div className="container mx-auto px-6 max-w-[var(--container-xl)]">
          <div className="max-w-3xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[var(--color-accent-600)] mb-3 block">
              RESOURCES LIBRARY
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-primary-900)] mb-4">
              Document Checklist
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-slate)] leading-relaxed">
              One Checklist. A More Organized Appointment. Review what to gather before your visit so we can help you move forward efficiently.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <BookConsultationButton size="lg" className="px-8 bg-[var(--color-accent-500)] text-white hover:bg-[var(--color-accent-600)]" />
              <a 
                href="tel:9012071660"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[var(--color-border-strong)] font-semibold text-[var(--color-primary-900)] hover:bg-slate-50 transition-colors"
              >
                <Phone className="w-4 h-4 text-[var(--color-accent-600)]" />
                Call (901) 207-1660
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy & Scope Disclaimer Notice */}
      <section className="container mx-auto px-6 max-w-[var(--container-xl)] mt-8">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 flex items-start gap-4 text-amber-900">
          <ShieldAlert className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-sm leading-relaxed">
            <strong>Privacy & Security Warning:</strong> Please do not send sensitive personal identifiers (such as full SSNs, ITINs, banking passwords, or immigration document numbers) over email or general web forms. Bring your official physical or saved documents to your consultation at our office.
          </div>
        </div>
      </section>

      {/* Checklist Content Groups */}
      <section className="container mx-auto px-6 max-w-[var(--container-xl)] py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CHECKLIST_GROUPS.map((group, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:border-[var(--color-accent-300)] transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-primary-50)] text-[var(--color-primary-900)] flex items-center justify-center font-bold">
                  <CheckSquare className="w-5 h-5 text-[var(--color-accent-600)]" />
                </div>
                <h2 className="text-xl font-bold text-[var(--color-primary-900)]">{group.category}</h2>
              </div>
              <p className="text-sm text-[var(--color-slate)] mb-6">{group.description}</p>
              
              <ul className="space-y-3">
                {group.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-3 text-sm text-[var(--color-charcoal)] leading-relaxed">
                    <span className="w-2 h-2 rounded-full bg-[var(--color-accent-500)] shrink-0 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* End State CTA */}
      <section className="container mx-auto px-6 max-w-[var(--container-xl)] pb-12">
        <div className="bg-[var(--color-primary-900)] text-white rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Need Help Figuring Out What to Bring?</h2>
            <p className="text-base text-slate-200 leading-relaxed">
              You do not have to figure everything out before contacting us. Tell THE CENTER what you are trying to accomplish, and we will help identify the practical next steps.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
            <BookConsultationButton size="lg" className="w-full sm:w-auto px-8 bg-white text-[var(--color-primary-900)] hover:bg-slate-100" />
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-white/30 font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Contact Us <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
