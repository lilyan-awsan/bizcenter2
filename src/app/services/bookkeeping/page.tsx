import * as React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { 
  ArrowRight, Phone, CheckCircle2, Calculator, 
  BarChart3, FolderOpen, Receipt, FileSearch,
  CalendarDays, Download, Info, SearchCheck,
  ClipboardList, ArrowRightCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger"
import { BookkeepingHeroVisual } from "@/components/ui/bookkeeping-hero-visual"
import { BookkeepingWorkflowVisual } from "@/components/ui/bookkeeping-workflow-visual"

export const metadata: Metadata = {
  title: "Bookkeeping Services | THE CENTER",
  description: "Keep your business organized with professional bookkeeping support. We help you track income, organize receipts, and maintain financial visibility.",
}

import { SharedFaqAccordion } from "@/components/ui/shared-faq-accordion"

export default function BookkeepingPage() {
  return (
    <main className="flex flex-col w-full">
      
      {/* =========================================
          SECTION 1: PAGE HERO
      ========================================= */}
      <div className="relative bg-white overflow-hidden flex flex-col pt-[120px] pb-[100px] border-b border-[var(--color-border)]">
        {/* Soft Background Gradients */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-radial-[at_50%_50%] from-[var(--color-primary-100)]/40 to-transparent to-70% rounded-full blur-3xl opacity-50 pointer-events-none transform translate-x-1/4 -translate-y-1/4" />
        
        <div className="container mx-auto px-6 max-w-[var(--container-xl)] h-full flex flex-col lg:flex-row items-center gap-12 lg:gap-8 relative z-10">
          
          {/* LEFT 55%: Content */}
          <StaggerContainer 
            className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left z-10"
            delayChildren={0.1}
          >
            <StaggerItem distance={8}>
              <span className="text-sm font-bold tracking-[0.15em] uppercase text-[var(--color-accent-500)] mb-4 block">
                Bookkeeping
              </span>
            </StaggerItem>

            <StaggerItem distance={16} className="mb-6 max-w-[650px]">
              <h1>Keep Your Business Organized Every Day</h1>
            </StaggerItem>

            <StaggerItem distance={12} className="mb-10 max-w-[600px]">
              <p className="text-lg md:text-[20px] text-[var(--color-slate)] leading-relaxed text-balance">
                Organized bookkeeping helps businesses stay informed, prepared, and confident while reducing unnecessary stress. Let us handle the records so you can focus on your business.
              </p>
            </StaggerItem>

            <StaggerItem distance={12} className="w-full sm:w-auto">
              <div className="flex flex-col sm:flex-row items-center gap-5 w-full">
                <Button size="lg" className="w-full sm:w-auto px-8 group" asChild>
                  <Link href="/contact">
                    Book a Consultation
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-[220ms] group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 bg-white border-[var(--color-border-strong)] text-[var(--color-charcoal)] hover:bg-[var(--color-offwhite)] shadow-none" asChild>
                  <Link href="#downloads">
                    Download Checklist
                  </Link>
                </Button>
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* RIGHT 45%: Visual */}
          <div className="w-full lg:w-[45%] flex justify-center lg:justify-end z-10 mt-8 lg:mt-0">
            <BookkeepingHeroVisual />
          </div>

        </div>
      </div>

      {/* =========================================
          SECTION 2: QUICK BENEFITS BAR
      ========================================= */}
      <section className="bg-white py-12 border-b border-[var(--color-border)]">
        <StaggerContainer className="container mx-auto px-6 max-w-[var(--container-xl)]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Accurate Records", icon: SearchCheck },
              { title: "Monthly Organization", icon: CalendarDays },
              { title: "Financial Visibility", icon: BarChart3 },
              { title: "Professional Support", icon: Calculator }
            ].map((item, i) => (
              <StaggerItem key={i} distance={8} delay={i * 0.1}>
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 rounded-full bg-[#F8F7F4] text-[var(--color-primary-900)]">
                    <item.icon className="w-6 h-6 stroke-[1.5px]" />
                  </div>
                  <h3 className="font-semibold text-[15px] text-[var(--color-charcoal)]">{item.title}</h3>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </section>

      {/* =========================================
          SECTION 3: WHY BOOKKEEPING MATTERS
      ========================================= */}
      <section className="bg-[#F8F7F4] py-[100px] w-full">
        <StaggerContainer className="container mx-auto px-6 max-w-[var(--container-xl)]">
          
          <div className="text-center mb-16 max-w-[700px] mx-auto flex flex-col items-center">
            <StaggerItem distance={12}>
              <h2 className="mb-6">Why Organized Records Matter</h2>
            </StaggerItem>
            <StaggerItem distance={12}>
              <p className="text-lg text-[var(--color-slate)] text-balance">
                Good bookkeeping is the foundation of a healthy business. It allows you to stay organized, track your income and expenses accurately, and effortlessly prepare information for tax professionals or business decisions.
              </p>
            </StaggerItem>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Income Tracking", desc: "Know exactly what is coming into your business each month.", icon: BarChart3 },
              { title: "Expense Organization", desc: "Categorize and track where your business capital is being spent.", icon: Calculator },
              { title: "Invoice Records", desc: "Maintain clear records of paid, pending, and overdue invoices.", icon: Receipt },
              { title: "Receipt Management", desc: "Organize physical and digital receipts for easy retrieval.", icon: FolderOpen },
              { title: "Monthly Review", desc: "Consistent check-ins to ensure your records are always up to date.", icon: CalendarDays },
              { title: "Financial Documentation", desc: "Prepare clean reports to hand off to your CPA or tax advisor.", icon: FileSearch },
            ].map((benefit, i) => (
              <StaggerItem key={i} distance={16} delay={i * 0.08}>
                <div className="h-full bg-white rounded-xl p-8 border border-[var(--color-border)] shadow-sm transition-all duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[6px] hover:shadow-[var(--shadow-md)] hover:border-[var(--color-accent-500)] flex flex-col">
                  <div className="w-12 h-12 rounded-lg bg-[var(--color-bg-secondary)] flex items-center justify-center mb-5">
                    <benefit.icon className="w-6 h-6 text-[var(--color-primary-900)]" />
                  </div>
                  <h3 className="text-[18px] font-semibold mb-3 text-[var(--color-charcoal)]">{benefit.title}</h3>
                  <p className="text-[15px] text-[var(--color-slate)] leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </section>

      {/* =========================================
          SECTION 4: WHAT WE HELP WITH & PERFECT FOR
      ========================================= */}
      <section className="bg-white py-[100px] w-full">
        <div className="container mx-auto px-6 max-w-[var(--container-xl)]">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
            
            {/* Left: Content */}
            <StaggerContainer className="w-full lg:w-1/2 flex flex-col" delayChildren={0.1}>
              <StaggerItem distance={12}>
                <h2 className="mb-6">What We Help With</h2>
              </StaggerItem>
              <StaggerItem distance={12}>
                <ul className="flex flex-col gap-5 text-[16px] text-[var(--color-slate)] mb-10">
                  <li className="flex gap-3"><ArrowRightCircle className="w-5 h-5 text-[var(--color-accent-500)] shrink-0" /> Recording and categorizing daily transactions</li>
                  <li className="flex gap-3"><ArrowRightCircle className="w-5 h-5 text-[var(--color-accent-500)] shrink-0" /> Organizing and digitizing business receipts</li>
                  <li className="flex gap-3"><ArrowRightCircle className="w-5 h-5 text-[var(--color-accent-500)] shrink-0" /> Tracking sent and received invoices</li>
                  <li className="flex gap-3"><ArrowRightCircle className="w-5 h-5 text-[var(--color-accent-500)] shrink-0" /> Maintaining clean monthly financial records</li>
                  <li className="flex gap-3"><ArrowRightCircle className="w-5 h-5 text-[var(--color-accent-500)] shrink-0" /> Preparing documented summaries for your accountant</li>
                  <li className="flex gap-3"><ArrowRightCircle className="w-5 h-5 text-[var(--color-accent-500)] shrink-0" /> Referrals to licensed CPAs when tax or advisory services are required</li>
                </ul>
              </StaggerItem>
            </StaggerContainer>

            {/* Right: Illustration */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <BookkeepingWorkflowVisual />
            </div>

          </div>
        </div>
      </section>

      <section className="bg-[#F8F7F4] py-16 w-full">
        <StaggerContainer className="container mx-auto px-6 max-w-[var(--container-xl)] flex flex-col items-center">
          <StaggerItem distance={12}>
            <h2 className="mb-8 text-2xl md:text-3xl text-center">Perfect For</h2>
          </StaggerItem>
          <StaggerItem distance={12}>
            <div className="flex flex-wrap justify-center gap-4 max-w-[800px]">
              {[
                "Small Businesses", "Independent Professionals", 
                "Consultants", "Retail Businesses", 
                "Service Providers", "Growing Companies"
              ].map((audience, i) => (
                <div key={i} className="bg-white px-5 py-3 rounded-full border border-[var(--color-border)] shadow-sm flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-accent-600)]" />
                  <span className="text-[15px] font-medium text-[var(--color-charcoal)]">{audience}</span>
                </div>
              ))}
            </div>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* =========================================
          SECTION 5: WORKFLOW
      ========================================= */}
      <section className="bg-white py-[100px] w-full">
        <StaggerContainer className="container mx-auto px-6 max-w-[var(--container-xl)] flex flex-col items-center">
          
          <div className="text-center mb-16">
            <StaggerItem distance={12}>
              <h2 className="mb-6">Our Bookkeeping Process</h2>
            </StaggerItem>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
            <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[var(--color-accent-200)] via-[var(--color-accent-400)] to-[var(--color-accent-200)] opacity-50" />

            {[
              { step: "1", title: "Consultation", desc: "We review your current bookkeeping status.", icon: ClipboardList },
              { step: "2", title: "Review Records", desc: "We assess existing transactions and receipts.", icon: FileSearch },
              { step: "3", title: "Organize Documentation", desc: "We categorize and clean up your data.", icon: FolderOpen },
              { step: "4", title: "Ongoing Support", desc: "We maintain your records consistently.", icon: CalendarDays },
            ].map((item, i) => (
              <StaggerItem key={i} distance={16} delay={i * 0.1} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-[88px] h-[88px] rounded-full bg-white border-4 border-[#F8F7F4] shadow-sm flex items-center justify-center mb-6 transition-transform duration-[220ms] group-hover:-translate-y-2 group-hover:border-[var(--color-accent-100)]">
                  <item.icon className="w-8 h-8 text-[var(--color-primary-900)] transition-colors duration-[220ms] group-hover:text-[var(--color-accent-500)]" />
                </div>
                <div className="text-sm font-bold text-[var(--color-accent-500)] mb-2 tracking-widest">STEP {item.step}</div>
                <h3 className="text-lg font-semibold text-[var(--color-charcoal)] mb-2">{item.title}</h3>
                <p className="text-[15px] text-[var(--color-slate)] max-w-[280px]">{item.desc}</p>
              </StaggerItem>
            ))}
          </div>

        </StaggerContainer>
      </section>

      {/* =========================================
          SECTION 6: MONTHLY SUPPORT & NOTICE
      ========================================= */}
      <section className="bg-[#F8F7F4] py-[100px] w-full">
        <StaggerContainer className="container mx-auto px-6 max-w-[var(--container-xl)]">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <StaggerItem distance={12} delay={0.1} className="h-full">
              <div className="bg-white rounded-xl p-8 border border-[var(--color-border)] shadow-sm h-full flex flex-col">
                <h3 className="text-xl font-semibold mb-4 text-[var(--color-primary-900)]">Monthly Organization</h3>
                <p className="text-[15px] text-[var(--color-slate)]">Consistent updates to ensure your income and expenses are tracked accurately every 30 days.</p>
              </div>
            </StaggerItem>
            <StaggerItem distance={12} delay={0.2} className="h-full">
              <div className="bg-white rounded-xl p-8 border border-[var(--color-border)] shadow-sm h-full flex flex-col">
                <h3 className="text-xl font-semibold mb-4 text-[var(--color-primary-900)]">Quarterly Reviews</h3>
                <p className="text-[15px] text-[var(--color-slate)]">Comprehensive summaries every 90 days to help you understand your business's trajectory.</p>
              </div>
            </StaggerItem>
            <StaggerItem distance={12} delay={0.3} className="h-full">
              <div className="bg-[var(--color-primary-900)] text-white rounded-xl p-8 shadow-sm h-full flex flex-col">
                <h3 className="text-xl font-semibold mb-4 text-[var(--color-accent-400)]">Tailored Support</h3>
                <p className="text-[15px] text-[var(--color-primary-100)]">Our services are tailored directly to your business needs and transaction volume.</p>
              </div>
            </StaggerItem>
          </div>

          <StaggerItem distance={12}>
            <div className="bg-[var(--color-accent-50)] rounded-2xl p-8 md:p-10 border border-[var(--color-accent-200)] flex flex-col md:flex-row gap-6 items-start md:items-center">
              <div className="shrink-0 p-3 bg-white rounded-full shadow-sm">
                <Info className="w-8 h-8 text-[var(--color-accent-600)]" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[var(--color-charcoal)] mb-2">Important Notice</h4>
                <p className="text-[15px] text-[var(--color-slate)] leading-relaxed text-balance">
                  THE CENTER provides bookkeeping support and administrative organization. Licensed accounting, tax preparation, financial planning, and legal advice should be obtained from qualified, licensed professionals when required. We are happy to refer you to one if needed.
                </p>
              </div>
            </div>
          </StaggerItem>

        </StaggerContainer>
      </section>

      {/* =========================================
          SECTION 7: FAQ & DOWNLOADS
      ========================================= */}
      <section className="bg-white py-[100px] w-full" id="downloads">
        <StaggerContainer className="container mx-auto px-6 max-w-[var(--container-xl)] grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: FAQ */}
          <div className="flex flex-col">
            <StaggerItem distance={12}>
              <h2 className="mb-8 text-3xl">Frequently Asked Questions</h2>
            </StaggerItem>
            <StaggerItem distance={12}>
              <SharedFaqAccordion category="Bookkeeping" />
            </StaggerItem>
          </div>

          {/* Right: Downloads */}
          <div className="flex flex-col">
            <StaggerItem distance={12}>
              <h2 className="mb-8 text-3xl">Helpful Downloads</h2>
            </StaggerItem>
            <div className="flex flex-col gap-4">
              {[
                { title: "Bookkeeping Checklist", desc: "A simple guide to organizing your receipts." },
                { title: "Monthly Record Template", desc: "A basic spreadsheet to track your income." },
                { title: "Document Preparation Guide", desc: "What to gather before your tax appointment." }
              ].map((dl, i) => (
                <StaggerItem key={i} distance={12} delay={i * 0.1}>
                  <Link href="/resources" className="group flex items-center justify-between bg-white rounded-xl p-6 border border-[var(--color-border)] shadow-sm hover:border-[var(--color-accent-500)] hover:shadow-md transition-all duration-[220ms]">
                    <div className="flex flex-col gap-1">
                      <h4 className="font-semibold text-[16px] text-[var(--color-charcoal)] group-hover:text-[var(--color-primary-900)] transition-colors">{dl.title}</h4>
                      <p className="text-[14px] text-[var(--color-slate)]">{dl.desc}</p>
                    </div>
                    <div className="shrink-0 w-10 h-10 rounded-full bg-[#F8F7F4] flex items-center justify-center group-hover:bg-[var(--color-primary-50)] transition-colors">
                      <Download className="w-4 h-4 text-[var(--color-primary-900)]" />
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </div>
          </div>

        </StaggerContainer>
      </section>

      {/* =========================================
          SECTION 8: RELATED SERVICES
      ========================================= */}
      <section className="bg-[#F8F7F4] py-[100px] w-full border-t border-[var(--color-border)]">
        <StaggerContainer className="container mx-auto px-6 max-w-[var(--container-xl)] flex flex-col items-center">
          
          <div className="text-center mb-12">
            <StaggerItem distance={12}>
              <h2 className="mb-4 text-3xl">Related Services</h2>
            </StaggerItem>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {[
              { title: "Business Startup", href: "/services/business-startup" },
              { title: "Business Support", href: "/services/business-support" },
              { title: "Applications & Admin", href: "/services/applications-administrative-support" }
            ].map((svc, i) => (
              <StaggerItem key={i} distance={16} delay={i * 0.1}>
                <Link href={svc.href} className="group block h-full bg-white rounded-xl p-6 border border-[var(--color-border)] shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-[var(--color-accent-500)] transition-all duration-[220ms]">
                  <h3 className="text-[16px] font-semibold text-[var(--color-charcoal)] mb-4">{svc.title}</h3>
                  <div className="flex items-center text-[var(--color-primary-900)] text-[14px] font-medium">
                    Learn More <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-[220ms] group-hover:translate-x-1" />
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </div>

        </StaggerContainer>
      </section>

      {/* =========================================
          SECTION 9: FINAL CTA
      ========================================= */}
      <section className="relative bg-[var(--color-primary-900)] py-[120px] w-full overflow-hidden text-center mt-auto">
        <div className="absolute inset-0 bg-radial-[at_50%_50%] from-[var(--color-primary-600)]/20 to-transparent to-70% rounded-full blur-3xl opacity-50 pointer-events-none" />
        
        <StaggerContainer className="container relative z-10 mx-auto px-6 max-w-[900px] flex flex-col items-center">
          <StaggerItem distance={12}>
            <h2 className="mb-6 text-white text-4xl md:text-5xl">Let's Keep Your Business Organized</h2>
          </StaggerItem>
          <StaggerItem distance={12}>
            <p className="text-xl text-[var(--color-primary-100)] mb-10 max-w-[650px] mx-auto text-balance">
              Book a consultation and learn how organized bookkeeping can simplify your business operations.
            </p>
          </StaggerItem>
          <StaggerItem distance={8} className="w-full sm:w-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <Button size="lg" className="w-full sm:w-auto px-10 bg-white text-[var(--color-primary-900)] hover:bg-[var(--color-offwhite)] group" asChild>
                <Link href="/contact">
                  Book a Consultation
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-[220ms] group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto px-10 border-white/30 text-white hover:bg-white/10 shadow-none" asChild>
                <a href="tel:9012071660">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Today
                </a>
              </Button>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </section>

    </main>
  )
}
