export const siteConfig = {
  name: "Abdulelah Alkhathami",
  title: "Abdulelah Alkhathami | وكلاء وأنظمة AI",
  description:
    "مهندس AI في الرياض يبني وكلاء AI وأنظمة RAG وأتمتة وتحليلات وواجهات منتج جاهزة للشغل الفعلي.",
  url: "https://architect-of-intelligence.com",
  author: "Abdulelah Alkhathami",
  email: "Abdul0l0h.0@gmail.com",
  phone: "+966550746952",
  locale: "ar_SA",
  sameAs: [] as string[],
};

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: "AI Engineer and AI Solutions Specialist",
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
