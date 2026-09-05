import * as React from "react"
import type { Metadata } from "next"
import { ResourcesHubContent } from "./resources-client"

export const metadata: Metadata = {
  title: "Resources & Forms | THE CENTER Business Services",
  description: "Checklists, guides, official forms, and answers to common questions for business startup, bookkeeping, and administrative processes in Memphis, TN.",
}

export default function ResourcesPage() {
  return (
    <React.Suspense fallback={<div className="min-h-screen bg-[#F8F7F4]" />}>
      <ResourcesHubContent />
    </React.Suspense>
  )
}
