import { Suspense, useRef } from "react";
import { Center, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import type { Group } from "three";
import { cn } from "@/lib/utils";

type Custom3DLogoProps = {
  className?: string;
  modelUrl?: string;
};

function ModelLogo({ modelUrl }: { modelUrl: string }) {
  const { scene } = useGLTF(modelUrl);

  return <primitive object={scene} scale={1.35} />;
}

function ProceduralLogo() {
  return (
    <group>
      <mesh rotation={[0.72, 0.14, 0.18]}>
        <torusGeometry args={[1.05, 0.055, 12, 96]} />
        <meshStandardMaterial color="#f8fbff" metalness={0.74} roughness={0.24} />
      </mesh>
      <mesh rotation={[-0.22, 0.48, 0.08]} position={[0, 0, 0.02]}>
        <torusGeometry args={[0.64, 0.038, 10, 80]} />
        <meshStandardMaterial color="#9ee8ff" metalness={0.55} roughness={0.32} />
      </mesh>
      <mesh position={[0, 0, 0.05]}>
        <sphereGeometry args={[0.18, 32, 32]} />
        <meshStandardMaterial color="#ffffff" emissive="#7ddfff" emissiveIntensity={0.28} />
      </mesh>
      {[
        [-0.78, 0.42, 0.2],
        [0.78, -0.32, 0.18],
        [0.34, 0.78, -0.1],
      ].map(([x, y, z]) => (
        <mesh key={`${x}-${y}-${z}`} position={[x, y, z]}>
          <sphereGeometry args={[0.085, 24, 24]} />
          <meshStandardMaterial color="#f7fbff" emissive="#ffffff" emissiveIntensity={0.16} />
        </mesh>
      ))}
    </group>
  );
}

function FloatingLogo({ modelUrl }: { modelUrl?: string }) {
  const groupRef = useRef<Group>(null);

  useFrame(({ clock }, delta) => {
    if (!groupRef.current) return;

    const elapsed = clock.getElapsedTime();
    groupRef.current.rotation.y += delta * 0.22;
    groupRef.current.rotation.x = Math.sin(elapsed * 0.45) * 0.08;
    groupRef.current.position.y = Math.sin(elapsed * 0.75) * 0.12;
  });

  return (
    <group ref={groupRef} scale={0.86}>
      <Center>
        <Suspense fallback={<ProceduralLogo />}>
          {modelUrl ? <ModelLogo modelUrl={modelUrl} /> : <ProceduralLogo />}
        </Suspense>
      </Center>
    </group>
  );
}

export function Custom3DLogo({ className, modelUrl }: Custom3DLogoProps) {
  return (
    <div className={cn("custom-3d-logo", className)}>
      <Canvas
        dpr={[1, 2]}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 6.6], fov: 34 }}
      >
        <ambientLight intensity={1.7} />
        <directionalLight position={[2.5, 3.5, 4]} intensity={2.4} />
        <pointLight position={[-2.5, -1.5, 2.5]} intensity={3.2} color="#8be9ff" />
        <FloatingLogo modelUrl={modelUrl} />
      </Canvas>
    </div>
  );
}

export default Custom3DLogo;
