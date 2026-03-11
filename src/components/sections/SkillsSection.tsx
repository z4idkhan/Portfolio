/**
 * SkillsSection — 3D floating tech cards.
 * Edit skills in data/portfolio.ts
 */
import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

const cardColors = [
  "from-[hsl(190_95%_55%)] to-[hsl(210_90%_45%)]",
  "from-[hsl(270_80%_65%)] to-[hsl(290_70%_50%)]",
  "from-[hsl(190_80%_50%)] to-[hsl(270_60%_55%)]",
  "from-[hsl(330_70%_60%)] to-[hsl(350_80%_45%)]",
  "from-[hsl(200_90%_50%)] to-[hsl(220_80%_40%)]",
  "from-[hsl(260_75%_60%)] to-[hsl(280_85%_50%)]",
];

export default function SkillsSection() {
  return (
    <section
      data-section="Skills"
      className="h-screen w-full flex items-center justify-center px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-3xl w-full"
      >
        <p className="font-mono text-xs text-primary mb-2 tracking-widest uppercase text-center">
          04. Skills
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-foreground text-center">
          What I Use
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30, rotateX: 25 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              whileHover={{
                scale: 1.08,
                rotateY: 8,
                rotateX: -5,
                z: 30,
              }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="cursor-pointer"
              style={{ perspective: 800 }}
            >
              <div
                className={`relative rounded-xl bg-gradient-to-br ${cardColors[i % cardColors.length]} p-[1px] shadow-lg`}
              >
                <div className="rounded-xl bg-background/80 backdrop-blur-sm px-5 py-6 flex items-center justify-center min-h-[90px]">
                  <span className="text-sm md:text-base font-semibold text-foreground text-center">
                    {skill.name}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
