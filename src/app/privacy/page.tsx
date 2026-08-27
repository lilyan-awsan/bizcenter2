import type { Metadata } from "next"
import { LegalPageLayout } from "@/components/layout/legal-page-layout"
import { legalData } from "@/lib/legalData"

export const metadata: Metadata = {
  title: "Privacy Policy | THE CENTER",
  description: "Learn how THE CENTER collects, uses, and protects your personal information.",
}

export default function PrivacyPage() {
  return (
    <LegalPageLayout 
      title={legalData.privacyPolicy.title}
      sections={legalData.privacyPolicy.sections}
      currentRoute="/privacy"
    />
  )
}
