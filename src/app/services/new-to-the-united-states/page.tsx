import type { Metadata } from "next"
import NewToUsClientPage from "./new-to-us-client"

export const metadata: Metadata = {
  title: "New to the United States | THE CENTER",
  description: "Welcome to the U.S. Let THE CENTER help you navigate business and administrative processes with confident, organized guidance.",
}

export default function NewToTheUSPage() {
  return <NewToUsClientPage />
}
