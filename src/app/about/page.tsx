import type { Metadata } from "next"
import { contactConfig } from "@/lib/config"
import AboutClientPage from "./about-client"

export const metadata: Metadata = {
  title: "About THE CENTER | Professional Business & Administrative Support",
  description: "Learn about THE CENTER's mission to provide practical, organized administrative support and clear guidance for entrepreneurs, small businesses, and individuals.",
  openGraph: {
    title: "About THE CENTER | Professional Business & Administrative Support",
    description: "Learn about THE CENTER's mission to provide practical, organized administrative support and clear guidance for entrepreneurs, small businesses, and individuals.",
    type: "website",
  }
}

export default function AboutRoute() {
  // Generate Organization structured data using verified contact config
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "THE CENTER",
    description: "Business and Administrative Support Services",
    url: "https://thecenter.com",
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
      postalCode: "38122",
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
