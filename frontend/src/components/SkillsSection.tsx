import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skill_logo } from "@/assets/assets";

type Skill = {
  name: string;
  icon: string;
};

export const skills: Skill[] = [
  { name: "HTML", icon: skill_logo.html },
  { name: "CSS", icon: skill_logo.css },
  { name: "JavaScript", icon: skill_logo.javascript },
  { name: "Tailwind CSS", icon: skill_logo.tailwand_css },
  { name: "Framer Motion", icon: skill_logo.farmer_motion },
  { name: "React", icon: skill_logo.react },
  { name: "Node.js", icon: skill_logo.nodejs },
  { name: "Express.js", icon: skill_logo.express },
  { name: "MongoDB", icon: skill_logo.mongodb },
  { name: "Prisma", icon: skill_logo.prisam },
  { name: "Clerk", icon: skill_logo.clerk },
  { name: "VS Code", icon: skill_logo.vs_code },
]

const marqueeTransition = {
  repeat: Infinity,
  ease: "linear" as const,
  duration: 50
};

const SkillsSection = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="skills" ref={ref} className="py-20 overflow-hidden">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.6 }}
        className="text-center mb-14 px-4"
      >
        <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-4">
          Skills & Technologies
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Technologies and tools I use to bring ideas to life
        </p>
      </motion.div>

      {/* Marquee Row 1 */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={marqueeTransition}
        >
          {[...skills, ...skills].map((skill, index) => (
            <SkillCard key={`row1-${index}`} skill={skill} />
          ))}
        </motion.div>
      </div>

      {/* Marquee Row 2 (Reverse) */}
      <div className="relative overflow-hidden mt-6">
        <motion.div
          className="flex w-max"
          animate={{ x: ["-50%", "0%"] }}
          transition={marqueeTransition}
        >
          {[...skills.slice().reverse(), ...skills.slice().reverse()].map(
            (skill, index) => (
              <SkillCard key={`row2-${index}`} skill={skill} />
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};

type SkillCardProps = {
  skill: Skill;
};

const SkillCard = ({ skill }: SkillCardProps) => (
  <div className="flex-shrink-0 mx-3 glass glass-hover rounded-xl
   px-6 py-4 flex items-center gap-3 cursor-pointer group">
    <img
      src={skill.icon}
      alt={skill.name}
      className="h-10 w-12 group-hover:scale-125 transition-transform duration-300"
    />
    <span className="text-sm font-medium whitespace-nowrap">
      {skill.name}
    </span>
  </div>
);

export default SkillsSection;
