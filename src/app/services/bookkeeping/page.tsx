import type { Metadata } from "next"
import BookkeepingClientPage from "./bookkeeping-client"

export const metadata: Metadata = {
  title: "Bookkeeping Services | THE CENTER",
  description: "Keep your business organized with professional bookkeeping support. We help you track income, organize receipts, and maintain financial visibility.",
}

export default function BookkeepingPage() {
  return <BookkeepingClientPage />
}
