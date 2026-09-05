import type { Metadata } from "next"
import StartupClientPage from "./startup-client"

export const metadata: Metadata = {
  title: "Business Startup Services | THE CENTER",
  description: "Organized planning and guidance for entrepreneurs. Start your business with confidence with practical administrative support from THE CENTER.",
}

export default function BusinessStartupPage() {
  return <StartupClientPage />
}
