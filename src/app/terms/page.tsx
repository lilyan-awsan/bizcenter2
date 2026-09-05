import type { Metadata } from "next"
import { LegalPageLayout } from "@/components/layout/legal-page-layout"

export const metadata: Metadata = {
  title: "Terms & Conditions | THE CENTER",
  description: "Read the Terms & Conditions governing your use of THE CENTER website and services.",
}

export default function TermsPage() {
  return (
    <LegalPageLayout 
      docKey="terms"
      currentRoute="/terms"
    />
  )
}
