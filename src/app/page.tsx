import * as React from "react"
import Link from "next/link"
import { 
  Sparkles, Check, ArrowRight, 
  Rocket, Calculator, ClipboardList, FileText, Globe,
  Store, BookOpen, FileCheck, Phone,
  Calendar, MessageSquare, ClipboardCheck, CheckCircle2,
  MessageCircle, Scale, ShieldCheck, HelpCircle, Compass
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger"
import { RevealOnScroll } from "@/components/motion/reveal-on-scroll"
import { HeroVisual } from "@/components/ui/hero-visual"
import { GuidanceVisual } from "@/components/ui/guidance-visual"
import { ScopeVisual } from "@/components/ui/scope-visual"

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      
      {/* =========================================
          HERO SECTION (PHASE 5A)
      ========================================= */}
      <div className="relative min-h-[100svh] bg-[#F8F7F4] overflow-hidden flex flex-col">
        
        {/* Background Soft Gradients */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-radial-[at_50%_50%] from-[var(--color-primary-200)]/20 to-transparent to-70% rounded-full blur-3xl opacity-60 pointer-events-none transform translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-radial-[at_50%_50%] from-[var(--color-accent-300)]/15 to-transparent to-70% rounded-full blur-3xl opacity-50 pointer-events-none transform -translate-x-1/4 translate-y-1/4" />

        <section className="relative flex-1 flex flex-col justify-center pt-[120px] pb-[100px]">
          <div className="container mx-auto px-6 max-w-[var(--container-xl)] h-full flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
            
            {/* LEFT 55%: Content */}
            <StaggerContainer 
              className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left z-10"
              delayChildren={0.1} 
              staggerChildren={0.1}
            >
              <StaggerItem distance={8} className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/50 border border-[var(--color-accent-200)] glass shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-[var(--color-accent-600)]" />
                  <span className="text-xs font-bold tracking-[0.15em] uppercase text-[var(--color-charcoal)]">
                    Helping Businesses Start & Grow
                  </span>
                </div>
              </StaggerItem>

              <StaggerItem distance={16} className="mb-6 max-w-[650px]">
                <h1>
                  Start, Grow, and Manage Your Business With Confidence
                </h1>
              </StaggerItem>

              <StaggerItem distance={12} className="mb-10 max-w-[600px]">
                <p className="text-lg md:text-[20px] text-[var(--color-slate)] leading-relaxed text-balance">
                  THE CENTER provides practical support for entrepreneurs, small businesses, and individuals navigating startup processes, bookkeeping, applications, and administrative workflows.
                </p>
              </StaggerItem>

              <StaggerItem distance={12} className="w-full sm:w-auto">
                <div className="flex flex-col sm:flex-row items-center gap-5 w-full">
                  <Button size="lg" className="w-full sm:w-auto px-8 group" asChild>
                    <Link href="/contact">
                      Book a Free Consultation
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 border-[var(--color-accent-500)] text-[var(--color-accent-700)] hover:bg-[var(--color-accent-50)] hover:text-[var(--color-accent-800)] shadow-none" asChild>
                    <Link href="/services">
                      Explore Our Services
                    </Link>
                  </Button>
                </div>
              </StaggerItem>

              <StaggerItem distance={8} className="mt-12 lg:mt-16 w-full">
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 pt-6 border-t border-[var(--color-border-hover)]">
                  {["Local Business Support", "Practical Guidance", "English & Spanish", "Honest Process"].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-[var(--color-success)]/10 flex items-center justify-center">
                        <Check className="w-3 h-3 text-[var(--color-success)]" />
                      </div>
                      <span className="text-sm font-medium text-[var(--color-slate)]">{item}</span>
                    </div>
                  ))}
                </div>
              </StaggerItem>
            </StaggerContainer>

            {/* RIGHT 45%: Visual */}
            <div className="w-full lg:w-[45%] flex justify-center lg:justify-end z-10 mt-8 lg:mt-0">
              <HeroVisual />
            </div>
          </div>
        </section>

        {/* Bottom Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center gap-2 opacity-60">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-[var(--color-slate)]">Scroll to Explore</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-[var(--color-slate)] to-transparent" />
        </div>
      </div>

      {/* =========================================
          SECTION 1: PREMIUM SERVICES PREVIEW
      ========================================= */}
      <section className="bg-white py-[100px] w-full">
        <StaggerContainer className="container mx-auto px-6 max-w-[var(--container-xl)]">
          
          {/* Section Header */}
          <div className="flex flex-col items-center text-center mb-16">
            <StaggerItem distance={8}>
              <span className="text-sm font-bold tracking-[0.15em] uppercase text-[var(--color-accent-500)] mb-4 block">
                Our Services
              </span>
            </StaggerItem>
            <StaggerItem distance={12}>
              <h2 className="mb-6 max-w-[650px]">How We Can Help</h2>
            </StaggerItem>
            <StaggerItem distance={12}>
              <p className="text-lg text-[var(--color-slate)] max-w-[650px] text-balance">
                Every business has different needs. We offer practical administrative support throughout every stage of your journey.
              </p>
            </StaggerItem>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Business Startup", desc: "From idea to organized next steps. Setup your entity correctly.", icon: Rocket, href: "/services/business-startup" },
              { title: "Bookkeeping", desc: "Keep your business organized and financially clear month over month.", icon: Calculator, href: "/services/bookkeeping" },
              { title: "Business Support", desc: "Help for everyday business needs, licenses, and ongoing compliance.", icon: ClipboardList, href: "/services/business-support" },
              { title: "Applications", desc: "Organize information and efficiently process administrative forms.", icon: FileText, href: "/services/applications-administrative-support" },
              { title: "New to the U.S.", desc: "A clear starting point for essential administrative processes.", icon: Globe, href: "/services/new-to-the-united-states" },
            ].map((service, index) => (
              <StaggerItem key={index} distance={16} delay={index * 0.06}>
                <Link href={service.href} className="group block h-full">
                  <div className="h-full bg-white rounded-[16px] p-8 border border-[var(--color-border)] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] transition-all duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[6px] hover:shadow-[var(--shadow-lg)] hover:border-[var(--color-accent-500)] flex flex-col">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-bg-secondary)] flex items-center justify-center mb-6 transition-transform duration-[220ms] group-hover:scale-110 group-hover:bg-[var(--color-primary-50)]">
                      <service.icon className="w-6 h-6 text-[var(--color-primary-900)]" />
                    </div>
                    <h3 className="text-xl mb-3 text-[var(--color-charcoal)]">{service.title}</h3>
                    <p className="text-[15px] text-[var(--color-slate)] mb-8 flex-1">
                      {service.desc}
                    </p>
                    <div className="flex items-center text-[var(--color-primary-900)] font-semibold text-[15px]">
                      <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-current after:transition-all after:duration-[220ms] group-hover:after:w-full">
                        Learn More
                      </span>
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-[220ms] group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </div>

        </StaggerContainer>
      </section>

      {/* =========================================
          SECTION 2: NOT SURE WHERE TO START?
      ========================================= */}
      <section className="bg-[#F8F7F4] py-[100px] w-full overflow-hidden">
        <div className="container mx-auto px-6 max-w-[var(--container-xl)]">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
            
            {/* Left: Illustration */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <GuidanceVisual />
            </div>

            {/* Right: Content */}
            <StaggerContainer className="w-full lg:w-1/2 flex flex-col" delayChildren={0.1}>
              <StaggerItem distance={8}>
                <span className="text-sm font-bold tracking-[0.15em] uppercase text-[var(--color-accent-500)] mb-4 block">
                  Need Guidance?
                </span>
              </StaggerItem>
              <StaggerItem distance={12}>
                <h2 className="mb-6">Not Sure Where to Start?</h2>
              </StaggerItem>
              <StaggerItem distance={12}>
                <p className="text-lg text-[var(--color-slate)] mb-10 leading-relaxed text-balance">
                  You don't need to know exactly what service you need. We will listen to your situation and help determine the right path forward for you or your business.
                </p>
              </StaggerItem>

              {/* Micro Guidance Boxes */}
              <StaggerItem distance={12} className="w-full">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                  {[
                    { title: "Starting a Business?", icon: Store },
                    { title: "Need Bookkeeping?", icon: BookOpen },
                    { title: "Help with Forms?", icon: FileCheck }
                  ].map((box, i) => (
                    <div key={i} className="bg-white rounded-lg p-4 border border-[var(--color-border)] shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)] group cursor-pointer flex flex-col gap-2">
                      <box.icon className="w-5 h-5 text-[var(--color-accent-500)]" />
                      <span className="text-sm font-semibold text-[var(--color-charcoal)] group-hover:text-[var(--color-primary-900)] transition-colors">{box.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[var(--color-border-strong)] mt-auto group-hover:text-[var(--color-primary-900)] group-hover:translate-x-1 transition-all duration-[220ms]" />
                    </div>
                  ))}
                </div>
              </StaggerItem>

              <StaggerItem distance={8}>
                <div className="flex flex-col sm:flex-row gap-4 w-full">
                  <Button size="lg" className="w-full sm:w-auto" asChild>
                    <Link href="/contact">Book a Free Consultation</Link>
                  </Button>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white" asChild>
                    <a href="tel:9012071660">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Us Today
                    </a>
                  </Button>
                </div>
              </StaggerItem>

            </StaggerContainer>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 3: HOW IT WORKS
      ========================================= */}
      <section className="bg-white py-[100px] w-full">
        <StaggerContainer className="container mx-auto px-6 max-w-[var(--container-xl)] flex flex-col items-center">
          
          {/* Header */}
          <div className="text-center mb-20">
            <StaggerItem distance={8}>
              <span className="text-sm font-bold tracking-[0.15em] uppercase text-[var(--color-accent-500)] mb-4 block">
                Simple Process
              </span>
            </StaggerItem>
            <StaggerItem distance={12}>
              <h2 className="mb-6">How It Works</h2>
            </StaggerItem>
            <StaggerItem distance={12}>
              <p className="text-lg text-[var(--color-slate)] max-w-[600px] text-balance mx-auto">
                Working with THE CENTER is straightforward and transparent. We focus on clear steps and practical results.
              </p>
            </StaggerItem>
          </div>

          {/* Timeline Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative mb-16">
            
            {/* Desktop Connecting Line */}
            <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-[var(--color-border-hover)]" />

            {[
              { step: "01", title: "Book a Consultation", desc: "Schedule a time that works for you.", icon: Calendar },
              { step: "02", title: "Tell Us Your Needs", desc: "We'll discuss your specific situation.", icon: MessageSquare },
              { step: "03", title: "Receive Guidance", desc: "Get a clear plan and understanding.", icon: ClipboardCheck },
              { step: "04", title: "Move Forward", desc: "Proceed with confidence and support.", icon: CheckCircle2 },
            ].map((item, i) => (
              <StaggerItem key={i} distance={16} delay={i * 0.1} className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left group">
                <div className="w-[88px] h-[88px] rounded-full bg-white border-4 border-[#F8F7F4] shadow-sm flex items-center justify-center mb-6 transition-transform duration-[220ms] group-hover:-translate-y-2 group-hover:border-[var(--color-primary-50)]">
                  <item.icon className="w-8 h-8 text-[var(--color-primary-900)] transition-colors duration-[220ms] group-hover:text-[var(--color-accent-500)]" />
                </div>
                <div className="text-sm font-bold text-[var(--color-accent-500)] mb-2 tracking-widest">STEP {item.step}</div>
                <h3 className="text-lg font-semibold text-[var(--color-charcoal)] mb-2">{item.title}</h3>
                <p className="text-[15px] text-[var(--color-slate)] max-w-[280px]">{item.desc}</p>
              </StaggerItem>
            ))}
          </div>

          <StaggerItem distance={12}>
            <div className="flex flex-col items-center text-center bg-[#F8F7F4] p-8 md:p-12 rounded-[24px] w-full max-w-[800px]">
              <h3 className="text-2xl font-bold text-[var(--color-primary-900)] mb-6">Ready to Get Started?</h3>
              <Button size="lg" className="px-10" asChild>
                <Link href="/contact">Book a Free Consultation</Link>
              </Button>
            </div>
          </StaggerItem>

        </StaggerContainer>
      </section>

      {/* =========================================
          PHASE 5C - SECTION 1: WHY CHOOSE THE CENTER
      ========================================= */}
      <section className="bg-[var(--color-primary-900)] py-[120px] w-full text-white">
        <StaggerContainer className="container mx-auto px-6 max-w-[var(--container-xl)] flex flex-col items-center">
          
          {/* Header */}
          <div className="text-center mb-16">
            <StaggerItem distance={8}>
              <span className="text-sm font-bold tracking-[0.15em] uppercase text-[var(--color-accent-400)] mb-4 block">
                Why Choose The Center
              </span>
            </StaggerItem>
            <StaggerItem distance={12}>
              <h2 className="mb-6 max-w-[600px] text-white">Professional Support You Can Trust</h2>
            </StaggerItem>
            <StaggerItem distance={12}>
              <p className="text-lg text-[var(--color-primary-100)] max-w-[650px] text-balance mx-auto">
                We focus on providing practical, organized administrative assistance while guiding you through business processes with clarity and professionalism.
              </p>
            </StaggerItem>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[1000px]">
            {[
              { title: "Clear Communication", desc: "We explain processes simply and keep you informed every step of the way without unnecessary jargon.", icon: MessageCircle },
              { title: "Practical Guidance", desc: "Our focus is on actionable steps that move your business forward efficiently and correctly.", icon: Compass },
              { title: "Professional Support", desc: "Organized, reliable administrative help that respects your time and your business goals.", icon: ShieldCheck },
              { title: "Bilingual Assistance", desc: "Complete support available in both English and Spanish to ensure total understanding.", icon: Globe },
            ].map((feature, i) => (
              <StaggerItem key={i} distance={16} delay={i * 0.1} className="h-full">
                <div className="h-full bg-white/5 backdrop-blur-sm rounded-[16px] p-8 border border-white/10 transition-all duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-[var(--color-accent-500)] hover:shadow-[var(--shadow-lg)] group flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 transition-transform duration-[220ms] group-hover:-translate-y-1">
                    <feature.icon className="w-6 h-6 text-white group-hover:text-[var(--color-accent-400)] transition-colors duration-[220ms]" />
                  </div>
                  <h3 className="text-xl mb-3 text-white group-hover:text-[var(--color-accent-400)] transition-colors duration-[220ms]">{feature.title}</h3>
                  <p className="text-[15px] text-[var(--color-primary-100)] leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </div>

        </StaggerContainer>
      </section>

      {/* =========================================
          PHASE 5C - SECTION 2: PROFESSIONAL STANDARDS
      ========================================= */}
      <section className="bg-[#F8F7F4] py-[100px] w-full overflow-hidden">
        <div className="container mx-auto px-6 max-w-[var(--container-xl)]">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
            
            {/* Left: Illustration */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <ScopeVisual />
            </div>

            {/* Right: Content */}
            <StaggerContainer className="w-full lg:w-1/2 flex flex-col" delayChildren={0.1}>
              <StaggerItem distance={12}>
                <h2 className="mb-6">Committed to Clear and Responsible Service</h2>
              </StaggerItem>
              <StaggerItem distance={12}>
                <div className="prose prose-lg prose-slate text-[var(--color-slate)]">
                  <p className="mb-4">
                    THE CENTER provides high-quality business and administrative support. We pride ourselves on helping you organize, apply, and manage your operational needs with precision.
                  </p>
                  <p className="mb-4">
                    To ensure the highest standard of care, we want to be transparent about our scope. Certain matters may require the specialized expertise of licensed attorneys, CPAs, or government agencies.
                  </p>
                  <p>
                    While we assist you in preparing and navigating these administrative processes, THE CENTER does not guarantee approvals, timelines, or outcomes decided by third-party institutions. Our commitment is to provide honest, practical guidance to put you in the best position possible.
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>

          </div>
        </div>
      </section>

      {/* =========================================
          PHASE 5C - SECTION 3: RESOURCES PREVIEW
      ========================================= */}
      <section className="bg-white py-[100px] w-full">
        <StaggerContainer className="container mx-auto px-6 max-w-[var(--container-xl)]">
          
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-16">
            <StaggerItem distance={8}>
              <span className="text-sm font-bold tracking-[0.15em] uppercase text-[var(--color-accent-500)] mb-4 block">
                Free Resources
              </span>
            </StaggerItem>
            <StaggerItem distance={12}>
              <h2 className="mb-6 max-w-[650px]">Helpful Information Before You Visit</h2>
            </StaggerItem>
            <StaggerItem distance={12}>
              <p className="text-lg text-[var(--color-slate)] max-w-[650px] text-balance">
                Explore our curated guides and official links to help you gather the right information before your consultation.
              </p>
            </StaggerItem>
          </div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { title: "Document Checklist", desc: "Know exactly what documents to bring for your specific business or personal needs.", icon: FileCheck, href: "/resources/document-checklist" },
              { title: "Official Forms & Resources", desc: "Direct links to common government forms, state registries, and official portals.", icon: Globe, href: "/resources/official-forms" },
              { title: "Frequently Asked Questions", desc: "Quick answers to common questions about our processes, timelines, and services.", icon: HelpCircle, href: "/resources/faq" },
            ].map((resource, index) => (
              <StaggerItem key={index} distance={16} delay={index * 0.1}>
                <Link href={resource.href} className="group block h-full">
                  <div className="h-full bg-white rounded-[16px] p-8 border border-[var(--color-border)] shadow-[var(--shadow-md)] transition-all duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[6px] hover:shadow-[var(--shadow-lg)] hover:border-[var(--color-accent-500)] flex flex-col">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-bg-secondary)] flex items-center justify-center mb-6 transition-colors duration-[220ms] group-hover:bg-[var(--color-primary-50)]">
                      <resource.icon className="w-6 h-6 text-[var(--color-primary-900)]" />
                    </div>
                    <h3 className="text-xl mb-3 text-[var(--color-charcoal)]">{resource.title}</h3>
                    <p className="text-[15px] text-[var(--color-slate)] mb-8 flex-1">
                      {resource.desc}
                    </p>
                    <div className="flex items-center text-[var(--color-primary-900)] font-semibold text-[15px]">
                      <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-current after:transition-all after:duration-[220ms] group-hover:after:w-full">
                        Explore Resource
                      </span>
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-[220ms] group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </div>

          <StaggerItem distance={8} className="flex justify-center">
            <Button variant="outline" className="border-[var(--color-border-strong)]" asChild>
              <Link href="/resources">View All Resources</Link>
            </Button>
          </StaggerItem>

        </StaggerContainer>
      </section>

      {/* =========================================
          PHASE 5C - SECTION 4: FINAL CTA
      ========================================= */}
      <section className="relative bg-[var(--color-primary-900)] py-[120px] w-full overflow-hidden text-center">
        {/* Background Decorative Effects */}
        <div className="absolute inset-0 bg-radial-[at_50%_50%] from-[var(--color-primary-600)]/20 to-transparent to-70% rounded-full blur-3xl opacity-50 pointer-events-none" />
        
        <RevealOnScroll animation="scale" className="container relative z-10 mx-auto px-6 max-w-[900px] flex flex-col items-center">
          <h2 className="mb-6 text-white text-4xl md:text-5xl">Ready to Take the Next Step?</h2>
          <p className="text-xl text-[var(--color-primary-100)] mb-10 max-w-[650px] mx-auto text-balance">
            Schedule a free consultation today to discuss your business or administrative needs. We are here to help you move forward with clarity.
          </p>
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
                Call (901) 207-1660
              </a>
            </Button>
          </div>
        </RevealOnScroll>
      </section>

    </main>
  )
}
