import type { Metric } from "./types";

export function MetricsBar({ metrics }: { metrics: Metric[] }) {
  return (
    <div className="metrics-bar">
      {metrics.map((metric) => (
        <div key={`${metric.label}-${metric.value}`} className="metric-tile">
          <strong>{metric.value}</strong>
          <span>{metric.label}</span>
          <p>{metric.context}</p>
        </div>
      ))}
    </div>
  );
}
