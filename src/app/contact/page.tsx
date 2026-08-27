import type { Metadata } from "next"
import { contactConfig } from "@/lib/config"
import ContactClientPage from "./contact-client"

export const metadata: Metadata = {
  title: "Contact THE CENTER | Business & Administrative Support",
  description: "Contact THE CENTER for professional business organization, administrative support, and consultation services in Memphis, TN.",
  openGraph: {
    title: "Contact THE CENTER | Business & Administrative Support",
    description: "Contact THE CENTER for professional business organization, administrative support, and consultation services in Memphis, TN.",
    type: "website",
  }
}

export default function ContactRoute() {
  // Generate LocalBusiness structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "THE CENTER",
    description: "Business and Administrative Support Services",
    telephone: contactConfig.phone,
    email: contactConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "5520 Summer Ave #102",
      addressLocality: "Memphis",
      addressRegion: "TN",
      postalCode: "38122",
      addressCountry: "US"
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00"
      }
    ],
    url: "https://thecenter.com",
    sameAs: [
      contactConfig.socialLinks.facebook,
      contactConfig.socialLinks.instagram,
      contactConfig.socialLinks.linkedin
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactClientPage />
    </>
  )
}
