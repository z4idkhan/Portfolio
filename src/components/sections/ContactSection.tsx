/**
 * ContactSection — Contact form and social links.
 * Edit email and social links in data/portfolio.ts
 */
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

export default function ContactSection() {
  return (
    <section
      data-section="Contact"
      className="h-screen w-full flex items-center justify-center px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-lg w-full text-center"
      >
        <p className="font-mono text-xs text-primary mb-2 tracking-widest uppercase">
          05. Contact
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
          Let's Build Something
        </h2>
        <p className="text-muted-foreground mb-10 text-lg">
          Have a project in mind? I'd love to hear about it. Drop me a message and let's create something amazing together.
        </p>

       <motion.a
  href={`mailto:${personalInfo.email}?subject=Portfolio Contact&body=Hello Zaid, I saw your portfolio and would like to connect.`}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="inline-block px-8 py-4 rounded-xl font-semibold text-primary-foreground glow-box transition-all"
  style={{
    background: `linear-gradient(135deg, hsl(190 95% 55%), hsl(270 80% 65%))`,
  }}
>
  Say Hello 👋
</motion.a>

        <div className="flex justify-center gap-6 mt-12">
          {Object.entries(personalInfo.socialLinks).map(([name, url]) => (
            <motion.a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="text-muted-foreground hover:text-primary transition-colors font-mono text-sm capitalize"
            >
              {name}
            </motion.a>
          ))}
        </div>

        <p className="mt-16 text-muted-foreground/40 text-xs font-mono">
          © Mohammad Zaid Khan
        </p>
      </motion.div>
    </section>
  );
}