import {
  Building2,
  CheckCircle2,
  LockKeyhole,
  Rocket,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";
import { Section } from "@/components/layout/Section";
import { ActionButton } from "@/components/ui/action-button";
import { SurfaceCard } from "@/components/ui/surface-card";
import { openLeadCaptureModal } from "@/lib/lead-capture";

const tiers = [
  {
    name: "Discovery Sprint",
    price: "SAR 7.5k",
    note: "5 business days",
    description:
      "A focused diagnostic for teams that need the right first AI use case, architecture direction, and delivery plan.",
    icon: SearchCheck,
    features: [
      "Workflow opportunity map",
      "AI readiness score",
      "Architecture brief",
      "Sprint roadmap",
    ],
  },
  {
    name: "MVP Build",
    price: "SAR 35k+",
    note: "2-4 weeks",
    description:
      "A build sprint for a usable agent, RAG layer, or workflow automation with analytics and review checkpoints.",
    icon: Rocket,
    featured: true,
    features: [
      "Working AI prototype",
      "Data + tool integration",
      "Human review gates",
      "Launch metrics",
    ],
  },
  {
    name: "Enterprise Agent",
    price: "Custom",
    note: "Governed rollout",
    description:
      "A secure implementation track for regulated teams that need governance, local infrastructure, and operating controls.",
    icon: Building2,
    features: [
      "Security and compliance plan",
      "Private deployment path",
      "Evaluation harness",
      "Team enablement",
    ],
  },
] as const;

export function PricingSection() {
  return (
    <Section
      id="pricing"
      eyebrow="Pricing / Sprints"
      title="Clear AI build offers, packaged around business momentum."
      description="Pick the smallest sprint that creates a real operating signal, then expand only when the system earns it."
      className="pricing-section"
    >
      <div className="pricing-grid">
        {tiers.map((tier) => {
          const Icon = tier.icon;

          return (
            <SurfaceCard
              key={tier.name}
              className={tier.featured ? "pricing-card pricing-card-featured" : "pricing-card"}
            >
              <div className="pricing-card-top">
                <div className="pricing-icon">
                  <Icon size={22} aria-hidden="true" />
                </div>
                {tier.featured && <span className="pricing-badge">Most direct path</span>}
              </div>
              <h3>{tier.name}</h3>
              <p>{tier.description}</p>
              <div className="pricing-price">
                <strong>{tier.price}</strong>
                <span>{tier.note}</span>
              </div>
              <ul>
                {tier.features.map((feature) => (
                  <li key={feature}>
                    <CheckCircle2 size={15} aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <ActionButton
                type="button"
                className="pricing-cta"
                onClick={() => openLeadCaptureModal({ source: "pricing", sprint: tier.name })}
              >
                Start {tier.name}
              </ActionButton>
            </SurfaceCard>
          );
        })}
      </div>

      <SurfaceCard id="trust" className="trust-banner">
        <div className="trust-banner-icon" aria-hidden="true">
          <ShieldCheck size={22} />
        </div>
        <div>
          <p className="eyebrow">Enterprise Trust</p>
          <h3>Designed for Saudi data governance from the first sprint.</h3>
          <p>
            Delivery can align with SDAIA and NDMO expectations, including data classification,
            access controls, audit trails, and Saudi-hosted or local infrastructure options.
          </p>
        </div>
        <span>
          <LockKeyhole size={15} aria-hidden="true" />
          Local-first controls
        </span>
      </SurfaceCard>
    </Section>
  );
}
