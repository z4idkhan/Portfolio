/**
 * FloatingShapes — Animated 3D geometric shapes that float in the scene.
 * These react to mouse movement via the `useFrame` hook.
 * Edit colors, shapes, and positions here.
 */
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface FloatingShapeProps {
  position: [number, number, number];
  color: string;
  speed?: number;
  shape?: "box" | "sphere" | "octahedron" | "torus" | "cone";
  scale?: number;
}

function FloatingShape({ position, color, speed = 1, shape = "box", scale = 1 }: FloatingShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const initialPos = useMemo(() => new THREE.Vector3(...position), [position]);

  useFrame((state) => {
    const t = state.clock.elapsedTime * speed;
    const mesh = meshRef.current;
    // Gentle floating animation
    mesh.position.y = initialPos.y + Math.sin(t) * 0.3;
    mesh.position.x = initialPos.x + Math.cos(t * 0.7) * 0.15;
    mesh.rotation.x = t * 0.3;
    mesh.rotation.y = t * 0.2;

    // React to mouse position
    const mouseX = state.pointer.x * 0.1;
    const mouseY = state.pointer.y * 0.1;
    mesh.position.x += mouseX;
    mesh.position.y += mouseY;
  });

  const geometry = useMemo(() => {
    switch (shape) {
      case "sphere": return <sphereGeometry args={[0.5 * scale, 32, 32]} />;
      case "octahedron": return <octahedronGeometry args={[0.5 * scale]} />;
      case "torus": return <torusGeometry args={[0.4 * scale, 0.15 * scale, 16, 32]} />;
      case "cone": return <coneGeometry args={[0.4 * scale, 0.8 * scale, 6]} />;
      default: return <boxGeometry args={[0.6 * scale, 0.6 * scale, 0.6 * scale]} />;
    }
  }, [shape, scale]);

  return (
    <mesh ref={meshRef} position={position}>
      {geometry}
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.3}
        roughness={0.2}
        metalness={0.8}
        transparent
        opacity={0.85}
      />
    </mesh>
  );
}

/**
 * FloatingShapes group — defines all shapes in the scene.
 * Add, remove, or reposition shapes here.
 */
export default function FloatingShapes({ scrollOffset = 0 }: { scrollOffset?: number }) {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = scrollOffset * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      <FloatingShape position={[-3, 1, -2]} color="#00d4ff" shape="octahedron" speed={0.8} scale={1.2} />
      <FloatingShape position={[3, -1, -3]} color="#a855f7" shape="torus" speed={0.6} scale={1} />
      <FloatingShape position={[-1, 2.5, -4]} color="#22d3ee" shape="sphere" speed={1.2} scale={0.8} />
      <FloatingShape position={[2, 0.5, -1.5]} color="#f472b6" shape="box" speed={0.9} scale={0.7} />
      <FloatingShape position={[0, -2, -3]} color="#00d4ff" shape="cone" speed={0.7} scale={0.9} />
      <FloatingShape position={[-2.5, -1.5, -2.5]} color="#a855f7" shape="octahedron" speed={1.1} scale={0.6} />
    </group>
  );
}
