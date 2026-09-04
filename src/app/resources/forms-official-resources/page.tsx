import type { Metadata } from "next"
import Link from "next/link"
import { FileText, ExternalLink, ShieldCheck, AlertCircle, Info, Calendar } from "lucide-react"
import { BookConsultationButton } from "@/components/ui/book-consultation-button"

export const metadata: Metadata = {
  title: "Business Forms & Official Resources | THE CENTER",
  description: "Access verified state, federal, and local business resources. Updated with 2026 IRS Form 1099-NEC thresholds and FinCEN Beneficial Ownership Information rules.",
}

const REGULATORY_UPDATES_2026 = [
  {
    title: "2026 IRS Form 1099-NEC Reporting Threshold",
    tag: "IRS Tax Compliance",
    lastReviewed: "August 11, 2026",
    content: "For payments made in 2026, IRS guidance states that the reporting threshold for certain nonemployee compensation payments is $2,000. (For payments made before 2026, the prior threshold was $600). The threshold is subject to inflation adjustments after 2026.",
    link: "https://www.irs.gov",
    agency: "Internal Revenue Service (IRS)"
  },
  {
    title: "Beneficial Ownership Information (BOI) Current Rules",
    tag: "FinCEN Corporate Transparency",
    lastReviewed: "August 11, 2026",
    content: "FinCEN states that entities created in the United States and their beneficial owners are currently exempt from BOI reporting under the current rule. Certain entities formed under foreign law and registered to do business in a U.S. state or tribal jurisdiction may still meet the reporting-company definition, subject to exemptions.",
    link: "https://www.fincen.gov",
    agency: "Financial Crimes Enforcement Network (FinCEN)"
  }
]

const OFFICIAL_RESOURCE_CARDS = [
  {
    formNumber: "IRS Form SS-4",
    title: "Application for Employer Identification Number (EIN)",
    description: "Used to request a federal Employer Identification Number needed for opening business bank accounts, hiring employees, and tax filings.",
    targetUser: "Generally filed by new sole proprietors, LLCs, corporations, or partnerships.",
    agencyLink: "https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online",
    agencyName: "IRS Official Portal"
  },
  {
    formNumber: "TN SOS Portal",
    title: "Tennessee Secretary of State Business Services",
    description: "Official portal for searching business name availability, registering LLCs or corporations, and filing annual business reports.",
    targetUser: "Tennessee entrepreneurs forming or maintaining state business entities.",
    agencyLink: "https://sos.tn.gov/business-services",
    agencyName: "Tennessee SOS Portal"
  },
  {
    formNumber: "USCIS Forms",
    title: "USCIS Official Form Library",
    description: "Official repository of immigration forms, instructions, and fee schedules provided directly by the federal government.",
    targetUser: "Individuals needing official application forms and instructions.",
    agencyLink: "https://www.uscis.gov/forms/all-forms",
    agencyName: "USCIS Official Portal"
  },
  {
    formNumber: "IRS Forms & Pubs",
    title: "IRS Forms and Instructions Directory",
    description: "Search and download federal tax forms, schedules, and official publication guides directly from the IRS.",
    targetUser: "Small business owners, independent contractors, and individual taxpayers.",
    agencyLink: "https://www.irs.gov/forms-instructions",
    agencyName: "IRS Official Portal"
  }
]

export default function FormsOfficialResourcesPage() {
  return (
    <main className="min-h-screen bg-[#F8F7F4] pt-[110px] pb-20">
      
      {/* Header */}
      <section className="bg-white border-b border-[var(--color-border)] py-12 md:py-16">
        <div className="container mx-auto px-6 max-w-[var(--container-xl)]">
          <div className="max-w-3xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[var(--color-accent-600)] mb-3 block">
              RESOURCES LIBRARY
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-primary-900)] mb-4">
              Forms & Official Resources
            </h1>
            <p className="text-lg text-[var(--color-slate)] leading-relaxed">
              Verified state, federal, and local resource links. Provided for educational guidance and official agency verification.
            </p>
          </div>
        </div>
      </section>

      {/* 2026 Regulatory Corrections Section */}
      <section className="container mx-auto px-6 max-w-[var(--container-xl)] pt-12">
        <div className="flex items-center gap-3 mb-6">
          <ShieldCheck className="w-6 h-6 text-[var(--color-accent-600)]" />
          <h2 className="text-2xl font-bold text-[var(--color-primary-900)]">Current Regulatory Verification (2026)</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REGULATORY_UPDATES_2026.map((update, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:border-[var(--color-accent-400)] transition-all">
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="px-3 py-1 text-xs font-extrabold rounded-full bg-[var(--color-accent-50)] text-[var(--color-accent-600)] border border-[var(--color-accent-200)]">
                  {update.tag}
                </span>
                <div className="flex items-center gap-1 text-xs text-[var(--color-slate)]">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Last reviewed: {update.lastReviewed}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-[var(--color-primary-900)] mb-3">{update.title}</h3>
              <p className="text-sm text-[var(--color-charcoal)] leading-relaxed mb-6">{update.content}</p>

              <a 
                href={update.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-accent-600)] hover:text-[var(--color-accent-700)] transition-colors"
              >
                Verify on {update.agency} <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Official Agency Resource Cards */}
      <section className="container mx-auto px-6 max-w-[var(--container-xl)] py-12">
        <h2 className="text-2xl font-bold text-[var(--color-primary-900)] mb-6">Official Agency Directory</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {OFFICIAL_RESOURCE_CARDS.map((card, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-[var(--color-primary-50)] text-[var(--color-primary-900)] font-bold text-xs">
                    {card.formNumber}
                  </div>
                  <h3 className="text-lg font-bold text-[var(--color-primary-900)]">{card.title}</h3>
                </div>
                <p className="text-sm text-[var(--color-slate)] mb-4">{card.description}</p>
                <p className="text-xs text-[var(--color-slate)] italic mb-6"><strong>Who uses it:</strong> {card.targetUser}</p>
              </div>

              <a 
                href={card.agencyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--color-border-strong)] font-semibold text-sm text-[var(--color-primary-900)] hover:bg-slate-50 transition-colors w-full"
              >
                Visit Official Source ({card.agencyName}) <ExternalLink className="w-4 h-4 text-[var(--color-accent-600)]" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* General Disclaimer */}
      <section className="container mx-auto px-6 max-w-[var(--container-xl)] pb-12">
        <div className="bg-white border border-[var(--color-border)] rounded-2xl p-6 md:p-8 flex items-start gap-4">
          <Info className="w-6 h-6 text-[var(--color-primary-900)] shrink-0 mt-1" />
          <div className="text-xs text-[var(--color-slate)] leading-relaxed">
            <strong>Important Regulatory Notice:</strong> THE CENTER provides administrative assistance, recordkeeping support, and document organization. We are not a legal firm, CPA accounting firm, or government agency. Requirements and deadlines change frequently; always verify specific compliance rules with the issuing agency or a licensed professional before submitting filings.
          </div>
        </div>
      </section>

    </main>
  )
}
