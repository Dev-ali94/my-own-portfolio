import { project1Images,project2Images,project3Images} from "@/images/image.js"

export const projects = [
    // project 2 card
  {
    id: 2,
    title: "Project Management System",
    description: "A project management system that allows creating organizations, inviting team members, and efficiently tracking projects.",
    image: project2Images.image2_1,
    category: "FullStack",
    tech: ["React", "Node.js", "Express", "Neon", "prisma"],
    github: "https://github.com/Dev-ali94/project-managment-app",
  },
  // project 1 card
  {
    id: 1,
    title: "Authentication System",
    description: "A secure authentication system featuring user registration and email-based login with a scalable backend architecture.",
    image: project1Images.image1_1,
    category: "FullStack",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Dev-ali94/authentication-app",
  },

    // project 3 card
  {
    id: 3,
    title: "AI Powered ChatBot System",
    description: "An AI-powered chatbot system for automated customer support and interaction.",
    image: project3Images.image3_1,
    category: "FullStack",
    tech: ["React", "Node.js", "Express", "Neon", "Drizzle ORM","scalekit"],
    github: "https://github.com/Dev-ali94/Customer-Support-ChatBot",

  },
 


];
export const projectsData = [
  // project 1 detail
  {
    id: 1,
    title: "Authentication System",
    description: "A highly secure authentication system featuring user registration, email verification with OTP, password reset functionality, and a scalable backend architecture.",
    fullDescription: "This web application is built with full security in mind. It includes email verification with OTP for new users, a secure password reset system, and measures to prevent unauthorized access. Additional security features include rate-limiting for OTP resends, strong password validation, and protection against common attacks.",
    image: project1Images.image1_1,
    gallery: [
      project1Images.image1_1,
      project1Images.image1_2,
      project1Images.image1_3,
      project1Images.image1_4,
      project1Images.image1_5,
      project1Images.image1_6,
    ],
    category: "Web App",
    tech: ["React", "Node.js", "MongoDB", "Express", "JSON Web Token", "Bcrypt", "CORS", "Nodemailer", "React-Toastify"],
    client: "Personal Project",
    duration: "1.5 Weeks",
    team: "1 Developer",
    year: "2025",
    challenge: "The main challenge was implementing robust security to prevent unauthorized access, handle incorrect email entries, and protect against hackers and other vulnerabilities.",
    solution: "I implemented CORS to restrict unauthorized requests, used JSON Web Tokens and cookies for secure authentication, integrated Nodemailer for email verification and OTP delivery, and added thorough validation to prevent hacking attempts and enhance overall security.",
    features: [
      "Clean and responsive UI",
      "Email verification with OTP",
      "Forgot password functionality",
      "Full-stack security measures",
      "Rate-limiting for OTP resends",
      "Secure cloud storage with MongoDB",
      "Responsive design for all devices",
      "Real-time notifications using React-Toastify",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/Dev-ali94/authentication-app",
  },
  // Project 2 Detail
  {
    id: 2,
    title: "Project Management System",
    description: "A secure and feature-rich project management system for creating organizations, inviting team members, managing tasks, and tracking progress efficiently.",
    fullDescription: "This web application is built with security and productivity in mind. Users can create workspaces, invite members, create and assign projects and tasks, track progress, view analytics, manage settings, and communicate through an integrated chat system. The system is fully responsive, ensuring smooth usage on all devices, with a focus on usability and workflow optimization.",
    image: project2Images.image2_1,
    gallery: [
      project2Images.image2_1,
      project2Images.image2_2,
      project2Images.image2_3,
      project2Images.image2_4,
      project2Images.image2_5,
      project2Images.image2_6
    ],
    category: "Web Application",
    tech: [
      "React",
      "Node.js",
      "Express",
      "Neon",
      "Prisma",
      "Inngest",
      "Clerk",
      "Redux",
      "react-hot-toast",
      "Nodemailer"
    ],
    client: "Personal Project",
    duration: "2.3 Weeks",
    team: "1 Developer",
    year: "2025",
    challenge: "The main challenges were implementing robust security to prevent unauthorized access, handling email verification and errors, ensuring smooth state management, maintaining responsiveness across devices, and making organizations and workflows secure and scalable.",
    solution: "Implemented Clerk for secure authentication, Inngest for workflow management, Neon as the database, Redux for state management, and react-hot-toast for notifications. Built a responsive and user-friendly interface with optimized workflow processes, analytics, and a real-time chat system.",
    features: [
      "Clean and responsive UI",
      "Secure authentication with Clerk",
      "Create multiple organizations",
      "Easily create and manage projects",
      "Update project details",
      "Invite team members via email",
      "Assign and update tasks",
      "Set task due dates with automated email notifications",
      "View project analytics",
      "Flexible settings and workflow management",
      "Integrated chat system for team communication"
    ],
    liveUrl: "https://project-managment-app-six.vercel.app",
    githubUrl: "https://github.com/Dev-ali94/project-managment-app",
  },
  // Project 3 Detail
  {
    id: 3,
    title: "Customer Support ChatBot",
    description: "An intelligent chatbot for providing instant customer support and resolving queries efficiently.",
    fullDescription: "This chatbot is designed to handle common customer inquiries, provide product information, and escalate complex issues to human agents. It integrates seamlessly with existing CRM systems and offers a natural conversation flow to enhance user experience.",
    image: project3Images.image3_1,
    gallery: [
      project3Images.image3_1,
      project3Images.image3_2,
      project3Images.image3_3,
      project3Images.image3_4,
      project3Images.image3_5
    ],
    category: "Web Application",
    tech: [
      "React",
      "Node.js",
      "Express",
      "Neon",
      "Drizzle ORM",
      "Scalekit",
      "OpenRouter Api",
      "postgresSql"
    ],
    client: "Personal Project",
    duration: "1 Month",
    team: "1 Developer",
    year: "2026",
    challenge: "The main challenges were integrating AI without relying on paid APIs, implementing secure authentication, extracting reliable data from websites, and ensuring secure communication between the chatbot and clients while maintaining performance and scalability.",
    solution: "Integrated AI using OpenRouter for free access to multiple LLMs, implemented ScaleKit for secure authentication and user management, used GenRows to fetch and process website data efficiently, and built secure APIs to protect data exchange between the chatbot and clients. Optimized the application for scalability, responsiveness, and a seamless user experience.",
    features: [
      "Clean and responsive UI",
      "Secure authentication with ScaleKit",
      "Natural language processing with OpenRouter",
      "Easily create and manage Knowledge Bases",
      "Real-time chat interface for customer support",
      "Automated responses for common queries",
      "Escalation to human agents for complex issues",
      "Easy integration with existing Scripts and CRM systems"
    ],
    liveUrl: "https://customer-support-chat-bot-one.vercel.app/",
    githubUrl: "https://github.com/Dev-ali94/Customer-Support-ChatBot",
  },
];



