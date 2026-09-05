"use client"

import * as React from "react"
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
import { useLanguage } from "@/context/language-context"
import { getTranslation } from "@/lib/i18n/translations"

export default function NewToUsClientPage() {
  const { language } = useLanguage()
  const tDict = getTranslation(language)
  const isAr = language === 'AR'
  const isEs = language === 'ES'

  return (
    <main className="flex flex-col w-full relative">
      
      {/* HERO */}
      <div className="relative bg-[#F8F7F4] overflow-hidden flex flex-col pt-[120px] pb-[100px]">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-radial-[at_50%_50%] from-[var(--color-primary-200)]/30 to-transparent to-70% rounded-full blur-3xl opacity-50 pointer-events-none transform translate-x-1/4 -translate-y-1/4" />
        
        <div className="container mx-auto px-6 max-w-[var(--container-xl)] h-full flex flex-col lg:flex-row items-center gap-12 lg:gap-8 relative z-10">
          
          <StaggerContainer 
            className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left rtl:items-start rtl:text-right rtl:lg:items-start rtl:lg:text-right z-10"
            delayChildren={0.1}
          >
            <StaggerItem distance={8}>
              <span className="text-sm font-bold tracking-[0.15em] uppercase text-[var(--color-accent-500)] mb-4 flex items-center justify-center lg:justify-start gap-2">
                <Globe2 className="w-4 h-4" /> {tDict.services.newToUS.title}
              </span>
            </StaggerItem>

            <StaggerItem distance={16} className="mb-6 max-w-[650px]">
              <h1>{isAr ? "أهلاً بك.\nدعنا نساعدك للبدء بثقة طمأنينة." : isEs ? "Bienvenido.\nLe Ayudamos a Comenzar con Confianza." : "Welcome.\nLet's Help You Get Started With Confidence."}</h1>
            </StaggerItem>

            <StaggerItem distance={12} className="mb-10 max-w-[600px]">
              <p className="text-lg md:text-[20px] text-[var(--color-slate)] leading-relaxed text-balance">
                {tDict.services.newToUS.desc}
              </p>
            </StaggerItem>

            <StaggerItem distance={12} className="w-full sm:w-auto">
              <div className="flex flex-col sm:flex-row items-center gap-5 w-full">
                <Button size="lg" className="w-full sm:w-auto px-8 group" asChild>
                  <Link href="/contact">
                    {tDict.nav.bookConsultation}
                    <ArrowRight className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2 rtl:rotate-180 transition-transform duration-[220ms] group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 bg-white border-[var(--color-border-strong)] text-[var(--color-charcoal)] hover:bg-[var(--color-offwhite)] shadow-none" asChild>
                  <Link href="#downloads">
                    {isAr ? "تحميل قائمة التحضير" : isEs ? "Descargar Lista de Verificación" : "Download Checklist"}
                  </Link>
                </Button>
              </div>
            </StaggerItem>
          </StaggerContainer>

          <div className="w-full lg:w-[45%] flex justify-center lg:justify-end z-10 mt-8 lg:mt-0">
            <NewcomerHeroVisual />
          </div>

        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="container mx-auto px-6 max-w-[var(--container-xl)] py-[80px] lg:py-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 lg:gap-16 items-start">
          
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
                      <h2 className="text-2xl md:text-3xl m-0">{isAr ? "ليس من المتوقع أن تعرف كل شيء من البداية" : isEs ? "No Se Espera Que Lo Sepa Todo Al Principio" : "You're Not Expected To Know Everything"}</h2>
                    </div>
                  </StaggerItem>
                  <StaggerItem distance={12}>
                    <p className="text-[16px] text-[var(--color-slate)] leading-relaxed mb-6">
                      {isAr ? "الجميع يبدأ من نقطة ما. قد تبدو المعاملات الإدارية والشروط التجارية والمعاملات الرسمية معقدة ومربكة عندما تكون جديداً عليها." : isEs ? "Todos comienzan en algún lugar. Los sistemas administrativos y requisitos pueden parecer confusos cuando es nuevo." : "Everyone starts somewhere. Administrative systems, business requirements, and government forms can feel incredibly confusing when you are new to them."}
                    </p>
                  </StaggerItem>
                  <StaggerItem distance={12}>
                    <p className="text-[16px] text-[var(--color-slate)] leading-relaxed font-medium text-[var(--color-charcoal)]">
                      {isAr ? "مركز 'ذا سنتر' هنا لمساعدتك في تنظيم خطواتك خطوة بخطوة حتى لا تشعر أبداً أنك تخوض هذا الطريق بمفردك." : isEs ? "THE CENTER está aquí para ayudarle a organizar el proceso paso a paso para que nunca se sienta solo." : "THE CENTER is here to help organize the process step-by-step so you never feel like you're figuring it out alone."}
                    </p>
                  </StaggerItem>
                </StaggerContainer>
                <div className="w-full md:w-1/2 flex justify-center">
                  <NewcomerWelcomeVisual />
                </div>
              </div>
            </section>

            {/* Disclaimer Banner */}
            <StaggerContainer>
              <StaggerItem distance={12}>
                <div className="bg-[var(--color-accent-50)] rounded-2xl p-8 border border-[var(--color-accent-200)] flex flex-col md:flex-row gap-6 items-start md:items-center">
                  <div className="shrink-0 p-3 bg-white rounded-full shadow-sm">
                    <Info className="w-8 h-8 text-[var(--color-accent-600)]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[var(--color-charcoal)] mb-2">{tDict.common.regulatoryNoticeTitle}</h4>
                    <p className="text-[15px] text-[var(--color-slate)] leading-relaxed">
                      {tDict.footer.disclaimer}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>

            {/* FAQ */}
            <StaggerContainer>
              <StaggerItem distance={12}>
                <h2 className="mb-10 text-3xl">{tDict.common.faqTitle}</h2>
              </StaggerItem>
              <StaggerItem distance={12}>
                <SharedFaqAccordion category="New to the United States" />
              </StaggerItem>
            </StaggerContainer>

          </div>

          {/* SIDEBAR */}
          <aside className="hidden lg:flex flex-col gap-6 sticky top-[120px]">
            <div className="bg-white rounded-2xl p-6 border border-[var(--color-border)] shadow-sm flex flex-col gap-6">
              <div>
                <h3 className="font-semibold text-lg text-[var(--color-charcoal)] mb-2">{isAr ? "هل تحتاج إلى مساعدة؟" : isEs ? "¿Necesita Orientación?" : "Need Guidance?"}</h3>
                <p className="text-[14px] text-[var(--color-slate)] leading-relaxed">
                  {isAr ? "نحن هنا لمساعدتك في التنظيم. احجز لقاء استشاري أولي مجاني." : isEs ? "Estamos aquí para ayudarle a organizarse. Programe una reunión inicial gratuita." : "We are here to help you get organized. Schedule a free introductory meeting."}
                </p>
              </div>
              <Button size="lg" className="w-full group" asChild>
                <Link href="/contact">
                  {tDict.nav.bookConsultation}
                  <ArrowRight className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2 rtl:rotate-180 transition-transform duration-[220ms] group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </Link>
              </Button>
            </div>
          </aside>

        </div>
      </div>

      {/* FINAL CTA */}
      <section className="relative bg-[var(--color-primary-900)] py-[120px] w-full overflow-hidden text-center mt-auto">
        <StaggerContainer className="container relative z-10 mx-auto px-6 max-w-[900px] flex flex-col items-center">
          <StaggerItem distance={12}>
            <h2 className="mb-6 text-white text-4xl md:text-5xl">{isAr ? "دعنا نخطو الخطوة الأولى معاً" : isEs ? "Demos El Primer Paso Juntos" : "Let's Take The First Step Together"}</h2>
          </StaggerItem>
          <StaggerItem distance={12}>
            <p className="text-xl text-[var(--color-primary-100)] mb-10 max-w-[650px] mx-auto text-balance">
              {isAr ? "سواء كنت تؤسس مشروعاً، أو تنظم أوراقك، أو تحاول فهم الخطوات التالية، فإن 'ذا سنتر' هنا لتقديم الدعم الإداري المنظم." : isEs ? "Ya sea que esté iniciando un negocio u organizando trámites, THE CENTER está aquí para brindarle soporte administrativo organizado." : "Whether you're starting a business, organizing paperwork, or simply trying to understand your next steps, THE CENTER is here to provide organized administrative support."}
            </p>
          </StaggerItem>
          <StaggerItem distance={8} className="w-full sm:w-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <Button size="lg" className="w-full sm:w-auto px-10 bg-white text-[var(--color-primary-900)] hover:bg-[var(--color-offwhite)] group" asChild>
                <Link href="/contact">
                  {tDict.nav.bookConsultation}
                  <ArrowRight className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2 rtl:rotate-180 transition-transform duration-[220ms] group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </Link>
              </Button>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </section>

    </main>
  )
}
