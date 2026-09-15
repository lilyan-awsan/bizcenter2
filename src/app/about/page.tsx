import type { Metadata } from "next"
import { contactConfig } from "@/lib/config"
import AboutClientPage from "./about-client"

export const metadata: Metadata = {
  title: "About Us | THE CENTER Business Services",
  description: "About The Center Business Services — bookkeeping made simple in Memphis, TN. We help you track income, expenses, and financial activity in one place—with clear records and better organization.",
  openGraph: {
    title: "About Us | THE CENTER Business Services",
    description: "About The Center Business Services — bookkeeping made simple in Memphis, TN. We help you track income, expenses, and financial activity in one place—with clear records and better organization.",
    type: "website",
  }
}

export default function AboutRoute() {
  // Generate Organization structured data using verified contact config
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "The Center Business Services",
    description: "THE CENTER makes business bookkeeping simple. We help you track income, expenses, and financial activity in one place—with clear records and better organization.",
    url: "https://biz.center",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: contactConfig.phone,
      contactType: "customer support"
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "5520 Summer Ave #102",
      addressLocality: "Memphis",
      addressRegion: "TN",
      postalCode: "38134",
      addressCountry: "US"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutClientPage />
    </>
  )
}
