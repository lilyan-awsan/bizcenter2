import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { ConsultationProvider } from "@/components/providers/consultation-provider"
import { SplashProvider } from "@/components/providers/splash-provider"
import { CookieNotice } from "@/components/ui/cookie-notice"
import { seoConfig } from "@/lib/seoConfig"
import "./globals.css";
import { PageShell } from "@/components/layout/page-shell";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

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
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-[var(--color-primary-900)] focus:font-semibold">
          Skip to main content
        </a>
        <SplashProvider>
          <ConsultationProvider>
            <PageShell>
              {children}
            </PageShell>
          </ConsultationProvider>
        </SplashProvider>
        <CookieNotice />
      </body>
    </html>
  );
}
