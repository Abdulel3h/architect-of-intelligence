import { lazy, Suspense, useEffect, useState } from "react";
import { shouldDisableHeavyVisuals } from "@/lib/performance/governance";

const NeuralGlobe = lazy(() => import("../../components/NeuralGlobe"));

export function IntelligenceMap() {
  const [heavyVisualsDisabled, setHeavyVisualsDisabled] = useState(true);

  useEffect(() => {
    setHeavyVisualsDisabled(shouldDisableHeavyVisuals());
  }, []);

  return (
    <div className="intelligence-map" aria-hidden="true">
      <div className="map-fallback" />
      {!heavyVisualsDisabled && (
        <Suspense fallback={null}>
          <div className="map-canvas">
            <NeuralGlobe />
          </div>
        </Suspense>
      )}
    </div>
  );
}
