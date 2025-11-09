import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Grid, Environment } from '@react-three/drei';
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

function getColorFromUtilization(util: number): THREE.Color {
  if (util >= 0.95) return new THREE.Color(0xef4444); // Critical - red
  if (util >= 0.85) return new THREE.Color(0xf97316); // High - orange
  if (util >= 0.70) return new THREE.Color(0xeab308); // Medium - yellow
  if (util >= 0.50) return new THREE.Color(0x22c55e); // Low - green
  return new THREE.Color(0x10b981); // Safe - green
}

function getTypeColor(type: string): THREE.Color {
  switch (type) {
    case 'COLUMN': return new THREE.Color(0x3b82f6); // Blue
    case 'BEAM': return new THREE.Color(0x8b5cf6); // Purple
    case 'TRUSS': return new THREE.Color(0x06b6d4); // Cyan
    case 'SLAB': return new THREE.Color(0x64748b); // Gray
    case 'WALL': return new THREE.Color(0x475569); // Dark gray
    default: return new THREE.Color(0x94a3b8); // Light gray
  }
}

// Building floor component with semi-transparency
function BuildingFloor({ level, size = 20 }: { level: number; size?: number }) {
  return (
    <mesh position={[0, level * 3, 0]} receiveShadow>
      <boxGeometry args={[size, 0.3, size]} />
      <meshStandardMaterial
        color={new THREE.Color(0x334155)}
        transparent
        opacity={0.15}
        metalness={0.8}
        roughness={0.2}
      />
      {/* Edge wireframe for technical look */}
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(size, 0.3, size)]} />
        <lineBasicMaterial color={new THREE.Color(0x64748b)} linewidth={1} />
      </lineSegments>
    </mesh>
  );
}

// Wall panel component
function WallPanel({ position, rotation, size }: { position: [number, number, number]; rotation: [number, number, number]; size: [number, number] }) {
  return (
    <mesh position={position} rotation={rotation} receiveShadow castShadow>
      <boxGeometry args={[size[0], size[1], 0.2]} />
      <meshStandardMaterial
        color={new THREE.Color(0x475569)}
        transparent
        opacity={0.2}
        metalness={0.6}
        roughness={0.4}
      />
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(size[0], size[1], 0.2)]} />
        <lineBasicMaterial color={new THREE.Color(0x94a3b8)} linewidth={1} />
      </lineSegments>
    </mesh>
  );
}

function StructuralElement({
  element,
  utilization,
}: {
  element: Scene3DProps['elements'][0];
  utilization?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const lineRef = useRef<THREE.LineSegments>(null);
  
  // Get color based on utilization or element type
  const baseColor = utilization !== undefined 
    ? getColorFromUtilization(utilization)
    : getTypeColor(element.type);
  
  const { geometry } = element;
  
  // Create geometry based on type
  const geo = useMemo(() => {
    if (geometry.type === 'box') return new THREE.BoxGeometry(1, 1, 1);
    if (geometry.type === 'cylinder') return new THREE.CylinderGeometry(0.2, 0.2, 1, 16);
    if (geometry.type === 'beam') return new THREE.BoxGeometry(0.3, 0.3, 5);
    return new THREE.BoxGeometry(1, 1, 1);
  }, [geometry.type]);

  // Edge geometry for wireframe effect
  const edges = useMemo(() => new THREE.EdgesGeometry(geo), [geo]);

  // Subtle pulse animation for high utilization elements
  useFrame(({ clock }) => {
    if (meshRef.current && utilization && utilization >= 0.85) {
      const pulse = Math.sin(clock.getElapsedTime() * 2) * 0.2 + 0.8;
      (meshRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = pulse * 0.4;
    }
  });

  return (
    <group
      position={geometry.position}
      rotation={geometry.rotation || [0, 0, 0]}
      scale={geometry.scale || [1, 1, 1]}
    >
      {/* Main mesh with semi-transparent material */}
      <mesh ref={meshRef} geometry={geo} castShadow receiveShadow>
        <meshStandardMaterial
          color={baseColor}
          metalness={0.7}
          roughness={0.3}
          transparent
          opacity={0.6}
          emissive={baseColor}
          emissiveIntensity={utilization && utilization >= 0.85 ? 0.3 : 0.1}
          side={THREE.DoubleSide}
        />
      </mesh>
      
      {/* Wireframe edges for CAD look */}
      <lineSegments ref={lineRef} geometry={edges}>
        <lineBasicMaterial
          color={utilization && utilization >= 0.85 ? 0xffffff : baseColor}
          linewidth={2}
          transparent
          opacity={0.9}
        />
      </lineSegments>
    </group>
  );
}

export function Scene3D({ heatmap, elements }: Scene3DProps) {
  const utilizationMap = useMemo(() => {
    const map = new Map<number, number>();
    heatmap.forEach((h) => map.set(h.element_id, h.util));
    return map;
  }, [heatmap]);

  // Generate building floors
  const floors = useMemo(() => {
    const numFloors = 8;
    return Array.from({ length: numFloors }, (_, i) => i);
  }, []);

  // Generate perimeter walls for each floor
  const walls = useMemo(() => {
    const wallConfigs: Array<{ position: [number, number, number]; rotation: [number, number, number]; size: [number, number] }> = [];
    const floorHeight = 3;
    const buildingSize = 20;
    
    for (let floor = 0; floor < 8; floor++) {
      const y = floor * floorHeight + floorHeight / 2;
      
      // North wall
      wallConfigs.push({ position: [0, y, -buildingSize/2], rotation: [0, 0, 0], size: [buildingSize, floorHeight] });
      // South wall
      wallConfigs.push({ position: [0, y, buildingSize/2], rotation: [0, 0, 0], size: [buildingSize, floorHeight] });
      // East wall
      wallConfigs.push({ position: [buildingSize/2, y, 0], rotation: [0, Math.PI / 2, 0], size: [buildingSize, floorHeight] });
      // West wall
      wallConfigs.push({ position: [-buildingSize/2, y, 0], rotation: [0, Math.PI / 2, 0], size: [buildingSize, floorHeight] });
    }
    
    return wallConfigs;
  }, []);

  return (
    <div className="w-full h-[600px] bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 rounded-lg overflow-hidden border border-glow-primary/30 relative">
      {/* Technical overlay */}
      <div className="absolute top-4 left-4 z-10 bg-background/80 backdrop-blur-sm border border-glow-primary/30 px-3 py-2 rounded cut-corner">
        <div className="text-xs font-mono text-foreground/70">
          ◢ BIM VIEWER | ELEMENTS: {elements.length} | ANALYSIS: ACTIVE
        </div>
      </div>
      
      <Canvas shadows gl={{ antialias: true, alpha: false }}>
        <PerspectiveCamera makeDefault position={[25, 20, 25]} fov={50} />
        <OrbitControls
          enableDamping
          dampingFactor={0.05}
          minDistance={10}
          maxDistance={80}
          maxPolarAngle={Math.PI / 2.1}
        />

        {/* Enhanced Lighting for CAD look */}
        <ambientLight intensity={0.3} />
        <directionalLight
          position={[20, 30, 10]}
          intensity={1.2}
          castShadow
          shadow-mapSize-width={4096}
          shadow-mapSize-height={4096}
          shadow-camera-far={100}
          shadow-camera-left={-30}
          shadow-camera-right={30}
          shadow-camera-top={30}
          shadow-camera-bottom={-30}
        />
        <directionalLight position={[-20, 15, -10]} intensity={0.6} color={0x6366f1} />
        <pointLight position={[0, 20, 0]} intensity={0.4} color={0x3b82f6} />
        <hemisphereLight intensity={0.25} groundColor="#1e293b" color="#475569" />

        {/* Technical grid */}
        <Grid
          args={[40, 40]}
          cellSize={1}
          cellThickness={0.6}
          cellColor="#334155"
          sectionSize={5}
          sectionThickness={1.5}
          sectionColor="#3b82f6"
          fadeDistance={50}
          fadeStrength={1}
          position={[0, 0, 0]}
        />

        {/* Render building floors */}
        {floors.map((level) => (
          <BuildingFloor key={`floor-${level}`} level={level} size={20} />
        ))}

        {/* Render perimeter walls */}
        {walls.map((wall, idx) => (
          <WallPanel key={`wall-${idx}`} {...wall} />
        ))}

        {/* Render structural elements with enhanced materials */}
        {elements.map((element) => (
          <StructuralElement
            key={element.id}
            element={element}
            utilization={utilizationMap.get(element.id)}
          />
        ))}

        {/* Environment for realistic reflections */}
        <Environment preset="city" />
        
        {/* Fog for depth */}
        <fog attach="fog" args={['#0f172a', 30, 100]} />
      </Canvas>
    </div>
  );
}
