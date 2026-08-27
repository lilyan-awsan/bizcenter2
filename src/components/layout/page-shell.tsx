import * as React from "react"
import { Header } from "@/components/global/header"
import { Footer } from "@/components/global/footer"

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col min-h-screen relative overflow-hidden bg-[var(--color-bg-primary)]">
        {children}
      </main>
      <Footer />
    </>
  )
}
