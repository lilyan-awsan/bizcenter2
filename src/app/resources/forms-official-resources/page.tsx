"use client"

import * as React from "react"
import Link from "next/link"
import { FileText, ExternalLink, ShieldCheck, AlertCircle } from "lucide-react"
import { BookConsultationButton } from "@/components/ui/book-consultation-button"
import { useLanguage } from "@/context/language-context"
import { getTranslation } from "@/lib/i18n/translations"

interface RegulatoryUpdate {
  title: { en: string; es: string; ar: string }
  tag: { en: string; es: string; ar: string }
  lastReviewed: { en: string; es: string; ar: string }
  content: { en: string; es: string; ar: string }
  link: string
  agency: { en: string; es: string; ar: string }
}

const REGULATORY_UPDATES_2026: RegulatoryUpdate[] = [
  {
    title: {
      en: "2026 IRS Form 1099-NEC Reporting Threshold",
      es: "Umbral de Reporte del Formulario IRS 1099-NEC 2026",
      ar: "الحد الأدنى لتقارير مصلحة الضرائب لنموذج 1099-NEC لعام 2026"
    },
    tag: {
      en: "IRS Tax Compliance",
      es: "Cumplimiento Fiscal IRS",
      ar: "الامتثال الضريبي الفيدرالي IRS"
    },
    lastReviewed: {
      en: "August 11, 2026",
      es: "11 de agosto de 2026",
      ar: "11 أغسطس 2026"
    },
    content: {
      en: "For payments made in 2026, IRS guidance states that the reporting threshold for certain nonemployee compensation payments is $2,000. (For payments made before 2026, the prior threshold was $600). The threshold is subject to inflation adjustments after 2026.",
      es: "Para los pagos realizados en 2026, la guía del IRS establece que el umbral de reporte para compensación a no empleados es de $2,000. (Para pagos anteriores a 2026, el umbral era de $600).",
      ar: "بالنسبة للمدفوعات الصادرة في عام 2026، تنص توجيهات مصلحة الضرائب الفيدرالية IRS على أن حد التقارير المطلوب لتعويضات غير الموظفين هو 2,000 دولار (مقارنة بـ 600 دولار سابقاً)."
    },
    link: "https://www.irs.gov",
    agency: {
      en: "Internal Revenue Service (IRS)",
      es: "Servicio de Impuestos Internos (IRS)",
      ar: "مصلحة الضرائب الداخلية الفيدرالية (IRS)"
    }
  },
  {
    title: {
      en: "Beneficial Ownership Information (BOI) Current Rules",
      es: "Reglas Actuales de Información sobre Propiedad Real (BOI)",
      ar: "القواعد الحالية لمعلومات ملكية المنفعة (BOI) - FinCEN"
    },
    tag: {
      en: "FinCEN Corporate Transparency",
      es: "Transparencia Corporativa FinCEN",
      ar: "الشفافية الشاملة للشركات FinCEN"
    },
    lastReviewed: {
      en: "August 11, 2026",
      es: "11 de agosto de 2026",
      ar: "11 أغسطس 2026"
    },
    content: {
      en: "FinCEN states that entities created in the United States and their beneficial owners are currently exempt from BOI reporting under the current rule. Certain entities formed under foreign law and registered to do business in a U.S. state or tribal jurisdiction may still meet the reporting-company definition, subject to exemptions.",
      es: "FinCEN establece que las entidades creadas en los EE. UU. y sus propietarios beneficiarios están exentos del reporte BOI bajo la norma actual.",
      ar: "تشير شبكة إنفاذ الجرائم المالية FinCEN إلى أن الكيانات المؤسسة في الولايات المتحدة مالكيها معفون حالياً من تقارير ملكية المنفعة BOI بموجب القاعدة الحالية."
    },
    link: "https://www.fincen.gov",
    agency: {
      en: "Financial Crimes Enforcement Network (FinCEN)",
      es: "Red de Control de Delitos Financieros (FinCEN)",
      ar: "شبكة إنفاذ الجرائم المالية الفيدرالية (FinCEN)"
    }
  }
]

const OFFICIAL_RESOURCE_CARDS = [
  {
    formNumber: "IRS Form SS-4",
    title: {
      en: "Application for Employer Identification Number (EIN)",
      es: "Solicitud de Número de Identificación del Empleador (EIN)",
      ar: "طلب الحصول على الرقم الضريبي الفيدرالي (EIN)"
    },
    description: {
      en: "Used to request a federal Employer Identification Number needed for opening business bank accounts, hiring employees, and tax filings.",
      es: "Se utiliza para solicitar el número EIN federal necesario para abrir cuentas bancarias empresariales y contrataciones.",
      ar: "يُستخدم لطلب الرقم الضريبي الفيدرالي المطلوب لفتح الحسابات البنكية التجارية للشركات والتوظيف."
    },
    agencyLink: "https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online",
    agencyName: {
      en: "IRS Official Portal",
      es: "Portal Oficial del IRS",
      ar: "البوابة الرسمية لـ IRS"
    }
  },
  {
    formNumber: "TN SOS Portal",
    title: {
      en: "Tennessee Secretary of State Business Services",
      es: "Servicios Empresariales de la Secretaría de Estado de Tennessee",
      ar: "خدمات الشركات بسكرتارية ولاية تينيسي"
    },
    description: {
      en: "Official portal for searching business name availability, registering LLCs or corporations, and filing annual business reports.",
      es: "Portal oficial para buscar disponibilidad de nombres, registrar LLCs o corporaciones y presentar informes anuales.",
      ar: "البوابة الرسمية للبحث عن أسماء الشركات المتاحة، تسجيل الشركات LLC، وتقديم التقارير السنوية."
    },
    agencyLink: "https://sos.tn.gov/business-services",
    agencyName: {
      en: "Tennessee SOS Portal",
      es: "Portal de la Secretaría de TN",
      ar: "بوابة ولاية تينيسي SOS"
    }
  },
  {
    formNumber: "USCIS Forms",
    title: {
      en: "USCIS Official Form Library",
      es: "Biblioteca Oficial de Formularios de USCIS",
      ar: "المكتبة الرسمية لنماذج الهجرة والجنسية USCIS"
    },
    description: {
      en: "Official repository of immigration forms, instructions, and fee schedules provided directly by the federal government.",
      es: "Repositorio oficial de formularios de inmigración, instrucciones y tarifas proporcionados directamente por el gobierno federal.",
      ar: "المستودع الرسمي لنماذج الهجرة والتعليمات وجدول الرسوم المقدمة مباشرة من الحكومة الفيدرالية."
    },
    agencyLink: "https://www.uscis.gov/forms/all-forms",
    agencyName: {
      en: "USCIS Official Portal",
      es: "Portal Oficial de USCIS",
      ar: "البوابة الرسمية لـ USCIS"
    }
  },
  {
    formNumber: "IRS Forms & Pubs",
    title: {
      en: "IRS Forms and Instructions Directory",
      es: "Directorio de Formularios e Instrucciones del IRS",
      ar: "دليل النماذج والتعليمات الفيدرالية للضرائب IRS"
    },
    description: {
      en: "Search and download federal tax forms, schedules, and official publication guides directly from the IRS.",
      es: "Busque y descargue formularios de impuestos federales, anexos y guías oficiales de publicaciones del IRS.",
      ar: "البحث وتحميل النماذج الضريبية الفيدرالية والتعليمات والإرشادات الرسمية مباشرة."
    },
    agencyLink: "https://www.irs.gov/forms-instructions",
    agencyName: {
      en: "IRS Official Portal",
      es: "Portal Oficial del IRS",
      ar: "البوابة الرسمية لـ IRS"
    }
  }
]

export default function FormsOfficialResourcesPage() {
  const { language } = useLanguage()
  const tDict = getTranslation(language)
  const isAr = language === "AR"
  const isEs = language === "ES"

  return (
    <main className="min-h-screen bg-[#F8F7F4] pt-[110px] pb-20 rtl:text-right">
      
      {/* Header */}
      <section className="bg-white border-b border-[var(--color-border)] py-12 md:py-16">
        <div className="container mx-auto px-6 max-w-[var(--container-xl)]">
          <div className="max-w-3xl rtl:text-right">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[var(--color-accent-600)] mb-3 block rtl:text-right">
              {isAr ? "مكتبة الموارد الرسمية" : isEs ? "BIBLIOTECA DE RECURSOS" : "RESOURCES LIBRARY"}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-primary-900)] mb-4 rtl:text-right">
              {isAr ? "النماذج والمصادر الرسمية" : isEs ? "Formularios y Recursos Oficiales" : "Forms & Official Resources"}
            </h1>
            <p className="text-lg text-[var(--color-slate)] leading-relaxed rtl:text-right">
              {isAr 
                ? "روابط ومعلومات موثوقة وموثقة للمصادر الحكومية والفيدرالية والمحلية، مقدمة للإرشاد والتثقيف الإداري." 
                : isEs 
                ? "Enlaces e información verificados de recursos gubernamentales oficiales." 
                : "Verified state, federal, and local resource links. Provided for educational guidance and official agency verification."}
            </p>
          </div>
        </div>
      </section>

      {/* Regulatory Verification Section */}
      <section className="container mx-auto px-6 max-w-[var(--container-xl)] pt-12">
        <div className="flex items-center gap-3 mb-6 rtl:flex-row-reverse rtl:justify-end">
          <h2 className="text-2xl font-bold text-[var(--color-primary-900)] rtl:text-right">
            {isAr ? "التحديثات والضوابط الحكومية الحالية (2026)" : isEs ? "Verificación Regulatoria Actual (2026)" : "Current Regulatory Verification (2026)"}
          </h2>
          <ShieldCheck className="w-6 h-6 text-[var(--color-accent-600)] shrink-0" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REGULATORY_UPDATES_2026.map((update, idx) => {
            const titleText = isAr ? update.title.ar : isEs ? update.title.es : update.title.en
            const tagText = isAr ? update.tag.ar : isEs ? update.tag.es : update.tag.en
            const dateText = isAr ? update.lastReviewed.ar : isEs ? update.lastReviewed.es : update.lastReviewed.en
            const contentText = isAr ? update.content.ar : isEs ? update.content.es : update.content.en

            return (
              <div key={idx} className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:border-[var(--color-accent-400)] transition-all rtl:text-right">
                <div className="flex items-center justify-between gap-4 mb-4 rtl:flex-row-reverse">
                  <span className="px-3 py-1 text-xs font-extrabold rounded-full bg-[var(--color-accent-50)] text-[var(--color-accent-600)] border border-[var(--color-accent-200)]">
                    {tagText}
                  </span>
                  <div className="text-xs text-[var(--color-slate)]">
                    {isAr ? `تاريخ المراجعة: ${dateText}` : `Reviewed: ${dateText}`}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[var(--color-charcoal)] mb-3 rtl:text-right">{titleText}</h3>
                <p className="text-sm text-[var(--color-slate)] leading-relaxed mb-6 rtl:text-right">{contentText}</p>

                <a 
                  href={update.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-[var(--color-primary-900)] hover:text-[var(--color-accent-600)] transition-colors rtl:flex-row-reverse"
                >
                  <span>{isAr ? "زيارة البوابة الحكومية الرسمية" : isEs ? "Visitar Portal Oficial" : "Visit Official Agency Site"}</span>
                  <ExternalLink className="w-4 h-4 ml-1.5 rtl:ml-0 rtl:mr-1.5" />
                </a>
              </div>
            )
          })}
        </div>
      </section>

      {/* Official Resource Cards */}
      <section className="container mx-auto px-6 max-w-[var(--container-xl)] py-12">
        <h2 className="text-2xl font-bold text-[var(--color-primary-900)] mb-8 rtl:text-right">
          {isAr ? "أدلة النماذج والروابط المباشرة" : isEs ? "Directorio de Formularios Directos" : "Official Direct Portals & Forms"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {OFFICIAL_RESOURCE_CARDS.map((card, idx) => {
            const titleText = isAr ? card.title.ar : isEs ? card.title.es : card.title.en
            const descText = isAr ? card.description.ar : isEs ? card.description.es : card.description.en
            const agencyText = isAr ? card.agencyName.ar : isEs ? card.agencyName.es : card.agencyName.en

            return (
              <div key={idx} className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:border-[var(--color-accent-400)] transition-all flex flex-col justify-between rtl:text-right">
                <div>
                  <div className="inline-block px-3 py-1 rounded bg-slate-100 text-slate-700 text-xs font-bold mb-4 rtl:text-right">
                    {card.formNumber}
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-charcoal)] mb-3 rtl:text-right">{titleText}</h3>
                  <p className="text-sm text-[var(--color-slate)] leading-relaxed mb-6 rtl:text-right">{descText}</p>
                </div>

                <div className="pt-4 border-t border-[var(--color-border)]">
                  <a 
                    href={card.agencyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full text-sm font-semibold text-[var(--color-primary-900)] hover:text-[var(--color-accent-600)] transition-colors rtl:flex-row-reverse"
                  >
                    <span>{agencyText}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </section>

    </main>
  )
}
