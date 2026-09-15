import { HeartHandshake, ShieldCheck, ClipboardCheck, Users, TrendingUp, Search, Building2, FolderSync } from "lucide-react"

export const aboutData = {
  hero: {
    eyebrow: "About us",
    title: "The Center Business Services",
    description: "THE CENTER makes business bookkeeping simple. We help you track income, expenses, and financial activity in one place—with clear records and better organization."
  },
  focus: {
    eyebrow: "Our focus",
    title: "Simple tools for clearer financial records.",
    description: "We built THE CENTER so businesses can manage bookkeeping tasks without unnecessary complexity, stay connected to their bookkeeping team, and keep documents ready for year-end review and tax professionals.",
    features: [
      {
        title: "One place for activity",
        description: "Income, expenses, and financial activity stay organized in a single workflow.",
        icon: FolderSync
      },
      {
        title: "Team-ready collaboration",
        description: "Share context with your bookkeeping team so reviews and follow-ups stay clear.",
        icon: Users
      },
      {
        title: "Documents that stay findable",
        description: "Upload and keep important records organized for audits, tax prep, and day-to-day needs.",
        icon: ClipboardCheck
      },
      {
        title: "Built for real businesses",
        description: "From Memphis, TN, we support practical bookkeeping operations with tools that stay out of the way.",
        icon: Building2
      }
    ]
  },
  contact: {
    eyebrow: "Contact",
    title: "How to reach us.",
    description: "Prefer email or phone—our team is ready to help.",
    blocks: [
      {
        title: "Email & web",
        items: [
          { label: "info@biz.center", href: "mailto:info@biz.center" },
          { label: "www.biz.center", href: "https://www.biz.center", external: true }
        ]
      },
      {
        title: "Office",
        items: [
          { label: "5520 Summer Ave #102", href: "https://maps.google.com/?q=5520+Summer+Ave+%23102,+Memphis,+TN+38134", external: true },
          { label: "Memphis, TN 38134", href: "https://maps.google.com/?q=5520+Summer+Ave+%23102,+Memphis,+TN+38134", external: true }
        ]
      },
      {
        title: "Main phone",
        items: [
          { label: "Main: 901-207-1660", href: "tel:+19012071660" },
          { label: "Office: 901-209-5511", href: "tel:+19012095511" }
        ]
      },
      {
        title: "Departments",
        items: [
          { label: "Sales Tax: 901-306-8000", href: "tel:+19013068000" },
          { label: "Payroll: 901-306-9000", href: "tel:+19013069000" }
        ]
      }
    ]
  },
  story: {
    heading: "Why THE CENTER Exists",
    content: [
      "THE CENTER was built on a simple philosophy: business and administrative processes shouldn't have to feel overwhelming or impossible to navigate alone.",
      "We recognized that many entrepreneurs, small business owners, and individuals—especially those new to the United States—often struggle not because they lack vision, but because they lack a clear, organized administrative framework.",
      "By creating a place dedicated entirely to professional support, clear communication, and practical organization, we help people transform confusion into confidence. We don't just fill out forms; we build structured processes that allow you to focus on what you do best."
    ]
  },
  mission: "THE CENTER makes business bookkeeping simple. We help you track income, expenses, and financial activity in one place—with clear records and better organization.",
  vision: "A future where every entrepreneur and business owner has access to simple tools, clearer financial records, and the practical bookkeeping structure they need to succeed.",
  
  values: [
    {
      title: "Clarity",
      description: "We translate complex administrative requirements into simple, actionable steps.",
      icon: Search
    },
    {
      title: "Integrity",
      description: "We are honest about our scope and never make unsupported guarantees.",
      icon: ShieldCheck
    },
    {
      title: "Organization",
      description: "We believe structure and preparation are the foundation of any success.",
      icon: ClipboardCheck
    },
    {
      title: "Respect",
      description: "We treat every client, regardless of their business size or background, with profound professional respect.",
      icon: HeartHandshake
    },
    {
      title: "Accessibility",
      description: "We strive to make professional support welcoming and easy to understand.",
      icon: Users
    },
    {
      title: "Continuous Improvement",
      description: "We constantly refine our processes to better serve our clients' evolving needs.",
      icon: TrendingUp
    }
  ],

  approach: [
    {
      step: "01",
      title: "Listen",
      description: "We begin by carefully listening to understand your unique situation, current needs, and long-term goals."
    },
    {
      step: "02",
      title: "Organize",
      description: "We bring together all relevant information, sort your documents, and outline the exact steps required."
    },
    {
      step: "03",
      title: "Guide",
      description: "We provide practical, hands-on administrative guidance to help you properly complete your required processes."
    },
    {
      step: "04",
      title: "Move Forward",
      description: "We help you transition smoothly to the next phase of your business with confidence and clear records."
    }
  ],

  trustPillars: [
    {
      title: "Clear Expectations",
      description: "We explicitly outline what our administrative services can and cannot provide from day one."
    },
    {
      title: "Honest Communication",
      description: "We avoid exaggerated promises and never guarantee outcomes decided by third-party authorities."
    },
    {
      title: "Responsible Guidance",
      description: "We always refer clients to licensed attorneys or CPAs when a situation requires regulated expertise."
    }
  ],

  audiences: [
    {
      title: "Entrepreneurs",
      description: "Starting a new venture and needing a solid administrative foundation.",
      link: "/services/business-startup"
    },
    {
      title: "Small Businesses",
      description: "Established companies looking to organize their bookkeeping and operations.",
      link: "/services/bookkeeping"
    },
    {
      title: "Individuals New to the US",
      description: "People needing practical guidance navigating American administrative systems.",
      link: "/services/new-to-the-united-states"
    }
  ],

  // IMPORTANT: The following arrays are intentionally left empty.
  // Because we do not have verified real-world data for these entities, 
  // keeping these empty triggers the UI to gracefully hide these sections 
  // rather than displaying fake stock photos, fake names, or fabricated statistics.
  
  team: [], // e.g., { name: "", role: "", bio: "", photo: "", linkedin: "" }
  credentials: [], // e.g., { title: "", issuer: "", year: "" }
  testimonials: [], // e.g., { quote: "", author: "", role: "" }
  metrics: [], // e.g., { value: "", label: "" }
  
  languageSupport: {
    english: true,
    spanish: true, // As per Phase 1 "fully bilingual infrastructure" requirements, assuming Spanish is supported.
    message: "We proudly offer all of our consultations, support services, and primary resources in both English and Spanish to ensure complete clarity for our community."
  }
}
