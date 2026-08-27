import * as React from "react"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Printer } from "lucide-react"
import { LanguageSwitcher } from "./language-switcher"

export function Footer() {
  return (
    <footer className="bg-[var(--color-primary-900)] text-white w-full">
      <div className="container mx-auto px-6 max-w-[var(--container-xl)]">
        
        {/* Top 5-Column Grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-6 md:col-span-3 lg:col-span-1">
            <Link href="/" className="font-bold text-2xl tracking-tight">
              THE CENTER
            </Link>
            <p className="text-[15px] text-[var(--color-primary-200)] leading-relaxed">
              Providing practical business and administrative support for individuals, entrepreneurs, and small businesses.
            </p>
          </div>

          {/* Column 2: Services */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold tracking-wider text-[var(--color-accent-400)] uppercase">Services</h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Business Startup", href: "/services/business-startup" },
                { label: "Bookkeeping", href: "/services/bookkeeping" },
                { label: "Business Support", href: "/services/business-support" },
                { label: "Applications & Admin", href: "/services/applications-administrative-support" },
                { label: "New to the U.S.", href: "/services/new-to-the-united-states" }
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[15px] text-[var(--color-primary-100)] hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold tracking-wider text-[var(--color-accent-400)] uppercase">Resources</h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Document Checklist", href: "/resources/document-checklist" },
                { label: "Official Resources", href: "/resources/official-forms" },
                { label: "Frequently Asked Questions", href: "/resources/faq" }
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[15px] text-[var(--color-primary-100)] hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold tracking-wider text-[var(--color-accent-400)] uppercase">Contact</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="tel:9012071660" className="flex items-start gap-3 text-[15px] text-[var(--color-primary-100)] hover:text-white group transition-colors">
                  <Phone className="w-4 h-4 mt-1 flex-shrink-0 group-hover:text-[var(--color-accent-400)] transition-colors" />
                  <span>901-207-1660</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-[15px] text-[var(--color-primary-100)]">
                  <Printer className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>901-209-5511 (Fax)</span>
                </div>
              </li>
              <li>
                <a href="mailto:info@biz.center" className="flex items-start gap-3 text-[15px] text-[var(--color-primary-100)] hover:text-white group transition-colors">
                  <Mail className="w-4 h-4 mt-1 flex-shrink-0 group-hover:text-[var(--color-accent-400)] transition-colors" />
                  <span>info@biz.center</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-[15px] text-[var(--color-primary-100)]">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>5520 Summer Ave #102<br />Memphis, TN 38122</span>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3 text-[15px] text-[var(--color-primary-100)]">
                  <Clock className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>Monday–Friday<br />9 AM–5 PM</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 5: Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold tracking-wider text-[var(--color-accent-400)] uppercase">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/contact" className="text-[15px] text-[var(--color-primary-100)] hover:text-white transition-colors">Book Consultation</Link>
              </li>
              <li>
                <Link href="/payment" className="text-[15px] text-[var(--color-primary-100)] hover:text-white transition-colors">Existing Client Payment</Link>
              </li>
              <li className="pt-2">
                <Link href="/privacy" className="text-[13px] text-[var(--color-primary-300)] hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="text-[13px] text-[var(--color-primary-300)] hover:text-white transition-colors">Terms of Use</Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-[var(--color-primary-300)] text-center md:text-left">
            © {new Date().getFullYear()} THE CENTER. All rights reserved. <br className="md:hidden" />
            <span className="hidden md:inline"> | </span> 
            THE CENTER provides administrative support and is not a law firm or CPA firm.
          </p>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
          </div>
        </div>

      </div>
    </footer>
  )
}
