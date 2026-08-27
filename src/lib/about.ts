import { HeartHandshake, ShieldCheck, ClipboardCheck, Compass, Users, TrendingUp, Search, MessageSquare, ArrowRight, Zap, Target } from "lucide-react"

export const aboutData = {
  story: {
    heading: "Why THE CENTER Exists",
    content: [
      "THE CENTER was built on a simple philosophy: business and administrative processes shouldn't have to feel overwhelming or impossible to navigate alone.",
      "We recognized that many entrepreneurs, small business owners, and individuals—especially those new to the United States—often struggle not because they lack vision, but because they lack a clear, organized administrative framework.",
      "By creating a place dedicated entirely to professional support, clear communication, and practical organization, we help people transform confusion into confidence. We don't just fill out forms; we build structured processes that allow you to focus on what you do best."
    ]
  },
  mission: "To provide practical, organized business and administrative support that empowers our clients to navigate important processes with clarity and confidence.",
  vision: "A future where every entrepreneur and individual has access to the clear administrative guidance and organizational structure they need to succeed.",
  
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
