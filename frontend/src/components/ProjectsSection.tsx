import { useState, useRef, useEffect, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../lib/data.ts"

const categories = ["All", "Web Development", "Power BI", "Data Analytics"];
const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showScrollButtons, setShowScrollButtons] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) =>
        p.category.toLowerCase() === activeCategory.toLowerCase().replace(" ", "")
      );
  useEffect(() => {
    const checkScroll = () => {
      if (projectsRef.current) {
        const { scrollWidth, clientWidth } = projectsRef.current;
        setShowScrollButtons(scrollWidth > clientWidth);
      }
    };

    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [filteredProjects]);
  const scroll = useCallback((direction: "left" | "right") => {
    if (!projectsRef.current) return;
    const container = projectsRef.current;
    const scrollAmount = 320;
    const currentScroll = container.scrollLeft;
    container.scrollTo({
      left: direction === "left"
        ? currentScroll - scrollAmount
        : currentScroll + scrollAmount,
      behavior: "smooth"
    });
  }, []);
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        scroll("left");
      } else if (e.key === "ArrowRight") {
        scroll("right");
      }
    };
    if (projectsRef.current) {
      projectsRef.current.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      if (projectsRef.current) {
        projectsRef.current.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, [scroll]);
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-secondary/5" ref={containerRef}>
      <div className="container mx-auto px-4 relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore my latest work showcasing creativity and technical expertise
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 border ${activeCategory === category
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                  : "border-border hover:border-primary/50 text-muted-foreground hover:text-foreground hover:bg-primary/5"
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Container */}
        <div className="relative group">
          {/* Projects Grid/Carousel */}
          <div
            ref={projectsRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-6 px-2 snap-x snap-mandatory"
            tabIndex={0}
          >
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                className="flex-shrink-0 w-[85vw] sm:w-[400px] md:w-[calc(33.333%-1rem)] rounded-xl overflow-hidden border border-border bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 snap-start"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-fill transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Project Links */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <motion.a
                      href={project.github}
                      className="p-3 bg-background/80 backdrop-blur-md rounded-full hover:bg-primary hover:text-white transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      className="p-3 bg-background/80 backdrop-blur-md rounded-full hover:bg-primary hover:text-white transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        to={`/project/${project.id}`}
                        className="flex items-center justify-center w-full h-full"
                      >
                        <ExternalLink size={20} />
                      </Link>
                    </motion.a>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-primary uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {project.tech.length} techs
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-secondary/50 text-secondary-foreground border border-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          {/* Scroll Buttons - Only show if needed */}
          {showScrollButtons && (
            <>
              <div className="flex items-center justify-end space-x-4 ">
                <button
                  onClick={() => scroll("left")}
                  className=" p-3 rounded-full bg-background/80 backdrop-blur-md border shadow-lg hover:bg-primary hover:text-primary-foreground transition-all opacity-0 group-hover:opacity-100 hover:opacity-100"
                  aria-label="Scroll left"
                >
                  <ChevronLeft size={24} />
                </button>

                <button
                  onClick={() => scroll("right")}
                  className=" p-3 rounded-full bg-background/80 backdrop-blur-md border shadow-lg hover:bg-primary hover:text-primary-foreground transition-all opacity-0 group-hover:opacity-100 hover:opacity-100"
                  aria-label="Scroll right"
                >
                  <ChevronRight size={24} />
                </button>

              </div>
            </>
          )}
        </div>
      </div>


    </section>
  );
};

export default ProjectsSection;