"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Info, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger"
import { AboutHeroVisual } from "@/components/ui/about-hero-visual"
import { SharedFaqAccordion } from "@/components/ui/shared-faq-accordion"
import { BookConsultationButton } from "@/components/ui/book-consultation-button"
import { aboutData } from "@/lib/about"

export default function AboutClientPage() {
  return (
    <main className="flex flex-col w-full min-h-screen">
      
      {/* =========================================
          1. HERO SECTION
      ========================================= */}
      <section className="bg-[#F8F7F4] pt-[120px] pb-[80px] lg:pb-[100px] border-b border-[var(--color-border)] relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-[var(--container-xl)] relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
            <StaggerContainer className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left z-10" delayChildren={0.1}>
              <StaggerItem distance={8}>
                <span className="text-sm font-bold tracking-[0.15em] uppercase text-[var(--color-accent-500)] mb-4 block">
                  ABOUT THE CENTER
                </span>
              </StaggerItem>

              <StaggerItem distance={16} className="mb-6 max-w-[650px]">
                <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
                  Professional Support.<br/>Clear Guidance.<br/>A Better Way Forward.
                </h1>
              </StaggerItem>

              <StaggerItem distance={12} className="mb-10 max-w-[600px]">
                <p className="text-lg md:text-[20px] text-[var(--color-slate)] leading-relaxed text-balance">
                  {aboutData.mission}
                </p>
              </StaggerItem>

              <StaggerItem distance={12} className="w-full sm:w-auto flex flex-col sm:flex-row gap-4">
                <BookConsultationButton size="lg" className="w-full sm:w-auto px-8" />
                <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 bg-white border-[var(--color-border-strong)]" asChild>
                  <Link href="/services">Explore Our Services</Link>
                </Button>
              </StaggerItem>
            </StaggerContainer>

            <div className="w-full lg:w-[45%] flex justify-center lg:justify-end z-10 mt-8 lg:mt-0">
              <AboutHeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          2. OUR STORY
      ========================================= */}
      <section className="bg-white py-[100px] lg:py-[140px] border-b border-[var(--color-border)]">
        <div className="container mx-auto px-6 max-w-[var(--container-lg)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <StaggerContainer className="relative">
              <StaggerItem distance={20}>
                <div className="aspect-[4/5] bg-[#F8F7F4] rounded-2xl border border-[var(--color-border)] relative overflow-hidden flex items-center justify-center p-8">
                  {/* Editorial Graphic Placeholder */}
                  <div className="w-full h-full border border-[var(--color-border-strong)] rounded-xl flex flex-col gap-6 p-8 relative z-10 bg-white/50 backdrop-blur-sm">
                    <div className="w-16 h-16 rounded-full bg-[var(--color-primary-50)]" />
                    <div className="space-y-4">
                      <div className="h-4 w-3/4 bg-[var(--color-primary-900)] rounded-full" />
                      <div className="h-3 w-full bg-[var(--color-slate)]/20 rounded-full" />
                      <div className="h-3 w-5/6 bg-[var(--color-slate)]/20 rounded-full" />
                      <div className="h-3 w-4/5 bg-[var(--color-slate)]/20 rounded-full" />
                    </div>
                  </div>
                  <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[var(--color-accent-400)]/10 rounded-full blur-3xl" />
                </div>
              </StaggerItem>
            </StaggerContainer>

            <StaggerContainer className="flex flex-col gap-6">
              <StaggerItem distance={12}>
                <h2 className="text-3xl md:text-4xl text-[var(--color-charcoal)]">{aboutData.story.heading}</h2>
              </StaggerItem>
              {aboutData.story.content.map((paragraph, idx) => (
                <StaggerItem key={idx} distance={12} delay={idx * 0.1}>
                  <p className="text-[17px] leading-relaxed text-[var(--color-slate)]">{paragraph}</p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* =========================================
          3. MISSION & VISION
      ========================================= */}
      <section className="bg-[#F8F7F4] py-[100px] border-b border-[var(--color-border)] text-center">
        <StaggerContainer className="container mx-auto px-6 max-w-[800px] flex flex-col items-center">
          <StaggerItem distance={12}>
            <span className="text-sm font-bold tracking-[0.15em] uppercase text-[var(--color-accent-600)] mb-6 block">OUR VISION</span>
          </StaggerItem>
          <StaggerItem distance={16}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-medium text-[var(--color-primary-900)] mb-10 text-balance">
              "{aboutData.vision}"
            </h2>
          </StaggerItem>
          <StaggerItem distance={12} className="w-20 h-1 bg-[var(--color-accent-400)] rounded-full mb-10" />
          <StaggerItem distance={12}>
            <p className="text-lg text-[var(--color-charcoal)] leading-relaxed text-balance">
              Every process we build, every form we organize, and every consultation we provide is designed to bring this vision to life for our clients.
            </p>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* =========================================
          4. VALUES GRID
      ========================================= */}
      <section className="bg-white py-[100px] border-b border-[var(--color-border)]">
        <div className="container mx-auto px-6 max-w-[var(--container-xl)]">
          <StaggerContainer className="text-center mb-16" delayChildren={0.1}>
            <StaggerItem distance={12}>
              <h2 className="text-3xl md:text-4xl">What We Believe</h2>
            </StaggerItem>
          </StaggerContainer>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutData.values.map((value, idx) => {
              const Icon = value.icon
              return (
                <StaggerContainer key={idx} delayChildren={idx * 0.1}>
                  <StaggerItem distance={16}>
                    <div className="bg-[#F8F7F4] p-8 rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-accent-400)] transition-colors duration-300 h-full group">
                      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-[var(--color-accent-600)]" />
                      </div>
                      <h3 className="text-[20px] font-semibold text-[var(--color-charcoal)] mb-3">{value.title}</h3>
                      <p className="text-[15px] text-[var(--color-slate)] leading-relaxed">{value.description}</p>
                    </div>
                  </StaggerItem>
                </StaggerContainer>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========================================
          5. OUR APPROACH (Workflow)
      ========================================= */}
      <section className="bg-white py-[100px] border-b border-[var(--color-border)] overflow-hidden">
        <div className="container mx-auto px-6 max-w-[var(--container-xl)]">
          <StaggerContainer className="mb-16">
            <StaggerItem distance={12}>
              <h2 className="text-3xl md:text-4xl text-center">A Practical Approach to Support</h2>
            </StaggerItem>
          </StaggerContainer>

          {/* Desktop Horizontal / Mobile Vertical Timeline */}
          <div className="relative">
            {/* Connecting Line (hidden on mobile, visible md+) */}
            <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-0.5 bg-[var(--color-border-strong)] z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 relative z-10">
              {aboutData.approach.map((step, idx) => (
                <StaggerContainer key={idx} delayChildren={idx * 0.15}>
                  <StaggerItem distance={16} className="flex flex-col md:items-center text-left md:text-center relative">
                    {/* Mobile vertical line */}
                    {idx !== aboutData.approach.length - 1 && (
                      <div className="md:hidden absolute top-[50px] bottom-[-40px] left-[24px] w-0.5 bg-[var(--color-border-strong)] z-0" />
                    )}
                    
                    <div className="w-[50px] h-[50px] rounded-full bg-[var(--color-primary-900)] text-white flex items-center justify-center font-bold text-[18px] mb-6 shadow-md relative z-10">
                      {step.step}
                    </div>
                    <div className="pl-[70px] md:pl-0 -mt-[70px] md:mt-0 relative z-10">
                      <h3 className="text-[18px] font-semibold text-[var(--color-charcoal)] mb-2 md:mt-0 mt-[14px]">{step.title}</h3>
                      <p className="text-[14px] text-[var(--color-slate)] leading-relaxed">{step.description}</p>
                    </div>
                  </StaggerItem>
                </StaggerContainer>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          6. TRUST & TRANSPARENCY
      ========================================= */}
      <section className="bg-white py-[100px] border-b border-[var(--color-border)]">
        <div className="container mx-auto px-6 max-w-[var(--container-lg)]">
          
          <StaggerContainer className="text-center mb-16">
            <StaggerItem distance={12}>
              <h2 className="text-3xl md:text-4xl">Trust Is Built Through Transparency</h2>
            </StaggerItem>
          </StaggerContainer>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {aboutData.trustPillars.map((pillar, idx) => (
              <StaggerContainer key={idx} delayChildren={idx * 0.1}>
                <StaggerItem distance={16}>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent-50)] flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-5 h-5 text-[var(--color-accent-600)]" />
                    </div>
                    <h3 className="text-[18px] font-semibold text-[var(--color-charcoal)] mb-2">{pillar.title}</h3>
                    <p className="text-[14px] text-[var(--color-slate)] leading-relaxed">{pillar.description}</p>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            ))}
          </div>

          {/* Scope Notice Panel */}
          <StaggerContainer>
            <StaggerItem distance={20}>
              <div className="bg-[#F8F7F4] border border-[var(--color-border-strong)] rounded-2xl p-8 flex flex-col md:flex-row gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-white flex shrink-0 items-center justify-center shadow-sm">
                  <Info className="w-6 h-6 text-[var(--color-primary-900)]" />
                </div>
                <div>
                  <h4 className="text-[18px] font-semibold text-[var(--color-charcoal)] mb-2">Knowing When to Refer</h4>
                  <p className="text-[15px] text-[var(--color-slate)] leading-relaxed mb-4">
                    THE CENTER provides administrative and business organization support. We do not provide legal advice, accounting, tax advisory, or immigration representation. 
                  </p>
                  <p className="text-[15px] text-[var(--color-slate)] leading-relaxed">
                    Certain matters require specialized expertise. When a situation falls outside our scope, we ensure our clients understand why and recommend consulting with a licensed attorney, CPA, or appropriate government agency.
                  </p>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
          
        </div>
      </section>

      {/* =========================================
          7. WHO WE SERVE & LANGUAGE SUPPORT
      ========================================= */}
      <section className="bg-[#F8F7F4] py-[100px] border-b border-[var(--color-border)]">
        <div className="container mx-auto px-6 max-w-[var(--container-xl)]">
          <StaggerContainer className="text-center mb-16">
            <StaggerItem distance={12}>
              <h2 className="text-3xl md:text-4xl mb-4">Who We Serve</h2>
            </StaggerItem>
            {aboutData.languageSupport.spanish && (
              <StaggerItem distance={12}>
                <p className="text-[15px] text-[var(--color-slate)] max-w-[600px] mx-auto bg-white px-4 py-2 rounded-full shadow-sm inline-block border border-[var(--color-border)]">
                  🇬🇧 English • 🇪🇸 Español available for all services
                </p>
              </StaggerItem>
            )}
          </StaggerContainer>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aboutData.audiences.map((audience, idx) => (
              <StaggerContainer key={idx} delayChildren={idx * 0.1}>
                <StaggerItem distance={16}>
                  <Link href={audience.link} className="block bg-white p-8 rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-primary-300)] shadow-sm hover:shadow-md transition-all h-full group">
                    <h3 className="text-[20px] font-semibold text-[var(--color-primary-900)] mb-3 group-hover:text-[var(--color-accent-600)] transition-colors">{audience.title}</h3>
                    <p className="text-[15px] text-[var(--color-slate)] leading-relaxed mb-6">{audience.description}</p>
                    <span className="text-[14px] font-medium text-[var(--color-primary-900)] inline-flex items-center">
                      View Services <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </StaggerItem>
              </StaggerContainer>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          8. CONDITIONAL TRUST SIGNALS 
          (Hidden if data is empty to prevent fake claims)
      ========================================= */}
      
      {/* Team Section - Graceful Hide */}
      {aboutData.team.length > 0 && (
        <section className="bg-white py-[100px] border-b border-[var(--color-border)]">
          <div className="container mx-auto px-6 max-w-[var(--container-xl)]">
            <h2 className="text-3xl text-center mb-12">Meet the Team</h2>
            {/* Team Grid would go here if data existed */}
          </div>
        </section>
      )}

      {/* Testimonials Section - Graceful Hide */}
      {aboutData.testimonials.length > 0 && (
        <section className="bg-[#F8F7F4] py-[100px] border-b border-[var(--color-border)]">
          <div className="container mx-auto px-6 max-w-[var(--container-lg)] text-center">
            <h2 className="text-3xl mb-12">Client Stories</h2>
            {/* Testimonials would go here if data existed */}
          </div>
        </section>
      )}

      {/* Metrics Section - Graceful Hide */}
      {aboutData.metrics.length > 0 && (
        <section className="bg-white py-[80px] border-b border-[var(--color-border)]">
          <div className="container mx-auto px-6 max-w-[var(--container-xl)]">
            {/* Metrics Grid would go here if data existed */}
          </div>
        </section>
      )}

      {/* =========================================
          9. RESOURCE & FAQ CONNECTION
      ========================================= */}
      <section className="py-[100px] bg-white">
        <StaggerContainer className="container mx-auto px-6 max-w-[900px] flex flex-col gap-10">
          <StaggerItem distance={12} className="text-center">
            <h2 className="text-3xl mb-4">Knowledge Should Be Accessible</h2>
            <p className="text-[16px] text-[var(--color-slate)] max-w-[600px] mx-auto mb-6">
              Our resources are designed to help you prepare, understand processes, and identify useful next steps before you even speak with us.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild><Link href="/resources">Explore Resources</Link></Button>
            </div>
          </StaggerItem>
          
          <StaggerItem distance={12} className="mt-8 pt-10 border-t border-[var(--color-border)]">
            <h3 className="text-2xl text-center mb-8">Frequently Asked Questions</h3>
            <SharedFaqAccordion category="Consultations" />
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* =========================================
          10. FINAL CTA
      ========================================= */}
      <section className="bg-[var(--color-primary-900)] py-[100px] text-center mt-auto">
        <StaggerContainer className="container mx-auto px-6 max-w-[700px] flex flex-col items-center">
          <StaggerItem distance={12}>
            <h2 className="mb-6 text-white text-3xl md:text-4xl">Ready to Take the Next Step?</h2>
          </StaggerItem>
          <StaggerItem distance={12}>
            <p className="text-[16px] md:text-lg text-[var(--color-primary-100)] mb-8 text-balance">
              Whether you are starting a business, organizing important paperwork, or looking for administrative support, THE CENTER is ready to help.
            </p>
          </StaggerItem>
          <StaggerItem distance={8} className="w-full sm:w-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <BookConsultationButton size="lg" className="w-full sm:w-auto px-10 bg-white text-[var(--color-primary-900)] hover:bg-[var(--color-offwhite)]" />
              <Button variant="outline" size="lg" className="w-full sm:w-auto px-10 border-white/30 text-white hover:bg-white/10 shadow-none" asChild>
                <Link href="/contact">Contact THE CENTER</Link>
              </Button>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </section>

    </main>
  )
}
