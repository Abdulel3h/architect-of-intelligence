import type {
  AgentRunInput,
  AgentRunOutput,
  ArchitectureAiInput,
  ArchitectureAiOutput,
  ScannerAiOutput,
  ScannerInput,
  UserEventInput,
} from "./schemas";

async function postJson<Result>(url: string, payload: unknown): Promise<Result> {
  const language =
    typeof document === "undefined" ? "ar" : (document.documentElement.dataset.language ?? "ar");
  const response = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json", "x-aio-language": language },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || `Request failed with ${response.status}`);
  }

  return response.json() as Promise<Result>;
}

export function runOpportunityScan(input: ScannerInput) {
  return postJson<ScannerAiOutput>("/api/ai/opportunity-scan", input);
}

export function runArchitectureGeneration(input: ArchitectureAiInput) {
  return postJson<ArchitectureAiOutput>("/api/ai/architecture", input);
}

export function runAgentRuntime(input: AgentRunInput) {
  return postJson<AgentRunOutput>("/api/ai/agent-run", input);
}

export function trackUserEvent(input: UserEventInput) {
  return postJson<{ ok: true }>("/api/events", input).catch(() => ({ ok: true as const }));
}
