import { cn } from "@/lib/utils";

type AioLogoProps = {
  className?: string;
  markOnly?: boolean;
};

export function AioLogo({ className, markOnly = false }: AioLogoProps) {
  return (
    <span className={cn("aio-logo", className)} aria-label="AIO Labs">
      <svg
        className="aio-logo-mark"
        viewBox="0 0 64 64"
        role="img"
        aria-hidden="true"
        focusable="false"
      >
        <path className="aio-logo-frame" d="M12 12h40v40H12z" />
        <path className="aio-logo-grid" d="M32 12v40M12 32h40" />
        <path className="aio-logo-path" d="M18 42 28 22h8l10 20M23 34h18" />
        <circle className="aio-logo-node" cx="18" cy="42" r="2.8" />
        <circle className="aio-logo-node" cx="28" cy="22" r="2.8" />
        <circle className="aio-logo-node" cx="36" cy="22" r="2.8" />
        <circle className="aio-logo-node" cx="46" cy="42" r="2.8" />
        <circle className="aio-logo-core" cx="32" cy="34" r="3.2" />
      </svg>
      {!markOnly && (
        <span className="aio-logo-wordmark">
          <strong>AIO</strong>
          <span>Labs</span>
        </span>
      )}
    </span>
  );
}
