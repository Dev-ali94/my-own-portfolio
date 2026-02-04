import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { myOwnImage } from "@/assets/assets";
const statsData = [
  { value: "2+", label: "Years of Web Development" },
  { value: "7+", label: "Happay Client" },
  { value: "8+", label: "Projects Completed" },
  { value: "100%", label: "Learning Mindset" }
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
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 
              rounded-2xl rotate-6" />
              <div className="absolute inset-0 glass rounded-2xl overflow-hidden ">
                <img
                  src={myOwnImage.My_image}
                  alt="Profile"
                  className="w-full h-full object-cover"
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
            <p className="text-muted-foreground mb-3 leading-relaxed text-lg">
              I'm a passionate full-stack web developer with over 2 years of hands-on experience
              building modern, responsive web applications. I specialize in React and Node.js,
              crafting intuitive user interfaces and robust backend systems that focus on
              performance, scalability, and clean, maintainable code.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I enjoy exploring new technologies, experimenting with innovative solutions, and
              continuously improving my skills to stay at the forefront of web development.
              My approach combines technical expertise with a focus on user experience, ensuring
              that every application I build is practical, efficient, and delivers real-world
              impact. When I’m not coding, I like contributing to the developer community,
              learning from others, and sharing knowledge to help push the boundaries of what’s
              possible on the web.
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