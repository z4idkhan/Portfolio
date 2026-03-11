/**
 * Navigation — Fixed nav bar with section links.
 * Edit section names in data/portfolio.ts
 */
import { sections } from "@/data/portfolio";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between pointer-events-none">
      <div className="pointer-events-auto">
        <span className="font-mono text-sm font-semibold glow-text tracking-wider">
          PORTFOLIO
        </span>
      </div>
      <ul className="flex gap-6 pointer-events-auto">
        {sections.map((section, i) => (
          <li key={section}>
            <button
              onClick={() => {
                // Scroll to section by percentage
                const el = document.querySelector(`[data-section="${section}"]`);
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors font-mono"
            >
              <span className="text-primary/50 mr-1">0{i + 1}.</span>
              {section}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
