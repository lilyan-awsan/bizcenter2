import * as React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { 
  ArrowRight, Phone, CheckCircle2, FileCheck, 
  Compass, MessageCircle, ShieldCheck, Globe,
  Calendar, MessageSquare, ClipboardCheck, Clock, Download, MapPin
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger"
import { StartupHeroVisual } from "@/components/ui/startup-hero-visual"
import { StartupAudienceVisual } from "@/components/ui/startup-audience-visual"

export const metadata: Metadata = {
  title: "Business Startup Services | THE CENTER",
  description: "Organized planning and guidance for entrepreneurs. Start your business with confidence with practical administrative support from THE CENTER.",
}

// Re-using the FAQ Accordion logic but supplying specific startup questions
import { SharedFaqAccordion } from "@/components/ui/shared-faq-accordion"

export default function BusinessStartupPage() {
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
                Business Startup
              </span>
            </StaggerItem>

            <StaggerItem distance={16} className="mb-6 max-w-[650px]">
              <h1>Start Your Business With Confidence</h1>
            </StaggerItem>

            <StaggerItem distance={12} className="mb-10 max-w-[600px]">
              <p className="text-lg md:text-[20px] text-[var(--color-slate)] leading-relaxed text-balance">
                Starting a business can feel overwhelming, but organized planning and guidance make the process much simpler. We help you navigate the essential administrative steps to establish your business correctly.
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
                  <Link href="#documents">
                    View Startup Checklist
                  </Link>
                </Button>
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* RIGHT 45%: Visual */}
          <div className="w-full lg:w-[45%] flex justify-center lg:justify-end z-10 mt-8 lg:mt-0">
            <StartupHeroVisual />
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
            
            {/* Quick Overview */}
            <StaggerContainer>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Business Planning", desc: "Structured approach to operations." },
                  { title: "Admin Guidance", desc: "Help navigating complex forms." },
                  { title: "Required Documents", desc: "Organized checklist for success." },
                  { title: "Ongoing Support", desc: "Help beyond just the launch phase." }
                ].map((item, i) => (
                  <StaggerItem key={i} distance={12} delay={i * 0.1}>
                    <div className="bg-white rounded-xl p-6 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow duration-[220ms] flex flex-col gap-2">
                      <div className="w-2 h-2 rounded-full bg-[var(--color-accent-500)] mb-1" />
                      <h3 className="text-[17px] font-semibold text-[var(--color-charcoal)]">{item.title}</h3>
                      <p className="text-[14px] text-[var(--color-slate)] leading-relaxed">{item.desc}</p>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>

            {/* What's Included */}
            <StaggerContainer>
              <StaggerItem distance={12}>
                <h2 className="mb-10 text-3xl">What's Included</h2>
              </StaggerItem>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
                {[
                  { title: "Business Planning Guidance", desc: "Practical advice on organizing your ideas into actionable business steps.", icon: Compass },
                  { title: "Registration Preparation", desc: "Help preparing the required information to register your entity locally.", icon: FileCheck },
                  { title: "Document Organization", desc: "Ensuring all your paperwork is compiled correctly and safely stored.", icon: ClipboardCheck },
                  { title: "Application Assistance", desc: "Support in filling out complex administrative forms and applications.", icon: ShieldCheck },
                  { title: "Structure Discussions", desc: "Exploring the differences in basic entity structures for operational clarity.", icon: MessageCircle },
                  { title: "Professional Referrals", desc: "Referrals to trusted licensed CPAs or attorneys when required.", icon: Globe },
                ].map((item, i) => (
                  <StaggerItem key={i} distance={16} delay={i * 0.05} className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-lg bg-[var(--color-bg-secondary)] flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-[var(--color-primary-900)]" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-[18px] font-semibold text-[var(--color-charcoal)]">{item.title}</h3>
                      <p className="text-[15px] text-[var(--color-slate)] leading-relaxed">{item.desc}</p>
                    </div>
                  </StaggerItem>
                ))}
              </div>
              <StaggerItem distance={8}>
                <div className="mt-10 p-5 rounded-lg bg-[#F8F7F4] border border-[var(--color-border)]">
                  <p className="text-[14px] text-[var(--color-slate)] text-balance">
                    <strong>Note:</strong> THE CENTER provides administrative and organizational support. We do not provide licensed legal, tax, or financial advice.
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>

            {/* Who This Service Is For */}
            <section className="bg-[#F8F7F4] rounded-[24px] overflow-hidden">
              <div className="flex flex-col md:flex-row items-center gap-8 p-8 md:p-12">
                <div className="w-full md:w-1/2 flex justify-center">
                  <StartupAudienceVisual />
                </div>
                <StaggerContainer className="w-full md:w-1/2 flex flex-col">
                  <StaggerItem distance={12}>
                    <h2 className="mb-6 text-2xl md:text-3xl">Is This Right for You?</h2>
                  </StaggerItem>
                  <StaggerItem distance={12}>
                    <ul className="flex flex-col gap-4">
                      {[
                        "First-time entrepreneurs",
                        "Small business owners",
                        "Home-based businesses",
                        "Family businesses",
                        "Existing businesses needing organization"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="mt-1 w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-[var(--color-border)]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-accent-600)]" />
                          </div>
                          <span className="text-[16px] text-[var(--color-charcoal)]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </StaggerItem>
                </StaggerContainer>
              </div>
            </section>

            {/* Process */}
            <StaggerContainer>
              <StaggerItem distance={12}>
                <h2 className="mb-10 text-3xl">How We Help</h2>
              </StaggerItem>
              <div className="flex flex-col gap-8 relative">
                {/* Vertical Timeline Line */}
                <div className="absolute left-[23px] top-6 bottom-6 w-[2px] bg-[var(--color-border-hover)]" />

                {[
                  { step: "01", title: "Schedule Consultation", desc: "We sit down to discuss your vision, goals, and current progress.", icon: Calendar },
                  { step: "02", title: "Understand Your Goals", desc: "We identify exactly what administrative steps are required for your specific business.", icon: MessageSquare },
                  { step: "03", title: "Prepare Documentation", desc: "We organize the necessary paperwork and applications to move forward.", icon: ClipboardCheck },
                  { step: "04", title: "Move Forward", desc: "You launch your business with confidence, knowing everything is properly organized.", icon: CheckCircle2 },
                ].map((item, i) => (
                  <StaggerItem key={i} distance={16} delay={i * 0.1} className="relative z-10 flex gap-6 group">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-white border-4 border-[var(--color-bg-primary)] shadow-sm flex items-center justify-center transition-colors duration-[220ms] group-hover:border-[var(--color-accent-100)]">
                      <item.icon className="w-5 h-5 text-[var(--color-primary-900)] transition-colors duration-[220ms] group-hover:text-[var(--color-accent-500)]" />
                    </div>
                    <div className="pt-2">
                      <div className="text-[12px] font-bold text-[var(--color-accent-500)] mb-1 tracking-widest">STEP {item.step}</div>
                      <h3 className="text-[18px] font-semibold text-[var(--color-charcoal)] mb-2">{item.title}</h3>
                      <p className="text-[15px] text-[var(--color-slate)] leading-relaxed max-w-[500px]">{item.desc}</p>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>

            {/* Common Documents */}
            <StaggerContainer id="documents">
              <div className="mb-10">
                <StaggerItem distance={12}>
                  <h2 className="mb-4 text-3xl">Common Documents You May Need</h2>
                </StaggerItem>
                <StaggerItem distance={12}>
                  <p className="text-[16px] text-[var(--color-slate)] max-w-[600px] leading-relaxed">
                    To help us understand your situation, it is helpful to bring existing information. <strong className="text-[var(--color-charcoal)]">Required documents vary depending on the situation</strong>, and this is not an exhaustive list.
                  </p>
                </StaggerItem>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Valid Identification (ID, Passport)",
                  "Business Information (Name, Address)",
                  "Existing Registration Paperwork",
                  "Government Correspondence",
                  "Supporting Certifications (if applicable)"
                ].map((doc, i) => (
                  <StaggerItem key={i} distance={12} delay={i * 0.05}>
                    <div className="bg-white rounded-lg p-5 border border-[var(--color-border)] shadow-sm flex items-center gap-4">
                      <div className="w-10 h-10 rounded-md bg-[var(--color-bg-secondary)] flex items-center justify-center shrink-0">
                        <FileCheck className="w-5 h-5 text-[var(--color-slate)]" />
                      </div>
                      <span className="text-[15px] font-medium text-[var(--color-charcoal)]">{doc}</span>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>

            {/* Why Choose The Center */}
            <section className="bg-[var(--color-primary-900)] rounded-[24px] p-8 md:p-12 text-white">
              <StaggerContainer>
                <StaggerItem distance={12}>
                  <h2 className="mb-10 text-2xl md:text-3xl text-white">Why Choose The Center</h2>
                </StaggerItem>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: "Clear Communication", icon: MessageCircle },
                    { title: "Organized Process", icon: ShieldCheck },
                    { title: "Professional Support", icon: Compass },
                    { title: "English & Spanish", icon: Globe },
                  ].map((feature, i) => (
                    <StaggerItem key={i} distance={16} delay={i * 0.1}>
                      <div className="bg-white/5 backdrop-blur-sm rounded-[16px] p-6 border border-white/10 hover:border-[var(--color-accent-400)] transition-colors duration-[220ms] group flex gap-4 items-center">
                        <div className="w-12 h-12 shrink-0 rounded-xl bg-white/10 flex items-center justify-center">
                          <feature.icon className="w-5 h-5 text-white group-hover:text-[var(--color-accent-400)] transition-colors duration-[220ms]" />
                        </div>
                        <h3 className="text-[17px] font-medium text-white">{feature.title}</h3>
                      </div>
                    </StaggerItem>
                  ))}
                </div>
              </StaggerContainer>
            </section>

            {/* FAQ */}
            <StaggerContainer>
              <StaggerItem distance={12}>
                <h2 className="mb-10 text-3xl">Frequently Asked Questions</h2>
              </StaggerItem>
              <StaggerItem distance={12}>
                <SharedFaqAccordion category="Business Startup" />
              </StaggerItem>
            </StaggerContainer>

            {/* Related Services */}
            <StaggerContainer>
              <StaggerItem distance={12}>
                <h2 className="mb-10 text-3xl">You May Also Need</h2>
              </StaggerItem>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { title: "Bookkeeping", href: "/services/bookkeeping" },
                  { title: "Business Support", href: "/services/business-support" },
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
                <h3 className="font-semibold text-lg text-[var(--color-charcoal)] mb-2">Ready to Start?</h3>
                <p className="text-[14px] text-[var(--color-slate)] leading-relaxed">
                  Schedule a consultation to discuss your specific business goals.
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

            {/* Checklist Resource Box */}
            <div className="bg-white rounded-2xl p-6 border border-[var(--color-border)] flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-[var(--color-accent-50)]">
                  <Download className="w-5 h-5 text-[var(--color-accent-600)]" />
                </div>
                <h3 className="font-semibold text-[15px] text-[var(--color-charcoal)]">Startup Checklist</h3>
              </div>
              <Button variant="outline" className="w-full text-[13px] bg-white" asChild>
                <Link href="/resources/document-checklist">View Requirements</Link>
              </Button>
            </div>
          </aside>

        </div>
      </div>

      {/* =========================================
          SECTION 10: FINAL CTA (FULL WIDTH)
      ========================================= */}
      <section className="relative bg-[var(--color-primary-900)] py-[120px] w-full overflow-hidden text-center mt-auto">
        <div className="absolute inset-0 bg-radial-[at_50%_50%] from-[var(--color-primary-600)]/20 to-transparent to-70% rounded-full blur-3xl opacity-50 pointer-events-none" />
        
        <StaggerContainer className="container relative z-10 mx-auto px-6 max-w-[900px] flex flex-col items-center">
          <StaggerItem distance={12}>
            <h2 className="mb-6 text-white text-4xl md:text-5xl">Ready to Start Your Business?</h2>
          </StaggerItem>
          <StaggerItem distance={12}>
            <p className="text-xl text-[var(--color-primary-100)] mb-10 max-w-[650px] mx-auto text-balance">
              Book a consultation and let THE CENTER help you take the next step with confidence.
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
          MOBILE FLOATING CTA (Mobile Only)
      ========================================= */}
      <div className="lg:hidden fixed bottom-4 left-4 right-4 z-50 pointer-events-none">
        <div className="bg-white/90 glass p-4 rounded-2xl shadow-[var(--shadow-xl)] border border-[var(--color-border)] pointer-events-auto flex items-center justify-between gap-4">
          <div className="flex flex-col hidden sm:flex">
            <span className="text-[13px] font-bold text-[var(--color-charcoal)]">Need Help?</span>
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
