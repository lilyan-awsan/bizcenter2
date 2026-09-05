import type { Metadata } from "next"
import ApplicationsClientPage from "./applications-client"

export const metadata: Metadata = {
  title: "Applications & Administrative Support | THE CENTER",
  description: "Clear guidance through business forms and administrative processes. We help organize your documents and prepare applications with confidence.",
}

export default function ApplicationsSupportPage() {
  return <ApplicationsClientPage />
}
