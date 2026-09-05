"use client"

import * as React from "react"
import Link from "next/link"
import { CheckSquare, Printer, Download, Phone, ArrowRight, ShieldAlert } from "lucide-react"
import { BookConsultationButton } from "@/components/ui/book-consultation-button"
import { useLanguage } from "@/context/language-context"
import { getTranslation } from "@/lib/i18n/translations"

interface ChecklistGroup {
  category: { en: string; es: string; ar: string }
  description: { en: string; es: string; ar: string }
  items: { en: string; es: string; ar: string }[]
}

const CHECKLIST_GROUPS: ChecklistGroup[] = [
  {
    category: {
      en: "Personal Identification",
      es: "Identificación Personal",
      ar: "إثبات الهوية الشخصية"
    },
    description: {
      en: "Standard identification required for most appointments and filings.",
      es: "Identificación estándar requerida para la mayoría de citas y trámites.",
      ar: "إثبات الهوية الأساسي المطلوب لمعظم المعاملات والمواعيد."
    },
    items: [
      {
        en: "Valid government-issued photo identification (Driver's License, Passport, State ID)",
        es: "Identificación oficial válida con fotografía (Licencia de conducir, Pasaporte, ID del Estado)",
        ar: "هوية شخصية رسمية سارية بها صورة (رخصة قيادة، جواز سفر، أو هوية الولاية)"
      },
      {
        en: "Secondary proof of address (utility bill, bank statement, or lease agreement)",
        es: "Comprobante secundario de domicilio (factura de servicios, estado de cuenta bancario o contrato de arrendamiento)",
        ar: "إثبات ثانوي للعنوان (فاتورة خدمات، كشف حساب بنكي، أو عقد إيجار)"
      },
      {
        en: "SSN or ITIN confirmation (if applicable to the requested service)",
        es: "Confirmación de SSN o ITIN (si aplica al servicio solicitado)",
        ar: "تأكيد رقم الضمان الاجتماعي SSN أو الرقم الضريبي ITIN (إذا كان مطلوباً)"
      },
      {
        en: "Written list of questions or specific topics you want to discuss",
        es: "Lista escrita de preguntas o temas específicos que desea discutir",
        ar: "قائمة مكتوبة بالأسئلة أو المواضيع المحددة التي ترغب في مناقشتها"
      }
    ]
  },
  {
    category: {
      en: "Starting a Business",
      es: "Creación de Empresa",
      ar: "تأسيس مشروع تجاري"
    },
    description: {
      en: "Gather these items when preparing to form or register a new business entity.",
      es: "Reúna estos elementos al prepararse para registrar una nueva entidad empresarial.",
      ar: "اجمع هذه المستندات عند التحضير لتأسيس أو تسجيل شركة جديدة."
    },
    items: [
      {
        en: "Proposed business name ideas and 2-3 backup names",
        es: "Ideas de nombres propuestos para el negocio y 2 o 3 nombres alternativos",
        ar: "الأشكال والاقتراحات المقترحة لاسم التجاري مع 2-3 أسماء بديلة"
      },
      {
        en: "Intended physical address and mailing address for the business",
        es: "Dirección física y dirección postal previstan para el negocio",
        ar: "العنوان الفعلي والموقع البريدي المخصص للشركة"
      },
      {
        en: "Full legal names, contact details, and ownership percentages for all partners/owners",
        es: "Nombres legales completos, datos de contacto y porcentajes de propiedad de los socios",
        ar: "الأسماء القانونية الكاملة، بيانات الاتصال، ونسب الملكية لجميع الشركاء"
      },
      {
        en: "EIN (Employer Identification Number), if already issued",
        es: "EIN (Número de Identificación del Empleador), si ya fue emitido",
        ar: "الرقم الضريبي الفيدرالي (EIN) في حال استخراجه سابقاً"
      },
      {
        en: "Existing business formation documents or licenses (if already registered)",
        es: "Documentos de formación o licencias existentes (si ya está registrado)",
        ar: "مستندات تأسيس الشركات أو التراخيص الحالية (إن وجدت)"
      },
      {
        en: "Outline of primary business activities and services",
        es: "Resumen de las actividades y servicios principales de la empresa",
        ar: "ملخص للأنشطة والخدمات التجارية الرئيسية للشركة"
      }
    ]
  },
  {
    category: {
      en: "Bookkeeping & Business Records",
      es: "Contabilidad y Registros Comerciales",
      ar: "مسك الدفاتر والسجلات المالية"
    },
    description: {
      en: "Bring these documents for monthly bookkeeping setup or cleanup services.",
      es: "Traiga estos documentos para la configuración o limpieza de contabilidad mensual.",
      ar: "أحضر هذه المستندات لإعداد الدفاتر المحاسبية الشهرية أو تنظيم الحسابات القديمة."
    },
    items: [
      {
        en: "Business bank account statements (last 3-12 months)",
        es: "Estados de cuenta bancarios de la empresa (últimos 3 a 12 meses)",
        ar: "كشوف الحسابات البنكية الخاصة بالشركة (لآخر 3 إلى 12 شهراً)"
      },
      {
        en: "Business credit card statements",
        es: "Estados de cuenta de tarjetas de crédito comerciales",
        ar: "كشوف بطاقات الائتمان الخاصة بالشركة"
      },
      {
        en: "Sales reports, deposit records, or merchant processing statements",
        es: "Reportes de ventas, registros de depósitos o estados de procesamiento de pagos",
        ar: "تقارير المبيعات، إيصالات الإيداع، أو كشوف ماكينات الدفع الإلكتروني"
      },
      {
        en: "Receipts for business expenses and vendor invoices",
        es: "Recibos de gastos comerciales y facturas de proveedores",
        ar: "إيصالات الفواتير والمصروفات التجارية وفواتير الموردين"
      },
      {
        en: "Payroll summaries or 1099 payment records (if applicable)",
        es: "Resúmenes de nómina o registros de pagos 1099 (si aplica)",
        ar: "ملخصات الرواتب أو سجلات مدفوعات نموذج 1099 (إن وجدت)"
      }
    ]
  },
  {
    category: {
      en: "Applications, Forms & Administrative Filings",
      es: "Solicitudes, Formularios y Trámites Administrativos",
      ar: "الطلبات والنماذج والمعاملات الإدارية"
    },
    description: {
      en: "Required when requesting help with specific paperwork or agency notices.",
      es: "Requerido al solicitar ayuda con trámites específicos o avisos de agencias.",
      ar: "مطلوبة عند طلب المساعدة في تنظيم المعاملات أو الإشعارات الحكومية."
    },
    items: [
      {
        en: "The exact application form, notice, or letter you need help organizing",
        es: "El formulario, aviso o carta exacta con la que necesita ayuda",
        ar: "نموذج الطلب أو الإشعار أو الخطاب الذي تحتاج مساعدة في تنظيمه"
      },
      {
        en: "Official instructions provided by the issuing agency",
        es: "Instrucciones oficiales proporcionadas por la agencia emisora",
        ar: "التعليمات الرسمية المرفقة من الجهة الحكومية المصدرة"
      },
      {
        en: "Reference number, account number, or case confirmation details",
        es: "Número de referencia, número de cuenta o detalles de confirmación",
        ar: "رقم المرجعية، رقم الحساب، أو تفاصيل تأكيد المعاملة"
      },
      {
        en: "Copies of previously submitted paperwork related to this request",
        es: "Copias de trámites enviados anteriormente relacionados con esta solicitud",
        ar: "نسخ من المعاملات والمستندات المقدمة سابقاً ذات الصلة"
      }
    ]
  },
  {
    category: {
      en: "New to the United States",
      es: "Nuevos en los Estados Unidos",
      ar: "القادمون الجدد إلى الولايات المتحدة"
    },
    description: {
      en: "Essential orientation and administrative items for newcomers.",
      es: "Elementos esenciales de orientación y administración para recién llegados.",
      ar: "المستندات الأساسية والتوجيه الإداري الأولي للواصلين الجدد."
    },
    items: [
      {
        en: "Government-issued passport or identification documents",
        es: "Pasaporte o documentos de identificación emitidos por el gobierno",
        ar: "جواز السفر الحكومي أو وثائق إثبات الشخصية الرسمية"
      },
      {
        en: "Letters, forms, or notices that need clear explanation",
        es: "Cartas, formularios o avisos que requieran una explicación clara",
        ar: "الخطابات أو النماذج أو الإشعارات الرسمية التي تحتاج إلى توضيح"
      },
      {
        en: "Documents showing current local residence or mailing address",
        es: "Documentos que demuestren su residencia local o dirección postal",
        ar: "المستندات التي تثبت عنوان السكن المحلي الحالي أو العنوان البريدي"
      }
    ]
  }
]

export default function DocumentChecklistPage() {
  const { language } = useLanguage()
  const tDict = getTranslation(language)
  const isAr = language === "AR"
  const isEs = language === "ES"

  return (
    <main className="min-h-screen bg-[#F8F7F4] pt-[110px] pb-20 rtl:text-right">
      
      {/* Header Banner */}
      <section className="bg-white border-b border-[var(--color-border)] py-12 md:py-16">
        <div className="container mx-auto px-6 max-w-[var(--container-xl)]">
          <div className="max-w-3xl rtl:text-right">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[var(--color-accent-600)] mb-3 block rtl:text-right">
              {isAr ? "مكتبة الموارد" : isEs ? "BIBLIOTECA DE RECURSOS" : "RESOURCES LIBRARY"}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-primary-900)] mb-4 rtl:text-right">
              {isAr ? "قائمة المستندات المطلوبة" : isEs ? "Lista de Documentos" : "Document Checklist"}
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-slate)] leading-relaxed rtl:text-right">
              {isAr 
                ? "قائمة واحدة تنظيمية لموعد أكثر إنجازاً. راجع المستندات المطلوبة قبل زيارتك لنساعدك على المضي قدماً بكفاءة." 
                : isEs 
                ? "Una lista de verificación. Una cita más organizada. Revise los documentos antes de su visita." 
                : "One Checklist. A More Organized Appointment. Review what to gather before your visit so we can help you move forward efficiently."}
            </p>

            <div className="mt-8 flex flex-wrap gap-4 items-center rtl:justify-end">
              <BookConsultationButton size="lg" className="px-8 bg-[var(--color-accent-500)] text-white hover:bg-[var(--color-accent-600)]" />
              <a 
                href="tel:9012071660"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[var(--color-border-strong)] font-semibold text-[var(--color-primary-900)] hover:bg-slate-50 transition-colors rtl:flex-row-reverse"
              >
                <Phone className="w-4 h-4 text-[var(--color-accent-600)]" />
                <span>{isAr ? "اتصل بنا: 1660-207 (901)" : isEs ? "Llamar (901) 207-1660" : "Call (901) 207-1660"}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Banner */}
      <section className="container mx-auto px-6 max-w-[var(--container-xl)] pt-8">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 md:p-6 flex items-start gap-4 text-amber-900 rtl:flex-row-reverse rtl:text-right">
          <ShieldAlert className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-sm leading-relaxed rtl:text-right">
            <strong className="font-bold block mb-1">
              {isAr ? "تحذير الخصوصية والأمان:" : isEs ? "Advertencia de Privacidad y Seguridad:" : "Privacy & Security Warning:"}
            </strong>
            {isAr 
              ? "يرجى عدم إرسال المعرفات الشخصية الحساسة (مثل أرقام الضمان الاجتماعي الكاملة SSN، أرقام ITIN، كلمة مرور البنك، أو أرقام الهجرة) عبر البريد الإلكتروني. يرجى إحضار المستندات الأصلية أو المحفوظة عند زيارة مكتبنا." 
              : isEs 
              ? "No envíe identificadores personales confidenciales (como SSN, ITIN o contraseñas bancarias) por correo electrónico. Traiga sus documentos oficiales a su cita." 
              : "Please do not send sensitive personal identifiers (such as full SSNs, ITINs, banking passwords, or immigration document numbers) over email or general web forms. Bring your official physical or saved documents to your consultation at our office."}
          </div>
        </div>
      </section>

      {/* Checklist Grid */}
      <section className="container mx-auto px-6 max-w-[var(--container-xl)] py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CHECKLIST_GROUPS.map((group, idx) => {
            const catTitle = isAr ? group.category.ar : isEs ? group.category.es : group.category.en
            const catDesc = isAr ? group.description.ar : isEs ? group.description.es : group.description.en

            return (
              <div key={idx} className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:border-[var(--color-accent-400)] transition-all rtl:text-right">
                <div className="flex items-center gap-3 mb-3 rtl:flex-row-reverse rtl:justify-end">
                  <h2 className="text-2xl font-bold text-[var(--color-primary-900)] rtl:text-right">{catTitle}</h2>
                  <CheckSquare className="w-6 h-6 text-[var(--color-accent-600)] shrink-0" />
                </div>
                <p className="text-sm text-[var(--color-slate)] mb-6 rtl:text-right">{catDesc}</p>

                <ul className="space-y-3 border-t border-[var(--color-border)] pt-6">
                  {group.items.map((item, itemIdx) => {
                    const itemText = isAr ? item.ar : isEs ? item.es : item.en
                    return (
                      <li key={itemIdx} className="flex items-start gap-3 text-[15px] text-[var(--color-charcoal)] leading-relaxed rtl:flex-row-reverse rtl:text-right">
                        <span className="w-2 h-2 rounded-full bg-[var(--color-accent-500)] mt-2 shrink-0" />
                        <span className="rtl:text-right">{itemText}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </section>

    </main>
  )
}
