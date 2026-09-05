import { Language } from "@/context/language-context"

export interface LegalSection {
  id: string
  title: string
  content: string
}

export interface LegalDoc {
  title: string
  sections: LegalSection[]
}

export interface LegalContentMap {
  lastUpdated: string
  privacyPolicy: LegalDoc
  terms: LegalDoc
  accessibility: LegalDoc
}

export const legalData: Record<Language, LegalContentMap> = {
  EN: {
    lastUpdated: "January 1, 2026",
    privacyPolicy: {
      title: "Privacy Policy",
      sections: [
        {
          id: "introduction",
          title: "Introduction",
          content: `THE CENTER ("we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit our website and our practices for collecting, using, maintaining, protecting, and disclosing that information.`
        },
        {
          id: "information-we-collect",
          title: "Information We Collect",
          content: `We collect several types of information from and about users of our Website, including information by which you may be personally identified, such as name, postal address, e-mail address, telephone number, or any other identifier by which you may be contacted online or offline ("personal information").`
        },
        {
          id: "information-you-provide",
          title: "Information You Provide to Us",
          content: `The information we collect on or through our Website may include:
• Information that you provide by filling in forms on our Website (e.g., Contact Us, Consultation Requests).
• Records and copies of your correspondence (including email addresses), if you contact us.`
        },
        {
          id: "automatic-collection",
          title: "Information Collected Automatically",
          content: `As you navigate through and interact with our Website, we may use automatic data collection technologies to collect certain information about your equipment, browsing actions, and patterns.`
        },
        {
          id: "how-we-use",
          title: "How We Use Your Information",
          content: `We use information that we collect about you or that you provide to us:
• To present our Website and its contents to you.
• To provide you with information, products, or services that you request from us.
• To fulfill any other purpose for which you provide it.
• To carry out our obligations and enforce our rights arising from any contracts entered into between you and us.`
        },
        {
          id: "how-we-share",
          title: "How We Share Your Information",
          content: `We do not sell, rent, or trade your personal information to third parties. We may disclose aggregated information about our users, and information that does not identify any individual, without restriction. We may disclose personal information that we collect or you provide as described in this privacy policy to contractors and service providers.`
        },
        {
          id: "data-security",
          title: "Data Security",
          content: `We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. However, the transmission of information via the internet is not completely secure.`
        },
        {
          id: "changes",
          title: "Changes to Our Privacy Policy",
          content: `It is our policy to post any changes we make to our privacy policy on this page. If we make material changes to how we treat our users' personal information, we will notify you through a notice on the Website home page.`
        },
        {
          id: "contact",
          title: "Contact Information",
          content: `To ask questions or comment about this privacy policy and our privacy practices, contact us via our Contact page or call (901) 207-1660.`
        }
      ]
    },
    terms: {
      title: "Terms & Conditions",
      sections: [
        {
          id: "acceptance",
          title: "Acceptance of Terms",
          content: `By accessing or using our Website, you agree to be bound by these Terms & Conditions. If you do not agree to all the terms and conditions, then you may not access the Website or use any services.`
        },
        {
          id: "use-of-website",
          title: "Use of Website",
          content: `You agree to use the Website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the Website.`
        },
        {
          id: "services-scope",
          title: "Services and Consultations",
          content: `THE CENTER provides administrative, business organization, and support services. We do not provide legal, accounting, tax, or immigration representation. Information provided during consultations or on this website is for general informational purposes and does not establish an attorney-client or CPA-client relationship.`
        },
        {
          id: "information-accuracy",
          title: "Information Accuracy",
          content: `While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the Website or the information, products, services, or related graphics contained on the Website.`
        },
        {
          id: "intellectual-property",
          title: "Intellectual Property",
          content: `The Website and its original content, features, and functionality are owned by THE CENTER and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.`
        },
        {
          id: "limitation-liability",
          title: "Limitation of Liability",
          content: `In no event shall THE CENTER, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of or inability to access or use the Website.`
        },
        {
          id: "governing-law",
          title: "Governing Law",
          content: `These Terms shall be governed and construed in accordance with the laws of the State of Tennessee, without regard to its conflict of law provisions.`
        },
        {
          id: "changes-terms",
          title: "Changes to Terms",
          content: `We reserve the right, at our sole discretion, to modify or replace these Terms at any time.`
        }
      ]
    },
    accessibility: {
      title: "Accessibility Commitment",
      sections: [
        {
          id: "commitment",
          title: "Our Commitment",
          content: `THE CENTER is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to guarantee we provide equal access to all of our users.`
        },
        {
          id: "standards",
          title: "Accessible Website Experience",
          content: `We strive to adhere to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. These guidelines explain how to make web content more accessible for people with disabilities and more user-friendly for everyone.`
        },
        {
          id: "features",
          title: "Accessibility Features",
          content: `Our website includes several features designed to improve accessibility:
• **Keyboard Navigation:** The website can be navigated without the use of a mouse.
• **Screen Readers:** We use semantic HTML and ARIA labels to ensure compatibility with modern screen readers.
• **Text Alternatives:** We provide descriptive alt text for meaningful images.
• **Color and Contrast:** We maintain high contrast ratios to ensure readability.
• **Reduced Motion:** We respect the "prefers-reduced-motion" system setting to minimize potentially distracting animations.`
        },
        {
          id: "limitations",
          title: "Known Limitations",
          content: `While we strive for perfect accessibility, there may be some known limitations. If you encounter any barriers while using our website, please let us know so we can address the issue promptly.`
        },
        {
          id: "feedback",
          title: "Feedback and Contact",
          content: `We welcome your feedback on the accessibility of THE CENTER. If you encounter accessibility barriers, please contact us via our Contact page or call us directly.`
        }
      ]
    }
  },
  ES: {
    lastUpdated: "1 de enero de 2026",
    privacyPolicy: {
      title: "Política de Privacidad",
      sections: [
        {
          id: "introduction",
          title: "Introducción",
          content: `THE CENTER ("nosotros", "nuestro") respeta su privacidad y se compromete a protegerla mediante el cumplimiento de esta política. Esta política describe los tipos de información que podemos recopilar de usted o que usted puede proporcionar cuando visita nuestro sitio web.`
        },
        {
          id: "information-we-collect",
          title: "Información que Recopilamos",
          content: `Recopilamos varios tipos de información de y sobre los usuarios de nuestro sitio web, incluida información mediante la cual se le puede identificar personalmente, como nombre, dirección postal, correo electrónico o número de teléfono.`
        },
        {
          id: "information-you-provide",
          title: "Información que Usted nos Proporciona",
          content: `La información que recopilamos en o a través de nuestro sitio web puede incluir:
• Información que proporciona al completar formularios en nuestro sitio web.
• Registros y copias de su correspondencia si se comunica con nosotros.`
        },
        {
          id: "how-we-use",
          title: "Cómo Utilizamos su Información",
          content: `Utilizamos la información que recopilamos sobre usted o que nos proporciona:
• Para presentar nuestro sitio web y sus contenidos.
• Para proporcionarle la información, productos o servicios que nos solicite.
• Para cumplir con nuestras obligaciones y hacer cumplir nuestros derechos.`
        },
        {
          id: "data-security",
          title: "Seguridad de Datos",
          content: `Hemos implementado medidas diseñadas para proteger su información personal contra pérdidas accidentales y acceso, uso o divulgación no autorizados.`
        },
        {
          id: "contact",
          title: "Información de Contacto",
          content: `Para hacer preguntas o comentarios sobre esta política de privacidad, contáctenos a través de nuestra página de Contacto o llame al (901) 207-1660.`
        }
      ]
    },
    terms: {
      title: "Términos y Condiciones",
      sections: [
        {
          id: "acceptance",
          title: "Aceptación de Términos",
          content: `Al acceder o utilizar nuestro sitio web, usted acepta estar sujeto a estos Términos y Condiciones. Si no está de acuerdo con todos los términos, no debe acceder al sitio web ni utilizar ningún servicio.`
        },
        {
          id: "services-scope",
          title: "Alcance de Servicios",
          content: `THE CENTER brinda servicios de asistencia administrativa y organización empresarial. No brindamos representación legal, contable ni de inmigración. La información proporcionada es solo para fines informativos generales.`
        },
        {
          id: "limitation-liability",
          title: "Limitación de Responsabilidad",
          content: `En ningún caso THE CENTER, ni sus directores o empleados, serán responsables de ningún daño indirecto, incidental o consecuente derivado del uso de este sitio web.`
        },
        {
          id: "governing-law",
          title: "Ley Aplicable",
          content: `Estos Términos se regirán e interpretarán de acuerdo con las leyes del Estado de Tennessee.`
        }
      ]
    },
    accessibility: {
      title: "Compromiso de Accesibilidad",
      sections: [
        {
          id: "commitment",
          title: "Nuestro Compromiso",
          content: `THE CENTER se compromete a garantizar la accesibilidad digital para personas con discapacidades. Mejoramos continuamente la experiencia del usuario para garantizar un acceso equitativo.`
        },
        {
          id: "standards",
          title: "Estándares de Accesibilidad",
          content: `Nos esforzamos por cumplir con las Pautas de Accesibilidad al Contenido Web (WCAG) 2.1 Nivel AA.`
        },
        {
          id: "feedback",
          title: "Comentarios y Contacto",
          content: `Agradecemos sus comentarios sobre la accesibilidad de THE CENTER. Si encuentra alguna barrera, contáctenos directamente.`
        }
      ]
    }
  },
  AR: {
    lastUpdated: "١ يناير ٢٠٢٦",
    privacyPolicy: {
      title: "سياسة الخصوصية",
      sections: [
        {
          id: "introduction",
          title: "مقدمة",
          content: `يحترم "المركز" (THE CENTER) خصوصيتك ويلتزم بحمايتها من خلال الامتثال لهذه السياسة. تصف هذه السياسة أنواع المعلومات التي قد نجمعها منك أو التي قد تقدمها عند زيارة موقعنا الإلكتروني، وممارساتنا في جمع هذه المعلومات واستخدامها وحمايتها.`
        },
        {
          id: "information-we-collect",
          title: "المعلومات التي نجمعها",
          content: `نجمع عدة أنواع من المعلومات من مستخدمي موقعنا وعنهم، بما في ذلك المعلومات التي يمكن من خلالها التعرف عليك شخصياً، مثل الاسم، والعنوان البريدي، والبريد الإلكتروني، ورقم الهاتف.`
        },
        {
          id: "information-you-provide",
          title: "المعلومات التي تقدمها لنا",
          content: `قد تشمل المعلومات التي نجمعها عبر موقعنا الإلكتروني:
• المعلومات التي تقدمها عن طريق تعبئة النماذج على موقعنا (مثل نموذج الاتصال بنا، وطلبات الاستشارة).
• سجلات ونسخ المراسلات عند تواصلك معنا.`
        },
        {
          id: "how-we-use",
          title: "كيفية استخدام معلوماتك",
          content: `نستخدم المعلومات التي نجمعها عنك أو التي تقدمها لنا:
• لتقديم موقعنا الإلكتروني ومحتوياته لك بشكل ميسر.
• لتزويدك بالمعلومات أو الخدمات التي تطلبها منا.
• للوفاء بالتزاماتنا وتنفيذ حقوقنا الناتجة عن أي عقود مبرمة.`
        },
        {
          id: "data-security",
          title: "أمان البيانات",
          content: `لقد قمنا بتطبيق تدابير مصممة لتأمين معلوماتك الشخصية من الفقدان العرضي والوصول غير المصرح به أو الاستخدام أو التغيير.`
        },
        {
          id: "contact",
          title: "معلومات الاتصال",
          content: `لطرح أسئلة أو التعليق على سياسة الخصوصية هذه، تواصل معنا عبر صفحة الاتصال أو اتصل بنا مباشرة على (901) 207-1660.`
        }
      ]
    },
    terms: {
      title: "الشروط والأحكام",
      sections: [
        {
          id: "acceptance",
          title: "الموافقة على الشروط",
          content: `من خلال الوصول إلى موقعنا الإلكتروني أو استخدامه، فإنك توافق على الالتزام بشروط وأحكام الاستخدام هذه. إذا كنت لا توافق على جميع الشروط والأحكام، فلا يجوز لك استخدام الموقع.`
        },
        {
          id: "services-scope",
          title: "نطاق الخدمات والاستشارات",
          content: `يقدم "المركز" (THE CENTER) خدمات الدعم والتنظيم الإداري وتأسيس الأعمال. نحن لا نقدم تمثيلاً قانونياً أو محاسبياً أو خدمات هجرة قانونية. المعلومات المقدمة هي لأغراض إعلامية عامة.`
        },
        {
          id: "limitation-liability",
          title: "حدود المسؤولية",
          content: `لا يتحمل "المركز" أو مدراءه أو موظفوه أي مسؤولية عن أي أضرار غير مباشرة أو عرضية أو تبعية ناتجة عن استخدامك للموقع.`
        },
        {
          id: "governing-law",
          title: "القانون المطبق",
          content: `تخضع هذه الشروط وتُفسر وفقاً لقوانين ولاية تينيسي (Tennessee).`
        }
      ]
    },
    accessibility: {
      title: "التزام سهولة الاستخدام والوصول",
      sections: [
        {
          id: "commitment",
          title: "التزامنا",
          content: `يلتزم "المركز" (THE CENTER) بضمان سهولة الوصول الرقمي للأشخاص ذوي الإعاقة. نحن نعمل باستمرار على تحسين تجربة المستخدم للجميع وتطبيق معايير الوصول المعتمدة.`
        },
        {
          id: "standards",
          title: "معايير سهولة الاستخدام",
          content: `نسعى جاهدين للالتزام بإرشادات إمكانية الوصول إلى محتوى الويب (WCAG 2.1 Level AA).`
        },
        {
          id: "feedback",
          title: "التواصل والملاحظات",
          content: `نرحب بملاحظاتكم حول سهولة استخدام موقع المركز. إذا واجهت أي عوائق، يرجى الاتصال بنا مباشرة.`
        }
      ]
    }
  }
}
