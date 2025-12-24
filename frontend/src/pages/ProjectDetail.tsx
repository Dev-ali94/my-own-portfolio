import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Clock,
  Users,
  Target,
  Lightbulb,
  CheckCircle,
  Layers,
  Rocket,
  Sparkles
} from "lucide-react";
import  Footer  from "@/components/Footer";
import { projectsData } from "@/lib/data";


const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="text-primary hover:underline">
            Go back home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
    
    <div className="min-h-screen py-20 overflow-x-hidden">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors glass glass-hover px-4 py-2 rounded-full"
          >
            <ArrowLeft size={18} /> Back to Projects
          </Link>
        </motion.div>
{/* Hero Section with CTA overlay */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.1 }}
  className="relative rounded-3xl overflow-hidden mb-12"
>
  <img
    src={project.image}
    alt={project.title}
    className="w-full  md:h-[480px] h-[310px] object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

  {/* Hero Text - Mobile responsive with centered content */}
  <div className="absolute bottom-8 md:bottom-24 left-4 right-4
   md:left-8 md:right-8 flex flex-col items-center text-center">
    
    
    {/* Title with responsive sizing */}
    <h1 className="text-3xl md:text-5xl font-bold gradient-text px-4">
      {project.title}
    </h1>
    
    {/* Description with max-width and centered text */}
    <p className="text-muted-foreground mt-2 max-w-xl px-4 text-sm md:text-base">
      {project.description}
    </p>

    {/* CTA Buttons - Responsive layout */}
    <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-4">
      <motion.a
        href={project.liveUrl}
        className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium flex items-center justify-center gap-2 hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all text-sm sm:text-base"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <ExternalLink size={18} /> Live Demo
      </motion.a>
      <motion.a
        href={project.githubUrl}
        className="px-6 py-3 glass glass-hover rounded-full font-medium flex items-center justify-center gap-2 text-sm sm:text-base"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Github size={18} /> Source Code
      </motion.a>
    </div>
  </div>
</motion.div>
        {/* Project Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {[
            { icon: Users, label: "Client", value: project.client },
            { icon: Clock, label: "Duration", value: project.duration },
            { icon: Calendar, label: "Year", value: project.year },
            { icon: Layers, label: "Team", value: project.team },
          ].map((info, index) => (
            <motion.div
              key={index}
              className="glass glass-hover rounded-xl p-5 text-center card-hover"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-3">
                <info.icon className="text-primary" size={18} />
              </div>
              <p className="text-xs text-muted-foreground mb-1">{info.label}</p>
              <p className="font-medium text-sm">{info.value}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Description Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <Rocket className="text-primary" size={18} />
            </div>
            <h2 className="text-2xl font-bold gradient-text">Overview</h2>
          </div>
          <div className="glass rounded-2xl p-6">
            <p className="text-muted-foreground leading-relaxed">{project.fullDescription}</p>
          </div>
        </motion.section>

        {/* Tech Stack */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <Layers className="text-primary" size={18} />
            </div>
            <h2 className="text-2xl font-bold gradient-text">Tech Stack</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((t, index) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.05 }}
                className="px-5 py-2.5 glass glass-hover rounded-full text-sm font-medium"
              >
                {t}
              </motion.span>
            ))}
          </div>
        </motion.section>

        {/* Challenge & Solution */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          <div className="glass glass-hover rounded-2xl p-6 card-hover">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Target className="text-primary" size={18} />
              </div>
              <h3 className="text-xl font-bold gradient-text">The Challenge</h3>
            </div>
            <p className="text-muted-foreground">{project.challenge}</p>
          </div>
          <div className="glass glass-hover rounded-2xl p-6 card-hover">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Lightbulb className="text-accent" size={18} />
              </div>
              <h3 className="text-xl font-bold gradient-text">The Solution</h3>
            </div>
            <p className="text-muted-foreground">{project.solution}</p>
          </div>
        </motion.section>

        {/* Key Features */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <CheckCircle className="text-primary" size={18} />
            </div>
            <h2 className="text-2xl font-bold gradient-text">Key Features</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.05 }}
                className="glass glass-hover rounded-xl p-4 flex items-center gap-3 card-hover"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="text-primary" size={14} />
                </div>
                <span className="text-sm font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Gallery */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 
            to-accent/20 flex items-center justify-center">
              <Sparkles className="text-primary" size={18} />
            </div>
            <h2 className="text-2xl font-bold gradient-text">Gallery</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {project.gallery.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="rounded-xl overflow-hidden glass"
              >
                <img
                  src={img}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full h-48 object-full hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
      <Footer/>
    </>
  );
};

export default ProjectDetail;