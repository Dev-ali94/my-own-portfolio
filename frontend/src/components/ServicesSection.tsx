import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code, Database, Monitor, Zap, SmartphoneIcon, ServerIcon } from "lucide-react"



export const services = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Building robust web applications with smooth integration between frontend and backend using modern technologies.",
  },
  {
    icon: Monitor,
    title: "Frontend Development",
    description: "Creating responsive, interactive, and visually appealing user interfaces for an engaging user experience.",
  },
  {
    icon: Database,
    title: "Backend & Database Management",
    description: "Designing and maintaining scalable, secure, and efficient backend systems and databases.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Improving application speed, reliability, and efficiency for a superior user experience.",
  },
  {
    icon: SmartphoneIcon,
    title: "Responsive Design",
    description: "Ensuring applications work seamlessly across devices and screen sizes with mobile-first design principles.",
  },
  {
    icon: ServerIcon,
    title: "API Development & Integration",
    description: "Building and integrating RESTful APIs to connect services and enable smooth data communication.",
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