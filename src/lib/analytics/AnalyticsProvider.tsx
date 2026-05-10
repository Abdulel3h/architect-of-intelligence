import { createContext, useContext, useEffect, ReactNode } from "react";
import { getPublicEnv } from "@/lib/env";

interface AnalyticsContextType {
  track: (event: string, properties?: Record<string, unknown>) => void;
  identify: (userId: string, properties?: Record<string, unknown>) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | null>(null);

interface AnalyticsProviderProps {
  children: ReactNode;
}

export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  const env = getPublicEnv();

  useEffect(() => {
    // Only initialize PostHog if keys are available
    if (env.VITE_POSTHOG_KEY && env.VITE_POSTHOG_HOST && typeof window !== "undefined") {
      try {
        // Dynamic import to avoid SSR issues
        import("posthog-js").then((posthog) => {
          posthog.default.init(env.VITE_POSTHOG_KEY!, {
            api_host: env.VITE_POSTHOG_HOST,
            capture_pageview: false, // We'll handle this manually
            loaded: (ph) => {
              // Track initial page view
              ph.capture("$pageview");
            },
          });
        });
      } catch (error) {
        console.warn("Analytics initialization failed:", error);
      }
    }
  }, [env.VITE_POSTHOG_KEY, env.VITE_POSTHOG_HOST]);

  const track = (event: string, properties?: Record<string, unknown>) => {
    if (typeof window === "undefined") return;

    try {
      import("posthog-js").then((posthog) => {
        posthog.default.capture(event, properties);
      });
    } catch (error) {
      // Silently fail if analytics is not available
    }
  };

  const identify = (userId: string, properties?: Record<string, unknown>) => {
    if (typeof window === "undefined") return;

    try {
      import("posthog-js").then((posthog) => {
        posthog.default.identify(userId, properties);
      });
    } catch (error) {
      // Silently fail if analytics is not available
    }
  };

  return (
    <AnalyticsContext.Provider value={{ track, identify }}>{children}</AnalyticsContext.Provider>
  );
}

export function useAnalytics() {
  const context = useContext(AnalyticsContext);
  if (!context) {
    // Return no-op functions if analytics is not initialized
    return {
      track: () => {},
      identify: () => {},
    };
  }
  return context;
}
