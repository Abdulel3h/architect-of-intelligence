import { z } from "zod";

const publicEnvSchema = z.object({
  VITE_APP_NAME: z.string().default("AIO Labs"),
  VITE_APP_URL: z.string().url().default("http://localhost:5173"),
  VITE_DEFAULT_LANGUAGE: z.enum(["ar", "en"]).default("ar"),
  VITE_POSTHOG_KEY: z.string().optional(),
  VITE_POSTHOG_HOST: z.string().url().optional().or(z.literal("")),
});

const serverEnvSchema = publicEnvSchema.extend({
  OPENAI_API_KEY: z.string().optional(),
  OPENAI_MODEL: z.string().default("gpt-5.5"),
  SUPABASE_URL: z.string().url().optional().or(z.literal("")),
  SUPABASE_ANON_KEY: z.string().optional(),
  SUPABASE_SERVICE_ROLE_KEY: z.string().optional(),
  RESEND_API_KEY: z.string().optional(),
  RESEND_FROM_EMAIL: z.string().email().optional().or(z.literal("")),
  POSTHOG_KEY: z.string().optional(),
  POSTHOG_HOST: z.string().url().optional().or(z.literal("")),
  UPSTASH_REDIS_REST_URL: z.string().url().optional().or(z.literal("")),
  UPSTASH_REDIS_REST_TOKEN: z.string().optional(),
  TURNSTILE_SECRET_KEY: z.string().optional(),
  TURNSTILE_SITE_KEY: z.string().optional(),
  R2_ACCOUNT_ID: z.string().optional(),
  R2_ACCESS_KEY_ID: z.string().optional(),
  R2_SECRET_ACCESS_KEY: z.string().optional(),
  R2_BUCKET: z.string().optional(),
  ADMIN_NOTIFICATION_EMAIL: z.string().email().optional().or(z.literal("")),
});

export type RuntimeEnv = z.infer<typeof serverEnvSchema>;
export type PublicEnv = z.infer<typeof publicEnvSchema>;
export type RawEnv = Record<string, string | undefined>;

const getDefaultPublicRawEnv = (): RawEnv =>
  typeof import.meta !== "undefined" && import.meta.env ? (import.meta.env as RawEnv) : {};

const serverOnlyKeys = [
  "OPENAI_API_KEY",
  "SUPABASE_SERVICE_ROLE_KEY",
  "RESEND_API_KEY",
  "UPSTASH_REDIS_REST_TOKEN",
  "TURNSTILE_SECRET_KEY",
  "R2_SECRET_ACCESS_KEY",
] as const;

const integrationRequirements = {
  openai: ["OPENAI_API_KEY"] as const,
  supabaseWrites: ["SUPABASE_URL", "SUPABASE_SERVICE_ROLE_KEY"] as const,
  email: ["RESEND_API_KEY", "RESEND_FROM_EMAIL"] as const,
  rateLimiting: ["UPSTASH_REDIS_REST_URL", "UPSTASH_REDIS_REST_TOKEN"] as const,
  storage: ["R2_ACCOUNT_ID", "R2_ACCESS_KEY_ID", "R2_SECRET_ACCESS_KEY", "R2_BUCKET"] as const,
} as const;

export function getPublicEnv(raw: RawEnv = getDefaultPublicRawEnv()): PublicEnv {
  return publicEnvSchema.parse(raw);
}

export function getServerEnv(raw: RawEnv): RuntimeEnv {
  const parsed = serverEnvSchema.safeParse(raw);
  if (parsed.success) return parsed.data;

  console.warn(
    "AIO Labs environment validation warning",
    parsed.error.issues.map((issue) => `${issue.path.join(".")}: ${issue.message}`).join("; "),
  );
  return serverEnvSchema.parse({});
}

export function getMissingEnvWarnings(env: RuntimeEnv): string[] {
  return Object.entries(integrationRequirements)
    .filter(([, keys]) => keys.some((key) => !env[key]))
    .map(([name, keys]) => `${name}: missing ${keys.filter((key) => !env[key]).join(", ")}`);
}

export function assertPublicEnvIsSafe(env: Record<string, unknown>): void {
  const leaked = serverOnlyKeys.filter((key) => key in env);
  if (leaked.length > 0) {
    throw new Error(`Server-only env keys cannot be exposed to the client: ${leaked.join(", ")}`);
  }
}

export function getRuntimeEnv(runtimeEnv: unknown): RuntimeEnv {
  const runtime = runtimeEnv && typeof runtimeEnv === "object" ? (runtimeEnv as RawEnv) : {};
  const nodeEnv = typeof process !== "undefined" && process.env ? (process.env as RawEnv) : {};
  return getServerEnv({ ...nodeEnv, ...runtime });
}
