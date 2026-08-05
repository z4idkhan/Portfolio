/**
 * Overlay — HTML sections rendered on top of the 3D canvas.
 * Uses Drei's Scroll.html to position HTML at scroll offsets.
 * Each section corresponds to a "page" in ScrollControls.
 */
import { Scroll } from "@react-three/drei";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";
import ContactSection from "./ContactSection";
import Navigation from "./Navigation";

export default function Overlay() {
  return (
    <Scroll html style={{ width: "100%" }}>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </Scroll>
  );
}
