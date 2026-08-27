import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Business & Administrative Resources | THE CENTER",
  description: "Explore our library of organized checklists, administrative guides, frequently asked questions, and official government resources to help you prepare.",
}

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
