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

const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration",
    fullDescription: "A comprehensive e-commerce platform built from the ground up with modern technologies. Features include product catalog management, shopping cart, secure checkout with Stripe integration, user authentication, order tracking, and admin dashboard for inventory management.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    ],
    category: "Web App",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "AWS"],
    client: "Fashion Retail Co.",
    duration: "4 months",
    team: "3 developers",
    year: "2024",
    challenge: "The main challenge was implementing a seamless checkout experience that could handle multiple payment methods while ensuring PCI compliance and data security.",
    solution: "Implemented Stripe Elements for secure payment processing and designed a custom cart system with real-time inventory checks to prevent overselling.",
    features: [
      "Real-time inventory management",
      "Multi-currency support",
      "Advanced search with filters",
      "Order tracking system",
      "Admin analytics dashboard",
      "Mobile-responsive design",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative project management tool for teams",
    fullDescription: "A powerful project management application designed for modern teams. Built with real-time collaboration features, intuitive drag-and-drop interfaces, and comprehensive analytics to help teams stay productive.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1552581234-26160f608093?w=600&h=400&fit=crop",
    ],
    category: "Web App",
    tech: ["Next.js", "PostgreSQL", "Prisma", "Socket.io", "TypeScript"],
    client: "TechStartup Inc.",
    duration: "3 months",
    team: "2 developers",
    year: "2024",
    challenge: "Creating a real-time collaboration system that could scale to thousands of concurrent users while maintaining low latency.",
    solution: "Utilized WebSockets with Socket.io for real-time updates and implemented optimistic UI updates for a snappy user experience.",
    features: [
      "Real-time collaboration",
      "Kanban board view",
      "Time tracking",
      "Team workspaces",
      "File attachments",
      "Activity timeline",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Fitness Tracker",
    description: "Mobile app for tracking workouts and nutrition",
    fullDescription: "A comprehensive fitness tracking application that helps users monitor their workouts, nutrition, and progress. Features AI-powered workout recommendations and integration with popular fitness wearables.",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=1200&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&h=400&fit=crop",
    ],
    category: "Mobile",
    tech: ["React Native", "Firebase", "TensorFlow", "Node.js"],
    client: "FitLife Apps",
    duration: "5 months",
    team: "4 developers",
    year: "2023",
    challenge: "Integrating with multiple fitness wearable APIs while maintaining battery efficiency on mobile devices.",
    solution: "Developed a unified API layer and implemented background sync strategies optimized for battery conservation.",
    features: [
      "Workout tracking",
      "Nutrition logging",
      "Progress analytics",
      "Wearable integration",
      "Social features",
      "AI recommendations",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Finance Dashboard",
    description: "Interactive analytics dashboard for financial data",
    fullDescription: "An elegant financial analytics dashboard that transforms complex data into actionable insights. Features real-time data visualization, customizable reports, and AI-driven predictions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
    ],
    category: "UI/UX",
    tech: ["Figma", "React", "D3.js", "Python", "FastAPI"],
    client: "FinTech Solutions",
    duration: "2 months",
    team: "2 developers",
    year: "2024",
    challenge: "Presenting large datasets in an intuitive way without overwhelming users while maintaining real-time performance.",
    solution: "Implemented progressive loading and smart data aggregation with interactive drill-down capabilities.",
    features: [
      "Real-time data visualization",
      "Custom report builder",
      "Predictive analytics",
      "Export to PDF/Excel",
      "Role-based access",
      "Dark/Light themes",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "API Gateway",
    description: "Scalable microservices API gateway",
    fullDescription: "A high-performance API gateway designed for microservices architectures. Handles authentication, rate limiting, caching, and request routing with enterprise-grade reliability.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
    ],
    category: "Backend",
    tech: ["Node.js", "Docker", "Redis", "Kubernetes", "PostgreSQL"],
    client: "Cloud Systems Inc.",
    duration: "6 months",
    team: "5 developers",
    year: "2023",
    challenge: "Achieving sub-10ms latency while handling 100,000+ requests per second with full observability.",
    solution: "Implemented connection pooling, intelligent caching strategies, and distributed tracing with OpenTelemetry.",
    features: [
      "JWT authentication",
      "Rate limiting",
      "Request caching",
      "Load balancing",
      "Health monitoring",
      "Auto-scaling",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Social Media App",
    description: "Real-time social platform with messaging",
    fullDescription: "A modern social media platform featuring real-time messaging, content sharing, and community features. Built with a focus on privacy and user engagement.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1522542550221-31fd8575fab8?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?w=600&h=400&fit=crop",
    ],
    category: "Mobile",
    tech: ["Flutter", "Firebase", "WebSocket", "Node.js", "MongoDB"],
    client: "Social Connect Ltd.",
    duration: "8 months",
    team: "6 developers",
    year: "2023",
    challenge: "Building a scalable real-time messaging system with end-to-end encryption while maintaining a smooth user experience.",
    solution: "Implemented a custom WebSocket layer with message queuing and client-side encryption using the Signal Protocol.",
    features: [
      "Real-time messaging",
      "Story sharing",
      "Group communities",
      "Content moderation",
      "Push notifications",
      "End-to-end encryption",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
];

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
    <div className="min-h-screen py-20">
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
    className="w-full h-64 md:h-[450px] object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
  
  {/* Hero Text */}
  <div className="absolute bottom-24 left-8 right-8">
    <motion.span 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="inline-flex items-center gap-2 text-primary font-mono text-sm glass px-3 py-1 rounded-full mb-3"
    >
      <Sparkles size={14} /> {project.category}
    </motion.span>
    <h1 className="text-3xl md:text-5xl font-bold gradient-text">{project.title}</h1>
    <p className="text-muted-foreground mt-2 max-w-2xl">{project.description}</p>

    {/* CTA Buttons */}
    <div className="mt-6 flex flex-wrap gap-4">
      <motion.a
        href={project.liveUrl}
        className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium flex items-center gap-2 hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <ExternalLink size={18} /> Live Demo
      </motion.a>
      <motion.a
        href={project.githubUrl}
        className="px-6 py-3 glass glass-hover rounded-full font-medium flex items-center gap-2"
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
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
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
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </motion.section>

        
      </div>
    </div>
  );
};

export default ProjectDetail;