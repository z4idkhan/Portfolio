/**
 * AboutSection — Bio and personal info.
 * Edit bio text in data/portfolio.ts
 */
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

export default function AboutSection() {
  return (
    <section
      data-section="About"
      className="h-screen w-full flex items-center justify-center px-6"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-2xl glass rounded-2xl p-8 md:p-12 glow-border"
      >
        <p className="font-mono text-xs text-primary mb-2 tracking-widest uppercase">
          02. About Me
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
          Who I Am
        </h2>
        <p className="text-muted-foreground leading-relaxed text-lg mb-6">
          {personalInfo.bio}
        </p>
        <div className="flex gap-4 flex-wrap items-center">
          {/* <div className="glass rounded-lg px-4 py-2 text-sm">
            <span className="text-primary font-mono">📍</span>{" "}
            <span className="text-muted-foreground">{personalInfo.location}</span>
          </div> */}
          <div className="glass rounded-lg px-4 py-2 text-sm">
            <span className="text-primary font-mono">✉️</span>{" "}
            <span className="text-muted-foreground">{personalInfo.email}</span>
          </div>
          <a
            href="https://drive.google.com/file/d/13WH-0cR3N1hkLpwByeZAkiSKcrLOyA7o/view?usp=drive_link"       // Add Your RESume Here
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.4)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)] hover:scale-105 transition-all duration-300"
          >
            GET MY CV
          </a>
        </div>
      </motion.div>
    </section>
  );
}
