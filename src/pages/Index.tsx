/**
 * Index page — Renders the full 3D portfolio experience.
 * The Scene component contains the Canvas + ScrollControls + Overlays.
 */
import Scene from "@/components/3d/Scene";

const Index = () => {
  return (
    <main>
      <title>Mohd Zaid Khan — Creative Developer Portfolio</title>
      <meta name="description" content="Interactive 3D portfolio of Mohd Zaid Khan, a creative developer building immersive digital experiences." />
      <Scene />
    </main>
  );
};

export default Index;
