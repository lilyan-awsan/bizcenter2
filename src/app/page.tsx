"use client"

import * as React from "react"
import Link from "next/link"
import { 
  Sparkles, Check, ArrowRight, 
  Rocket, Calculator, ClipboardList, FileText, Globe,
  Calendar, MessageSquare, ClipboardCheck, CheckCircle2,
  Phone, ArrowUpRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger"
import { RevealOnScroll } from "@/components/motion/reveal-on-scroll"
import { PremiumHeroVisual } from "@/components/ui/premium-hero-visual"
import { PremiumServiceCard } from "@/components/ui/premium-service-card"
import { AnimatedTimeline } from "@/components/ui/animated-timeline"
import { AmbientBackground } from "@/components/ui/ambient-background"
import { useSplash } from "@/components/providers/splash-provider"

export default function Home() {
  const { isFirstVisit } = useSplash()
  const baseDelay = isFirstVisit ? 3.0 : 0
  
  return (
    <main className="flex flex-col w-full bg-[#F8F7F4] overflow-hidden">
      
      {/* =========================================
          HERO SECTION (PREMIUM CINEMATIC V2)
      ========================================= */}
      <div className="relative min-h-[100svh] flex flex-col pt-16">
        
        <AmbientBackground intensity="medium" colorTheme="mixed" />
        
        {/* Cinematic Light Sweep (0.2s) */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-accent-400)] to-transparent opacity-[0.03] mix-blend-overlay pointer-events-none z-30 w-[200%]"
          initial={{ x: "-100%" }}
          animate={{ x: "50%" }}
          transition={{ duration: 2, delay: baseDelay + 0.2, ease: "easeInOut" }}
        />

        <section className="relative flex-1 flex flex-col pt-8 md:pt-16 pb-20 z-10">
          <div className="container mx-auto px-6 max-w-[var(--container-xl)] h-full flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
            
            {/* LEFT 50%: Content */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: baseDelay + 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="mb-8"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-white/40 shadow-sm glass">
                  <Sparkles className="w-4 h-4 text-[var(--color-accent-600)]" />
                  <span className="text-sm font-bold tracking-[0.15em] uppercase text-[var(--color-charcoal)]">
                    Professional Administrative Support
                  </span>
                </div>
              </motion.div>

              <div className="mb-8 max-w-[700px] overflow-hidden">
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: baseDelay + 1.0, ease: [0.22, 1, 0.36, 1] }}
                  className="text-[52px] lg:text-[64px] leading-[1.1] tracking-tight"
                >
                  <span className="text-[var(--color-charcoal)] block overflow-hidden">
                    <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: baseDelay + 1.0, ease: [0.22, 1, 0.36, 1] }} className="block">Professional Support.</motion.span>
                  </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary-600)] to-[var(--color-accent-600)] block overflow-hidden pb-2">
                    <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: baseDelay + 1.1, ease: [0.22, 1, 0.36, 1] }} className="block">Clear Guidance.</motion.span>
                  </span>
                  <span className="text-[var(--color-charcoal)] block overflow-hidden">
                    <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: baseDelay + 1.2, ease: [0.22, 1, 0.36, 1] }} className="block">A Better Way Forward.</motion.span>
                  </span>
                </motion.h1>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: baseDelay + 1.3, ease: [0.22, 1, 0.36, 1] }}
                className="mb-12 max-w-[600px]"
              >
                <p className="text-xl md:text-[22px] text-[var(--color-slate)] leading-relaxed text-balance">
                  THE CENTER provides premium support for entrepreneurs, small businesses, and individuals navigating startup processes, bookkeeping, and applications.
                </p>
              </motion.div>

              <div className="w-full sm:w-auto mb-16 flex flex-col sm:flex-row items-center gap-5">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: baseDelay + 1.5, type: "spring", stiffness: 200, damping: 15 }}
                  className="w-full sm:w-auto"
                >
                  <Button size="lg" className="w-full px-8 h-14 text-base rounded-[12px] group relative overflow-hidden bg-[var(--color-primary-900)] hover:bg-[var(--color-primary-800)] text-white shadow-[0_4px_20px_rgba(22,50,79,0.3)] hover:shadow-[0_8px_30px_rgba(22,50,79,0.4)] transition-all duration-300" asChild>
                    <Link href="/contact">
                      <span className="relative z-10 flex items-center">
                        Book a Free Consultation
                        <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1.5" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                    </Link>
                  </Button>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: baseDelay + 1.6, type: "spring", stiffness: 200, damping: 15 }}
                  className="w-full sm:w-auto"
                >
                  <Button variant="outline" size="lg" className="w-full px-8 h-14 text-base rounded-[12px] border-[var(--color-border-strong)] text-[var(--color-slate)] hover:text-[var(--color-charcoal)] hover:bg-white/50 glass transition-all duration-300" asChild>
                    <Link href="/services">
                      Explore Our Services
                    </Link>
                  </Button>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: baseDelay + 1.8 }}
                className="w-full"
              >
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 pt-8 border-t border-[var(--color-border)]/50">
                  {["Trusted Support", "Practical Guidance", "Bilingual Experts"].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-[var(--color-success)]/10 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 text-[var(--color-success)]" />
                      </div>
                      <span className="text-[15px] font-medium text-[var(--color-slate)]">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* RIGHT 50%: Layered Visual */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <PremiumHeroVisual baseDelay={baseDelay} />
            </div>
          </div>
        </section>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: baseDelay + 3.0 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none hidden md:flex"
        >
          <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-slate)]">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[var(--color-border-strong)] to-transparent relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full h-1/2 bg-[var(--color-primary-600)]"
              animate={{ y: ["-100%", "200%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

      </div>

      {/* =========================================
          SECTION 1: PREMIUM SERVICES
      ========================================= */}
      <section className="bg-white py-32 w-full relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.02)]">
        <StaggerContainer className="container mx-auto px-6 max-w-[var(--container-xl)]">
          
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-20">
            <StaggerItem distance={8}>
              <span className="inline-block py-1.5 px-4 rounded-full bg-[var(--color-accent-50)] text-sm font-bold tracking-[0.15em] uppercase text-[var(--color-accent-600)] mb-6 border border-[var(--color-accent-100)]">
                Our Services
              </span>
            </StaggerItem>
            <StaggerItem distance={12}>
              <h2 className="text-4xl md:text-5xl mb-6">How We Can Help</h2>
            </StaggerItem>
            <StaggerItem distance={12}>
              <p className="text-[20px] text-[var(--color-slate)] max-w-[700px] text-balance">
                Every business has different needs. We offer practical administrative support throughout every stage of your journey.
              </p>
            </StaggerItem>
          </div>

          {/* Premium Glass Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Business Startup", description: "From idea to organized next steps. Setup your entity correctly.", icon: <Rocket />, href: "/services/business-startup" },
              { title: "Bookkeeping", description: "Keep your business organized and financially clear month over month.", icon: <Calculator />, href: "/services/bookkeeping" },
              { title: "Business Support", description: "Help for everyday business needs, licenses, and ongoing compliance.", icon: <ClipboardList />, href: "/services/business-support" },
              { title: "Applications", description: "Organize information and efficiently process administrative forms.", icon: <FileText />, href: "/services/applications-administrative-support" },
              { title: "New to the U.S.", description: "A clear starting point for essential administrative processes.", icon: <Globe />, href: "/services/new-to-the-united-states" },
            ].map((service, index) => (
              <StaggerItem key={index} distance={20} delay={index * 0.1} className="h-full">
                <PremiumServiceCard {...service} delay={index * 0.1} />
              </StaggerItem>
            ))}
          </div>

        </StaggerContainer>
      </section>

      {/* =========================================
          SECTION 2: HOW IT WORKS (Animated Timeline)
      ========================================= */}
      <section className="bg-[#F8F7F4] py-32 w-full relative overflow-hidden">
        
        {/* Subtle mesh overlay */}
        <div className="absolute inset-0 opacity-[0.2] mix-blend-multiply bg-[radial-gradient(ellipse_at_bottom_right,var(--color-primary-100),transparent_40%),radial-gradient(ellipse_at_top_left,var(--color-accent-100),transparent_40%)] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-[var(--container-xl)] relative z-10">
          
          <StaggerContainer className="flex flex-col items-center text-center mb-16">
            <StaggerItem distance={8}>
              <span className="inline-block py-1.5 px-4 rounded-full bg-white text-sm font-bold tracking-[0.15em] uppercase text-[var(--color-primary-600)] mb-6 border border-[var(--color-border)] shadow-sm">
                The Process
              </span>
            </StaggerItem>
            <StaggerItem distance={12}>
              <h2 className="text-4xl md:text-5xl mb-6">A Clear Path Forward</h2>
            </StaggerItem>
            <StaggerItem distance={12}>
              <p className="text-[20px] text-[var(--color-slate)] max-w-[650px] text-balance mx-auto">
                Working with THE CENTER is straightforward and transparent. We focus on clear steps and practical results.
              </p>
            </StaggerItem>
          </StaggerContainer>

          {/* Animated SVG Timeline Component */}
          <AnimatedTimeline 
            nodes={[
              { step: "01", title: "Book a Consultation", desc: "Schedule a time that works for you. We provide a welcoming environment to discuss your situation.", icon: <Calendar /> },
              { step: "02", title: "Tell Us Your Needs", desc: "We'll actively listen to your specific situation and gather all necessary context.", icon: <MessageSquare /> },
              { step: "03", title: "Receive Guidance", desc: "Get a clear plan and understanding of the administrative steps required for your success.", icon: <ClipboardCheck /> },
              { step: "04", title: "Move Forward", desc: "Proceed with confidence. We provide ongoing support as you execute your plan.", icon: <CheckCircle2 /> },
            ]}
          />

        </div>
      </section>

      {/* =========================================
          SECTION 3: IMMERSIVE CTA
      ========================================= */}
      <section className="relative bg-[var(--color-primary-950)] py-40 w-full overflow-hidden text-center">
        
        {/* Animated ambient background specialized for dark mode */}
        <AmbientBackground intensity="strong" colorTheme="accent" className="opacity-70" />
        
        {/* Deep vignette shadow */}
        <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(16,33,56,1)] pointer-events-none" />

        <RevealOnScroll animation="fade" className="container relative z-10 mx-auto px-6 max-w-[800px] flex flex-col items-center">
          
          <div className="w-20 h-20 rounded-2xl bg-white/10 glass-dark border border-white/20 flex items-center justify-center mb-10 shadow-[0_0_40px_rgba(219,161,62,0.15)]">
            <ArrowUpRight className="w-10 h-10 text-[var(--color-accent-400)]" />
          </div>

          <h2 className="mb-8 text-white text-5xl md:text-6xl tracking-tight">Ready to Take the Next Step?</h2>
          
          <p className="text-xl text-[var(--color-primary-100)] mb-12 max-w-[600px] mx-auto text-balance font-light">
            Schedule a free consultation today to discuss your business or administrative needs. We are here to help you move forward with clarity.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
            <Button size="lg" className="w-full sm:w-auto px-10 h-16 text-[17px] rounded-[14px] bg-[var(--color-accent-500)] hover:bg-[var(--color-accent-400)] text-white shadow-[0_0_30px_rgba(219,161,62,0.3)] hover:shadow-[0_0_50px_rgba(219,161,62,0.5)] transition-all duration-300 group" asChild>
              <Link href="/contact">
                Book a Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto px-10 h-16 text-[17px] rounded-[14px] border-white/20 text-white hover:bg-white/10 hover:border-white/40 glass-dark transition-all duration-300" asChild>
              <a href="tel:9012071660">
                <Phone className="w-5 h-5 mr-3 text-[var(--color-accent-400)]" />
                Call (901) 207-1660
              </a>
            </Button>
          </div>
        </RevealOnScroll>
      </section>

    </main>
  )
}
