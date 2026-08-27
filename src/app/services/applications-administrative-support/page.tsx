import * as React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { 
  ArrowRight, Phone, CheckCircle2, FileSignature, 
  FolderSearch, ClipboardCheck, MessageSquare, Files,
  FolderTree, PenLine, FileText, Send, Building2,
  Clock, Download, MapPin, Info, Users, Mail,
  ListTodo, Briefcase, FileArchive, FileCheck
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger"
import { AdminSupportHeroVisual } from "@/components/ui/admin-support-hero-visual"
import { AdminSupportProcessVisual } from "@/components/ui/admin-support-process-visual"
import { SharedFaqAccordion } from "@/components/ui/shared-faq-accordion"

export const metadata: Metadata = {
  title: "Applications & Administrative Support | THE CENTER",
  description: "Clear guidance through business forms and administrative processes. We help organize your documents and prepare applications with confidence.",
}

export default function ApplicationsSupportPage() {
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
                Applications & Administrative Support
              </span>
            </StaggerItem>

            <StaggerItem distance={16} className="mb-6 max-w-[650px]">
              <h1>Clear Guidance Through Business Forms & Administrative Processes</h1>
            </StaggerItem>

            <StaggerItem distance={12} className="mb-10 max-w-[600px]">
              <p className="text-lg md:text-[20px] text-[var(--color-slate)] leading-relaxed text-balance">
                Many business forms and administrative procedures can feel confusing. THE CENTER helps clients organize documents, prepare information, understand the process, and complete administrative steps more confidently.
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
                    Download Preparation Checklist
                  </Link>
                </Button>
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* RIGHT 45%: Visual */}
          <div className="w-full lg:w-[45%] flex justify-center lg:justify-end z-10 mt-8 lg:mt-0">
            <AdminSupportHeroVisual />
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
            
            {/* Quick Benefits Bar */}
            <StaggerContainer>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Document Organization", desc: "Sorting through paperwork." },
                  { title: "Application Preparation", desc: "Getting forms ready properly." },
                  { title: "Administrative Guidance", desc: "Understanding the next steps." },
                  { title: "Clear Next Steps", desc: "Removing the confusion." }
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

            {/* What We Help With */}
            <StaggerContainer>
              <StaggerItem distance={12}>
                <h2 className="mb-10 text-3xl">Administrative Support Services</h2>
              </StaggerItem>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Preparing Documentation", desc: "Gathering and sorting necessary business paperwork.", icon: FileText },
                  { title: "Organizing Information", desc: "Structuring your data so it is easy to retrieve and submit.", icon: FolderTree },
                  { title: "Application Preparation", desc: "Assisting with compiling details for administrative forms.", icon: PenLine },
                  { title: "Document Review", desc: "Reviewing forms for completeness before you submit them.", icon: ClipboardCheck },
                  { title: "Admin Coordination", desc: "Liaising with your team to ensure all processes run smoothly.", icon: Users },
                  { title: "Business Correspondence", desc: "Helping draft and organize professional letters and notices.", icon: Mail },
                  { title: "Record Organization", desc: "Filing historical and ongoing records appropriately.", icon: FileArchive },
                  { title: "Process Guidance", desc: "Explaining the general steps required for specific procedures.", icon: ListTodo },
                ].map((feature, i) => (
                  <StaggerItem key={i} distance={12} delay={i * 0.05}>
                    <div className="bg-white rounded-xl p-6 border border-[var(--color-border)] shadow-sm hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 hover:border-[var(--color-accent-500)] transition-all duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)] flex gap-4 h-full items-start group">
                      <div className="shrink-0 w-10 h-10 rounded-lg bg-[var(--color-bg-secondary)] flex items-center justify-center group-hover:bg-[var(--color-primary-50)] transition-colors duration-[220ms]">
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
              <StaggerItem distance={8} className="mt-6">
                <div className="p-5 rounded-lg bg-[#F8F7F4] border border-[var(--color-border)] text-[14px] text-[var(--color-slate)] flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-accent-600)] shrink-0" />
                  <span>We provide immediate referral to licensed professionals when your situation requires specific legal, immigration, or tax expertise.</span>
                </div>
              </StaggerItem>
            </StaggerContainer>

            {/* Our Approach */}
            <section className="bg-[#F8F7F4] rounded-[24px] overflow-hidden">
              <div className="flex flex-col md:flex-row items-center gap-8 p-8 md:p-12">
                <div className="w-full md:w-1/2 flex justify-center">
                  <AdminSupportProcessVisual />
                </div>
                <StaggerContainer className="w-full md:w-1/2 flex flex-col">
                  <StaggerItem distance={12}>
                    <h2 className="mb-6 text-2xl md:text-3xl">A Structured Administrative Process</h2>
                  </StaggerItem>
                  <StaggerItem distance={12}>
                    <p className="text-[16px] text-[var(--color-slate)] leading-relaxed mb-6">
                      Every administrative situation is different. Our goal is to take a chaotic stack of requirements and organize them into a clear, structured plan. 
                    </p>
                  </StaggerItem>
                  <StaggerItem distance={12}>
                    <p className="text-[16px] text-[var(--color-slate)] leading-relaxed">
                      We help clients identify what information they need, organize their documents, and move through the process with far greater confidence and significantly less stress.
                    </p>
                  </StaggerItem>
                </StaggerContainer>
              </div>
            </section>

            {/* Process Timeline */}
            <StaggerContainer>
              <StaggerItem distance={12}>
                <h2 className="mb-10 text-3xl">How We Work</h2>
              </StaggerItem>
              <div className="flex flex-col gap-8 relative">
                <div className="absolute left-[23px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[var(--color-accent-200)] via-[var(--color-accent-400)] to-[var(--color-accent-200)] opacity-50" />

                {[
                  { step: "01", title: "Consultation", desc: "We review what forms or processes you are trying to complete.", icon: MessageSquare },
                  { step: "02", title: "Review Requirements", desc: "We outline exactly what documentation will be needed.", icon: FolderSearch },
                  { step: "03", title: "Organize Documents", desc: "We gather and properly arrange your files and information.", icon: Files },
                  { step: "04", title: "Prepare Application", desc: "We assist in filling out fields correctly and checking for completeness.", icon: FileSignature },
                  { step: "05", title: "Submit When Ready", desc: "You submit the finalized package with confidence.", icon: Send },
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

            {/* Preparing Before You Apply */}
            <StaggerContainer>
              <div className="mb-10">
                <StaggerItem distance={12}>
                  <h2 className="mb-4 text-3xl">Preparing Before You Apply</h2>
                </StaggerItem>
                <StaggerItem distance={12}>
                  <p className="text-[16px] text-[var(--color-slate)] max-w-[600px] leading-relaxed">
                    Having your records organized saves significant time. <strong className="text-[var(--color-charcoal)]">Required documents vary depending on the specific application</strong>, but generally include:
                  </p>
                </StaggerItem>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Official Identification",
                  "Business Information",
                  "Supporting Documentation",
                  "Previous Records",
                  "Official Government Forms",
                  "Additional Supplemental Documents"
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

            {/* Important Information Disclaimer */}
            <StaggerContainer>
              <StaggerItem distance={12}>
                <div className="bg-[var(--color-accent-50)] rounded-2xl p-8 md:p-10 border border-[var(--color-accent-200)] flex flex-col md:flex-row gap-6 items-start md:items-center">
                  <div className="shrink-0 p-3 bg-white rounded-full shadow-sm">
                    <Info className="w-8 h-8 text-[var(--color-accent-600)]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[var(--color-charcoal)] mb-2">Important Information</h4>
                    <p className="text-[15px] text-[var(--color-slate)] leading-relaxed text-balance">
                      THE CENTER provides administrative support and document organization. We do not act as your legal representative, nor do we provide legal or immigration advice. Government agencies and licensed professionals make decisions within their own authority. <strong className="text-[var(--color-charcoal)] font-semibold">THE CENTER does not guarantee application approvals or outcomes.</strong>
                    </p>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>

            {/* FAQ */}
            <StaggerContainer>
              <StaggerItem distance={12}>
                <h2 className="mb-10 text-3xl">Questions We Frequently Receive</h2>
              </StaggerItem>
              <StaggerItem distance={12}>
                <SharedFaqAccordion category="Applications & Administrative Support" />
              </StaggerItem>
            </StaggerContainer>

            {/* Why Clients Appreciate Our Process */}
            <section className="bg-[var(--color-primary-900)] rounded-[24px] p-8 md:p-12 text-white">
              <StaggerContainer>
                <StaggerItem distance={12}>
                  <h2 className="mb-10 text-2xl md:text-3xl text-white">Why Clients Appreciate Our Process</h2>
                </StaggerItem>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { title: "Clear Communication", desc: "No confusing administrative jargon." },
                    { title: "Organized Documentation", desc: "Every file sorted precisely where it belongs." },
                    { title: "Professional Guidance", desc: "Honest feedback about required steps." },
                    { title: "Personalized Support", desc: "We adapt to your unique situation." }
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

            {/* Downloads */}
            <StaggerContainer id="downloads">
              <StaggerItem distance={12}>
                <h2 className="mb-8 text-3xl">Downloadable Resources</h2>
              </StaggerItem>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { title: "Application Checklist", icon: ClipboardCheck },
                  { title: "Required Documents Guide", icon: FolderSearch },
                  { title: "Admin Planning Worksheet", icon: FileText }
                ].map((dl, i) => (
                  <StaggerItem key={i} distance={12} delay={i * 0.1}>
                    <Link href="/resources" className="group flex flex-col justify-between bg-white rounded-xl p-6 border border-[var(--color-border)] shadow-sm hover:border-[var(--color-accent-500)] hover:shadow-md transition-all duration-[220ms] h-full gap-6">
                      <div className="flex flex-col gap-3">
                        <dl.icon className="w-6 h-6 text-[var(--color-slate)] group-hover:text-[var(--color-primary-900)] transition-colors" />
                        <h4 className="font-semibold text-[15px] text-[var(--color-charcoal)] group-hover:text-[var(--color-primary-900)] transition-colors">{dl.title}</h4>
                      </div>
                      <div className="flex items-center text-[13px] font-medium text-[var(--color-accent-600)]">
                        Download PDF <Download className="w-3.5 h-3.5 ml-1.5" />
                      </div>
                    </Link>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>

            {/* Related Services */}
            <StaggerContainer>
              <StaggerItem distance={12}>
                <h2 className="mb-10 text-3xl">Related Services</h2>
              </StaggerItem>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { title: "Business Startup", href: "/services/business-startup" },
                  { title: "Business Support", href: "/services/business-support" },
                  { title: "New to the U.S.", href: "/services/new-to-the-united-states" }
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
                <h3 className="font-semibold text-lg text-[var(--color-charcoal)] mb-2">Need Guidance?</h3>
                <p className="text-[14px] text-[var(--color-slate)] leading-relaxed">
                  Schedule a consultation to organize your application process.
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
          SECTION 14: FINAL CTA (FULL WIDTH)
      ========================================= */}
      <section className="relative bg-[var(--color-primary-900)] py-[120px] w-full overflow-hidden text-center mt-auto">
        <div className="absolute inset-0 bg-radial-[at_50%_50%] from-[var(--color-primary-600)]/20 to-transparent to-70% rounded-full blur-3xl opacity-50 pointer-events-none" />
        
        <StaggerContainer className="container relative z-10 mx-auto px-6 max-w-[900px] flex flex-col items-center">
          <StaggerItem distance={12}>
            <h2 className="mb-6 text-white text-4xl md:text-5xl">Need Help Organizing Your Application?</h2>
          </StaggerItem>
          <StaggerItem distance={12}>
            <p className="text-xl text-[var(--color-primary-100)] mb-10 max-w-[650px] mx-auto text-balance">
              Schedule a consultation to receive organized, professional administrative guidance without the confusion.
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
            <span className="text-[13px] font-bold text-[var(--color-charcoal)]">Need Guidance?</span>
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
