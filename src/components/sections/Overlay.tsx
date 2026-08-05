import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";
import ContactSection from "./ContactSection";
import Navigation from "./Navigation";

export default function Overlay() {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100%",
      }}
    >
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}