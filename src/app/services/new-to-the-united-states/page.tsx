import * as React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { 
  ArrowRight, Phone, CheckCircle2, MapPin, Navigation, 
  FolderOpen, BookOpen, Clock, Download, ExternalLink,
  MessageSquare, FileText, ClipboardList, Info, Users, 
  Globe2, CheckSquare, Smile, Library
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger"
import { NewcomerHeroVisual } from "@/components/ui/newcomer-hero-visual"
import { NewcomerWelcomeVisual } from "@/components/ui/newcomer-welcome-visual"
import { SharedFaqAccordion } from "@/components/ui/shared-faq-accordion"

export const metadata: Metadata = {
  title: "New to the United States | THE CENTER",
  description: "Welcome to the U.S. Let THE CENTER help you navigate business and administrative processes with confident, organized guidance.",
}

export default function NewToTheUSPage() {
  return (
    <main className="flex flex-col w-full relative">
      
      {/* =========================================
          SECTION 1: PAGE HERO (FULL WIDTH)
      ========================================= */}
      <div className="relative bg-[#F8F7F4] overflow-hidden flex flex-col pt-[120px] pb-[100px]">
        {/* Soft Background Gradients */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-radial-[at_50%_50%] from-[var(--color-primary-200)]/30 to-transparent to-70% rounded-full blur-3xl opacity-50 pointer-events-none transform translate-x-1/4 -translate-y-1/4" />
        
        <div className="container mx-auto px-6 max-w-[var(--container-xl)] h-full flex flex-col lg:flex-row items-center gap-12 lg:gap-8 relative z-10">
          
          {/* LEFT 55%: Content */}
          <StaggerContainer 
            className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left z-10"
            delayChildren={0.1}
          >
            <StaggerItem distance={8}>
              <span className="text-sm font-bold tracking-[0.15em] uppercase text-[var(--color-accent-500)] mb-4 block flex items-center justify-center lg:justify-start gap-2">
                <Globe2 className="w-4 h-4" /> New To The United States
              </span>
            </StaggerItem>

            <StaggerItem distance={16} className="mb-6 max-w-[650px]">
              <h1>Welcome.<br/>Let's Help You Get Started With Confidence.</h1>
            </StaggerItem>

            <StaggerItem distance={12} className="mb-10 max-w-[600px]">
              <p className="text-lg md:text-[20px] text-[var(--color-slate)] leading-relaxed text-balance">
                Moving to a new country often comes with unfamiliar paperwork, administrative steps, and questions. THE CENTER provides organized guidance, document preparation support, and administrative assistance to help you better understand available processes.
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
                    Download Checklist
                  </Link>
                </Button>
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* RIGHT 45%: Visual */}
          <div className="w-full lg:w-[45%] flex justify-center lg:justify-end z-10 mt-8 lg:mt-0">
            <NewcomerHeroVisual />
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
            
            {/* Welcome Section */}
            <section className="bg-white rounded-[24px] border border-[var(--color-border)] shadow-sm overflow-hidden p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <StaggerContainer className="w-full md:w-1/2 flex flex-col">
                  <StaggerItem distance={12}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-[var(--color-accent-50)] rounded-full text-[var(--color-accent-600)]">
                        <Smile className="w-6 h-6" />
                      </div>
                      <h2 className="text-2xl md:text-3xl m-0">You're Not Expected To Know Everything</h2>
                    </div>
                  </StaggerItem>
                  <StaggerItem distance={12}>
                    <p className="text-[16px] text-[var(--color-slate)] leading-relaxed mb-6">
                      Everyone starts somewhere. Administrative systems, business requirements, and government forms can feel incredibly confusing when you are new to them.
                    </p>
                  </StaggerItem>
                  <StaggerItem distance={12}>
                    <p className="text-[16px] text-[var(--color-slate)] leading-relaxed font-medium text-[var(--color-charcoal)]">
                      THE CENTER is here to help organize the process step-by-step so you never feel like you're figuring it out alone.
                    </p>
                  </StaggerItem>
                </StaggerContainer>
                <div className="w-full md:w-1/2 flex justify-center">
                  <NewcomerWelcomeVisual />
                </div>
              </div>
            </section>

            {/* Quick Start Roadmap */}
            <StaggerContainer>
              <StaggerItem distance={12}>
                <h2 className="mb-10 text-3xl">Quick Start Roadmap</h2>
              </StaggerItem>
              <div className="flex flex-col gap-8 relative">
                <div className="absolute left-[23px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[var(--color-accent-200)] via-[var(--color-accent-400)] to-[var(--color-accent-200)] opacity-50" />

                {[
                  { step: "1", title: "Schedule Consultation", desc: "Reach out to us to schedule a welcoming introductory meeting.", icon: MessageSquare },
                  { step: "2", title: "Understand Your Situation", desc: "We listen to what you need help with, completely free of judgment.", icon: Users },
                  { step: "3", title: "Prepare Documents", desc: "We help you gather and organize the necessary identification and records.", icon: FolderOpen },
                  { step: "4", title: "Receive Administrative Guidance", desc: "We explain exactly how the relevant forms or processes work.", icon: Navigation },
                  { step: "5", title: "Move Forward Confidently", desc: "You take the next steps feeling organized and prepared.", icon: MapPin },
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

            {/* How We Can Help */}
            <StaggerContainer>
              <StaggerItem distance={12}>
                <h2 className="mb-10 text-3xl">How We Can Help</h2>
              </StaggerItem>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Document Organization", desc: "Sorting through new paperwork and requirements." },
                  { title: "Administrative Guidance", desc: "Explaining basic administrative workflows clearly." },
                  { title: "Application Preparation", desc: "Helping you compile information for required forms." },
                  { title: "Business Startup Guidance", desc: "Explaining the steps to starting a business in your area." },
                  { title: "Connecting With Resources", desc: "Pointing you toward official community and government resources." },
                  { title: "Business Documentation", desc: "Helping you draft professional correspondence." },
                  { title: "Professional Referrals", desc: "Introducing you to licensed experts when you need specialized advice." }
                ].map((feature, i) => (
                  <StaggerItem key={i} distance={12} delay={i * 0.05}>
                    <div className="bg-white rounded-xl p-6 border border-[var(--color-border)] shadow-sm hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 hover:border-[var(--color-accent-500)] transition-all duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)] h-full flex flex-col gap-3">
                      <h3 className="text-[17px] font-semibold text-[var(--color-charcoal)] flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[var(--color-accent-500)] shrink-0" />
                        {feature.title}
                      </h3>
                      <p className="text-[14px] text-[var(--color-slate)] pl-7 leading-relaxed">{feature.desc}</p>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>

            {/* Newcomer Checklist (Soft Gold) */}
            <section className="bg-[var(--color-accent-50)] rounded-[24px] p-8 md:p-12 border border-[var(--color-accent-200)]">
              <StaggerContainer>
                <div className="mb-8">
                  <StaggerItem distance={12}>
                    <h2 className="mb-4 text-2xl md:text-3xl text-[var(--color-charcoal)]">Helpful First Steps</h2>
                  </StaggerItem>
                  <StaggerItem distance={12}>
                    <div className="flex gap-2 items-start text-[14px] text-[var(--color-accent-800)] font-medium">
                      <Info className="w-4 h-4 mt-0.5 shrink-0" />
                      <p>Every situation is different. This checklist is general guidance only.</p>
                    </div>
                  </StaggerItem>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Collect your official identification",
                    "Organize important personal documents",
                    "Keep secure copies of all records",
                    "Create a list of important contacts",
                    "Prepare required business information",
                    "Seek to understand local requirements"
                  ].map((item, i) => (
                    <StaggerItem key={i} distance={12} delay={i * 0.05}>
                      <div className="bg-white/80 backdrop-blur-sm rounded-lg p-5 border border-[var(--color-accent-100)] flex items-center gap-4 shadow-sm">
                        <CheckSquare className="w-5 h-5 text-[var(--color-accent-600)] shrink-0" />
                        <span className="text-[15px] font-medium text-[var(--color-charcoal)]">{item}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </div>
              </StaggerContainer>
            </section>

            {/* Common Documents */}
            <StaggerContainer>
              <div className="mb-10">
                <StaggerItem distance={12}>
                  <h2 className="mb-4 text-3xl">Documents You May Need</h2>
                </StaggerItem>
                <StaggerItem distance={12}>
                  <p className="text-[15px] text-[var(--color-slate)]">Required documents vary depending upon your unique situation and goals.</p>
                </StaggerItem>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { title: "Identification", icon: Users },
                  { title: "Proof Of Address", icon: MapPin },
                  { title: "Business Information", icon: BookOpen },
                  { title: "Government Documents", icon: FolderOpen },
                  { title: "Supporting Records", icon: ClipboardList },
                  { title: "Additional Documentation", icon: FileText }
                ].map((doc, i) => (
                  <StaggerItem key={i} distance={12} delay={i * 0.05}>
                    <div className="bg-white rounded-xl p-5 border border-[var(--color-border)] shadow-sm flex flex-col items-center text-center gap-3 h-full">
                      <div className="w-10 h-10 rounded-full bg-[var(--color-bg-secondary)] flex items-center justify-center text-[var(--color-primary-900)]">
                        <doc.icon className="w-5 h-5" />
                      </div>
                      <span className="text-[14px] font-semibold text-[var(--color-charcoal)]">{doc.title}</span>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>

            {/* Official Resources */}
            <StaggerContainer>
              <StaggerItem distance={12}>
                <h2 className="mb-8 text-3xl">Helpful Official Resources</h2>
              </StaggerItem>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "Government Resources", desc: "Official state and federal information portals." },
                  { title: "Business Information", desc: "Chambers of commerce and business bureaus." },
                  { title: "Community Organizations", desc: "Local groups providing newcomer assistance." },
                  { title: "Local Offices", desc: "City and county administrative centers." },
                  { title: "Educational Resources", desc: "Language and skill development centers." }
                ].map((resource, i) => (
                  <StaggerItem key={i} distance={12} delay={i * 0.1}>
                    <Link href="/resources" className="group flex flex-col gap-3 bg-white rounded-xl p-6 border border-[var(--color-border)] shadow-sm hover:border-[var(--color-primary-900)] hover:shadow-md transition-all duration-[220ms] h-full relative">
                      <div className="absolute top-4 right-4 text-[var(--color-border-strong)] group-hover:text-[var(--color-primary-900)] transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </div>
                      <Library className="w-6 h-6 text-[var(--color-accent-600)]" />
                      <h3 className="text-[16px] font-semibold text-[var(--color-charcoal)]">{resource.title}</h3>
                      <p className="text-[13px] text-[var(--color-slate)]">{resource.desc}</p>
                    </Link>
                  </StaggerItem>
                ))}
              </div>
              <StaggerItem distance={8} className="mt-4">
                <p className="text-[12px] text-[var(--color-text-secondary)] italic text-center sm:text-left">
                  * Links open to external official websites not managed by THE CENTER.
                </p>
              </StaggerItem>
            </StaggerContainer>

            {/* FAQ */}
            <StaggerContainer>
              <StaggerItem distance={12}>
                <h2 className="mb-10 text-3xl">Frequently Asked Questions</h2>
              </StaggerItem>
              <StaggerItem distance={12}>
                <SharedFaqAccordion category="New to the United States" />
              </StaggerItem>
            </StaggerContainer>

            {/* Important Information (Very Light Gold) */}
            <StaggerContainer>
              <StaggerItem distance={12}>
                <div className="bg-[#FCFBF8] rounded-2xl p-8 md:p-10 border border-[var(--color-accent-200)] flex flex-col md:flex-row gap-6 items-start md:items-center">
                  <div className="shrink-0 p-3 bg-white rounded-full shadow-sm">
                    <Info className="w-8 h-8 text-[var(--color-accent-600)]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[var(--color-charcoal)] mb-2">Important Information</h4>
                    <p className="text-[15px] text-[var(--color-slate)] leading-relaxed text-balance">
                      THE CENTER provides administrative guidance and document organization support. Certain situations require licensed attorneys, CPAs, immigration professionals, or government agencies. <strong className="text-[var(--color-charcoal)] font-semibold">THE CENTER does not provide legal representation or guarantee decisions made by third parties.</strong> We will refer you to qualified professionals when necessary.
                    </p>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>

            {/* Why People Choose The Center */}
            <section className="bg-[var(--color-primary-900)] rounded-[24px] p-8 md:p-12 text-white">
              <StaggerContainer>
                <StaggerItem distance={12}>
                  <h2 className="mb-10 text-2xl md:text-3xl text-white">Why People Choose THE CENTER</h2>
                </StaggerItem>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { title: "Friendly Guidance", desc: "A welcoming environment free of judgment." },
                    { title: "Clear Communication", desc: "We take the time to explain things patiently." },
                    { title: "Professional Organization", desc: "Helping you look and feel prepared." },
                    { title: "English & Spanish Assistance", desc: "Bilingual support to ensure you understand everything." }
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
                  { title: "Newcomer Checklist", icon: ClipboardList },
                  { title: "Document Prep Guide", icon: FolderOpen },
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
                  { title: "Applications Support", href: "/services/applications-administrative-support" },
                  { title: "Business Support", href: "/services/business-support" }
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
                  We are here to help you get organized. Schedule a free introductory meeting.
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
            <h2 className="mb-6 text-white text-4xl md:text-5xl">Let's Take The First Step Together</h2>
          </StaggerItem>
          <StaggerItem distance={12}>
            <p className="text-xl text-[var(--color-primary-100)] mb-10 max-w-[650px] mx-auto text-balance">
              Whether you're starting a business, organizing paperwork, or simply trying to understand your next steps, THE CENTER is here to provide organized administrative support.
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
