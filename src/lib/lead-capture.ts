export type LeadCaptureIntent = {
  source?: string;
  sprint?: string;
};

export const LEAD_CAPTURE_EVENT = "aio:open-lead-capture";

export function openLeadCaptureModal(detail: LeadCaptureIntent = {}) {
  if (typeof window === "undefined") {
    return;
  }

  window.dispatchEvent(new CustomEvent<LeadCaptureIntent>(LEAD_CAPTURE_EVENT, { detail }));
}
