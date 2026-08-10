/**
 * ProjectsSection — Showcase projects in cards.
 * Edit project data in data/portfolio.ts
 */

import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Section label */}
          <div className="text-sm font-mono text-muted-foreground mb-2">
            <span className="text-primary">03. Work</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 sm:mb-8 text-foreground">
            Featured Deployed Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}

              // Only move/scale the card.
              // No color change on hover.
              whileHover={{ y: -4 }}

              className="glass rounded-2xl p-5 sm:p-6 glow-border flex flex-col h-full transition-transform duration-200"
            >
              {/* Color accent bar */}
              <div
                className="w-12 h-1 rounded-full mb-3 sm:mb-4"
                style={{ backgroundColor: project.color }}
              />

              {/* Project content */}
              <div className="flex-1">

                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-3 sm:mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technology tags */}
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

              {/* Buttons — always at bottom */}
              <div className="flex gap-3 flex-wrap mt-5 pt-1">

                {project.github && (
                  <a
  href={project.github}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-none"
>
  <span>GitHub</span>
  <span>↗</span>
</a>
                )}

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-none"
                  >
                    <span>Live Project</span>
                    <span>↗</span>
                  </a>
                )}

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}