import * as React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { 
  ArrowRight, Phone, CheckCircle2, LayoutDashboard,
  CalendarClock, MessageSquare, ClipboardCheck, FolderKanban,
  FileCheck, CalendarDays, Clock, Download, MapPin, SearchCheck,
  Building2, Users, FileText, ArrowRightCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger"
import { BusinessSupportHeroVisual } from "@/components/ui/business-support-hero-visual"
import { SharedFaqAccordion } from "@/components/ui/shared-faq-accordion"

export const metadata: Metadata = {
  title: "Business Support Services | THE CENTER",
  description: "Professional administrative support for growing businesses. We organize day-to-day tasks so you can focus on long-term business growth.",
}

export default function BusinessSupportPage() {
  return (
    <main className="flex flex-col w-full relative">
      
      {/* =========================================
          SECTION 1: PAGE HERO (FULL WIDTH)
      ========================================= */}
      <div className="relative bg-[#F8F7F4] overflow-hidden flex flex-col pt-[120px] pb-[100px]">
        {/* Soft Background Gradients */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-radial-[at_50%_50%] from-[var(--color-primary-200)]/20 to-transparent to-70% rounded-full blur-3xl opacity-50 pointer-events-none transform -translate-x-1/4 -translate-y-1/4" />
        
        <div className="container mx-auto px-6 max-w-[var(--container-xl)] h-full flex flex-col lg:flex-row items-center gap-12 lg:gap-8 relative z-10">
          
          {/* LEFT 55%: Content */}
          <StaggerContainer 
            className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left z-10"
            delayChildren={0.1}
          >
            <StaggerItem distance={8}>
              <span className="text-sm font-bold tracking-[0.15em] uppercase text-[var(--color-accent-500)] mb-4 block">
                Business Support
              </span>
            </StaggerItem>

            <StaggerItem distance={16} className="mb-6 max-w-[650px]">
              <h1>Professional Administrative Support For Growing Businesses</h1>
            </StaggerItem>

            <StaggerItem distance={12} className="mb-10 max-w-[600px]">
              <p className="text-lg md:text-[20px] text-[var(--color-slate)] leading-relaxed text-balance">
                Running a business involves countless administrative responsibilities. THE CENTER helps organize these day-to-day tasks so business owners can focus on growth and long-term success.
              </p>
            </StaggerItem>

            <StaggerItem distance={12} className="w-full sm:w-auto">
              <div className="flex flex-col sm:flex-row items-center gap-5 w-full">
                <Button size="lg" className="w-full sm:w-auto px-8 group" asChild>
                  <Link href="/contact">
                    Book a Free Consultation
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-[220ms] group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 bg-white border-[var(--color-border-strong)] text-[var(--color-charcoal)] hover:bg-[var(--color-offwhite)] shadow-none" asChild>
                  <Link href="#downloads">
                    View Support Guide
                  </Link>
                </Button>
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* RIGHT 45%: Visual */}
          <div className="w-full lg:w-[45%] flex justify-center lg:justify-end z-10 mt-8 lg:mt-0">
            <BusinessSupportHeroVisual />
          </div>

        </div>
      </div>

      {/* =========================================
          MAIN LAYOUT: CONTENT + STICKY SIDEBAR
      ========================================= */}
      <div className="container mx-auto px-6 max-w-[var(--container-xl)] py-[80px] lg:py-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: MAIN CONTENT */}
          <div className="flex flex-col gap-24">
            
            {/* Quick Value Bar */}
            <StaggerContainer>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Administrative Support", desc: "Day-to-day operational help." },
                  { title: "Business Organization", desc: "Structured, efficient workflows." },
                  { title: "Document Management", desc: "Keeping essential files sorted." },
                  { title: "Long-Term Partnership", desc: "Reliable extension of your team." }
                ].map((item, i) => (
                  <StaggerItem key={i} distance={12} delay={i * 0.1}>
                    <div className="bg-white rounded-xl p-6 border border-[var(--color-border)] shadow-sm flex flex-col gap-2 transition-shadow duration-[220ms] hover:shadow-md">
                      <div className="w-2 h-2 rounded-full bg-[var(--color-accent-500)] mb-1" />
                      <h3 className="text-[17px] font-semibold text-[var(--color-charcoal)]">{item.title}</h3>
                      <p className="text-[14px] text-[var(--color-slate)] leading-relaxed">{item.desc}</p>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>

            {/* How We Support Your Business */}
            <StaggerContainer>
              <StaggerItem distance={12}>
                <h2 className="mb-8 text-3xl">Administrative Support That Works With You</h2>
              </StaggerItem>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 text-[16px] text-[var(--color-slate)]">
                {[
                  "Business organization", "Administrative coordination",
                  "Document management", "Business record organization",
                  "Operational support", "Workflow improvement",
                  "Application preparation", "Business communication support"
                ].map((item, i) => (
                  <StaggerItem key={i} distance={8} delay={i * 0.05} className="flex gap-3 items-center">
                    <ArrowRightCircle className="w-5 h-5 text-[var(--color-accent-500)] shrink-0" />
                    <span>{item}</span>
                  </StaggerItem>
                ))}
                <StaggerItem distance={8} delay={0.4} className="col-span-1 sm:col-span-2 mt-2">
                  <div className="flex gap-3 items-center text-[15px] italic text-[var(--color-text-secondary)]">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    Referral to licensed CPAs and attorneys when specialized legal or tax advice is required.
                  </div>
                </StaggerItem>
              </div>
            </StaggerContainer>

            {/* Feature Cards Grid (8 Cards) */}
            <StaggerContainer>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Document Organization", desc: "Sorting and managing your crucial business paperwork efficiently.", icon: FolderKanban },
                  { title: "Business Records", desc: "Keeping historical operational data clean and accessible.", icon: FileCheck },
                  { title: "Operational Workflow", desc: "Streamlining how tasks move from inception to completion.", icon: LayoutDashboard },
                  { title: "Scheduling Assistance", desc: "Organizing calendars to prevent missed opportunities.", icon: CalendarClock },
                  { title: "Admin Coordination", desc: "Acting as the central hub for your business tasks.", icon: Users },
                  { title: "Information Management", desc: "Structuring data so you can find what you need instantly.", icon: SearchCheck },
                  { title: "Process Organization", desc: "Defining clear steps for your recurring business duties.", icon: ClipboardCheck },
                  { title: "Business Documentation", desc: "Drafting internal policies, guides, and templates.", icon: FileText },
                ].map((feature, i) => (
                  <StaggerItem key={i} distance={12} delay={i * 0.05}>
                    <div className="bg-white rounded-xl p-6 border border-[var(--color-border)] shadow-sm hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 hover:border-[var(--color-accent-500)] transition-all duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)] flex gap-4 h-full items-start group">
                      <div className="shrink-0 w-12 h-12 rounded-lg bg-[var(--color-bg-secondary)] flex items-center justify-center group-hover:bg-[var(--color-primary-50)] transition-colors duration-[220ms]">
                        <feature.icon className="w-5 h-5 text-[var(--color-primary-900)]" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <h3 className="text-[17px] font-semibold text-[var(--color-charcoal)] group-hover:text-[var(--color-primary-900)] transition-colors duration-[220ms]">{feature.title}</h3>
                        <p className="text-[14px] text-[var(--color-slate)] leading-relaxed">{feature.desc}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>

            {/* Why Businesses Choose Us */}
            <section className="bg-[var(--color-primary-900)] rounded-[24px] p-8 md:p-12 text-white">
              <StaggerContainer>
                <StaggerItem distance={12}>
                  <h2 className="mb-10 text-2xl md:text-3xl text-white">Reliable Administrative Support</h2>
                </StaggerItem>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { title: "Consistent Communication", desc: "We stay in touch so you always know where projects stand." },
                    { title: "Professional Organization", desc: "Every task is handled with meticulous attention to detail." },
                    { title: "Responsive Support", desc: "Quick adaptations when your business needs shift." },
                    { title: "Long-Term Partnership", desc: "We act as an extension of your own internal team." }
                  ].map((block, i) => (
                    <StaggerItem key={i} distance={16} delay={i * 0.1}>
                      <div className="bg-white/5 backdrop-blur-sm rounded-[16px] p-6 border border-white/10 hover:border-[var(--color-accent-400)] transition-colors duration-[220ms] flex flex-col gap-2 h-full">
                        <h3 className="text-[18px] font-semibold text-white">{block.title}</h3>
                        <p className="text-[15px] text-[var(--color-primary-100)] leading-relaxed">{block.desc}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </div>
              </StaggerContainer>
            </section>

            {/* Who This Service Is For */}
            <section className="bg-[#F8F7F4] rounded-[24px] overflow-hidden">
              <div className="flex flex-col p-8 md:p-12">
                <StaggerContainer className="flex flex-col">
                  <StaggerItem distance={12}>
                    <h2 className="mb-8 text-2xl md:text-3xl">Who This Service Is For</h2>
                  </StaggerItem>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "Growing businesses",
                      "Established companies",
                      "Professional offices",
                      "Service providers",
                      "Retail businesses",
                      "Family businesses",
                      "Organizations needing administrative assistance"
                    ].map((item, i) => (
                      <StaggerItem key={i} distance={12} delay={i * 0.05} className="flex items-start gap-3">
                        <div className="mt-1 w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-[var(--color-border)]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-accent-600)]" />
                        </div>
                        <span className="text-[16px] text-[var(--color-charcoal)]">{item}</span>
                      </StaggerItem>
                    ))}
                  </div>
                </StaggerContainer>
              </div>
            </section>

            {/* Support Process */}
            <StaggerContainer>
              <StaggerItem distance={12}>
                <h2 className="mb-10 text-3xl">How We Work Together</h2>
              </StaggerItem>
              <div className="flex flex-col gap-8 relative">
                <div className="absolute left-[23px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[var(--color-accent-200)] via-[var(--color-accent-400)] to-[var(--color-accent-200)] opacity-50" />

                {[
                  { step: "01", title: "Consultation", desc: "We discuss your current administrative workload and challenges.", icon: MessageSquare },
                  { step: "02", title: "Business Review", desc: "We audit your existing processes to find organizational gaps.", icon: SearchCheck },
                  { step: "03", title: "Support Planning", desc: "We create a custom strategy for handling your daily admin tasks.", icon: LayoutDashboard },
                  { step: "04", title: "Implementation", desc: "We set up workflows, organize documents, and begin coordination.", icon: FolderKanban },
                  { step: "05", title: "Ongoing Assistance", desc: "We remain your reliable partner as your business scales.", icon: Users },
                ].map((item, i) => (
                  <StaggerItem key={i} distance={16} delay={i * 0.1} className="relative z-10 flex gap-6 group">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-white border-4 border-[var(--color-bg-primary)] shadow-sm flex items-center justify-center transition-colors duration-[220ms] group-hover:border-[var(--color-accent-100)]">
                      <item.icon className="w-5 h-5 text-[var(--color-primary-900)] transition-colors duration-[220ms] group-hover:text-[var(--color-accent-500)]" />
                    </div>
                    <div className="pt-2 pb-2">
                      <div className="text-[12px] font-bold text-[var(--color-accent-500)] mb-1 tracking-widest">STEP {item.step}</div>
                      <h3 className="text-[18px] font-semibold text-[var(--color-charcoal)] mb-2">{item.title}</h3>
                      <p className="text-[15px] text-[var(--color-slate)] leading-relaxed max-w-[500px]">{item.desc}</p>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>

            {/* What Makes Our Approach Different */}
            <StaggerContainer>
              <StaggerItem distance={12}>
                <h2 className="mb-10 text-3xl">What Makes Our Approach Different</h2>
              </StaggerItem>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Without Organized Support */}
                <StaggerItem distance={16} delay={0.1}>
                  <div className="bg-[#F1F3F5] rounded-2xl p-8 border border-[var(--color-border-strong)] h-full flex flex-col gap-6">
                    <h3 className="text-[18px] font-semibold text-[var(--color-slate)]">Without Organized Support</h3>
                    <ul className="flex flex-col gap-4 text-[15px] text-[var(--color-slate)]">
                      <li className="flex gap-3 opacity-80"><div className="w-2 h-2 rounded-full bg-[var(--color-text-secondary)] mt-1.5 shrink-0" /> Missed paperwork deadlines</li>
                      <li className="flex gap-3 opacity-80"><div className="w-2 h-2 rounded-full bg-[var(--color-text-secondary)] mt-1.5 shrink-0" /> Scattered, hard-to-find documents</li>
                      <li className="flex gap-3 opacity-80"><div className="w-2 h-2 rounded-full bg-[var(--color-text-secondary)] mt-1.5 shrink-0" /> Time-consuming daily administration</li>
                      <li className="flex gap-3 opacity-80"><div className="w-2 h-2 rounded-full bg-[var(--color-text-secondary)] mt-1.5 shrink-0" /> Unclear or inefficient processes</li>
                    </ul>
                  </div>
                </StaggerItem>

                {/* With THE CENTER */}
                <StaggerItem distance={16} delay={0.2}>
                  <div className="bg-[var(--color-primary-50)] rounded-2xl p-8 border border-[var(--color-primary-200)] shadow-sm h-full flex flex-col gap-6">
                    <h3 className="text-[18px] font-semibold text-[var(--color-primary-900)]">With THE CENTER</h3>
                    <ul className="flex flex-col gap-4 text-[15px] text-[var(--color-primary-900)]">
                      <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-[var(--color-accent-600)] shrink-0" /> Better overall organization</li>
                      <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-[var(--color-accent-600)] shrink-0" /> Clear, accessible documentation</li>
                      <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-[var(--color-accent-600)] shrink-0" /> Structured, efficient workflows</li>
                      <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-[var(--color-accent-600)] shrink-0" /> Reliable, long-term administrative support</li>
                    </ul>
                  </div>
                </StaggerItem>

              </div>
            </StaggerContainer>

            {/* Flexible Support */}
            <StaggerContainer>
              <div className="mb-10">
                <StaggerItem distance={12}>
                  <h2 className="mb-4 text-3xl">Flexible Support Options</h2>
                </StaggerItem>
                <StaggerItem distance={12}>
                  <p className="text-[16px] text-[var(--color-slate)] max-w-[600px] leading-relaxed">
                    We customize our services according to your business needs, whether you need help with a specific backlog or require permanent assistance.
                  </p>
                </StaggerItem>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { title: "Project-Based", desc: "Short-term help to clear backlogs or organize specific systems." },
                  { title: "Monthly Support", desc: "Consistent administrative assistance to keep your business running smoothly." },
                  { title: "Ongoing Assistance", desc: "A permanent extension of your team handling day-to-day coordination." }
                ].map((tier, i) => (
                  <StaggerItem key={i} distance={12} delay={i * 0.1}>
                    <div className="bg-white rounded-xl p-6 border border-[var(--color-border)] shadow-sm h-full flex flex-col gap-3 hover:border-[var(--color-accent-500)] transition-colors duration-[220ms]">
                      <h3 className="text-[17px] font-semibold text-[var(--color-charcoal)]">{tier.title}</h3>
                      <p className="text-[14px] text-[var(--color-slate)] leading-relaxed">{tier.desc}</p>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>

            {/* Downloads */}
            <StaggerContainer id="downloads">
              <StaggerItem distance={12}>
                <h2 className="mb-8 text-3xl">Helpful Resources</h2>
              </StaggerItem>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Business Organization Checklist",
                  "Administrative Planning Guide",
                  "Office Documentation Checklist"
                ].map((dl, i) => (
                  <StaggerItem key={i} distance={12} delay={i * 0.1}>
                    <Link href="/resources" className="group flex flex-col justify-between bg-white rounded-xl p-6 border border-[var(--color-border)] shadow-sm hover:border-[var(--color-accent-500)] hover:shadow-md transition-all duration-[220ms] h-full gap-6">
                      <h4 className="font-semibold text-[15px] text-[var(--color-charcoal)] group-hover:text-[var(--color-primary-900)] transition-colors">{dl}</h4>
                      <div className="flex items-center text-[13px] font-medium text-[var(--color-accent-600)]">
                        Download PDF <Download className="w-3.5 h-3.5 ml-1.5" />
                      </div>
                    </Link>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>

            {/* FAQ */}
            <StaggerContainer>
              <StaggerItem distance={12}>
                <h2 className="mb-10 text-3xl">Frequently Asked Questions</h2>
              </StaggerItem>
              <StaggerItem distance={12}>
                <SharedFaqAccordion category="Business Support" />
              </StaggerItem>
            </StaggerContainer>

            {/* Related Services */}
            <StaggerContainer>
              <StaggerItem distance={12}>
                <h2 className="mb-10 text-3xl">Related Services</h2>
              </StaggerItem>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { title: "Business Startup", href: "/services/business-startup" },
                  { title: "Bookkeeping", href: "/services/bookkeeping" },
                  { title: "Applications", href: "/services/applications-administrative-support" }
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

          </div>

          {/* RIGHT COLUMN: STICKY SIDEBAR (Desktop Only) */}
          <aside className="hidden lg:flex flex-col gap-6 sticky top-[120px]">
            {/* Action Box */}
            <div className="bg-white rounded-2xl p-6 border border-[var(--color-border)] shadow-sm flex flex-col gap-6">
              <div>
                <h3 className="font-semibold text-lg text-[var(--color-charcoal)] mb-2">Need Support?</h3>
                <p className="text-[14px] text-[var(--color-slate)] leading-relaxed">
                  Let's discuss how we can streamline your daily operations.
                </p>
              </div>
              <Button size="lg" className="w-full group" asChild>
                <Link href="/contact">
                  Book a Consultation
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-[220ms] group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* Quick Contact Box */}
            <div className="bg-[#F8F7F4] rounded-2xl p-6 border border-[var(--color-border)] flex flex-col gap-5">
              <h3 className="font-semibold text-[15px] text-[var(--color-charcoal)] uppercase tracking-wider">Contact Info</h3>
              <ul className="flex flex-col gap-4">
                <li>
                  <a href="tel:9012071660" className="flex items-center gap-3 text-[14px] text-[var(--color-slate)] hover:text-[var(--color-primary-900)] transition-colors">
                    <Phone className="w-4 h-4 text-[var(--color-accent-600)]" />
                    (901) 207-1660
                  </a>
                </li>
                <li className="flex items-start gap-3 text-[14px] text-[var(--color-slate)]">
                  <Clock className="w-4 h-4 mt-0.5 text-[var(--color-accent-600)] shrink-0" />
                  <span>Monday–Friday<br/>9:00 AM – 5:00 PM</span>
                </li>
                <li className="flex items-start gap-3 text-[14px] text-[var(--color-slate)]">
                  <MapPin className="w-4 h-4 mt-0.5 text-[var(--color-accent-600)] shrink-0" />
                  <span>5520 Summer Ave #102<br/>Memphis, TN 38122</span>
                </li>
              </ul>
            </div>
          </aside>

        </div>
      </div>

      {/* =========================================
          SECTION 15: FINAL CTA (FULL WIDTH)
      ========================================= */}
      <section className="relative bg-[var(--color-primary-900)] py-[120px] w-full overflow-hidden text-center mt-auto">
        <div className="absolute inset-0 bg-radial-[at_50%_50%] from-[var(--color-primary-600)]/20 to-transparent to-70% rounded-full blur-3xl opacity-50 pointer-events-none" />
        
        <StaggerContainer className="container relative z-10 mx-auto px-6 max-w-[900px] flex flex-col items-center">
          <StaggerItem distance={12}>
            <h2 className="mb-6 text-white text-4xl md:text-5xl">Let Us Handle The Administration</h2>
          </StaggerItem>
          <StaggerItem distance={12}>
            <p className="text-xl text-[var(--color-primary-100)] mb-10 max-w-[650px] mx-auto text-balance">
              So you can focus entirely on growing your business. Book a consultation today to establish a reliable support partnership.
            </p>
          </StaggerItem>
          <StaggerItem distance={8} className="w-full sm:w-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <Button size="lg" className="w-full sm:w-auto px-10 bg-white text-[var(--color-primary-900)] hover:bg-[var(--color-offwhite)] group" asChild>
                <Link href="/contact">
                  Book a Free Consultation
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

      {/* =========================================
          MOBILE FLOATING CTA
      ========================================= */}
      <div className="lg:hidden fixed bottom-4 left-4 right-4 z-50 pointer-events-none">
        <div className="bg-white/90 glass p-4 rounded-2xl shadow-[var(--shadow-xl)] border border-[var(--color-border)] pointer-events-auto flex items-center justify-between gap-4">
          <div className="flex flex-col hidden sm:flex">
            <span className="text-[13px] font-bold text-[var(--color-charcoal)]">Need Support?</span>
            <span className="text-[12px] text-[var(--color-slate)]">Schedule a meeting today.</span>
          </div>
          <Button className="w-full sm:w-auto shadow-sm" asChild>
            <Link href="/contact">Book Consultation</Link>
          </Button>
        </div>
      </div>

    </main>
  )
}
