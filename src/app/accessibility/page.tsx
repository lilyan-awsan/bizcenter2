import type { Metadata } from "next"
import { LegalPageLayout } from "@/components/layout/legal-page-layout"
import { legalData } from "@/lib/legalData"

export const metadata: Metadata = {
  title: "Accessibility | THE CENTER",
  description: "Read THE CENTER's commitment to providing an accessible digital experience for all users.",
}

export default function AccessibilityPage() {
  return (
    <LegalPageLayout 
      title={legalData.accessibility.title}
      sections={legalData.accessibility.sections}
      currentRoute="/accessibility"
    />
  )
}
