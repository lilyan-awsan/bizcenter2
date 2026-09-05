"use client"

import * as React from "react"
import Link from "next/link"
import { 
  ArrowRight, Phone, CheckCircle2, Rocket, Calculator, 
  ClipboardList, FileText, Globe, Calendar, MessageSquare, 
  ClipboardCheck, MessageCircle, Compass, ShieldCheck, 
  ChevronDown, ArrowUpRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger"
import { ServicesHeroVisual } from "@/components/ui/services-hero-visual"
import { WhoWeHelpVisual } from "@/components/ui/who-we-help-visual"
import { SharedFaqAccordion } from "@/components/ui/shared-faq-accordion"
import { useLanguage } from "@/context/language-context"
import { getTranslation } from "@/lib/i18n/translations"

export default function ServicesPage() {
  const { language } = useLanguage()
  const tDict = getTranslation(language)

  return (
    <main className="flex flex-col w-full">
      
      {/* =========================================
          SECTION 1: PAGE HERO
      ========================================= */}
      <div className="relative bg-[#F8F7F4] overflow-hidden flex flex-col pt-[120px] pb-[100px]">
        {/* Soft Background Gradients */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-radial-[at_50%_50%] from-[var(--color-primary-200)]/20 to-transparent to-70% rounded-full blur-3xl opacity-50 pointer-events-none transform translate-x-1/4 -translate-y-1/4" />
        
        <div className="container mx-auto px-6 max-w-[var(--container-xl)] h-full flex flex-col lg:flex-row items-center gap-12 lg:gap-8 relative z-10">
          
          {/* LEFT 55%: Content */}
          <StaggerContainer 
            className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left z-10"
            delayChildren={0.1}
          >
            <StaggerItem distance={8}>
              <span className="text-sm font-bold tracking-[0.15em] uppercase text-[var(--color-accent-500)] mb-4 block">
                {tDict.nav.services}
              </span>
            </StaggerItem>

            <StaggerItem distance={16} className="mb-6 max-w-[650px]">
              <h1>{tDict.common.ourCoreServices}</h1>
            </StaggerItem>

            <StaggerItem distance={12} className="mb-10 max-w-[600px]">
              <p className="text-lg md:text-[20px] text-[var(--color-slate)] leading-relaxed text-balance">
                {tDict.hero.subtitle}
              </p>
            </StaggerItem>

            <StaggerItem distance={12} className="w-full sm:w-auto">
              <div className="flex flex-col sm:flex-row items-center gap-5 w-full">
                <Button size="lg" className="w-full sm:w-auto px-8 group" asChild>
                  <Link href="/contact">
                    {tDict.nav.bookConsultation}
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-[220ms] group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 bg-white border-[var(--color-border-strong)] text-[var(--color-charcoal)] hover:bg-[var(--color-offwhite)] shadow-none" asChild>
                  <a href="tel:9012071660">
                    <Phone className="w-4 h-4 mr-2 text-[var(--color-slate)]" />
                    {tDict.hero.callUs}
                  </a>
                </Button>
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* RIGHT 45%: Visual */}
          <div className="w-full lg:w-[45%] flex justify-center lg:justify-end z-10 mt-8 lg:mt-0">
            <ServicesHeroVisual />
          </div>

        </div>
      </div>

      {/* =========================================
          SECTION 2: SERVICE DIRECTORY
      ========================================= */}
      <section className="bg-white py-[120px] w-full">
        <StaggerContainer className="container mx-auto px-6 max-w-[var(--container-xl)]">
          
          <div className="flex flex-col mb-16 max-w-[650px]">
            <StaggerItem distance={12}>
              <h2 className="mb-6">{tDict.common.exploreOurServices}</h2>
            </StaggerItem>
            <StaggerItem distance={12}>
              <p className="text-lg text-[var(--color-slate)] text-balance">
                {tDict.common.designedForSuccessDesc}
              </p>
            </StaggerItem>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: tDict.services.businessStartup.title, desc: tDict.services.businessStartup.desc, icon: Rocket, href: "/services/business-startup" },
              { title: tDict.services.bookkeeping.title, desc: tDict.services.bookkeeping.desc, icon: Calculator, href: "/services/bookkeeping" },
              { title: tDict.services.businessSupport.title, desc: tDict.services.businessSupport.desc, icon: ClipboardList, href: "/services/business-support" },
              { title: tDict.services.applicationsAdmin.title, desc: tDict.services.applicationsAdmin.desc, icon: FileText, href: "/services/applications-administrative-support" },
              { title: tDict.services.newToUS.title, desc: tDict.services.newToUS.desc, icon: Globe, href: "/services/new-to-the-united-states", span: true },
            ].map((service, index) => (
              <StaggerItem key={index} distance={16} delay={index * 0.08} className={service.span ? "md:col-span-2 lg:col-span-2" : ""}>
                <Link href={service.href} className="group block h-full">
                  <div className="h-full bg-white rounded-[16px] p-8 border border-[var(--color-border)] shadow-sm transition-all duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[6px] hover:shadow-[var(--shadow-lg)] hover:border-[var(--color-accent-500)] flex flex-col md:flex-row gap-6 items-start">
                    <div className="w-14 h-14 shrink-0 rounded-xl bg-[var(--color-bg-secondary)] flex items-center justify-center transition-transform duration-[220ms] group-hover:scale-110 group-hover:bg-[var(--color-primary-50)]">
                      <service.icon className="w-7 h-7 text-[var(--color-primary-900)]" />
                    </div>
                    <div className="flex flex-col flex-1">
                      <h3 className="text-2xl mb-3 text-[var(--color-charcoal)] group-hover:text-[var(--color-primary-900)] transition-colors">{service.title}</h3>
                      <p className="text-[16px] text-[var(--color-slate)] mb-6 flex-1 max-w-[600px] leading-relaxed">
                        {service.desc}
                      </p>
                      <div className="flex items-center text-[var(--color-accent-600)] font-semibold text-[15px]">
                        <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-current after:transition-all after:duration-[220ms] group-hover:after:w-full">
                          {tDict.common.exploreService}
                        </span>
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-[220ms] group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </section>

      {/* =========================================
          SECTION 3: WHO WE HELP
      ========================================= */}
      <section className="bg-[#F8F7F4] py-[120px] w-full overflow-hidden">
        <div className="container mx-auto px-6 max-w-[var(--container-xl)]">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
            
            {/* Left: Illustration */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <WhoWeHelpVisual />
            </div>

            {/* Right: Content */}
            <StaggerContainer className="w-full lg:w-1/2 flex flex-col" delayChildren={0.1}>
              <StaggerItem distance={12}>
                <h2 className="mb-8">{tDict.common.whoWeHelpTitle}</h2>
              </StaggerItem>
              <StaggerItem distance={12}>
                <ul className="flex flex-col gap-6">
                  {tDict.common.whoWeHelpList.map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="mt-1 w-6 h-6 rounded-full bg-[var(--color-accent-100)] flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-[var(--color-accent-600)]" />
                      </div>
                      <span className="text-[17px] text-[var(--color-slate)] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            </StaggerContainer>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 4: HOW WE WORK
      ========================================= */}
      <section className="bg-white py-[120px] w-full">
        <StaggerContainer className="container mx-auto px-6 max-w-[var(--container-xl)] flex flex-col items-center">
          
          <div className="text-center mb-20">
            <StaggerItem distance={12}>
              <h2 className="mb-6">{tDict.common.clearPathForward}</h2>
            </StaggerItem>
            <StaggerItem distance={12}>
              <p className="text-lg text-[var(--color-slate)] max-w-[600px] text-balance mx-auto">
                {tDict.common.clearPathForwardDesc}
              </p>
            </StaggerItem>
          </div>

          {/* Timeline Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
            <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-[var(--color-border-hover)]" />

            {[
              { step: "01", title: tDict.common.timelineSteps[0].title, desc: tDict.common.timelineSteps[0].desc, icon: Calendar },
              { step: "02", title: tDict.common.timelineSteps[1].title, desc: tDict.common.timelineSteps[1].desc, icon: MessageSquare },
              { step: "03", title: tDict.common.timelineSteps[2].title, desc: tDict.common.timelineSteps[2].desc, icon: ClipboardCheck },
              { step: "04", title: tDict.common.timelineSteps[3].title, desc: tDict.common.timelineSteps[3].desc, icon: CheckCircle2 },
            ].map((item, i) => (
              <StaggerItem key={i} distance={16} delay={i * 0.1} className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left group">
                <div className="w-[88px] h-[88px] rounded-full bg-white border-4 border-[#F8F7F4] shadow-sm flex items-center justify-center mb-6 transition-transform duration-[220ms] group-hover:-translate-y-2 group-hover:border-[var(--color-primary-50)]">
                  <item.icon className="w-8 h-8 text-[var(--color-primary-900)] transition-colors duration-[220ms] group-hover:text-[var(--color-accent-500)]" />
                </div>
                <div className="text-sm font-bold text-[var(--color-accent-500)] mb-2 tracking-widest">{tDict.common.stepWord} {item.step}</div>
                <h3 className="text-lg font-semibold text-[var(--color-charcoal)] mb-2">{item.title}</h3>
                <p className="text-[15px] text-[var(--color-slate)] max-w-[280px]">{item.desc}</p>
              </StaggerItem>
            ))}
          </div>

        </StaggerContainer>
      </section>

      {/* =========================================
          SECTION 5: WHY CHOOSE THE CENTER
      ========================================= */}
      <section className="bg-[var(--color-primary-900)] py-[120px] w-full text-white">
        <StaggerContainer className="container mx-auto px-6 max-w-[var(--container-xl)] flex flex-col items-center">
          
          <div className="text-center mb-16">
            <StaggerItem distance={12}>
              <h2 className="mb-6 max-w-[600px] text-white">{tDict.common.whyChooseTitle}</h2>
            </StaggerItem>
            <StaggerItem distance={12}>
              <p className="text-lg text-[var(--color-primary-100)] max-w-[650px] text-balance mx-auto">
                {tDict.common.whyChooseDesc}
              </p>
            </StaggerItem>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[1000px]">
            {tDict.common.whyChooseFeatures.map((feature, i) => {
              const icons = [Compass, MessageCircle, ShieldCheck, Globe]
              const IconComp = icons[i % icons.length]
              return (
                <StaggerItem key={i} distance={16} delay={i * 0.1} className="h-full">
                  <div className="h-full bg-white/5 backdrop-blur-sm rounded-[16px] p-8 border border-white/10 transition-all duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-[var(--color-accent-500)] hover:shadow-[var(--shadow-lg)] group flex flex-col">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 transition-transform duration-[220ms] group-hover:-translate-y-1">
                      <IconComp className="w-6 h-6 text-white group-hover:text-[var(--color-accent-400)] transition-colors duration-[220ms]" />
                    </div>
                    <h3 className="text-xl mb-3 text-white group-hover:text-[var(--color-accent-400)] transition-colors duration-[220ms]">{feature.title}</h3>
                    <p className="text-[15px] text-[var(--color-primary-100)] leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </StaggerItem>
              )
            })}
          </div>

        </StaggerContainer>
      </section>

      {/* =========================================
          SECTION 6: FAQ PREVIEW
      ========================================= */}
      <section className="bg-[#F8F7F4] py-[120px] w-full">
        <StaggerContainer className="container mx-auto px-6 max-w-[800px] flex flex-col items-center">
          
          <StaggerItem distance={12} className="mb-12 text-center">
            <h2 className="mb-6">{tDict.common.faqTitle}</h2>
            <p className="text-lg text-[var(--color-slate)]">{tDict.common.faqSubtitle}</p>
          </StaggerItem>

          <StaggerItem distance={12} className="w-full mb-10">
            <SharedFaqAccordion category="General" />
          </StaggerItem>

          <StaggerItem distance={8}>
            <Button variant="outline" className="bg-white border-[var(--color-border-strong)]" asChild>
              <Link href="/resources/faq">{tDict.resources.faq.title} <ArrowUpRight className="w-4 h-4 ml-2 opacity-50" /></Link>
            </Button>
          </StaggerItem>

        </StaggerContainer>
      </section>

      {/* =========================================
          SECTION 7: FINAL CTA
      ========================================= */}
      <section className="relative bg-[var(--color-primary-900)] py-[120px] w-full overflow-hidden text-center">
        <div className="absolute inset-0 bg-radial-[at_50%_50%] from-[var(--color-primary-600)]/20 to-transparent to-70% rounded-full blur-3xl opacity-50 pointer-events-none" />
        
        <StaggerContainer className="container relative z-10 mx-auto px-6 max-w-[900px] flex flex-col items-center">
          <StaggerItem distance={12}>
            <h2 className="mb-6 text-white text-4xl md:text-5xl">{tDict.common.notSureWhereToStart}</h2>
          </StaggerItem>
          <StaggerItem distance={12}>
            <p className="text-xl text-[var(--color-primary-100)] mb-10 max-w-[650px] mx-auto text-balance">
              {tDict.common.notSureWhereToStartDesc}
            </p>
          </StaggerItem>
          <StaggerItem distance={8} className="w-full sm:w-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <Button size="lg" className="w-full sm:w-auto px-10 bg-white text-[var(--color-primary-900)] hover:bg-[var(--color-offwhite)] group" asChild>
                <Link href="/contact">
                  {tDict.nav.bookConsultation}
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-[220ms] group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto px-10 border-white/30 text-white hover:bg-white/10 shadow-none" asChild>
                <a href="tel:9012071660">
                  <Phone className="w-4 h-4 mr-2" />
                  {tDict.common.callToday}
                </a>
              </Button>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </section>

    </main>
  )
}
