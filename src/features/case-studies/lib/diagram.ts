import type { CaseStudy } from "@/content";

export function buildMermaidDiagram(caseStudy: CaseStudy) {
  const lines = ["flowchart LR"];

  for (const node of caseStudy.architecture.nodes) {
    lines.push(`  ${node.id}["${node.label}"]`);
  }

  for (const edge of caseStudy.architecture.edges) {
    lines.push(`  ${edge.from} -- "${edge.label}" --> ${edge.to}`);
  }

  return lines.join("\n");
}
