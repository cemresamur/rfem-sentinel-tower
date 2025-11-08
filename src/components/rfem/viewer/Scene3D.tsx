import { useRef, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Grid } from '@react-three/drei';
import * as THREE from 'three';
import { HeatmapData } from '@/types/rfem';

interface Scene3DProps {
  heatmap: HeatmapData[];
  elements: Array<{
    id: number;
    type: string;
    geometry: {
      type: 'box' | 'cylinder' | 'beam';
      position: [number, number, number];
      rotation?: [number, number, number];
      scale?: [number, number, number];
    };
  }>;
}

function getColorFromUtilization(util: number): string {
  if (util >= 0.95) return '#ef4444'; // Critical - red
  if (util >= 0.85) return '#f97316'; // High - orange
  if (util >= 0.70) return '#eab308'; // Medium - yellow
  if (util >= 0.50) return '#22c55e'; // Low - green
  return '#10b981'; // Safe - green
}

function StructuralElement({
  element,
  utilization,
}: {
  element: Scene3DProps['elements'][0];
  utilization?: number;
}) {
  const color = utilization !== undefined ? getColorFromUtilization(utilization) : '#64748b';
  const { geometry } = element;

  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <mesh
      ref={meshRef}
      position={geometry.position}
      rotation={geometry.rotation || [0, 0, 0]}
      scale={geometry.scale || [1, 1, 1]}
    >
      {geometry.type === 'box' && <boxGeometry args={[1, 1, 1]} />}
      {geometry.type === 'cylinder' && <cylinderGeometry args={[0.2, 0.2, 1, 16]} />}
      {geometry.type === 'beam' && <boxGeometry args={[0.3, 0.3, 5]} />}
      <meshStandardMaterial
        color={color}
        metalness={0.3}
        roughness={0.6}
        emissive={color}
        emissiveIntensity={utilization && utilization >= 0.85 ? 0.3 : 0.1}
      />
    </mesh>
  );
}

export function Scene3D({ heatmap, elements }: Scene3DProps) {
  const utilizationMap = useMemo(() => {
    const map = new Map<number, number>();
    heatmap.forEach((h) => map.set(h.element_id, h.util));
    return map;
  }, [heatmap]);

  return (
    <div className="w-full h-[600px] bg-gradient-to-b from-slate-900 to-slate-800 rounded-lg overflow-hidden border border-border">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[10, 10, 10]} fov={50} />
        <OrbitControls
          enableDamping
          dampingFactor={0.05}
          minDistance={5}
          maxDistance={50}
        />

        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <directionalLight position={[-10, 5, -5]} intensity={0.5} />
        <hemisphereLight intensity={0.3} groundColor="#444444" />

        {/* Grid */}
        <Grid
          args={[20, 20]}
          cellSize={1}
          cellThickness={0.5}
          cellColor="#6b7280"
          sectionSize={5}
          sectionThickness={1}
          sectionColor="#9ca3af"
          fadeDistance={30}
          fadeStrength={1}
          position={[0, 0, 0]}
        />

        {/* Render structural elements */}
        {elements.map((element) => (
          <StructuralElement
            key={element.id}
            element={element}
            utilization={utilizationMap.get(element.id)}
          />
        ))}
      </Canvas>
    </div>
  );
}
