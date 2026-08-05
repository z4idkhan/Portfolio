/**
 * Scene — Main 3D scene that contains all 3D elements.
 * Uses Drei's ScrollControls for scroll-based camera movement.
 * Edit lighting, camera, and 3D elements here.
 */
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll, Stars } from "@react-three/drei";
import SceneContent from "./SceneContent";
import Overlay from "../sections/Overlay";

export default function Scene() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.15} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={0.5}
          color="#00d4ff"
        />

        <pointLight
          position={[-5, 3, -5]}
          intensity={0.4}
          color="#a855f7"
        />

        <pointLight
          position={[0, -3, 3]}
          intensity={0.2}
          color="#22d3ee"
        />

        <Stars
          radius={50}
          depth={50}
          count={1500}
          factor={3}
          fade
          speed={1}
        />

        <Suspense fallback={null}>
          <ScrollControls pages={5} damping={0.3}>
            <SceneContent />
            {/*
              Overlay renders plain HTML (h2, p, div, span, etc).
              It CANNOT be a direct child of ScrollControls/Canvas —
              R3F will try to interpret it as THREE objects and crash
              ("R3F: P is not part of the THREE namespace").
              <Scroll html> tells drei to render this subtree in a
              real DOM layer that scrolls in sync with the 3D camera.
            */}
            <Scroll html style={{ width: "100%" }}>
              <Overlay />
            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
    </div>
  );
}