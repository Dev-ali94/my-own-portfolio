// project card data
import { projectOneImage, projectThreeImages, projectTwoImages } from "@/images/images";

export const projects = [
  // project 1 card
  {
    id: 1,
    title: "Authentication System",
    description: "A secure authentication system featuring user registration and email-based login with a scalable backend architecture.",
    image: projectOneImage.image2,
    category: "Web Development",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Dev-ali94/authentication-app",
  },
  // project 2 card
  {
    id: 2,
    title: "Project Management System",
    description: "A project management system that allows creating organizations, inviting team members, and efficiently tracking projects.",
    image: projectTwoImages.image2_1,
    category: "Web Development",
    tech: ["React", "Node.js", "Express", "Neon", "Prisma"],
    github: "https://github.com/Dev-ali94/project-managment-app",

  },
  // project 3 card 
  {
    id: 3,
    title: "Interview Platform",
    description: "This app contain interview platfrom as well problem code facilit like leetcode ",
    image: projectThreeImages.image3_1,
    category: "Web Development",
    tech: ["React", "Node.js", "Express", "MongoDB", "stream"],
    github: "https://github.com/Dev-ali94/authentication-app",
  },

];
export const projectsData = [
  // project 1 detail
  {
    id: 1,
    title: "Authentication System",
    description: "A highly secure authentication system featuring user registration, email verification with OTP, password reset functionality, and a scalable backend architecture.",
    fullDescription: "This web application is built with full security in mind. It includes email verification with OTP for new users, a secure password reset system, and measures to prevent unauthorized access. Additional security features include rate-limiting for OTP resends, strong password validation, and protection against common attacks.",
    image: projectOneImage.image1,
    gallery: [
      projectOneImage.image1,
      projectOneImage.image2,
      projectOneImage.image3,
      projectOneImage.image4,
      projectOneImage.image5,
      projectOneImage.image6,
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
    image: projectTwoImages.image2_1,
    gallery: [
      projectTwoImages.image2_1,
      projectTwoImages.image2_2,
      projectTwoImages.image2_3,
      projectTwoImages.image2_4,
      projectTwoImages.image2_5,
      projectTwoImages.image2_6
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
    liveUrl: "#",
    githubUrl: "https://github.com/Dev-ali94/project-managment-app",
  },
  // project 3 Detail
  {
    id: 3,
    title: "Interview Platform",
    description: "A complete platform for coding interviews with real-time collaboration.",
    fullDescription: "This web application provides a secure and interactive environment for technical interviews. It includes authentication with Clerk, real-time chat, video calls, and a collaborative coding editor similar to VS Code. Users can solve coding problems in the platform while sharing screens and collaborating seamlessly. The UI is built using TanssStack for a modern and responsive experience.",
    image: projectThreeImages.image3_2,
    gallery: [
       projectThreeImages.image3_1,
       projectThreeImages.image3_2,
       projectThreeImages.image3_3,
       projectThreeImages.image3_4,
       projectThreeImages.image3_5,
    ],
    category: "Web Application",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Inngest",
      "Clerk",
      "Stream",
      "react-hot-toast",
      "Piston API",
      "daisey UI"
    ],
    client: "Personal Project",
    duration: "2 Weeks",
    team: "1 Developer",
    year: "2025",
    challenge: "The main challenge was building a real-time chat and video calling system and integrating a fully functional code editor within the platform.",
    solution: "To solve this, I used Stream for chat and video calls, Piston API for the code editor, and react-resizable-panels for adjustable layouts.",
     features: [
      "Clean and responsive UI with dasiy UI",
      "Secure authentication using Clerk",
      "Create and manage multiple sessions",
      "Collaborative problem solving",
      "Integrated code editor",
      "Real-time video calls",
      "Screen sharing",
      "Support for multiple coding problems",
      "problem-solving features",
      "Real time code editor",
      "video call functionality",
      "screen sharing functionality",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/Dev-ali94/code-iq",
  }  
];



