"use client"

import * as React from "react"
import { Header } from "@/components/global/header"
import { Footer } from "@/components/global/footer"

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 flex flex-col min-h-[100dvh] relative overflow-hidden bg-[var(--color-bg-primary)]">
        {children}
      </main>
      <Footer />
    </>
  )
}
