// project card data
import { projectCardImages } from "@/assets/assets";

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
    category: "web development",
    tech: ["React", "Node.js", "MongoDB"],
    github: "#",
    live: "#",
  },
  
  {
    id: 2,
    title: "Fitness Tracker",
    description: "Mobile app for tracking workouts and nutrition",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=400&fit=crop",
    category: "web development",
    tech: ["React Native", "Firebase"],
    github: "#",
    live: "#",
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    description: "Data visualization using Power BI",
    image: "https://images.unsplash.com/photo-1581092580490-24e7dcf817e0?w=600&h=400&fit=crop",
    category: "power bi",
    tech: ["Power BI", "DAX", "SQL"],
    github: "#",
    live: "#",
  },
 
];
// project data
import { projectDataImages } from "@/assets/assets";
import { projectCardGallerayImages} from "@/assets/assets";

export const projectsData = [
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
    id: 3,
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
  
];
