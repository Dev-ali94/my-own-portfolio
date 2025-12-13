import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const statsData = [
  { value: "1.5+", label: "Years of Web Development" },
  { value: "4+", label: "Projects Completed" },
  { value: "6+", label: "Months in Data Analytics" },
  { value: "100%", label: "Learning Mindset" },
];


const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate developer crafting digital experiences with creativity and precision
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl rotate-6" />
              <div className="absolute inset-0 glass rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"
                  alt="Profile"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
              I'm a passionate full-stack web developer with over 1.5 years of hands-on
              experience building modern, responsive web applications. I specialize in
              React, Node.js, and crafting intuitive user interfaces that focus on
              performance, usability, and clean design.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Alongside web development, I have around 6 months of experience as a data
              analyst, working with data to uncover insights, create visualizations, and
              support data-driven decision-making. When I'm not coding, I enjoy exploring
              new technologies, learning continuously, and sharing knowledge with the
              developer community to push the boundaries of what’s possible on the web.
            </p>


            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {statsData.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="glass glass-hover rounded-xl p-4 text-center card-hover"
                >
                  <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;