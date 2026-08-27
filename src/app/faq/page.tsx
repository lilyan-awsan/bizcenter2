import type { Metadata } from "next"
import { FAQ_DATA } from "@/lib/faq"
import FaqClientPage from "./faq-client"

export const metadata: Metadata = {
  title: "Frequently Asked Questions | THE CENTER",
  description: "Find answers to common questions about THE CENTER's business support, administrative organization, and consultation processes.",
  openGraph: {
    title: "Frequently Asked Questions | THE CENTER",
    description: "Find answers to common questions about THE CENTER's business support, administrative organization, and consultation processes.",
    type: "website",
  }
}

export default function FaqRoute() {
  // Generate FAQPage structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_DATA.map(item => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  }

  return (
    <>
      {/* Inject JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FaqClientPage />
    </>
  )
}
