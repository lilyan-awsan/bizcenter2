import type { Metadata } from "next";
import { Inter, Playfair_Display, Cairo } from "next/font/google";
import { ConsultationProvider } from "@/components/providers/consultation-provider"
import { SplashProvider } from "@/components/providers/splash-provider"
import { LanguageProvider } from "@/context/language-context"
import { CookieNotice } from "@/components/ui/cookie-notice"
import { seoConfig } from "@/lib/seoConfig"
import "./globals.css";
import { PageShell } from "@/components/layout/page-shell";

import { VoiceAgentWidget } from "@/components/ui/voice-agent-widget"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const cairo = Cairo({ subsets: ["arabic", "latin"], variable: "--font-cairo" });

export const metadata: Metadata = {
  metadataBase: new URL(seoConfig.siteUrl),
  title: {
    default: seoConfig.defaultTitle,
    template: `%s | ${seoConfig.siteName}`,
  },
  description: seoConfig.defaultDescription,
  openGraph: {
    title: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription,
    url: seoConfig.siteUrl,
    siteName: seoConfig.siteName,
    images: [
      {
        url: seoConfig.defaultImage,
        width: 1200,
        height: 630,
        alt: seoConfig.siteName,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription,
    creator: seoConfig.twitterHandle,
    images: [seoConfig.defaultImage],
  },
  alternates: {
    canonical: "./",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${cairo.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-[var(--color-primary-900)] focus:font-semibold">
          Skip to main content
        </a>
        <LanguageProvider>
          <SplashProvider>
            <ConsultationProvider>
              <PageShell>
                {children}
              </PageShell>
            </ConsultationProvider>
          </SplashProvider>
          <CookieNotice />
          <VoiceAgentWidget />
        </LanguageProvider>
      </body>
    </html>
  );
}
