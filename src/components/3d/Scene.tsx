import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll, Stars } from "@react-three/drei";
import SceneContent from "./SceneContent";
import Overlay from "../sections/Overlay";

export default function Scene() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        overflow: "hidden",
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
          <ScrollControls
            pages={5}
            damping={0.2}
            distance={1}
            enabled
          >
            <SceneContent />

            <Scroll html>
  <div className="w-screen pb-48 md:pb-0">
    <Overlay />
  </div>
</Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
    </div>
  );
}