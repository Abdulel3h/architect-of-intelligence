export const siteConfig = {
  name: "AIO Labs",
  title: "AIO Labs | AI Systems, Agents, and Intelligent Workflows",
  description:
    "A Saudi AI systems studio founded by Abdulelah, building agents, RAG systems, automation, analytics, and intelligent infrastructure with a Najdi voice.",
  url: "https://architect-of-intelligence.com",
  author: "Abdulelah Alkhathami",
  email: "Abdul0l0h.0@gmail.com",
  phone: "+966550746952",
  locale: "ar_SA",
  sameAs: [] as string[],
};

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  founder: {
    "@type": "Person",
    name: siteConfig.author,
    jobTitle: "AI Systems Architect",
  },
  description: siteConfig.description,
  email: `mailto:${siteConfig.email}`,
  telephone: siteConfig.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Riyadh",
    addressCountry: "SA",
  },
  knowsAbout: [
    "AI Agents",
    "Retrieval-Augmented Generation",
    "Workflow Automation",
    "Data Analytics",
    "Full-Stack AI Products",
  ],
  sameAs: siteConfig.sameAs,
};
