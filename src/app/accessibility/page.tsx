import type { Metadata } from "next"
import { LegalPageLayout } from "@/components/layout/legal-page-layout"

export const metadata: Metadata = {
  title: "Accessibility | THE CENTER",
  description: "Read THE CENTER's commitment to providing an accessible digital experience for all users.",
}

export default function AccessibilityPage() {
  return (
    <LegalPageLayout 
      docKey="accessibility"
      currentRoute="/accessibility"
    />
  )
}
