import { ctaUserCopy, dualOutput, offerUserCopy, type DualOutput } from "@/lib/language/identity";

export type LeadStrength = "strong" | "medium" | "weak";
export type OfferKey =
  | "strategy-call"
  | "ai-diagnostic"
  | "agent-sprint"
  | "rag-sprint"
  | "automation-sprint";

export type Decision = {
  leadStrength: LeadStrength;
  offer: OfferKey;
  businessMeaning: string;
  nextStep: string;
  ctaLabel: string;
  ctaHref: string;
  output: DualOutput<
    {
      leadStrength: LeadStrength;
      offer: OfferKey;
      businessMeaning: string;
      nextStep: string;
      ctaLabel: string;
    },
    {
      leadStrength: string;
      offer: string;
      businessMeaning: string;
      nextStep: string;
      ctaLabel: string;
    }
  >;
};

type DecisionInput = {
  score?: number;
  readiness?: string;
  system?: string;
  impactLevel?: string;
  difficulty?: string;
  category?: string;
  urgency?: string;
};

const offerLabels: Record<OfferKey, string> = {
  "strategy-call": "Book Call",
  "ai-diagnostic": "Get AI Plan",
  "agent-sprint": "Request Agent Sprint",
  "rag-sprint": "Request RAG Plan",
  "automation-sprint": "Request Automation Plan",
};

export function decideNextAction(input: DecisionInput): Decision {
  const system = input.system?.toLowerCase() ?? "";
  const score = input.score ?? 0;
  const isHighIntent =
    score >= 75 ||
    input.readiness === "High-leverage" ||
    input.impactLevel === "transformational" ||
    input.urgency === "now";
  const isMediumIntent =
    score >= 52 || input.readiness === "Promising" || input.impactLevel === "high";

  const offer: OfferKey = system.includes("rag")
    ? "rag-sprint"
    : system.includes("automation") || system.includes("workflow")
      ? "automation-sprint"
      : system.includes("agent")
        ? "agent-sprint"
        : isHighIntent
          ? "strategy-call"
          : "ai-diagnostic";

  const leadStrength: LeadStrength = isHighIntent ? "strong" : isMediumIntent ? "medium" : "weak";
  const businessMeaning =
    leadStrength === "strong"
      ? "This has enough urgency and operational surface area to justify a focused implementation conversation."
      : leadStrength === "medium"
        ? "This looks promising, but the first move should be a narrow diagnostic to avoid building the wrong system."
        : "This is early-stage. The right move is to clarify the workflow, data quality, and first measurable outcome.";
  const nextStep =
    leadStrength === "strong"
      ? "Turn the result into a scoped build brief and decide the first sprint."
      : leadStrength === "medium"
        ? "Map the workflow and define one metric before implementation."
        : "Use a lightweight AI plan to find the highest-leverage starting point.";
  const userBusinessMeaning =
    leadStrength === "strong"
      ? "الوضع عندك جاهز لكلام جاد عن التنفيذ. فيه استعجال ومساحة تشغيلية تستاهل نحدد لها سبرنت واضـح."
      : leadStrength === "medium"
        ? "فيه فـرصة حلوة، بس الأفضل نبدأ بتشخيص ضيق عشان ما نبني نظام ما يخدم الشغل فعلياً."
        : "الفكرة لسه تحتاج ترتيب. نوضح مسار العمل وجودة البيانات وأول نتيجة نقدر نقيسها.";
  const userNextStep =
    leadStrength === "strong"
      ? "نحول النتيجة لملخص بناء واضـح ونحدد أول سبرنت."
      : leadStrength === "medium"
        ? "نرسم مسار العمل ونختار مقياس واحد قبل التنفيذ."
        : "نبدأ بخطـة خفيفة تطلع أعلى نقطة فيها عائد.";
  const ctaLabel = offerLabels[offer];
  const userCtaLabel = ctaUserCopy[offer];

  return {
    leadStrength,
    offer,
    businessMeaning: userBusinessMeaning,
    nextStep: userNextStep,
    ctaLabel: userCtaLabel,
    ctaHref: "#contact",
    output: dualOutput(
      {
        leadStrength,
        offer,
        businessMeaning,
        nextStep,
        ctaLabel,
      },
      {
        leadStrength,
        offer: offerUserCopy[offer],
        businessMeaning: userBusinessMeaning,
        nextStep: userNextStep,
        ctaLabel: userCtaLabel,
      },
    ),
  };
}
