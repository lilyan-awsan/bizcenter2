import { Language } from "@/context/language-context"
import { FaqCategory } from "./faq"

export interface LocalizedFaqItem {
  q: string
  a: string
}

export const CATEGORY_TRANSLATIONS: Record<FaqCategory, { es: string; ar: string }> = {
  "General": { es: "Preguntas Generales", ar: "الأسئلة العامة" },
  "Business Startup": { es: "Puesta en Marcha de Negocios", ar: "تأسيس الأعمال" },
  "Bookkeeping": { es: "Contabilidad y Registros", ar: "مسك الدفاتر المحاسبية" },
  "Business Support": { es: "Soporte Empresarial", ar: "دعم الأعمال المستمر" },
  "Applications & Administrative Support": { es: "Solicitudes y Apoyo Administrativo", ar: "الطلبات والدعم الإداري" },
  "New to the United States": { es: "Nuevos en EE. UU.", ar: "القادمون الجدد إلى أمريكا" },
  "Consultations": { es: "Consultas", ar: "الاستشارات" },
  "Resources": { es: "Recursos y Guías", ar: "الموارد والتعليمات" }
}

export const CATEGORY_DESCRIPTIONS: Record<FaqCategory, { en: string; es: string; ar: string }> = {
  "Consultations": {
    en: "Learn what to expect during your appointment and how we work.",
    es: "Conozca qué esperar durante su cita y cómo trabajamos.",
    ar: "تعرف على ما يمكنك توقعه خلال موعدك وكيف نعمل معك."
  },
  "Business Startup": {
    en: "Common questions on starting an entity, EINs, and business setup.",
    es: "Preguntas comunes sobre la creación de empresas, EIN y configuración inicial.",
    ar: "أسئلة شائعة حول تأسيس الكيانات، استخراج الرقم الضريبي EIN، وإعداد الشركات."
  },
  "Bookkeeping": {
    en: "How we help keep your monthly business records organized.",
    es: "Cómo le ayudamos a mantener organizados sus registros mensuales.",
    ar: "كيف نساعدك في تنظيم سجلاتك المالية والدفاتر المحاسبية شهرياً."
  },
  "Applications & Administrative Support": {
    en: "Guidance on form preparation and administrative boundaries.",
    es: "Orientación sobre la preparación de formularios y límites administrativos.",
    ar: "إرشادات حول إعداد النماذج والحدود الإدارية."
  },
  "New to the United States": {
    en: "Answers for individuals navigating local administrative setup.",
    es: "Respuestas para personas que gestionan trámites locales por primera vez.",
    ar: "إجابات للأفراد والوافدين الجدد في التعامل مع الإجراءات الإدارية المحلية."
  },
  "General": {
    en: "General information about THE CENTER and our scope of services.",
    es: "Información general sobre THE CENTER y nuestro alcance de servicios.",
    ar: "معلومات عامة حول 'ذا سنتر' ونطاق خدماتنا المعتمدة."
  },
  "Business Support": {
    en: "Ongoing organizational and back-office administrative support.",
    es: "Soporte administrativo y organizacional continuo.",
    ar: "دعم إداري وتنظيمي مستمر للمؤسسات والشركات."
  },
  "Resources": {
    en: "Information about our checklists, guides, and downloadables.",
    es: "Información sobre nuestras listas de verificación y guías.",
    ar: "معلومات حول قوائم المستندات، الأدلة، والمستندات القابلة للتحميل."
  }
}

export const FAQ_TRANSLATIONS: Record<string, { es: LocalizedFaqItem; ar: LocalizedFaqItem }> = {
  g1: {
    es: { q: "¿Qué es THE CENTER?", a: "THE CENTER brinda servicios integrales de apoyo empresarial y administrativo. Ayudamos a individuos y organizaciones simplificando la preparación de documentos y organizando registros." },
    ar: { q: "ما هو 'ذا سنتر'؟", a: "يقدم 'ذا سنتر' خدمات الدعم الإداري والتجاري الشاملة. نساعد الأفراد والشركات من خلال تنظيم إعداد الوثائق والسجلات المالية والتوجيه العملي بثقة." }
  },
  g2: {
    es: { q: "¿Quién puede utilizar los servicios de THE CENTER?", a: "Nuestros servicios están diseñados para emprendedores, dueños de negocios y personas que necesitan apoyo administrativo organizado." },
    ar: { q: "من يمكنه الاستفادة من خدمات 'ذا سنتر'؟", a: "خدماتنا مصممة لرواد الأعمال، أصحاب الشركات، والأفراد الذين يحتاجون إلى دعم إداري منظم لمستنداتهم ومعاملاتهم." }
  },
  g3: {
    es: { q: "¿Necesito una cita?", a: "Sí, recomendamos programar una consulta previa para asegurarle atención personalizada." },
    ar: { q: "هل أحتاج إلى تحديد موعد مسبق؟", a: "نعم، نوصي بشدة بحجز استشارة مسبقة حتى نتمكن من التجهيز لزيارتك وتخصيص الوقت الكافي لك." }
  },
  g4: {
    es: { q: "¿Cómo me pongo en contacto con THE CENTER?", a: "Puede comunicarse a través de nuestro formulario en línea, llamando a nuestra oficina o reservando una consulta." },
    ar: { q: "كيف يمكنني الاتصال بـ 'ذا سنتر'؟", a: "يمكنك التواصل معنا عبر نموذج الاتصال، أو الاتصال بالهاتف المباشر، أو حجز استشارة مجانية عبر الموقع." }
  },
  g5: {
    es: { q: "¿Ofrecen consultas gratuitas?", a: "Sí, ofrecemos consultas iniciales gratuitas para evaluar sus necesidades y determinar la mejor manera de ayudarle." },
    ar: { q: "هل تقدمون استشارات مجانية؟", a: "نعم، نقدم استشارات أولية مجانية لمناقشة وضعك الخاص وتحديد كيف يمكن لخدماتنا الإدارية مساعدتك." }
  },
  bs1: {
    es: { q: "¿Puede THE CENTER ayudarme a iniciar una empresa?", a: "Sí, brindamos apoyo administrativo y organizacional para la formación de empresas, ayudándole con la preparación de documentos e información inicial." },
    ar: { q: "هل يمكن لـ 'ذا سنتر' مساعدتي في تأسيس مشروع تجاري؟", a: "نعم، نقدم الدعم الإداري والتنظيمي لتأسيس الشركات. نساعدك في إعداد المستندات المطلوبة وتنظيم البيانات المطلوبة للانطلاق بثقة." }
  },
  bs2: {
    es: { q: "¿Qué debo llevar a una consulta de inicio de empresa?", a: "Traiga una identificación oficial, ideas de nombre de empresa, comprobante de domicilio y sus preguntas." },
    ar: { q: "ما الذي يجب أن أحضره لاستشارة تأسيس الشركة؟", a: "يرجى إحضار إثبات شخصية رسمي، أفكار لاسم التجاري، إثبات العنوان، وأي أسئلة محددة لديك." }
  },
  bs3: {
    es: { q: "¿Pueden ayudarme a organizar documentos comerciales?", a: "Absolutamente. La organización de documentos como acuerdos operativos, solicitudes EIN y registros estatales es nuestra especialidad." },
    ar: { q: "هل يمكنك مساعتي في تنظيم مستندات الشركة؟", a: "بالتأكيد. إن تنظيم المستندات القانونية والإدارية والتسجيلات الحكومية هو أحد تخصصاتنا الأساسية." }
  },
  bs4: {
    es: { q: "¿Pueden ayudar si ya he iniciado mi empresa?", a: "Sí, a menudo trabajamos con empresas existentes para reorganizar sus estructuras administrativas." },
    ar: { q: "هل يمكنكم مساعدتي إذا كنت قد بدأت مشروعي بالفعل؟", a: "نعم، نعمل كثيراً مع الشركات القائمة لإعادة تنظيم هياكلها الإدارية وتطوير أدائها." }
  },
  bk1: {
    es: { q: "¿Qué apoyo de contabilidad brindan?", a: "Ofrecemos clasificación de transacciones, organización mensual de registros y preparación de datos para su contador." },
    ar: { q: "ما هو دعم حفظ الدفاتر الذي تقدمونه؟", a: "نقدم تصنيف المعاملات المالية، وتنظيم السجلات الشهرية، وإعداد التقارير الأساسية لتسليمها لمحاسبك القانوني بسهولة." }
  },
  bk2: {
    es: { q: "¿Pueden ayudar a organizar mis registros existentes?", a: "Sí. Si sus registros están desorganizados, podemos ayudar a clasificar y actualizar sus datos financieros." },
    ar: { q: "هل يمكنكم مساعدتي في تنظيم سجلاتي السابقة؟", a: "نعم، إذا كانت سجلاتك غير مرتبة، يمكننا مساعدتك في فرزها وتحديث البيانات المالية." }
  },
  bk3: {
    es: { q: "¿Con qué frecuencia se debe actualizar la contabilidad?", a: "Recomendamos actualizar sus registros contables mensualmente para mantener un control financiero claro." },
    ar: { q: "كم مرة يجب تحديث مسك الدفاتر؟", a: "نوصي بتحديث السجلات المحاسبية شهرياً لضمان دقة البيانات المالية وتجنب ضغط نهاية العام." }
  },
  bk4: {
    es: { q: "¿Preparan impuestos?", a: "No. Brindamos apoyo de contabilidad administrativa. No somos firmas CPA ni preparamos declaraciones legales de impuestos." },
    ar: { q: "هل تقومون بإعداد الضرائب؟", a: "لا، يقدم المركز دعماً تنظيمياً وإدارياً فقط. لسنا محاسبين قانونيين CPA ولا نقدم استشارات ضريبية رسمية." }
  },
  sup1: {
    es: { q: "¿Qué incluye el soporte empresarial?", a: "Incluye gestión de documentos, organización de procesos operativos, programación y apoyo administrativo general." },
    ar: { q: "ماذا يشمل دعم الأعمال المستمر؟", a: "يشمل الدعم الإداري المستمر مثل إدارة المستندات، تنظيم العمليات التشغيلية، وتنظيم الأوراق." }
  },
  sup2: {
    es: { q: "¿El soporte empresarial puede ser continuo?", a: "Sí, muchos de nuestros clientes utilizan nuestros servicios de forma continua a largo plazo." },
    ar: { q: "هل يمكن أن يكون دعم الأعمال مستمراً؟", a: "نعم، يستفيد العديد من عملائنا من خدمات الدعم الإداري بشكل مستمر لضمان كفاءة أعمالهم." }
  },
  sup3: {
    es: { q: "¿Pueden ayudar a organizar tareas administrativas?", a: "Sí, nos especializamos en crear flujos de trabajo estructurados para tareas complejas." },
    ar: { q: "هل يمكنك مساعتي في تنظيم المهام الإدارية؟", a: "نعم، نحن متخصصون في إنشاء سير عمل منظم للمهام الإدارية المعقدة." }
  },
  sup4: {
    es: { q: "¿Trabajan con empresas establecidas?", a: "Absolutamente. Asistimos tanto a empresas nuevas como a empresas consolidadas." },
    ar: { q: "هل تعملون مع الشركات القائمة والمستقرة؟", a: "بالتأكيد. نساعد الشركات الناشئة والقائمة على حد سواء لتطوير كفاءتها الإدارية." }
  },
  app1: {
    es: { q: "¿Pueden ayudarme a preparar una solicitud?", a: "Sí, podemos ayudarle a recopilar información y dar formato adecuado a sus formularios." },
    ar: { q: "هل يمكنكم مساعدتي في إعداد المعاملات والطلبات؟", a: "نعم، نساعدك في جمع المعلومات المطلوبة وتنسيق المستندات بشكل صحيح للجهات المعنية." }
  },
  app2: {
    es: { q: "¿Pueden organizar mis documentos?", a: "Sí, la organización de documentos es nuestro servicio principal." },
    ar: { q: "هل يمكنكم ترتيب وتنظيم مستنداتي؟", a: "نعم، تنظيم الوثائق والمستندات هو أحد خدماتنا الرئيسية." }
  },
  app3: {
    es: { q: "¿Pueden revisar la documentación antes de enviarla?", a: "Revisamos la integridad administrativa y el formato, pero no ofrecemos revisión legal." },
    ar: { q: "هل يمكنكم مراجعة المعاملات قبل تقديمها؟", a: "نراجع الدقة الإدارية واستكمال البيانات، لكننا لا نقدم مراجعة قانونية رسمية." }
  },
  app4: {
    es: { q: "¿Garantizan la aprobación de mi solicitud?", a: "No. THE CENTER brinda apoyo de preparación. No garantizamos decisiones de agencias gubernamentales." },
    ar: { q: "هل تضمنون قبول ووافق الجهات الحكومية على طلبي؟", a: "لا، يقدم المركز الدعم والتجهيز الإداري فقط، ولا نضمن قرارات الموافقة الصادرة عن الجهات الحكومية." }
  },
  new1: {
    es: { q: "Soy nuevo en los Estados Unidos. ¿Por dónde debo empezar?", a: "Recomendamos reservar una consulta para estructurar los pasos administrativos iniciales." },
    ar: { q: "أنا جديد في الولايات المتحدة، من أين أبدأ؟", a: "نوصي بحجز استشارة معنا لمساعدتك في فهم الخطوات الإدارية وتحديد المستندات المطلوبة." }
  },
  new2: {
    es: { q: "¿Pueden ayudarme a organizar documentos importantes?", a: "Sí, ayudamos a los recién llegados a organizar su identificación, registros y correspondencia." },
    ar: { q: "هل يمكنكم مساعدتي في تنظيم أوراقي الهامة؟", a: "نعم، نساعد القادمين الجدد في تنظيم وثائق إثبات الشخصية والسجلات والمراسلات الرسمية." }
  },
  new3: {
    es: { q: "¿Pueden explicarme los procesos administrativos?", a: "Brindamos orientación clara y paso a paso para desmitificar los procesos locales." },
    ar: { q: "هل توضحون لي الإجراءات الإدارية المعقدة؟", a: "نقدم توجيهاً واضحاً ومبسطاً خطوة بخطوة لشرح وتسهيل جميع المعاملات المحلية." }
  },
  new4: {
    es: { q: "¿Ofrecen servicios legales de inmigración?", a: "No. Brindamos apoyo administrativo únicamente. Para asuntos legales, consulte a un abogado de inmigración." },
    ar: { q: "هل تقدمون خدمات قانونية للهجرة؟", a: "لا، يقدم المركز الدعم الإداري فقط، ولا نقدم استشارات قانونية أو تمثيلاً في قضايا الهجرة." }
  },
  con1: {
    es: { q: "¿Cómo reservo una consulta?", a: "Puede reservar haciendo clic en cualquier botón de 'Reservar Consulta Gratuita' en el sitio web." },
    ar: { q: "كيف يمكنني حجز استشارة؟", a: "يمكنك حجز استشارة بسهولة بالنقر على زر 'احجز استشارة مجانية' المتاح في الموقع." }
  },
  con2: {
    es: { q: "¿Qué sucede durante la primera consulta?", a: "Escucharemos su situación, revisaremos sus documentos y discutiremos cómo apoyarle." },
    ar: { q: "ماذا يحدث خلال الاستشارة الأولى؟", a: "خلال الاستشارة، نستمع لتفاصيل طلبك، ونراجع مستنداتك، ونحدد خطة الدعم المناسبة." }
  },
  con3: {
    es: { q: "¿Cuánto dura una consulta?", a: "Una consulta inicial suele durar entre 30 y 45 minutos." },
    ar: { q: "ما هي مدة الاستشارة؟", a: "تستغرق الاستشارة الأولية عادة ما بين 30 إلى 45 دقيقة." }
  },
  con4: {
    es: { q: "¿Puedo hacer preguntas antes de reservar?", a: "Absolutamente. Puede enviarnos un mensaje a través del formulario de contacto." },
    ar: { q: "هل يمكنني طرح أسئلة قبل حجز الاستشارة؟", a: "بالتأكيد، يمكنك إرسال استفسارك عبر نموذج الاتصال في أي وقت." }
  },
  res1: {
    es: { q: "¿Dónde puedo encontrar listas de verificación?", a: "Puede encontrar todas nuestras guías en el Centro de Recursos." },
    ar: { q: "أين يمكنني العثور على قوائم المستندات المطلوبة؟", a: "يمكنك العثور على جميع قوائم المستندات والأدلة في قسم الموارد بالNavigation." }
  },
  res2: {
    es: { q: "¿Los recursos son gratuitos?", a: "Sí, los recursos digitales en nuestro Centro de Recursos son gratuitos." },
    ar: { q: "هل الموارد والأدلة مجانية؟", a: "نعم، جميع الموارد الرقمية المتاحة في موقعنا مجانية تماماً." }
  },
  res3: {
    es: { q: "¿Puedo imprimir una lista de verificación?", a: "Sí, nuestras páginas están optimizadas para impresión fácil." },
    ar: { q: "هل يمكنني طباعة قائمة المستندات؟", a: "نعم، جميع صفحاتنا مجهزة للطباعة المباشرة بالنقر على زر الطباعة." }
  },
  res4: {
    es: { q: "¿Puedo descargar recursos?", a: "Sí, ofrecemos opciones de descarga en PDF." },
    ar: { q: "هل يمكنني تحميل المستندات؟", a: "نعم، توفر معظم مواردنا خيار التحميل بصيغة PDF." }
  },
  res5: {
    es: { q: "¿Sus recursos son documentos oficiales del gobierno?", a: "No. Son herramientas organizativas creadas por nuestro equipo para ayudarle." },
    ar: { q: "هل مواردكم مستندات حكومية رسمية؟", a: "لا، القوائم والأدلة هي أدوات تنظيمية من إعداد فريقنا لتسهيل معاملاتك." }
  }
}
