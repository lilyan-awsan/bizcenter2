"use client"

import * as React from "react"
import Link from "next/link"
import { 
  Sparkles, Check, ArrowRight, 
  Rocket, Calculator, ClipboardList, FileText, Globe,
  Calendar, MessageSquare, ClipboardCheck, CheckCircle2,
  Phone, ArrowUpRight, Target, ShieldCheck
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
    <main className="flex flex-col w-full bg-[var(--color-offwhite)] overflow-hidden">
      
      {/* =========================================
          HERO SECTION (LOGO THEME + HIGH-RES PHOTO)
      ========================================= */}
      <div className="relative min-h-[100svh] flex flex-col pt-16 border-b border-[var(--future-line)]">
        
        <AmbientBackground intensity="medium" colorTheme="mixed" />
        
        {/* Light Sweep */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-accent-400)] to-transparent opacity-[0.05] mix-blend-overlay pointer-events-none z-30 w-[200%]"
          initial={{ x: "-100%" }}
          animate={{ x: "50%" }}
          transition={{ duration: 2.2, delay: baseDelay + 0.2, ease: "easeInOut" }}
        />

        <section className="relative flex-1 flex flex-col pt-10 md:pt-20 pb-20 z-10">
          <div className="container mx-auto px-6 max-w-[var(--container-xl)] h-full flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
            
            {/* LEFT 50%: Content */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: baseDelay + 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="mb-8"
              >
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-[var(--future-line)] shadow-soft-elevation">
                  <Target className="w-4 h-4 text-[var(--color-accent-500)]" />
                  <span className="text-xs font-extrabold tracking-[0.15em] uppercase text-[var(--color-primary-900)]">
                    Professional Administrative & Business Support
                  </span>
                </div>
              </motion.div>

              <div className="mb-8 max-w-[700px]">
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: baseDelay + 1.0, ease: [0.22, 1, 0.36, 1] }}
                  className="text-[48px] sm:text-[56px] lg:text-[64px] font-extrabold text-[var(--color-primary-900)] leading-[1.08] tracking-tight"
                >
                  Clear Guidance. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent-500)] via-[var(--color-accent-600)] to-[var(--color-primary-900)]">
                    Practical Results.
                  </span> <br />
                  A Better Way Forward.
                </motion.h1>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: baseDelay + 1.3, ease: [0.22, 1, 0.36, 1] }}
                className="mb-10 max-w-[600px]"
              >
                <p className="text-xl md:text-[22px] text-[var(--color-slate)] leading-relaxed font-normal text-balance">
                  THE CENTER provides trusted support for entrepreneurs, business owners, and individuals navigating startup processes, bookkeeping, and application filings.
                </p>
              </motion.div>

              <div className="w-full sm:w-auto mb-14 flex flex-col sm:flex-row items-center gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: baseDelay + 1.5, type: "spring", stiffness: 200 }}
                  className="w-full sm:w-auto"
                >
                  <Button size="lg" className="w-full px-8 h-14 text-base rounded-xl bg-[var(--color-accent-500)] hover:bg-[var(--color-accent-600)] text-white shadow-red-glow hover:shadow-[0_0_35px_rgba(226,6,19,0.35)] transition-all duration-300 group" asChild>
                    <Link href="/contact">
                      <span className="flex items-center">
                        Book a Consultation
                        <ArrowRight className="w-5 h-5 ml-2.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                      </span>
                    </Link>
                  </Button>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: baseDelay + 1.6, type: "spring", stiffness: 200 }}
                  className="w-full sm:w-auto"
                >
                  <Button variant="outline" size="lg" className="w-full px-8 h-14 text-base rounded-xl border-[var(--future-line)] text-[var(--color-primary-900)] hover:bg-white transition-all duration-300 shadow-soft-elevation" asChild>
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
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 pt-8 border-t border-[var(--future-line)]">
                  {["Trusted Support", "Practical Guidance", "Bilingual Experts"].map((item, index) => (
                    <div key={index} className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-[var(--color-accent-50)] border border-[var(--color-accent-200)] flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 text-[var(--color-accent-500)]" />
                      </div>
                      <span className="text-[15px] font-bold text-[var(--color-primary-900)]">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* RIGHT 50%: Hero Photo Visual */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <PremiumHeroVisual baseDelay={baseDelay} />
            </div>
          </div>
        </section>

      </div>

      {/* =========================================
          SECTION 1: SERVICES WITH PHOTOGRAPHY
      ========================================= */}
      <section className="bg-white py-32 w-full relative z-20 border-b border-[var(--future-line)]">
        <StaggerContainer className="container mx-auto px-6 max-w-[var(--container-xl)]">
          
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-20">
            <StaggerItem distance={8}>
              <span className="inline-block py-1.5 px-4 rounded-full bg-[var(--color-accent-50)] border border-[var(--color-accent-200)] text-xs font-extrabold tracking-[0.15em] uppercase text-[var(--color-accent-500)] mb-6 shadow-sm">
                Our Core Services
              </span>
            </StaggerItem>
            <StaggerItem distance={12}>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-primary-900)] mb-6">Designed for Your Success</h2>
            </StaggerItem>
            <StaggerItem distance={12}>
              <p className="text-[20px] text-[var(--color-slate)] max-w-[720px] text-balance font-normal">
                Every business and personal process requires unique attention. We offer practical administrative support tailored to every stage.
              </p>
            </StaggerItem>
          </div>

          {/* Service Photo Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Business Startup", 
                description: "From idea to organized next steps. Setup your entity correctly with complete administrative confidence.", 
                icon: <Rocket />, 
                href: "/services/business-startup",
                imageSrc: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
              },
              { 
                title: "Bookkeeping", 
                description: "Keep your financial records organized, clear, and ready month over month.", 
                icon: <Calculator />, 
                href: "/services/bookkeeping",
                imageSrc: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80"
              },
              { 
                title: "Business Support", 
                description: "Ongoing support for everyday business needs, filings, licensing, and document organization.", 
                icon: <ClipboardList />, 
                href: "/services/business-support",
                imageSrc: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80"
              },
              { 
                title: "Applications & Admin", 
                description: "Organize information and efficiently prepare administrative applications with precision.", 
                icon: <FileText />, 
                href: "/services/applications-administrative-support",
                imageSrc: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80"
              },
              { 
                title: "New to the U.S.", 
                description: "A clear starting point for administrative steps, document orientation, and local setup.", 
                icon: <Globe />, 
                href: "/services/new-to-the-united-states",
                imageSrc: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80"
              },
            ].map((service, index) => (
              <StaggerItem key={index} distance={20} delay={index * 0.1} className="h-full">
                <PremiumServiceCard {...service} />
              </StaggerItem>
            ))}
          </div>

        </StaggerContainer>
      </section>

      {/* =========================================
          SECTION 2: HOW IT WORKS (Animated Timeline)
      ========================================= */}
      <section className="bg-[var(--color-offwhite)] py-32 w-full relative overflow-hidden border-b border-[var(--future-line)]">
        
        <div className="container mx-auto px-6 max-w-[var(--container-xl)] relative z-10">
          
          <StaggerContainer className="flex flex-col items-center text-center mb-16">
            <StaggerItem distance={8}>
              <span className="inline-block py-1.5 px-4 rounded-full bg-white text-xs font-extrabold tracking-[0.15em] uppercase text-[var(--color-primary-900)] mb-6 border border-[var(--future-line)] shadow-soft-elevation">
                Working Together
              </span>
            </StaggerItem>
            <StaggerItem distance={12}>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-primary-900)] mb-6">A Clear Path Forward</h2>
            </StaggerItem>
            <StaggerItem distance={12}>
              <p className="text-[20px] text-[var(--color-slate)] max-w-[650px] text-balance mx-auto font-normal">
                Working with THE CENTER is straightforward and transparent. We focus on clear steps and practical results.
              </p>
            </StaggerItem>
          </StaggerContainer>

          {/* Animated Timeline */}
          <AnimatedTimeline 
            nodes={[
              { step: "01", title: "Book a Consultation", desc: "Schedule a convenient consultation. We provide a welcoming environment to discuss your exact situation.", icon: <Calendar /> },
              { step: "02", title: "Share Your Goals", desc: "We listen attentively to your specific needs and gather all necessary documentation.", icon: <MessageSquare /> },
              { step: "03", title: "Receive Customized Plan", desc: "Get a clear step-by-step roadmap tailored to your administrative or business objectives.", icon: <ClipboardCheck /> },
              { step: "04", title: "Execute with Confidence", desc: "Proceed forward smoothly with continuous assistance and expert organization.", icon: <CheckCircle2 /> },
            ]}
          />

        </div>
      </section>

      {/* =========================================
          SECTION 3: IMMERSIVE DARK CTA
      ========================================= */}
      <section className="relative bg-[var(--color-primary-950)] py-36 w-full overflow-hidden text-center">
        
        <AmbientBackground intensity="strong" colorTheme="accent" className="opacity-60" />
        
        <RevealOnScroll animation="fade" className="container relative z-10 mx-auto px-6 max-w-[800px] flex flex-col items-center">
          
          <div className="w-20 h-20 rounded-2xl bg-[var(--color-accent-500)] flex items-center justify-center mb-8 shadow-red-glow">
            <Target className="w-10 h-10 text-white" />
          </div>

          <h2 className="mb-6 text-white text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">Ready to Take the Next Step?</h2>
          
          <p className="text-xl text-[var(--color-primary-100)] mb-12 max-w-[620px] mx-auto text-balance font-light leading-relaxed">
            Schedule a consultation today to discuss your business or administrative needs. We are here to help you move forward with clarity and speed.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full">
            <Button size="lg" className="w-full sm:w-auto px-10 h-16 text-[17px] rounded-xl bg-[var(--color-accent-500)] hover:bg-[var(--color-accent-600)] text-white shadow-red-glow hover:shadow-[0_0_40px_rgba(226,6,19,0.45)] transition-all duration-300 group" asChild>
              <Link href="/contact">
                Book a Consultation
                <ArrowRight className="w-5 h-5 ml-2.5 transition-transform duration-300 group-hover:translate-x-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto px-10 h-16 text-[17px] rounded-xl border-white/20 text-white hover:bg-white/10 glass-dark transition-all duration-300" asChild>
              <a href="tel:9012071660">
                <Phone className="w-5 h-5 mr-3 text-[var(--color-accent-500)]" />
                Call (901) 207-1660
              </a>
            </Button>
          </div>
        </RevealOnScroll>
      </section>

    </main>
  )
}

