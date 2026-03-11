/**
 * ProjectsSection — Showcase projects in cards.
 * Edit project data in data/portfolio.ts
 */
import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";

export default function ProjectsSection() {
  return (
    <section
      data-section="Projects"
      className="h-screen w-full flex items-center justify-center px-6"
    >
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="font-mono text-xs text-primary mb-2 tracking-widest uppercase">
            03. Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
            Featured Deployed Projects 
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.id}
              href={project.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="glass rounded-2xl p-6 glow-border block group cursor-pointer transition-all"
            >
              {/* Color accent bar */}
              <div
                className="w-12 h-1 rounded-full mb-4"
                style={{ backgroundColor: project.color }}
              />
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
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
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
