/**
 * Navigation — Fixed nav bar with section links.
 * Desktop: horizontal list. Mobile: hamburger + slide-down menu.
 * Edit section names in data/portfolio.ts
 */
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { sections } from "@/data/portfolio";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Navigation() {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);

  const scrollToSection = (section: string) => {
    const el = document.querySelector(`[data-section="${section}"]`);
    el?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 pointer-events-none">
      <div className="flex items-center justify-between">
        <div className="pointer-events-auto">
          <span className="font-mono text-sm font-semibold glow-text tracking-wider">
            PORTFOLIO
          </span>
        </div>

        {/* Desktop links */}
        {!isMobile && (
          <ul className="flex gap-6 pointer-events-auto">
            {sections.map((section, i) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors font-mono"
                >
                  <span className="text-primary/50 mr-1">0{i + 1}.</span>
                  {section}
                </button>
              </li>
            ))}
          </ul>
        )}

        {/* Mobile hamburger */}
        {isMobile && (
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="pointer-events-auto glass rounded-lg p-2 flex flex-col gap-1.5 w-10 h-10 items-center justify-center"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-5 h-0.5 bg-foreground rounded-full"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="block w-5 h-0.5 bg-foreground rounded-full"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-5 h-0.5 bg-foreground rounded-full"
            />
          </button>
        )}
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {isMobile && open && (
          <motion.ul
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.25 }}
            className="pointer-events-auto glass rounded-xl mt-3 overflow-hidden mx-auto max-w-xs"
          >
            {sections.map((section, i) => (
              <li key={section} className="border-b border-border/20 last:border-none">
                <button
                  onClick={() => scrollToSection(section)}
                  className="w-full text-left px-5 py-3 text-sm font-medium text-muted-foreground hover:text-primary transition-colors font-mono"
                >
                  <span className="text-primary/50 mr-1">0{i + 1}.</span>
                  {section}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}