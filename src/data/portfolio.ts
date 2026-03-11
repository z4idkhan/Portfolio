export const personalInfo = {
  name: "Mohammad Zaid Khan",
  title: "Creative Developer",
  subtitle: "Building immersive digital experiences",
  email: "khanzaid75005@gmail.com",
  // location: "India",
  bio: "I'm Mohammad Zaid Khan, a creative developer who blends code and design to craft unique digital experiences. With some experience in web development , I love pushing the boundaries of what's possible on the web.",
  
  socialLinks: {
    github: "https://github.com/z4idkhan",
    linkedin: "https://www.linkedin.com/in/mohd-zaid-khan-0a0014338",
    twitter: "https://x.com/khanzaid1_",
  },
};

export const projects = [
  {
    id: 1,
    title: "Head-Less CMS",
    description: "Built and deployed a Headless CMS using Spring Boot and PostgreSQL, exposing secured REST APIs with a draft–publish workflow. Implemented JWT authentication for secure access, enabling frontend-agnostic JSON integration.",
    tags: ["Java", "SpringBoot", "Spring Security", "Spring6"],
    color: "#d61c1c",
    link: "/headlesscmsdashboard",
  },
  {
    id: 2,
    title: "Deep Packet Inspection",
    description: "An e-commerce platform with retro-futuristic design and WebGL product previews.",
    tags: ["Computer Networs", "Wire Shark", "Internet", "Backend"],
    color: "#d1c522",
    link: "https://github.com/z4idkhan/Deep-Packet-Inspection",
  },
  {
    id: 3,
    title: "Content Management System App using my Headless CMS api",
    description: "A Content Management System frontend app by using my headless-cms api to demonstrate the work of the api",
    tags: ["React", "Headless-CMS API", "Spring Boot"],
    color: "#22d3ee",
    link: "#",
  },
  {
    id: 4,
    title: "Expense Tracker",
    description: "An AI-powered note-taking app with beautiful markdown editing and mind maps.",
    tags: ["TypeScript", "AI", "Canvas"],
    color: "#22d142",
    link: "#",
  },
  
];

export const skills = [
  { name: "Java", level: 95 },
  { name: "Spring Boot", level: 92 },
  { name: "Python", level: 80 },
  { name: "C++", level: 85 },
  { name: "React", level: 70 },
  { name: "UI/UX Design", level: 40 },
];

/** Navigation sections — order matters for scroll */
export const sections = ["Home", "About", "Projects", "Skills", "Contact"] as const;
