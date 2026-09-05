import type { Metadata } from "next"
import BusinessSupportClientPage from "./support-client"

export const metadata: Metadata = {
  title: "Business Support Services | THE CENTER",
  description: "Professional administrative support for growing businesses. We organize day-to-day tasks so you can focus on long-term business growth.",
}

export default function BusinessSupportPage() {
  return <BusinessSupportClientPage />
}
