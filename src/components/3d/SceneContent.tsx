/**
 * SceneContent — 3D objects that live inside ScrollControls.
 * The camera doesn't move; instead objects are positioned at different scroll offsets.
 */
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import * as THREE from "three";
import FloatingShapes from "./FloatingShapes";
import ParticleField from "./ParticleField";

export default function SceneContent() {
  const scroll = useScroll();
  const groupRef = useRef<THREE.Group>(null!);

  useFrame(() => {
    const offset = scroll.offset; // 0 to 1
    // Rotate the whole scene gently as user scrolls
    groupRef.current.rotation.y = offset * Math.PI * 0.5;
    // Move camera-like effect by translating the group
    groupRef.current.position.y = offset * 2;
  });

  return (
    <group ref={groupRef}>
      <FloatingShapes />
      <ParticleField count={300} />
    </group>
  );
}
