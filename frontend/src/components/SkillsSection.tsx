import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Icon } from "@iconify/react";

const skills = [
  { name: "HTML", icon: "logos:html-5" },
  { name: "CSS", icon: "logos:css-3" },
  { name: "JavaScript", icon: "logos:javascript" },
  { name: "React", icon: "logos:react" },
  { name: "Express.js", icon: "simple-icons:express" },
  { name: "Node.js", icon: "logos:nodejs" },
  { name: "Git", icon: "logos:git-icon" },
  { name: "VS Code", icon: "logos:visual-studio-code" },
  { name: "Postman", icon: "logos:postman-icon" },
  { name: "Redux", icon: "logos:redux" },
  { name: "Framer Motion", icon: "logos:framer" },
  { name: "Python", icon: "logos:python" },
  { name: "NumPy", icon: "logos:numpy" },
  { name: "Prisma", icon: "logos:prisma" },
  { name: "PostgreSQL", icon: "logos:postgresql" },
 { name: "MongoDB", icon: "logos:mongodb", hideName: true },       // hide text
  { name: "Tailwind CSS", icon: "logos:tailwindcss", hideName: true }, 
  { name: "Pandas", icon: "logos:pandas", hideName: true },
  { name: "Excel", icon: "logos:microsoft-excel", hideName: true }, // use correct Excel icon
  { name: "Power BI", icon: "logos:microsoft-power-bi", hideName: true }
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-4">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>
      </div>

      {/* Marquee Row 1 */}
      <div className="relative mb-6">
        <div className="flex animate-marquee">
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={`row1-${index}`}
              className="flex-shrink-0 mx-3 glass glass-hover rounded-xl px-6 py-4 flex items-center gap-3 cursor-pointer group"
            >
              <Icon
                icon={skill.icon}
                className="text-2xl group-hover:scale-125 transition-transform duration-300"
              />
              <span className="text-sm font-medium whitespace-nowrap">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 (Reverse) */}
      <div className="relative">
        <div className="flex animate-marquee-reverse">
          {[...skills.slice().reverse(), ...skills.slice().reverse()].map(
            (skill, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 mx-3 glass glass-hover rounded-xl px-6 py-4 flex items-center gap-3 cursor-pointer group"
              >
                <Icon
                  icon={skill.icon}
                  className="text-2xl group-hover:scale-125 transition-transform duration-300"
                />
                <span className="text-sm font-medium whitespace-nowrap">
                  {skill.name}
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;