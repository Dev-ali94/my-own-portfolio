import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code, Database, BarChart2, Zap, Monitor,PieChartIcon } from "lucide-react"


export const services = [
  {
    icon: Code,
    title: "Full Stack Development",
    description: "Developing robust web applications with seamless integration between frontend and backend using modern technologies.",
  },
  {
    icon: Monitor,
    title: "Frontend Development",
    description: "Creating responsive and interactive user interfaces that deliver a smooth and engaging user experience.",
  },
  {
    icon: Database,
    title: "Database Management",
    description: "Designing and maintaining scalable, secure, and efficient databases to support application data needs.",
  },
  {
    icon: PieChartIcon,
    title: "Data Analytics",
    description: "Analyzing complex data sets to extract actionable insights and support informed business decisions.",
  },
  {
    icon: BarChart2,
    title: "Power BI Development",
    description: "Building interactive dashboards and visual reports in Power BI to visualize key metrics and trends.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Enhancing application speed, efficiency, and reliability to ensure a superior user experience.",
  },
];



const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section id="services" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-4">Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions to help bring your ideas to reality
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="glass glass-hover rounded-2xl p-6 group card-hover cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all duration-300">
                <service.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;